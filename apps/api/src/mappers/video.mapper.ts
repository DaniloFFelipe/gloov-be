import { env } from '@gloov/env'
import type { Videos } from '@gloov/db'

export const VideoMapper = {
  toResponse(video: Videos) {
    return {
      id: video.id,
      title: video.title,
      description: video.description,
      thumbnail: `${env.CDN_ENDPOINT}/${video.thumbnailLocation}`,
      sizeInBytes: video.sizeInBytes,
      durationInSeconds: video.durationInSeconds,
      status: video.status,
      createdAt: video.createdAt,
    }
  },
  toWebHookEvent(video: Videos) {
    return {
      id: video.id,
      durationInSeconds: video.durationInSeconds,
      sizeInBytes: video.sizeInBytes,
      streamUrl: video.streamLocation
        ? `${env.CDN_ENDPOINT}/${video.streamLocation}`
        : undefined,
      title: video.title,
      description: video.description ? video.description : undefined,
      thumbnail: video.thumbnailLocation
        ? `${env.CDN_ENDPOINT}/${video.thumbnailLocation}`
        : undefined,
    }
  },
}
