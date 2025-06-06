import { BadRequestException } from '@gloov/core'
import { prisma } from '@gloov/db'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { collectionIconsNamesZ } from '../../../../functions/collections/collection-icons.ts'

export const createCollection: FastifyPluginAsyncZod = async app => {
  app.post(
    '/collections',
    {
      schema: {
        summary: 'Create Collection',
        operationId: 'createCollection',
        tags: ['Collections'],
        security: [{ bearerAuth: [] }],
        body: z.object({
          name: z.string().min(1, 'Name is required'),
          iconName: collectionIconsNamesZ.default('FilmSlate'),
        }),
        response: {
          201: z.object({
            collectionId: z.string(),
            collectionName: z.string(),
            collectionIconName: z.string(),
          }),
        },
      },
    },
    async (req, reply) => {
      const { user } = await req.getSession()
      const { name, iconName } = req.body
      const existingCollectionsCount = await prisma.collection.count({
        where: {
          userId: user.id,
        },
      })

      if (existingCollectionsCount >= 10) {
        throw new BadRequestException(
          'You have reached the maximum number (10) of collections.'
        )
      }

      const collection = await prisma.collection.create({
        data: {
          name,
          userId: user.id,
          iconName,
        },
      })

      return reply.status(201).send({
        collectionId: collection.id,
        collectionName: collection.name,
        collectionIconName: collection.iconName,
      })
    }
  )
}
