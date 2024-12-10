export interface InitialFormData {
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

  agreeToTerms: boolean;
  isEmploi: boolean;
  isEducation: boolean;
  isLogement: boolean;
  isTransport: boolean;

  // Emploi data
  emploi: {
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
  };

  // Education data
  educationEnfant: [];
  educationNombreEnfant: number | null;

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

  agreeToTerms: true,
  isEmploi: false,
  isEducation: false,
  isLogement: false,
  isTransport: false,

  //emploiData
  emploi: {
    secteur: "",
    poste: "",
    employeur: "",
    typeContrat: "",
    revenu_mensuel: "",
    devise_revenu: "",
    canaux: "",
    situationProActuelle: "",
    email: "",
    motif: "",
    dureChomage: "",
    avantApres: "",
    delai: "",
  },

  // Education data initialisation
  educationEnfant: [],
  educationNombreEnfant: 1,

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
