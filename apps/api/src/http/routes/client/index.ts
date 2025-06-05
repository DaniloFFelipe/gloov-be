import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import { signIn } from './users/sign-in.ts'
import { signUp } from './users/sign-up.ts'
import { me } from './users/me.ts'
import { createCollection } from './collections/create.ts'
import { updateCollection } from './collections/update.ts'
import { getCollectionByUser } from './collections/get-by-user.ts'
import { createVideo } from './videos/create.ts'
import { deleteVideo } from './videos/delete.ts'
import { deleteCollection } from './collections/delete.ts'
import { getVideosByCollection } from './videos/get-by-collections.ts'
import { updateVideo } from './videos/update.ts'
import { playVideo } from './videos/play.ts'
import { upsertWebhook } from './webhooks/upsert-webhook.ts'
import { deleteWebhook } from './webhooks/delete-webhook.ts'

export const clientRoutes: FastifyPluginAsyncZod = async app => {
  // Users
  await app.register(signIn)
  await app.register(signUp)
  await app.register(me)

  // Collections
  await app.register(createCollection)
  await app.register(updateCollection)
  await app.register(deleteCollection)
  await app.register(getCollectionByUser)

  // Videos
  await app.register(createVideo)
  await app.register(deleteVideo)
  await app.register(updateVideo)
  await app.register(getVideosByCollection)
  await app.register(playVideo)

  // Webhooks
  await app.register(upsertWebhook)
  await app.register(deleteWebhook)
}
