import type { FastifyInstance } from 'fastify'
import amqp from 'amqplib'
import fastifyPlugin from 'fastify-plugin'

export type PubSubHandler<C extends string, M = any> = {
  [key in C]: (message: M) => Promise<void>
}

export type FastifyPubSubHandler = PubSubHandler<
  'video:created',
  { processId: string }
> &
  PubSubHandler<'video:encoded', { videoId: string }>

export declare type FastifyPubSubOptions = {
  connection: string
  handlers: Partial<FastifyPubSubHandler>
}

declare module 'fastify' {
  export interface FastifyInstance {
    publisher: <T extends keyof FastifyPubSubHandler>(
      channel: T,
      message: Parameters<FastifyPubSubHandler[T]>[0]
    ) => Promise<void>
    broker: amqp.ChannelModel
  }
}

const fastifyPubSubHandler = async (
  fastify: FastifyInstance,
  opts: FastifyPubSubOptions
) => {
  const broker = await amqp.connect(opts.connection)
  const channels: Record<string, amqp.Channel> = {}
  for (const [key, handler] of Object.entries(opts.handlers)) {
    const channel = await broker.createChannel()
    channels[key] = channel

    await channel.assertQueue(key)
    channel.consume(
      key,
      async message => {
        if (!message) {
          return null
        }
        handler(JSON.parse(message?.content.toString()))
        channel.ack(message)
      },
      {
        noAck: false,
      }
    )

    fastify.decorate('publisher', async (key: string, message: any) => {
      let channel = channels[key]
      if (!channel) {
        channel = await broker.createChannel()
        channels[key] = channel
      }

      channel.sendToQueue(key, Buffer.from(JSON.stringify(message)))
    })
  }
}

export const fastifyPubSub = fastifyPlugin<FastifyPubSubOptions>(
  fastifyPubSubHandler,
  {
    name: 'fastify-pubsub',
  }
)
