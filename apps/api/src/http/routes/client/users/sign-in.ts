import { BadRequestException } from '@gloov/core'
import { prisma } from '@gloov/db'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { hash } from 'bcrypt'
import { z } from 'zod'

export const signIn: FastifyPluginAsyncZod = async app => {
  app.post(
    '/users/sign-in',
    {
      schema: {
        summary: 'Sign In',
        operationId: 'signIn',
        tags: ['Users'],
        body: z.object({
          email: z.string().email(),
          password: z
            .string()
            .min(6, 'Password must be at least 6 characters long'),
        }),
        response: {
          200: z.object({
            token: z.string(),
            user: z.object({
              id: z.string(),
              email: z.string().email(),
              name: z.string(),
              image: z.string().nullish(),
            }),
          }),
        },
      },
    },
    async (req, reply) => {
      const { email, password } = req.body
      const user = await prisma.user.findUnique({
        where: { email },
      })

      if (!user) {
        throw new BadRequestException('Invalid email or password.')
      }

      const isPasswordValid = await hash(password, user.passwordHash)
      if (!isPasswordValid) {
        throw new BadRequestException('Invalid email or password.')
      }
      const sessionId = await app.sessionService.createSession(user.id)

      return reply.status(200).send({
        token: await reply.jwtSign({ sub: sessionId }),
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image ?? null,
        },
      })
    }
  )
}
