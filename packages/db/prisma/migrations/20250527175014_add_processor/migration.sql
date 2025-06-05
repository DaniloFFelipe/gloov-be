-- CreateTable
CREATE TABLE "video_processors" (
    "id" TEXT NOT NULL,
    "tmpLocation" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "video_processors_pkey" PRIMARY KEY ("id")
);
