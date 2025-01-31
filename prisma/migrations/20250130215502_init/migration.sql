/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CronControl` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Exams` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_clientId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_clientId_fkey";

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "CronControl";

-- DropTable
DROP TABLE "Exams";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "tabela_Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tabela_Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tabela_Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "logoUrl" TEXT,
    "clientId" INTEGER NOT NULL,

    CONSTRAINT "tabela_Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tabela_cron_control" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "interval" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tabela_cron_control_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tabela_exams" (
    "id" SERIAL NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tabela_exams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tabela_user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "clientId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tabela_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tabela_Company_cnpj_key" ON "tabela_Company"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "tabela_cron_control_name_key" ON "tabela_cron_control"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tabela_user_email_key" ON "tabela_user"("email");

-- AddForeignKey
ALTER TABLE "tabela_Company" ADD CONSTRAINT "tabela_Company_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "tabela_Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tabela_user" ADD CONSTRAINT "tabela_user_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "tabela_Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
