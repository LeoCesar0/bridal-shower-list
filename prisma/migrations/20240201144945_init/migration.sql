/*
  Warnings:

  - Made the column `image` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_guestId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "guestId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
