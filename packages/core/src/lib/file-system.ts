import { stat } from 'node:fs/promises'
import { resolve } from 'node:path'

export const FileSystem = {
  resolveTmpEncoded(...path: string[]) {
    return resolve(process.cwd(), '..', '..', 'tmp', 'encoded', ...path)
  },

  resolveTmpRaw(...path: string[]) {
    return resolve(process.cwd(), '..', '..', 'tmp', 'raw', ...path)
  },

  resolveTmpThumb(...path: string[]) {
    return resolve(process.cwd(), '..', '..', 'tmp', 'thumbnails', ...path)
  },

  resolvePublic() {
    return resolve(process.cwd(), '..', '..', 'public')
  },

  relativeTmpEncoded(path: string) {
    return path.split('/tmp/encoded').pop() || ''
  },

  relativeTmpRaw(path: string) {
    return path.split('/tmp/raw').pop() || ''
  },

  async getFileSizeInBytes(path: string) {
    const stats = await stat(path)
    return stats.size
  },
}
