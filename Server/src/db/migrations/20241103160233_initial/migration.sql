-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "queryType" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "serviceAgreement" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Message_emailAddress_key" ON "Message"("emailAddress");
