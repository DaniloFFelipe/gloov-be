import { BadRequestException } from '@gloov/core'
import { prisma } from '@gloov/db'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getCollectionById } from '../../../../functions/collections/get-collection-by-id.ts'

export const updateVideo: FastifyPluginAsyncZod = async app => {
  app.put(
    '/collections/:collectionId/videos/:videoId',
    {
      schema: {
        summary: 'Update Video',
        operationId: 'updateVideo',
        tags: ['Videos'],
        security: [{ bearerAuth: [] }],
        params: z.object({
          collectionId: z.string(),
          videoId: z.string(),
        }),
        body: z.object({
          title: z.string().min(1, 'Name is required').optional(),
          description: z.string().min(1, 'Description is required').optional(),
        }),
        response: {
          200: z.object({
            videoId: z.string(),
          }),
        },
      },
    },
    async (req, reply) => {
      const { user } = await req.getSession()

      const { collection } = await getCollectionById({
        collectionId: req.params.collectionId,
        user,
      })

      const video = await prisma.videos.findFirst({
        where: {
          collectionId: collection.id,
          id: req.params.videoId,
        },
      })

      if (!video) {
        throw new BadRequestException('Video not found')
      }

      const { title, description } = req.body
      await prisma.videos.update({
        where: {
          id: video.id,
        },
        data: {
          title,
          description,
        },
      })

      return reply.status(200).send({
        videoId: video.id,
      })
    }
  )
}
