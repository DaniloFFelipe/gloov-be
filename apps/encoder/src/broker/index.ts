import { env } from '@gloov/env'
import {
  defaultResolutions,
  Disk,
  DiskStorageService,
  encodeToHLS,
  fastifyPubSub,
  FileSystem,
  getMimeTypeFromExtension,
  VideoCreatedEvent,
  type StorageService,
} from '@gloov/core'

import type { FastifyInstance } from 'fastify'
import fastifyPlugin from 'fastify-plugin'
import { prisma, VideoStatus, type Videos } from '@gloov/db'

async function setStatus(videoId: string, status: VideoStatus) {
  return await prisma.videos.update({
    where: { id: videoId },
    data: { status },
  })
}

async function setLocationsAndReady(
  videoId: string,
  location: string,
  streamLocation: string
) {
  return await prisma.videos.update({
    where: { id: videoId },
    data: {
      streamLocation,
      location,
      status: VideoStatus.READY,
    },
  })
}

export const brokerPlugin = fastifyPlugin(async (app: FastifyInstance) => {
  await app.register(fastifyPubSub, {
    connection: env.BROKER_URL,
    handlers: {
      'video:created': async ({ processId }) => {
        const tmp = new Disk('')
        const storage: StorageService = new DiskStorageService(
          new Disk('public')
        )

        const videoProcessor = await prisma.videoProcessor.findUnique({
          where: { id: processId },
          include: {
            video: {
              include: {
                collection: true,
              },
            },
          },
        })

        if (!videoProcessor) return
        console.log('Encoding', videoProcessor.videoId)

        let video: Videos
        try {
          if (videoProcessor.video.status === 'PENDING') {
            await setStatus(videoProcessor.video.id, VideoStatus.PROCESSING)
          }

          await encodeToHLS({
            inputFile: videoProcessor.tmpLocation,
            outputDir: FileSystem.resolveTmpEncoded(
              videoProcessor.video.collection.userId,
              videoProcessor.video.collection.id,
              videoProcessor.video.id
            ),
            resolutions: defaultResolutions,
          })

          const location = `${videoProcessor.video.collection.userId}/${videoProcessor.video.collection.id}/${videoProcessor.video.id}/raw.${videoProcessor.tmpLocation.split('.').pop()}`
          await storage.uploadFile(
            videoProcessor.tmpLocation,
            location,
            getMimeTypeFromExtension(videoProcessor.tmpLocation)
          )

          const baseStreamLocation = `${videoProcessor.video.collection.userId}/${videoProcessor.video.collection.id}/${videoProcessor.video.id}`
          const streamLocation = `${baseStreamLocation}/stream/master.m3u8`
          await storage.uploadFolder(
            FileSystem.resolveTmpEncoded(
              videoProcessor.video.collection.userId,
              videoProcessor.video.collection.id,
              videoProcessor.video.id
            ),
            `${baseStreamLocation}/stream`
          )

          await prisma.videoProcessor.update({
            where: { id: videoProcessor.id },
            data: {
              completedAt: new Date(),
            },
          })

          video = await setLocationsAndReady(
            videoProcessor.video.id,
            location,
            streamLocation
          )

          await tmp.delete(videoProcessor.tmpLocation)
          await tmp.delete(
            FileSystem.resolveTmpEncoded(
              videoProcessor.video.collection.userId,
              videoProcessor.video.collection.id,
              videoProcessor.video.id
            ),
            true
          )
        } catch (error) {
          video = await setStatus(videoProcessor.video.id, VideoStatus.FAILED)
        }

        app.publisher('video:encoded', { videoId: video.id })
      },
    },
  })
})
