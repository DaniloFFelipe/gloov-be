import {
  BadRequestException,
  ForbiddenException,
  type WithUser,
} from '@gloov/core'
import { prisma } from '@gloov/db'

export async function getCollectionById({
  collectionId,
  user,
}: WithUser<{ collectionId: string }>) {
  const collection = await prisma.collection.findUnique({
    where: { id: collectionId },
  })

  if (!collection) {
    throw new BadRequestException('Collection not found')
  }

  if (collection.userId !== user.id) {
    throw new ForbiddenException(
      'You do not have permission to access this collection'
    )
  }

  return { collection }
}
