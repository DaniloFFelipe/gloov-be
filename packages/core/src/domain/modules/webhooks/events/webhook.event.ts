import type { WebHookType } from '@gloov/db'

export abstract class WebhookEvent<Data> {
  abstract type: WebHookType
  collectionId: string
  data: Data

  constructor({ collectionId, ...data }: Data & { collectionId: string }) {
    this.data = data as Data
    this.collectionId = collectionId
  }

  toJSON() {
    return {
      type: this.type,
      collectionId: this.collectionId,
      data: this.data,
    }
  }
}
