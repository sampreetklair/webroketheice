/*
  Warnings:

  - The primary key for the `Icebreaker` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Icebreaker" DROP CONSTRAINT "Icebreaker_pkey",
ALTER COLUMN "id" SET DEFAULT concat('ice_', replace(cast(gen_random_uuid() as text), '-', '')),
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Icebreaker_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Icebreaker_id_seq";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT concat('usr_', replace(cast(gen_random_uuid() as text), '-', ''));
