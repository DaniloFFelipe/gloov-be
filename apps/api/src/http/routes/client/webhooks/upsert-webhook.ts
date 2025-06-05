import { prisma } from '@gloov/db'
import { getCollectionById } from '../../../../functions/collections/get-collection-by-id.ts'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const upsertWebhook: FastifyPluginAsyncZod = async app => {
  app.post(
    '/collections/:collectionId/webhooks',
    {
      schema: {
        summary: 'Set or Update Webhook',
        operationId: 'upsertWebhook',
        tags: ['Webhooks'],
        security: [{ bearerAuth: [] }],
        params: z.object({
          collectionId: z.string(),
        }),
        body: z.object({
          type: z.enum(['VIDEO_CREATED', 'VIDEO_DELETED', 'VIDEO_UPDATED']),
          url: z.string().url(),
          method: z.enum(['POST', 'PUT', 'DELETE', 'PATCH']),
        }),
        response: {
          204: z.object({}),
        },
      },
    },
    async (req, reply) => {
      const { user } = await req.getSession()
      const { collectionId } = req.params
      const { method, type, url } = req.body

      const { collection } = await getCollectionById({
        collectionId,
        user,
      })

      await prisma.webHook.upsert({
        where: {
          type_collectionId: {
            type,
            collectionId: collection.id,
          },
        },
        create: {
          type,
          httpMethod: method,
          url,
          collectionId: collection.id,
        },
        update: {
          httpMethod: method,
          url,
        },
      })

      return reply.status(204).send({})
    }
  )
}
