/*
  Warnings:

  - A unique constraint covering the columns `[videoId]` on the table `video_processors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "video_processors_videoId_key" ON "video_processors"("videoId");

-- AddForeignKey
ALTER TABLE "video_processors" ADD CONSTRAINT "video_processors_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "videos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
