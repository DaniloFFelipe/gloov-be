import type { MultipartFile } from '@fastify/multipart'
import type {
  StorageService,
  UploadResult,
} from '../../domain/shared/storage/storage.service.ts'
import type { Disk } from './client.ts'

export class DiskStorageService implements StorageService {
  constructor(private disk: Disk) {}

  async uploadFile(filePath: string, key: string): Promise<UploadResult> {
    await this.disk.putObjectFromPath(filePath, key)
    return {
      key,
    }
  }

  async uploadMultipartFile(
    file: MultipartFile,
    contentType?: string
  ): Promise<UploadResult> {
    const { key } = await this.disk.putObject(
      await file.toBuffer(),
      file.filename,
      file.mimetype
    )

    return {
      key,
    }
  }

  async uploadBuffer(
    buffer: Buffer,
    path: string,
    contentType: string
  ): Promise<UploadResult> {
    const { key } = await this.disk.putObject(buffer, path, contentType)

    return {
      key,
    }
  }

  async uploadFolder(
    folderPath: string,
    destinationPrefix?: string
  ): Promise<UploadResult> {
    await this.disk.putObjectFromPath(
      folderPath,
      destinationPrefix || folderPath
    )

    return {
      key: folderPath,
    }
  }

  getFolderSize(prefix: string): Promise<number> {
    return this.disk.getDirectorySize(prefix)
  }

  async delete(key: string, isFolder?: boolean): Promise<null> {
    await this.disk.delete(key, isFolder)
    return null
  }

  getPublicUrl(key: string): string {
    throw new Error('Method not implemented.')
  }
}
