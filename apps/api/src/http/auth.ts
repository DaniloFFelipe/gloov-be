import type { SessionPayload } from '@gloov/core'
import 'fastify'

import type { FastifyInstance } from 'fastify'
import { fastifyPlugin } from 'fastify-plugin'

declare module 'fastify' {
  export interface FastifyRequest {
    getSessionId: () => Promise<{ sessionId: string }>
    getSession: () => Promise<SessionPayload>
  }
}

export const auth = fastifyPlugin(async (app: FastifyInstance) => {
  app.addHook('preHandler', async (request, reply) => {
    request.getSessionId = async () => {
      const payload = await request.jwtVerify<{ sub: string }>()
      return { sessionId: payload.sub }
    }

    request.getSession = async () => {
      const { sessionId } = await request.getSessionId()
      return await app.sessionService.getSession(sessionId)
    }
  })
})
