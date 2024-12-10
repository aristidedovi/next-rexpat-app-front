export interface InformationGeneral {
  genre: string;
  nationalite: string;
  situation_matrimoniale: string;
  age: number | null;
  region: string;
  quartier: string;
  pays_provenance: string;
  duree_pays_provenance: string;
  pays_accueil: string;
  duree_pays_accueil: string;
  nombre_enfants: number | null;
}

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

    nombre_enfants: "",
  };

  let isValid: boolean = true;

  if (!formData.informationGeneral.genre) {
    formErrors.genre = "Veuillez choisir votre genre.";
    isValid = false;
  }
  if (!formData.informationGeneral.nationalite) {
    formErrors.nationalite = "Veuillez choisir votre nationalité.";
    isValid = false;
  }
  if (!formData.informationGeneral.situation_matrimoniale) {
    formErrors.situation_matrimoniale =
      "Veuillez choisir votre situation matrimoniale.";
    isValid = false;
  }
  if (!formData.informationGeneral.age) {
    formErrors.age = "Veuillez renseigner votre age.";
    isValid = false;
  }
  if (!formData.informationGeneral.pays_accueil) {
    formErrors.pays_accueil = "Veuillez sélectionner un pays d'accueil.";
    isValid = false;
  }
  if (!formData.informationGeneral.pays_provenance) {
    formErrors.pays_provenance = "Veuillez sélectionner un pays de provenance.";
    isValid = false;
  }
  if (!formData.informationGeneral.region) {
    formErrors.region = "Veuillez indiquer une région.";
    isValid = false;
  }
  if (
    !formData.informationGeneral.nombre_enfants ||
    formData.nombre_enfants < 0
  ) {
    formErrors.nombre_enfants = "Veuillez entrer un nombre d'enfant valide.";
    isValid = false;
  }
  if (!formData.informationGeneral.duree_pays_provenance) {
    formErrors.duree_pays_provenance =
      "Veuillez choisir une durée de provenance.";
    isValid = false;
  }
  if (!formData.informationGeneral.duree_pays_accueil) {
    formErrors.duree_pays_accueil = "Veuillez choisir une durée de provenance.";
    isValid = false;
  }

  console.log(formErrors);

  setErrorsIG(formErrors);
  if (isValid === false) {
    setIsIGFormValidate(false);
  } else {
    setIsIGFormValidate(true);
  }

  return isValid;
};
