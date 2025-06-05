import type { PrismaClient } from '@gloov/db'
import type { WebhookEvent } from '../events/webhook.event.ts'

export class WebhooksService {
  constructor(private prisma: PrismaClient) {}

  async sendEvent<D>(event: WebhookEvent<D>) {
    console.log('WebHook: sending event', event)
    const webhook = await this.prisma.webHook.findUnique({
      where: {
        type_collectionId: {
          type: event.type,
          collectionId: event.collectionId,
        },
      },
    })

    try {
      if (webhook) {
        await fetch(webhook.url, {
          method: webhook.httpMethod,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event.data),
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}
