import { prisma } from '@gloov/db'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getCollectionById } from '../../../../functions/collections/get-collection-by-id.ts'

export const updateCollection: FastifyPluginAsyncZod = async app => {
  app.put(
    '/collections/:collectionId',
    {
      schema: {
        summary: 'Update Collection',
        operationId: 'updateCollection',
        tags: ['Collections'],
        security: [{ bearerAuth: [] }],
        params: z.object({
          collectionId: z.string(),
        }),
        body: z.object({
          name: z.string().min(1, 'Name is required'),
        }),
        response: {
          201: z.object({
            collectionId: z.string(),
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

      await prisma.collection.update({
        where: { id: collection.id },
        data: {
          name: req.body.name,
        },
      })

      return reply.status(201).send({
        collectionId: collection.id,
      })
    }
  )
}
