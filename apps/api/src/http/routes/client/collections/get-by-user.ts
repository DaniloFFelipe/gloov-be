import { prisma } from '@gloov/db'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const getCollectionByUser: FastifyPluginAsyncZod = async app => {
  app.get(
    '/collections',
    {
      schema: {
        summary: 'Get User Collections',
        operationId: 'getCollectionByUser',
        tags: ['Collections'],
        security: [{ bearerAuth: [] }],
        response: {
          200: z.object({
            collections: z.array(
              z.object({
                id: z.string(),
                name: z.string(),
                createdAt: z.coerce.date(),

                meta: z.object({
                  videosCount: z.number().default(0),
                  storageSizeInBytes: z.number().default(0),
                }),
              })
            ),
          }),
        },
      },
    },
    async (req, reply) => {
      const { user } = await req.getSession()
      const collections = await prisma.collection.findMany({
        where: {
          userId: user.id,
        },
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          _count: {
            select: {
              videos: true,
            },
          },
        },
      })

      return {
        collections: await Promise.all(
          collections.map(async collection => ({
            id: collection.id,
            name: collection.name,
            createdAt: collection.createdAt,
            meta: {
              videosCount: collection._count.videos,
              storageSizeInBytes: await app.storage.getFolderSize(
                `${collection.userId}/${collection.id}`
              ),
            },
          }))
        ),
      }
    }
  )
}
