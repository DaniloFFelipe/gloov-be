import { fastify } from 'fastify'
import { streamPlugin } from './stream.ts'

const app = fastify()

await app.register(streamPlugin)

await app.listen({
  port: 3001,
  host: '0.0.0.0',
})

console.log('Server running on http://localhost:3001')
