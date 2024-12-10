export const validateFormEmploi = (
  formData: any,
  setErrorsEmploi: any,
  setIsEmploiFormValidate: any
): boolean => {
  const formErrors: Record<string, string> = {
    emploiSecteur: "",
    emploiPoste: "",
    emploiEmployeur: "",
    emploiTypeContrat: "",
    emploiRevenu_mensuel: "",
    emploiDevise_revenu: "",
    emploiCanaux: "",
    emploiSituationProActuelle: "",
    emploiEmail: "",
    //emploiNiveauDifficulte: "",
    emploiAvantApres: "",
    emploiDelai: "",
  };

  let isValid: boolean = true;

  if (!formData.emploiSituationProActuelle) {
    formErrors.emploiSituationProActuelle =
      "Veuillez sélectionner votre situation professionnelle";
    isValid = false;
  }

  if (!formData.emploiSecteur) {
    formErrors.emploiSecteur = "Veuillez sélectionner votre secteur d'activite";
    isValid = false;
  }

  if (
    !formData.emploiPoste &&
    formData.emploiSituationProActuelle !== "Chômeur" &&
    formData.emploiSituationProActuelle !== "Entrepreneur" &&
    formData.emploiSituationProActuelle !== "Etudiant"
  ) {
    formErrors.emploiPoste = "Veuillez sélectionner votre poste";
    isValid = false;
  }

  if (
    !formData.emploiTypeContrat &&
    formData.emploiSituationProActuelle !== "Chômeur" &&
    formData.emploiSituationProActuelle !== "Entrepreneur" &&
    formData.emploiSituationProActuelle !== "Etudiant"
  ) {
    formErrors.emploiTypeContrat =
      "Veuillez sélectionner votre type de contrat";
    isValid = false;
    //console.log("chômeur");
  }

  console.log(formErrors);

  if (isValid === false) {
    setIsEmploiFormValidate(false);
  } else {
    setIsEmploiFormValidate(true);
  }

  setErrorsEmploi(formErrors);
  return isValid;
};
