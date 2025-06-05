import { BadRequestException } from '@gloov/core'
import { prisma } from '@gloov/db'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const me: FastifyPluginAsyncZod = async app => {
  app.get(
    '/users/me',
    {
      schema: {
        summary: 'Get logged user info',
        operationId: 'me',
        tags: ['Users'],
        security: [{ bearerAuth: [] }],
        response: {
          200: z.object({
            user: z.object({
              id: z.string(),
              name: z.string(),
              email: z.string(),
              image: z.string().nullish(),
            }),
            meta: z.object({
              storageUsageInBytes: z.number().default(0),
              collectionsCount: z.number().default(0),
              videosCount: z.number().default(0),
              // subscriptions: z.object({
              //   type: z.string(),
              //   expiresAt: z.coerce.string(),
              //   maxStorage: z.number().default(10),
              // }),
            }),
          }),
        },
      },
    },
    async req => {
      const sessionPayload = await req.getSession()
      const [user, videosCount] = await Promise.all([
        prisma.user.findUnique({
          where: { id: sessionPayload.user.id },
          include: {
            _count: {
              select: {
                collections: true,
              },
            },
          },
        }),
        prisma.videos.count({
          where: {
            collection: {
              userId: sessionPayload.user.id,
            },
          },
        }),
      ])

      if (!user) {
        throw new BadRequestException('User not found.')
      }

      return {
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image ?? null,
        },
        meta: {
          storageUsageInBytes: await app.storage.getFolderSize(user.id),
          collectionsCount: user._count.collections,
          videosCount,
        },
      }
    }
  )
}
