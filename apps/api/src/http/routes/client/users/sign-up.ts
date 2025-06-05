import { BadRequestException } from '@gloov/core'
import { prisma } from '@gloov/db'
import { hash } from 'bcrypt'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const signUp: FastifyPluginAsyncZod = async app => {
  app.post(
    '/users/sign-up',
    {
      schema: {
        summary: 'Sign Up',
        operationId: 'signUp',
        tags: ['Users'],
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          password: z
            .string()
            .min(6, 'Password must be at least 6 characters long'),
          image: z.string().optional(),
        }),
        response: {
          201: z.object({
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
      const { email, name, password, image } = req.body
      const emailExists = await prisma.user.findUnique({ where: { email } })
      if (emailExists) {
        throw new BadRequestException(
          'Email already exists. Please use a different email address.'
        )
      }

      const user = await prisma.user.create({
        data: { email, name, passwordHash: await hash(password, 6) },
      })

      const sessionId = await app.sessionService.createSession(user.id)

      return reply.status(201).send({
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
