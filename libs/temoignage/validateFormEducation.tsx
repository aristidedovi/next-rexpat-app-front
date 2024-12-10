// Types pour les informations de chaque enfant
export interface ChildEducationInfo {
  niveau: string;
  budget: number;
  devise: string;
  typeEcole: string;
  uniforme: string;
  transport: string;
  satisfaction: string;
  internat: string;
}

export interface EducationErrors {
  educationNombreEnfant: string;
  educationNiveauEtude: string;
  educationTypeEcole: string;
  educationLanguesEnseignes: string;
  educationAvecOuSansUniforme: string;
  educationAvecOuSansTransport: string;
  educationBudgetScolaire: string;
  educationNiveauSatisfaction: string;
  educationProgrammes: string;
  educationAutres: string;
  educationEnfantErrors?: Array<{
    niveau: string;
    typeEcole: string;
    transport: string;
    uniforme: string;
    internat: string;
    //languesEnseignes: string;
  }>;
}

export const validateFormEducation = (
  formData: any,
  setErrorsEducation: any,
  setIsEducationFormValidate: any
): boolean => {
  // Initialiser un tableau pour stocker les erreurs de chaque enfant
  const educationEnfantErrors: Array<{
    niveau: string;
    typeEcole: string;
    transport: string;
    uniforme: string;
    internat: string;
    //languesEnseignes: string;
  }> = [];

  // Validation globale
  let isValid = true;

  // Valider le nombre d'enfants
  const formErrors: Record<string, string> = {
    educationNombreEnfant: "",
    educationNiveauEtude: "",
    educationTypeEcole: "",
    educationLanguesEnseignes: "",
    educationAvecOuSansUniforme: "",
    educationAvecOuSansTransport: "",
    educationBudgetScolaire: "",
    educationNiveauSatisfaction: "",
    educationProgrammes: "",
    educationAutres: "",
  };

  // Vérifier si le nombre d'enfants est renseigné
  if (!formData.educationNombreEnfant) {
    formErrors.educationNombreEnfant = "Veuillez saisir un nombre d'enfant";
    isValid = false;
  }

  // Parcourir chaque enfant et valider ses informations
  formData.educationEnfant.forEach((enfant: ChildEducationInfo) => {
    // Créer un objet d'erreurs pour cet enfant
    const enfantErrors = {
      niveau: "",
      typeEcole: "",
      transport: "",
      uniforme: "",
      internat: "",
      //languesEnseignes: "",
    };

    // Validation du niveau d'étude
    if (!enfant.niveau) {
      enfantErrors.niveau = "Veuillez sélectionner un niveau d'étude";
      isValid = false;
    }

    // Validation du type d'école
    if (!enfant.typeEcole) {
      enfantErrors.typeEcole = "Veuillez sélectionner le type d'école";
      isValid = false;
    }

    // Validation du transport
    if (!enfant.transport) {
      enfantErrors.transport = "Veuillez sélectionner";
      isValid = false;
    }

    // Validation de l'uniforme
    if (!enfant.uniforme) {
      enfantErrors.uniforme = "Veuillez sélectionner";
      isValid = false;
    }

    // Validation de internat
    if (!enfant.internat) {
      enfantErrors.internat = "Veuillez sélectionner ";
      isValid = false;
    }

    // Validation des langues enseignées (si nécessaire)
    // if (!enfant.languesEnseignes || enfant.languesEnseignes.length === 0) {
    //   enfantErrors.languesEnseignes = "Veuillez sélectionner au moins une langue";
    //   isValid = false;
    // }

    // Ajouter les erreurs de cet enfant au tableau des erreurs
    educationEnfantErrors.push(enfantErrors);
  });

  // Mettre à jour l'état des erreurs
  console.log(educationEnfantErrors);
  setErrorsEducation({
    ...formErrors,
    educationEnfantErrors, // Ajouter le tableau des erreurs spécifiques aux enfants
  });

  if (isValid === false) {
    setIsEducationFormValidate(false);
  } else {
    setIsEducationFormValidate(true);
  }
  return isValid;
};
