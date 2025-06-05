import { WebHookType, type $Enums } from '@gloov/db'
import { WebhookEvent } from './webhook.event.ts'

type Data = {
  video: {
    id: string
    title: string
    description?: string
    thumbnail?: string
    streamUrl?: string
    sizeInBytes: number
    durationInSeconds: number
  }
  status: $Enums.VideoStatus
}

export class VideoCreatedEvent extends WebhookEvent<Data> {
  type = WebHookType.VIDEO_CREATED
}
