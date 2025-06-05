import { env } from '@gloov/env'

export const getCode = (length: number) => {
  if (['development', 'test'].includes(env.NODE_ENV)) {
    return '1234'
  }

  const codeNumber = Math.floor(
    10 ** (length - 1) + Math.random() * (10 ** length - 10 ** (length - 1) - 1)
  )
  const codeString = codeNumber.toString()
  const code = codeString.padStart(length, '0')
  return code
}

export const getExtensionFromMimeType = (mimeType: string): string => {
  const mimeToExtension: Record<string, string> = {
    // Images
    'image/jpeg': '.jpg',
    'image/jpg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
    'image/webp': '.webp',
    'image/svg+xml': '.svg',
    'image/bmp': '.bmp',
    'image/tiff': '.tiff',

    // Documents
    'application/pdf': '.pdf',
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      '.docx',
    'application/vnd.ms-excel': '.xls',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      '.xlsx',
    'application/vnd.ms-powerpoint': '.ppt',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      '.pptx',
    'text/plain': '.txt',
    'text/csv': '.csv',
    'text/html': '.html',
    'application/rtf': '.rtf',

    // Audio
    'audio/mpeg': '.mp3',
    'audio/wav': '.wav',
    'audio/ogg': '.ogg',
    'audio/aac': '.aac',
    'audio/flac': '.flac',

    // Video
    'video/mp4': '.mp4',
    'video/mpeg': '.mpeg',
    'video/webm': '.webm',
    'video/quicktime': '.mov',
    'video/x-msvideo': '.avi',

    // Archives
    'application/zip': '.zip',
    'application/x-rar-compressed': '.rar',
    'application/x-7z-compressed': '.7z',
    'application/gzip': '.gz',
    'application/x-tar': '.tar',

    // Others
    'application/json': '.json',
    'application/xml': '.xml',
    'application/javascript': '.js',
    'text/css': '.css',
    'application/octet-stream': '.bin',
  }

  return mimeToExtension[mimeType] || ''
}

export const getMimeTypeFromExtension = (mimeType: string): string => {
  const mimeToExtension: Record<string, string> = {
    // Images
    '.jpeg': 'image/jpg',
    '.jpg': 'image/jpg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.bmp': 'image/bmp',
    '.tiff': 'image/tiff',

    // Documents
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
      '.docx',
    '.xls': 'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
      '.xlsx',
    '.ppt': 'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      '.pptx',
    '.txt': 'text/plain',
    '.csv': 'text/csv',
    '.html': 'text/html',
    '.rtf': 'application/rtf',

    // Audio
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.ogg': 'audio/ogg',
    '.aac': 'audio/aac',
    '.flac': 'audio/flac',

    // Video
    '.mp4': 'video/mp4',
    '.mpeg': 'video/mpeg',
    '.webm': 'video/webm',
    '.mov': 'video/quicktime',
    '.avi': 'video/x-msvideo',

    // Archives
    '.zip': 'application/zip',
    '.rar': 'application/x-rar-compressed',
    '.7z': 'application/x-7z-compressed',
    '.gz': 'application/gzip',
    '.tar': 'application/x-tar',

    // Others
    '.json': 'application/json',
    '.xml': 'application/xml',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.bin': 'application/octet-stream',
  }

  return mimeToExtension[mimeType] || ''
}

export const gbToBytes = (gb: number): number => {
  // 1 GB = 1,073,741,824 bytes (2^30)
  return gb * 1073741824
}
