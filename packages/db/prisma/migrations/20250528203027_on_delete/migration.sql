-- DropForeignKey
ALTER TABLE "video_processors" DROP CONSTRAINT "video_processors_videoId_fkey";

-- AddForeignKey
ALTER TABLE "video_processors" ADD CONSTRAINT "video_processors_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "videos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
