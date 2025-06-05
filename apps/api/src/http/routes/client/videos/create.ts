import { randomUUID } from 'node:crypto'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createWriteStream } from 'node:fs'
import { extname, resolve } from 'node:path'
import { z } from 'zod'
import { promisify } from 'node:util'
import { pipeline } from 'node:stream'
import { FFMPEG, FileSystem } from '@gloov/core'
import { prisma } from '@gloov/db'
import { ulid } from 'ulid'

import { BadRequestException } from '@gloov/core'
import { getCollectionById } from '../../../../functions/collections/get-collection-by-id.ts'

const bodyZ = z.object({
  title: z.string().min(1, 'Name is required'),
  thumbnail: z.string().optional(),
})

const pump = promisify(pipeline)

export const createVideo: FastifyPluginAsyncZod = async app => {
  app.post(
    '/collections/:collectionId/videos',
    {
      schema: {
        summary: 'Create Video',
        operationId: 'createVideo',
        tags: ['Videos'],
        security: [{ bearerAuth: [] }],
        params: z.object({
          collectionId: z.string(),
        }),
        querystring: bodyZ,
        response: {
          201: z.object({
            videoId: z.string(),
          }),
        },
      },
    },
    async (req, reply) => {
      const { user } = await req.getSession()
      const upload = await req.file()

      if (!upload) {
        throw new BadRequestException('File not found')
      }

      const mimeTypeRegex = /^(video)\/[a-zA-Z]+/
      const isValidFileFormat = mimeTypeRegex.test(upload.mimetype)

      if (!isValidFileFormat) {
        throw new BadRequestException('Invalid file format')
      }

      const fileId = randomUUID()
      const extension = extname(upload.filename)

      const fileName = fileId.concat(extension)

      const videoTmpLocation = FileSystem.resolveTmpRaw(fileName)
      const writeStream = createWriteStream(videoTmpLocation)
      await pump(upload.file, writeStream)

      const collection = await getCollectionById({
        collectionId: req.params.collectionId,
        user,
      })

      const durationInSeconds =
        await FFMPEG.getVideoDurationInSeconds(videoTmpLocation)
      const sizeInBytes = await FileSystem.getFileSizeInBytes(videoTmpLocation)

      const id = ulid()

      let thumbnailLocation = req.query.thumbnail
      if (!req.query.thumbnail) {
        thumbnailLocation = await FFMPEG.generateVideoThumbnailAndUpload(
          videoTmpLocation,
          `${user.id}/${collection.collection.id}/${id}`
        )
      }
      const video = await prisma.videos.create({
        data: {
          id,
          title: req.query.title,
          sizeInBytes,
          collectionId: collection.collection.id,
          thumbnailLocation,
          durationInSeconds,
        },
      })

      const videoProcessor = await prisma.videoProcessor.create({
        data: {
          videoId: video.id,
          tmpLocation: videoTmpLocation,
        },
      })

      await app.publisher('video:created', { processId: videoProcessor.id })

      return reply.status(201).send({
        videoId: video.id,
      })
    }
  )
}
