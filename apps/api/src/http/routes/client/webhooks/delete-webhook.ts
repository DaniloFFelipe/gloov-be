import { prisma } from '@gloov/db'
import { getCollectionById } from '../../../../functions/collections/get-collection-by-id.ts'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const deleteWebhook: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/collections/:collectionId/webhooks/:type',
    {
      schema: {
        summary: 'Delete Webhook',
        operationId: 'deleteWebhook',
        tags: ['Webhooks'],
        security: [{ bearerAuth: [] }],
        params: z.object({
          collectionId: z.string(),
          type: z.enum(['VIDEO_CREATED', 'VIDEO_DELETED', 'VIDEO_UPDATED']),
        }),
        response: {
          204: z.object({}),
        },
      },
    },
    async (req, reply) => {
      const { user } = await req.getSession()
      const { collectionId, type } = req.params
      const { collection } = await getCollectionById({
        collectionId,
        user,
      })

      await prisma.webHook.delete({
        where: {
          type_collectionId: {
            type,
            collectionId: collection.id,
          },
        },
      })

      return reply.status(204).send({})
    }
  )
}
