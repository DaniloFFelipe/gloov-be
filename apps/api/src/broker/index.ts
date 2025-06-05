import { env } from '@gloov/env'
import { fastifyPubSub, VideoCreatedEvent } from '@gloov/core'

import type { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import { prisma } from '@gloov/db'
import { VideoMapper } from '../mappers/video.mapper.ts'

export const brokerPlugin = fastifyPlugin(async (app: FastifyInstance) => {
  await app.register(fastifyPubSub, {
    connection: env.BROKER_URL,
    handlers: {
      'video:encoded': async ({ videoId }) => {
        const video = await prisma.videos.findUnique({
          where: { id: videoId },
        })
        if (!video) return

        app.webhooksService.sendEvent(
          new VideoCreatedEvent({
            collectionId: video.collectionId,
            status: video.status,
            video: VideoMapper.toWebHookEvent(video),
          })
        )
      },
    },
  })
})
