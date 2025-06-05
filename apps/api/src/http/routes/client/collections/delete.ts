import { prisma } from '@gloov/db'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getCollectionById } from '../../../../functions/collections/get-collection-by-id.ts'

export const deleteCollection: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/collections/:collectionId',
    {
      schema: {
        summary: 'Delete collection',
        operationId: 'deleteCollection',
        tags: ['Collections'],
        security: [{ bearerAuth: [] }],
        params: z.object({
          collectionId: z.string(),
        }),
        response: {
          204: z.object({}),
        },
      },
    },
    async (req, reply) => {
      const { user } = await req.getSession()
      const { collection } = await getCollectionById({
        collectionId: req.params.collectionId,
        user,
      })

      await app.storage.delete(`${user.id}/${collection.id}`, true)
      await prisma.videos.deleteMany({
        where: {
          collectionId: collection.id,
        },
      })
      await prisma.collection.delete({ where: { id: collection.id } })

      return reply.status(204).send({})
    }
  )
}
