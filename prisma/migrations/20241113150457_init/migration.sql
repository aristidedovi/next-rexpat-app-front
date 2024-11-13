-- CreateTable
CREATE TABLE "InformationGeneral" (
    "id" SERIAL NOT NULL,
    "genre" TEXT NOT NULL,
    "nationalite" TEXT NOT NULL,
    "situation_matrimoniale" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "region" TEXT NOT NULL,
    "quartier" TEXT NOT NULL,
    "pays_provenance" TEXT NOT NULL,
    "duree_pays_provenance" TEXT NOT NULL,
    "pays_accueil" TEXT NOT NULL,
    "duree_pays_accueil" TEXT NOT NULL,
    "nombre_enfants" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InformationGeneral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emploi" (
    "id" SERIAL NOT NULL,
    "emploiSecteur" TEXT NOT NULL,
    "emploiEmployeur" TEXT NOT NULL,
    "emploiTypeContrat" TEXT NOT NULL,
    "emploiRevenu_mensuel" TEXT NOT NULL,
    "emploiDevise_revenu" TEXT NOT NULL,
    "emploiCanaux" TEXT NOT NULL,
    "emploiSituationProActuelle" TEXT NOT NULL,
    "emploiEmail" TEXT NOT NULL,
    "emploiNiveauDifficulte" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "informationGeneralId" INTEGER NOT NULL,

    CONSTRAINT "Emploi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Emploi_informationGeneralId_key" ON "Emploi"("informationGeneralId");

-- AddForeignKey
ALTER TABLE "Emploi" ADD CONSTRAINT "Emploi_informationGeneralId_fkey" FOREIGN KEY ("informationGeneralId") REFERENCES "InformationGeneral"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
