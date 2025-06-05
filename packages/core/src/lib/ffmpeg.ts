import { join, resolve } from 'node:path'
import ffmpeg from 'fluent-ffmpeg'
import { rm } from 'node:fs/promises'
import { DiskStorageService } from './disk/disk-storage.ts'
import { Disk } from './disk/client.ts'
import { FileSystem } from './file-system.ts'

export function generateVideoThumbnail(
  videoPath: string,
  thumbnailPath: string,
  options?: { time?: string; size?: string; filename?: string }
): Promise<string> {
  const {
    time = '00:00:01', // Time offset (1s into the video by default)
    size = '1280x720', // Thumbnail size
    filename = 'thumbnail.png', // Output filename
  } = options || {}

  return new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .on('end', () => {
        resolve(join(thumbnailPath, filename))
      })
      .on('error', err => {
        console.error(err)
        return reject(err)
      })
      .screenshots({
        timestamps: [time],
        filename,
        folder: thumbnailPath,
        size,
      })
  })
}

async function generateVideoThumbnailAndUpload(
  videoPath: string,
  key: string,
  options?: { time?: string; size?: string; filename?: string }
) {
  const thumbnailPath = FileSystem.resolveTmpThumb()
  const thumbnailFinalPath = await generateVideoThumbnail(
    videoPath,
    thumbnailPath,
    options
  )
  const storage = new DiskStorageService(new Disk('public'))
  console.log('path', thumbnailFinalPath)
  const storageKey = `${key}/thumbnail.png`
  await storage.uploadFile(thumbnailFinalPath, storageKey)
  await rm(thumbnailFinalPath)
  return storageKey
}

async function getVideoDurationInSeconds(filePath: string): Promise<number> {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err) {
        console.error(err)
        return reject(err as Error)
      }

      // biome-ignore lint/complexity/useOptionalChain: <explanation>
      if (metadata.format && metadata.format.duration) {
        resolve(metadata.format.duration)
      } else {
        console.error('Could not retrieve duration')
        reject(new Error('Could not retrieve duration'))
      }
    })
  })
}

export const FFMPEG = {
  getVideoDurationInSeconds,
  generateVideoThumbnail,
  generateVideoThumbnailAndUpload,
}
