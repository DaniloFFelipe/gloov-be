import type { SessionPayload } from '../sessions/session.service.ts'

export type WithUser<T = {}> = T & {
  user: SessionPayload['user']
}

export type WithUserAndCollectionId<T = {}> = T & {
  user: SessionPayload['user']
  collectionId: string
}
