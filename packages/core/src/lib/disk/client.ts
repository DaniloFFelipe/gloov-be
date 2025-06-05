import { join, resolve } from 'node:path'
import { cp, lstat, mkdir, readdir, rm, stat } from 'node:fs/promises'
import { createWriteStream } from 'node:fs'
import { pipeline } from 'node:stream/promises'

export class Disk {
  private fullPath: string

  constructor(path: string) {
    this.fullPath = resolve(process.cwd(), '..', '..', path)
  }

  private splitPath(path: string): [string, string] {
    const normalizedPath = path.replace(/^\/+/, '')
    const parts = normalizedPath.split('/')
    const file = parts.pop() || ''
    const folders = parts.length > 0 ? `${parts.join('/')}/` : ''
    return [folders, file] as const
  }

  async createDirectory(path: string) {
    const baseFilePath = resolve(this.fullPath, path)
    try {
      await stat(baseFilePath)
    } catch (error) {
      await mkdir(baseFilePath, { recursive: true })
    }
  }

  async putObject(content: Buffer, path: string, mimeType: string) {
    const filePath = resolve(this.fullPath, path)
    await this.createDirectory(resolve(this.fullPath, this.splitPath(path)[0]))
    const writeStream = createWriteStream(filePath)
    await pipeline(content, writeStream)
    return {
      key: filePath.replace(this.fullPath, ''),
    }
  }

  async putObjectFromPath(initialPath: string, path: string) {
    const filePath = resolve(process.cwd(), initialPath)
    await this.createDirectory(resolve(this.fullPath, this.splitPath(path)[0]))
    await cp(filePath, resolve(this.fullPath, path), {
      recursive: true,
      force: true,
    })

    return {
      key: filePath.replace(this.fullPath, ''),
    }
  }

  async getObject(key: string) {
    const filePath = resolve(this.fullPath, key)
    const fileExists = await stat(filePath)
    if (!fileExists) {
      throw new Error('File not found')
    }

    return filePath
  }

  getObjectStatus(key: string) {
    const filePath = resolve(this.fullPath, key)
    return stat(filePath)
  }

  async getDirectorySize(prefix: string): Promise<number> {
    let totalSize = 0
    const dirPath = resolve(this.fullPath, prefix)

    try {
      const entries = await readdir(dirPath, { withFileTypes: true })

      for (const entry of entries) {
        const entryPath = join(dirPath, entry.name)

        if (entry.isDirectory()) {
          totalSize += await this.getDirectorySize(entryPath)
        } else if (entry.isFile()) {
          const stats = await lstat(entryPath)
          totalSize += stats.size
        }
      }

      return totalSize
    } catch (error: any) {
      if (error.code === 'ENOENT') {
        return 0
      }
      console.error(`Error calculating directory size for "${dirPath}":`, error)
      throw error
    }
  }

  async delete(key: string, isFolder = false) {
    const filePath = resolve(this.fullPath, key)
    await rm(filePath, { recursive: isFolder })
  }
}
