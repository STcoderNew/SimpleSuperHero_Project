-- CreateTable
CREATE TABLE "Superhero" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "superpower" TEXT NOT NULL,
    "humilityScore" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Superhero_pkey" PRIMARY KEY ("id")
);
