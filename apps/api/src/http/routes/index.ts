import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { clientRoutes } from './client/index.ts'

export const routes: FastifyPluginAsyncZod = async app => {
  await app.register(clientRoutes, {
    prefix: '/api/client',
  })
}
