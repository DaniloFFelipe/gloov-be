import { BadRequestException } from '@gloov/core'
import { prisma } from '@gloov/db'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getCollectionById } from '../../../../functions/collections/get-collection-by-id.ts'

export const deleteVideo: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/collections/:collectionId/videos/:videoId',
    {
      schema: {
        summary: 'Delete Video',
        operationId: 'deleteVideo',
        tags: ['Videos'],
        security: [{ bearerAuth: [] }],
        params: z.object({
          collectionId: z.string(),
          videoId: z.string(),
        }),
        response: {
          204: z.object({}),
        },
      },
    },
    async (req, reply) => {
      const { user } = await req.getSession()
      const { collectionId, videoId } = req.params
      const collection = await getCollectionById({
        collectionId,
        user,
      })
      const video = await prisma.videos.findUnique({
        where: { id: videoId },
      })

      if (!video) {
        throw new BadRequestException('Video not found')
      }

      if (video.collectionId !== collection.collection.id) {
        throw new BadRequestException(
          'You do not have permission to delete this video'
        )
      }

      await app.storage.delete(
        `${user.id}/${collection.collection.id}/${videoId}`,
        true
      )
      await prisma.videos.delete({ where: { id: videoId } })

      return reply.status(201).send({})
    }
  )
}
