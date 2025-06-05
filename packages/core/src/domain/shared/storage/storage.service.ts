import type { MultipartFile } from '@fastify/multipart'

export type UploadResult = {
  key: string
}
export abstract class StorageService {
  abstract uploadFile(
    filePath: string,
    key: string,
    contentType?: string
  ): Promise<UploadResult>

  abstract uploadMultipartFile(
    file: MultipartFile,
    contentType?: string
  ): Promise<UploadResult>

  abstract uploadBuffer(
    buffer: Buffer,
    key: string,
    contentType: string
  ): Promise<UploadResult>

  abstract uploadFolder(
    folderPath: string,
    destinationPrefix?: string
  ): Promise<UploadResult>

  abstract getFolderSize(prefix: string): Promise<number>

  abstract delete(key: string, isFolder?: boolean): Promise<null>

  abstract getPublicUrl(key: string): string
}
