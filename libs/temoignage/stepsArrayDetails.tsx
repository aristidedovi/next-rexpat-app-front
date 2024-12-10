interface StepDetail {
  id: string;
  label: string;
  description: string;
}

export const stepsArray: string[] = ["I", "A", "B", "C", "D", "E"];

export const stepsArrayDetails: StepDetail[] = [
  {
    id: "I",
    label: "Initialisation",
    description: "",
  },
  {
    id: "A",
    label: "Information générale",
    description: "Des détails anonyme sur vous",
  },
  {
    id: "B",
    label: "Emploi",
    description: "Vos informations",
  },
  {
    id: "C",
    label: "Education",
    description: "Vos informations",
  },
  {
    id: "D",
    label: "Logement",
    description: "Vos informations",
  },
  {
    id: "E",
    label: "Transport",
    description: "Vos informations",
  },
];
