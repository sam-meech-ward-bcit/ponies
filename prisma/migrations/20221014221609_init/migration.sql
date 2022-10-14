-- CreateEnum
CREATE TYPE "Color" AS ENUM ('WHITE', 'BROWN', 'BLACK', 'YELLOW', 'RED', 'BLUE', 'GREEN', 'ORANGE', 'PURPLE', 'PINK');

-- CreateTable
CREATE TABLE "Pony" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "federalRegistryNumber" INTEGER NOT NULL,
    "color" "Color" NOT NULL DEFAULT 'PINK',
    "breed" TEXT NOT NULL,

    CONSTRAINT "Pony_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pony_federalRegistryNumber_key" ON "Pony"("federalRegistryNumber");
