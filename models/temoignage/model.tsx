export interface InitialFormData {
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

  informationGeneral: {
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
  };
  // revenu_mensuel: string;
  // devise_revenu: string;
  nombre_enfants: number | null;
  agreeToTerms: boolean;
  isEmploi: boolean;
  isEducation: boolean;
  isLogement: boolean;
  isTransport: boolean;
  // Emploi data
  //emploiData: {};
  emploiSecteur: string;
  emploiPoste: string;
  emploiEmployeur: string;
  emploiTypeContrat: string;
  emploiRevenu_mensuel: string;
  emploiDevise_revenu: string;
  emploiCanaux: string;
  emploiSituationProActuelle: string;
  emploiEmail: string;
  emploiMotif: string;
  emploiDureChomage: string;
  //emploiNiveauDifficulte: string;
  emploiAvantApres: string;
  emploiDelai: string;
  // Education data
  educationEnfant: [];
  educationNombreEnfant: number | null;
  educationNiveauEtude: string;
  educationTypeEcole: string;
  educationLanguesEnseignes: string;
  educationAvecOuSansUniforme: string;
  educationAvecOuSansTransport: string;
  educationBudgetScolaire: string;
  educationNiveauSatisfaction: string;
  educationProgrammes: string;
  educationAutres: string;
  EducationDevise_scolaire: string;

  // logement
  logement: {
    statut: string;
    typeLogement: string;
    nombreDePieces: string;
    budget: string;
    devise: string;
    zoneGeographique: string;
    canalAquisition: string;
    siRecommandation: string;
  };

  // tranport
  transport: {
    moyenUtilise: string;
    proprietaire: string;
    budget: string;
    devise: string;
    chauffeurPrive: string;
  };
}

export const initialFormDataRexpat: InitialFormData = {
  genre: "",
  nationalite: "",
  situation_matrimoniale: "",
  age: null,
  region: "",
  quartier: "",
  pays_provenance: "",
  duree_pays_provenance: "",
  pays_accueil: "",
  duree_pays_accueil: "",

  informationGeneral: {
    genre: "",
    nationalite: "",
    situation_matrimoniale: "",
    age: null,
    nombre_enfants: null,
    region: "",
    quartier: "",
    pays_provenance: "",
    duree_pays_provenance: "",
    pays_accueil: "",
    duree_pays_accueil: "",
  },

  // revenu_mensuel: "",
  nombre_enfants: null,
  agreeToTerms: true,
  isEmploi: false,
  isEducation: false,
  isLogement: false,
  isTransport: false,
  //emploiData: {},
  emploiSecteur: "",
  emploiPoste: "",
  emploiEmployeur: "",
  emploiTypeContrat: "",
  emploiRevenu_mensuel: "",
  emploiDevise_revenu: "USD",
  emploiCanaux: "",
  emploiSituationProActuelle: "",
  emploiEmail: "",
  emploiMotif: "",
  emploiDureChomage: "",
  //emploiNiveauDifficulte: "",
  emploiAvantApres: "",
  emploiDelai: "",

  // Education data initialisation
  educationEnfant: [],
  educationNombreEnfant: 1,
  educationNiveauEtude: "",
  educationTypeEcole: "",
  educationLanguesEnseignes: "",
  educationAvecOuSansUniforme: "",
  educationAvecOuSansTransport: "",
  educationBudgetScolaire: "",
  educationNiveauSatisfaction: "",
  educationProgrammes: "",
  educationAutres: "",
  EducationDevise_scolaire: "",

  // logement
  logement: {
    statut: "",
    typeLogement: "",
    nombreDePieces: "",
    budget: "",
    devise: "",
    zoneGeographique: "",
    canalAquisition: "",
    siRecommandation: "",
  },

  // transport
  transport: {
    moyenUtilise: "",
    proprietaire: "",
    budget: "",
    devise: "",
    chauffeurPrive: "",
  },
};
