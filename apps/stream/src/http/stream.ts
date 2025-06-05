import { fastifyStatic } from '@fastify/static'

import type { FastifyInstance } from 'fastify'
import { FileSystem } from '@gloov/core'

export async function streamPlugin(app: FastifyInstance) {
  app.register(fastifyStatic, {
    root: FileSystem.resolvePublic(),
  })
}
