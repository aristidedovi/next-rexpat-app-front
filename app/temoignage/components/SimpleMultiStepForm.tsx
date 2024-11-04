"use client";

import React, { useEffect, useState, FC } from "react";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";
import StepFinal from "./StepFinal";
import StepFirst from "./StepFirst";

interface InitialFormData {
  genre: string;
  nationalite: string;
  situation_matrimoniale: string;
  age: number;
  region: string;
  quartier: string;
  pays_provenance: string;
  duree_pays_provenance: number;
  pays_accueil: string;
  duree_pays_accueil: number;
  revenu_mensuel: string;
  nombre_enfants: number;
  agreeToTerms: boolean;
  isEmploi: boolean;
  isEducation: boolean;
  isLogement: boolean;
  isTransport: boolean;
  emploiSecteur: string;
  emploiEmployeur: string;
  emploiTypeContrat: string;
  emploiCanaux: string;
  emploiSituationProActuelle: string;
  emploiEmail: string;
  emploiNiveauDifficulte: string;
}

const initialFormDataRexpat: InitialFormData = {
  genre: "",
  nationalite: "",
  situation_matrimoniale: "",
  age: 0,
  region: "",
  quartier: "",
  pays_provenance: "",
  duree_pays_provenance: 0,
  pays_accueil: "",
  duree_pays_accueil: 0,
  revenu_mensuel: "",
  nombre_enfants: 0,
  agreeToTerms: true,
  isEmploi: false,
  isEducation: false,
  isLogement: false,
  isTransport: false,
  emploiSecteur: "",
  emploiEmployeur: "",
  emploiTypeContrat: "",
  emploiCanaux: "",
  emploiSituationProActuelle: "",
  emploiEmail: "",
  emploiNiveauDifficulte: "",
};

const stepsArray: string[] = ["I", "A", "B", "C", "D"];

interface StepDetail {
  id: string;
  label: string;
  description: string;
}

const stepsArrayDetails: StepDetail[] = [
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
];

interface SimpleMultiStepFormProps {
  showStepNumber: boolean;
}

const SimpleMultiStepForm: FC<SimpleMultiStepFormProps> = ({
  showStepNumber,
}) => {
  const [step, setStep] = useState<string>("I");
  const [formData, setFormData] = useState<InitialFormData>(
    initialFormDataRexpat
  );
  const [errorsIG, setErrorsIG] = useState<Record<string, string>>({});
  const [errorsEmploi, setErrorsEmploi] = useState<Record<string, string>>({});

  const stepConditions: Record<string, boolean> = {
    A: true,
    B: formData.isEmploi,
    C: formData.isEducation,
    D: formData.isLogement,
  };

  const validateFormIG = (): boolean => {
    let formErrors: Record<string, string> = {
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
      revenu_mensuel: "",
      nombre_enfants: "",
      // emploiSecteur: "",
      // emploiEmployeur: "",
      // emploiTypeContrat: "",
      // emploiCanaux: "",
      // emploiSituationProActuelle: "",
      // emploiEmail: "",
      // emploiNiveauDifficulte: "",
    };

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
      formErrors.pays_provenance =
        "Veuillez sélectionner un pays de provenance.";
      isValid = false;
    }
    if (!formData.region) {
      formErrors.region = "Veuillez indiquer une région.";
      isValid = false;
    }
    if (!formData.revenu_mensuel) {
      formErrors.revenu_mensuel = "Veuillez entrer un revenu mensuel valide.";
      isValid = false;
    }
    if (!formData.nombre_enfants || formData.nombre_enfants <= 0) {
      formErrors.nombre_enfants = "Veuillez entrer un nombre d'enfant valide.";
      isValid = false;
    }

    // if (!formData.emploiSituationProActuelle) {
    //   formErrors.emploiSituationProActuelle =
    //     "Veuillez sélectionner votre situation professionnelle";
    //   isValid = false;
    // }
    // if (
    //   !formData.emploiTypeContrat &&
    //   formData.emploiSituationProActuelle !== "Chômeur"
    // ) {
    //   formErrors.emploiTypeContrat =
    //     "Veuillez sélectionner votre type de contrat";
    //   isValid = false;
    // }
    // if (
    //   !formData.emploiSecteur &&
    //   formData.emploiSituationProActuelle !== "Chômeur"
    // ) {
    //   formErrors.emploiSecteur = "Veuillez saisir votre secteur d'activité";
    //   isValid = false;
    // }

    // if (
    //   !formData.emploiEmail &&
    //   formData.emploiSituationProActuelle === "Chômeur"
    // ) {
    //   formErrors.emploiEmail = "Veuillez entree votre adresse email";
    //   isValid = false;
    // }

    setErrorsIG(formErrors);
    return isValid;
  };

  const validateFormEmploi = (): boolean => {
    let formErrors: Record<string, string> = {
      emploiSecteur: "",
      emploiEmployeur: "",
      emploiTypeContrat: "",
      emploiCanaux: "",
      emploiSituationProActuelle: "",
      emploiEmail: "",
      emploiNiveauDifficulte: "",
    };

    let isValid: boolean = true;

    if (!formData.emploiSituationProActuelle) {
      formErrors.emploiSituationProActuelle =
        "Veuillez sélectionner votre situation professionnelle";
      isValid = false;
    }
    if (
      !formData.emploiTypeContrat &&
      formData.emploiSituationProActuelle !== "Chômeur"
    ) {
      formErrors.emploiTypeContrat =
        "Veuillez sélectionner votre type de contrat";
      isValid = false;
    }
    if (
      !formData.emploiSecteur &&
      formData.emploiSituationProActuelle !== "Chômeur"
    ) {
      formErrors.emploiSecteur = "Veuillez saisir votre secteur d'activité";
      isValid = false;
    }

    if (
      !formData.emploiEmail &&
      formData.emploiSituationProActuelle === "Chômeur"
    ) {
      formErrors.emploiEmail = "Veuillez entree votre adresse email";
      isValid = false;
    }

    setErrorsEmploi(formErrors);
    return isValid;
  };

  const handelNextStep = (): void => {
    if (step === "I") {
      setStep("A");
    } else if (step === "A" && validateFormIG()) {
      if (formData.isEmploi) {
        setStep("B");
      } else if (formData.isEducation) {
        setStep("C");
      } else if (formData.isLogement) {
        setStep("D");
      }
    } else if (step === "B") {
      if (formData.isEducation) {
        setStep("C");
      } else if (formData.isLogement) {
        setStep("D");
      }
    } else if (step === "C") {
      if (formData.isLogement) {
        setStep("D");
      }
    }
  };

  const handelPrevStep = (): void => {
    if (step === "D") {
      if (formData.isEducation) {
        setStep("C");
      } else if (formData.isEmploi) {
        setStep("B");
      } else {
        setStep("A");
      }
    } else if (step === "C") {
      if (formData.isEmploi) {
        setStep("B");
      } else {
        setStep("A");
      }
    } else if (step === "B") {
      setStep("A");
    } else if (step === "A") {
      setStep("I");
    }
  };

  const handelChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    let fieldValue: string | boolean;

    if (
      name === "agreeToTerms" ||
      name === "isEmploi" ||
      name === "isEducation" ||
      name === "isLogement" ||
      name === "isTransport"
    ) {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmitFormData = (): void => {
    if (!formData.agreeToTerms) {
      alert("Error!!!!!! You must agree to Terms of Services!!!");
    } else {
      if (validateFormEmploi()) {
        setStep("Final");
      }
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const renderTopStepNumbers = (): JSX.Element | null => {
    if (!showStepNumber || step === "Final" || step === "I") {
      return null;
    }
    return (
      <section className="mt-2 mb-4 flex justify-center">
        <ol className="items-center justify-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
          {stepsArray.map((item) => {
            const stepDetail = stepsArrayDetails.find(
              (detail) => detail.id === item
            );

            return (
              stepConditions[item] && (
                <li
                  key={item}
                  onClick={() => setStep(item)}
                  className={`flex items-center space-x-2.5 rtl:space-x-reverse cursor-pointer ${
                    item === step
                      ? "text-blue-600 dark:text-blue-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <span
                    className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0 ${
                      item === step
                        ? "border-blue-600 dark:border-blue-500"
                        : "border-gray-500 dark:border-gray-400"
                    }`}
                  >
                    {item}
                  </span>
                  <span>
                    <h3 className="font-medium leading-tight">
                      {stepDetail?.label}
                    </h3>
                    <p className="text-sm">{stepDetail?.description}</p>
                  </span>
                </li>
              )
            );
          })}
        </ol>
      </section>
    );
  };

  return (
    <div className="w-[1000px] max-w-full px-6 py-1 mx-auto rounded-lg border-2 border-dotted border-sky-300">
      <form>
        {renderTopStepNumbers()}

        {step === "I" ? (
          <StepFirst
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelNextStep={handelNextStep}
          />
        ) : null}
        {step === "A" ? (
          <StepA
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelNextStep={handelNextStep}
            handelPrevStep={handelPrevStep}
            errors={errorsIG}
          />
        ) : null}
        {step === "B" && formData.isEmploi === true ? (
          <StepB
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelNextStep={handelNextStep}
            handelPrevStep={handelPrevStep}
            handleSubmitFormData={handleSubmitFormData}
            errorsEmploi={errorsEmploi}
          />
        ) : null}
        {step === "C" && formData.isEducation === true ? (
          <StepC
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelNextStep={handelNextStep}
            handelPrevStep={handelPrevStep}
          />
        ) : null}
        {step === "D" && formData.isLogement === true ? (
          <StepD
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelPrevStep={handelPrevStep}
            handleSubmitFormData={handleSubmitFormData}
          />
        ) : null}
        {step === "Final" ? <StepFinal /> : null}
      </form>
    </div>
  );
};

export default SimpleMultiStepForm;
