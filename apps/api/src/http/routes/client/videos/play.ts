import { env } from '@gloov/env'
import { BadRequestException } from '@gloov/core'
import { prisma } from '@gloov/db'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const playVideo: FastifyPluginAsyncZod = async app => {
  app.get(
    '/videos/:videoId/play',
    {
      schema: {
        summary: 'Play Video',
        operationId: 'playVideo',
        tags: ['Videos'],
        security: [{ bearerAuth: [] }],
        params: z.object({
          videoId: z.string(),
        }),
        response: {
          200: z.object({
            url: z.string().url(),
          }),
        },
      },
    },
    async (req, reply) => {
      const video = await prisma.videos.findUnique({
        where: { id: req.params.videoId },
      })

      if (!video) {
        throw new BadRequestException('Video not found')
      }

      if (!video.streamLocation) {
        throw new BadRequestException('Video not ready')
      }

      const fullUrl = req.protocol.concat('://').concat(req.host)
      const fileUrl = new URL(
        `/cdn/${video.streamLocation}`,
        fullUrl
      ).toString()

      return reply.header('x-stream-token', env.STREAM_SECRET).redirect(fileUrl)
    }
  )
}
