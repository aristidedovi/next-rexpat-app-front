export interface Emploi {
  secteur: string;
  poste: string;
  employeur: string;
  typeContrat: string;
  revenu_mensuel: string;
  devise_revenu: string;
  canaux: string;
  situationProActuelle: string;
  email: string;
  motif: string;
  dureChomage: string;
  avantApres: string;
  delai: string;
}

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

  if (!formData.emploi.situationProActuelle) {
    formErrors.emploiSituationProActuelle =
      "Veuillez sélectionner votre situation professionnelle";
    isValid = false;
  }

  if (!formData.emploi.secteur) {
    formErrors.emploiSecteur = "Veuillez sélectionner votre secteur d'activite";
    isValid = false;
  }

  if (
    !formData.emploi.poste &&
    formData.emploi.situationProActuelle !== "Chômeur" &&
    formData.emploi.situationProActuelle !== "Entrepreneur" &&
    formData.emploi.situationProActuelle !== "Etudiant"
  ) {
    formErrors.emploiPoste = "Veuillez sélectionner votre poste";
    isValid = false;
  }

  if (
    !formData.emploi.typeContrat &&
    formData.emploi.situationProActuelle !== "Chômeur" &&
    formData.emploi.situationProActuelle !== "Entrepreneur" &&
    formData.emploi.situationProActuelle !== "Etudiant"
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
