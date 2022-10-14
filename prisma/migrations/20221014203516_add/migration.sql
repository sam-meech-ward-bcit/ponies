/*
  Warnings:

  - A unique constraint covering the columns `[federalRegistryNumber]` on the table `Pony` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `federalRegistryNumber` to the `Pony` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Pony` ADD COLUMN `federalRegistryNumber` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Pony_federalRegistryNumber_key` ON `Pony`(`federalRegistryNumber`);
