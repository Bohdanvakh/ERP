-- CreateTable
CREATE TABLE "Warehouse" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(20) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "phoneNumber" VARCHAR(13) NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("id")
);
