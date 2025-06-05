import { paginationSchema, createPaginationSchema, Page } from '@gloov/core'
import { prisma } from '@gloov/db'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getCollectionById } from '../../../../functions/collections/get-collection-by-id.ts'
import { VideoMapper } from '../../../../mappers/video.mapper.ts'

export const getVideosByCollection: FastifyPluginAsyncZod = async app => {
  app.get(
    '/collections/:collectionId/videos',
    {
      schema: {
        summary: 'Get collections videos',
        operationId: 'getVideosByCollection',
        tags: ['Videos'],
        security: [{ bearerAuth: [] }],
        params: z.object({
          collectionId: z.string(),
        }),
        querystring: paginationSchema,
        response: {
          200: createPaginationSchema(
            z.object({
              id: z.string(),
              title: z.string(),
              description: z.string().nullable(),
              thumbnail: z.string(),
              sizeInBytes: z.number(),
              durationInSeconds: z.number(),
              status: z.union([
                z.literal('PENDING'),
                z.literal('PROCESSING'),
                z.literal('READY'),
                z.literal('FAILED'),
              ]),
              createdAt: z.date(),
            })
          ),
        },
      },
    },
    async (req, reply) => {
      const { user } = await req.getSession()
      const page = new Page(req.query)
      const { collection } = await getCollectionById({
        collectionId: req.params.collectionId,
        user,
      })

      const [dataRaw, count] = await Promise.all([
        prisma.videos.findMany({
          where: {
            collectionId: collection.id,
          },
          skip: page.offset,
          take: page.limit,
        }),
        prisma.videos.count({
          where: {
            collectionId: collection.id,
          },
        }),
      ])

      return page.buildResponse(dataRaw.map(VideoMapper.toResponse), count)
    }
  )
}
