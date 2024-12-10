export const validateFormIG = (
  formData: any,
  setErrorsIG: any,
  setIsIGFormValidate: any
): boolean => {
  const formErrors: Record<string, string> = {
    genre: "",
    nationalite: "",
    situation_matrimoniale: "",
    age: "",
    quartier: "",
    pays_accueil: "",
    region: "",
    duree_pays_accueil: "",
    pays_provenance: "",
    duree_pays_provenance: "",
    // revenu_mensuel: "",
    // devise_revenu: "",
    nombre_enfants: "",
  };
  //console.log("Validate IG form");

  let isValid: boolean = true;

  if (!formData.genre) {
    formErrors.genre = "Veuillez choisir votre genre.";
    isValid = false;
  }
  if (!formData.nationalite) {
    formErrors.nationalite = "Veuillez choisir votre nationalité.";
    isValid = false;
  }
  if (!formData.situation_matrimoniale) {
    formErrors.situation_matrimoniale =
      "Veuillez choisir votre situation matrimoniale.";
    isValid = false;
  }
  if (!formData.age) {
    formErrors.age = "Veuillez renseigner votre age.";
    isValid = false;
  }
  if (!formData.pays_accueil) {
    formErrors.pays_accueil = "Veuillez sélectionner un pays d'accueil.";
    isValid = false;
  }
  if (!formData.pays_provenance) {
    formErrors.pays_provenance = "Veuillez sélectionner un pays de provenance.";
    isValid = false;
  }
  if (!formData.region) {
    formErrors.region = "Veuillez indiquer une région.";
    isValid = false;
  }
  // if (!formData.revenu_mensuel) {
  //   formErrors.revenu_mensuel = "Veuillez entrer un revenu mensuel valide.";
  //   isValid = false;
  // }
  // if (!formData.devise_revenu) {
  //   formErrors.devise_revenu = "Veuillez selectionner uen devise.";
  //   isValid = false;
  // }
  if (!formData.nombre_enfants || formData.nombre_enfants < 0) {
    formErrors.nombre_enfants = "Veuillez entrer un nombre d'enfant valide.";
    isValid = false;
  }
  if (!formData.duree_pays_provenance) {
    formErrors.duree_pays_provenance =
      "Veuillez choisir une durée de provenance.";
    isValid = false;
  }
  if (!formData.duree_pays_accueil) {
    formErrors.duree_pays_accueil = "Veuillez choisir une durée de provenance.";
    isValid = false;
  }

  setErrorsIG(formErrors);
  if (isValid === false) {
    setIsIGFormValidate(false);
  } else {
    setIsIGFormValidate(true);
  }

  return isValid;
};
