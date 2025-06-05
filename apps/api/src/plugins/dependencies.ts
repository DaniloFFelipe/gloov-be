import {
  type SessionService,
  SessionServiceImpl,
  type StorageService,
  WebhooksService,
  Disk,
  DiskStorageService,
} from '@gloov/core'
import { prisma } from '@gloov/db'
import 'fastify'
import fastifyPlugin from 'fastify-plugin'

declare module 'fastify' {
  export interface FastifyInstance {
    storage: StorageService
    sessionService: SessionService
    webhooksService: WebhooksService
  }
}

export const dependencies = fastifyPlugin(async app => {
  const storage: StorageService = new DiskStorageService(new Disk('public'))
  const sessionService: SessionService = new SessionServiceImpl(prisma)
  const webhooksService: WebhooksService = new WebhooksService(prisma)

  app.decorate('storage', storage)
  app.decorate('sessionService', sessionService)
  app.decorate('webhooksService', webhooksService)
})
