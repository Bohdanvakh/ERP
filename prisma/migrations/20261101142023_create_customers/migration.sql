-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "fullName" VARCHAR(250) NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "address" VARCHAR(250) NOT NULL,
    "index" VARCHAR(10) NOT NULL,
    "registrationNumber" VARCHAR(12) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);
