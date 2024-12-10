export interface Logement {
  statut: string;
  typeLogement: string;
  nombreDePieces: string;
  budget: string;
  devise: string;
  zoneGeographique: string;
  canalAquisition: string;
  siRecommandation: string;
}

export const validateFormLogement = (
  formData: any,
  setErrorsLogement: any,
  setIsLogementFormValidate: any
): boolean => {
  let isValid = true;
  const formErrors: Record<string, string> = {
    logementStatut: "",
    logementTypeLogement: "",
    logementNombreDePieces: "",
    logementBudget: "",
    logementDevise: "",
    logementZoneGeographique: "",
    logementCanalAquisition: "",
    logementSiRecommandation: "",
  };

  if (!formData.logement.statut) {
    formErrors.logementStatut = "Veuillez selectionner un statut du logement";
    isValid = false;
  }

  if (!formData.logement.typeLogement) {
    formErrors.logementTypeLogement =
      "Veuillez selectionner un type de logement";
    isValid = false;
  }

  console.log(formErrors);
  setErrorsLogement(formErrors);

  if (isValid === false) {
    setIsLogementFormValidate(false);
  } else {
    setIsLogementFormValidate(true);
  }

  return isValid;
};
