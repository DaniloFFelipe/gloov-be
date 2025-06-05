import { brokerPlugin } from '@/broker/index.ts'
import { fastify } from 'fastify'

const app = fastify()

await app.register(brokerPlugin)

await app.listen({
  port: 3000,
  host: '0.0.0.0',
})

console.log('Server running on http://localhost:3000')
