-- CreateEnum
CREATE TYPE "WebHookType" AS ENUM ('VIDEO_CREATED', 'VIDEO_DELETED', 'VIDEO_UPDATED');

-- CreateEnum
CREATE TYPE "WebHookHTTPMethods" AS ENUM ('POST', 'PUT', 'PATCH', 'DELETE');

-- CreateTable
CREATE TABLE "api_keys" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "collectionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "webhooks" (
    "id" TEXT NOT NULL,
    "type" "WebHookType" NOT NULL,
    "url" TEXT NOT NULL,
    "httpMethod" "WebHookHTTPMethods" NOT NULL DEFAULT 'POST',
    "collectionId" TEXT NOT NULL,

    CONSTRAINT "webhooks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_key_key" ON "api_keys"("key");

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_collectionId_key" ON "api_keys"("collectionId");

-- CreateIndex
CREATE UNIQUE INDEX "webhooks_type_collectionId_key" ON "webhooks"("type", "collectionId");

-- AddForeignKey
ALTER TABLE "api_keys" ADD CONSTRAINT "api_keys_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "webhooks" ADD CONSTRAINT "webhooks_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;
