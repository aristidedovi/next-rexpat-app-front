export const CandidatValidationForm = (
  formData: any,
  setErrorsCandidat: any,
  setIsCandidatFormValidate: any
): boolean => {
  const formErrors: Record<string, string> = {
    nom: "",
    prenom: "",
    age: "",
    genre: "",
    situationMatrimoniale: "",
    adresse: "",
    phone: "",
    avecOuSansEnfant: "",
    typeDeService: "",
    frequencePrestation: "",
    frequenceDescente: "",
    zonePreference: "",
    rayonAction: "",
  };

  let isValid: boolean = true;

  if (!formData.nom) {
    formErrors.nom = "Veuillez indiquer votre nom";
    isValid = false;
  }

  if (!formData.prenom) {
    formErrors.prenom = "Veuillez indiquer votre prenom";
    isValid = false;
  }

  if (!formData.age) {
    formErrors.age = "Veuillez indiquer votre age";
    isValid = false;
  }

  if (!formData.genre) {
    formErrors.genre = "Veuillez selectionnez votre genre";
    isValid = false;
  }

  if (!formData.situationMatrimoniale) {
    formErrors.situationMatrimoniale =
      "Veuillez selectionnez votre situation matrimoniale";
    isValid = false;
  }

  if (!formData.adresse) {
    formErrors.adresse = "Veuillez renseigner votre addresse";
    isValid = false;
  }

  if (!formData.phone) {
    formErrors.phone = "Veuillez renseigner votre numéro de téléphone";
    isValid = false;
  }

  if (!formData.avecOuSansEnfant) {
    formErrors.avecOuSansEnfant =
      "Veuillez selectionnez si vous avez des enfants ou pas";
    isValid = false;
  }

  if (!formData.typeDeService) {
    formErrors.typeDeService = "Veuillez selectionnez un service";
    isValid = false;
  }

  if (!formData.frequencePrestation) {
    formErrors.frequencePrestation =
      "Veuillez selectionnez votre préférence de prestation";
    isValid = false;
  }

  if (!formData.frequenceDescente) {
    formErrors.frequenceDescente =
      "Veuillez selectionnez votre fréquence de descente";
    isValid = false;
  }

  if (!formData.zonePreference) {
    formErrors.zonePreference =
      "Veuillez selectionnez votre zone de préférence";
    isValid = false;
  }

  if (!formData.rayonAction) {
    formErrors.rayonAction = "Veuillez selectionnez votre rayon d'action";
    isValid = false;
  }

  console.log(formErrors);

  if (isValid === false) {
    setIsCandidatFormValidate(false);
  } else {
    setIsCandidatFormValidate(true);
  }

  setErrorsCandidat(formErrors);
  return isValid;
};
