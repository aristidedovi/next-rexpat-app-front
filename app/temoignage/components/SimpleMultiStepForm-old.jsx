"use client";
import React, { useEffect, useState } from "react";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";
import StepFinal from "./StepFinal";
import StepFirst from "./StepFirst";

// const initialFormData = {
//   firstname: "",
//   lastname: "",
//   businessName: "",
//   businessCity: "",
//   businessWebSite: "",
//   businessEmail: "",
//   incomePerMount: 0,
//   taxPercantage: 0,
//   agreeToTerms: false,
// };

const initialFormDataRexpat = {
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
  emploiNiveauDifficulte: 0,
};

// interface FormDataType {
//   genre: string;
//   nationalite: string;
//   situation_matrimoniale: string;
//   age: number;
//   region: string;
//   quartier: string;
//   pays_provenance: string;
//   duree_pays_provenance: number;
//   pays_accueil: string;
//   duree_pays_accueil: number;
//   revenu_mensuel: number;
//   nombre_enfants: number;
//   agreeToTerms: Boolean;
//   isEmploi: Boolean;
//   isEducation: Boolean;
//   isLogement: Boolean;
//   isTransport: Boolean;
//   emploiSecteur: string;
//   emploiEmployeur: string;
//   emploiTypeContrat: string;
//   emploiCanaux: string;
//   emploiSituationProActuelle: string;
//   emploiEmail: string;
//   emploiNiveauDifficulte: number;
// }

const stepsArray = ["I", "A", "B", "C", "D"];

const stepsArrayDetails = [
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

const SimpleMultiStepForm = ({ showStepNumber }) => {
  const [step, setStep] = useState("I");
  const [formData, setFormData] = useState(initialFormDataRexpat);

  const stepConditions = {
    A: true,
    B: formData.isEmploi,
    C: formData.isEducation,
    D: formData.isLogement,
    // D: formData.isTransport,
  };

  // const [errors, setErrors] = useState({
  //   pays_accueil: "",
  //   region: "",
  //   duree_pays_accueil: "",
  // });

  const [errors, setErrors] = useState(initialFormDataRexpat);

  const validateForm = () => {
    let formErrors = {
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
    };

    //let formErrors = initialFormDataRexpat;
    let isValid = true;

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
    // if (!formData.quartier) {
    //   formErrors.quartier = "Veuillez indiquer votre quartier.";
    //   isValid = false;
    // }
    // if (!formData.duree_pays_accueil || formData.duree_pays_accueil <= 0) {
    //   formErrors.duree_pays_accueil = "Veuillez entrer une durée valide.";
    //   isValid = false;
    // }
    // if (
    //   !formData.duree_pays_provenance ||
    //   formData.duree_pays_provenance <= 0
    // ) {
    //   formErrors.duree_pays_provenance = "Veuillez entrer une durée valide.";
    //   isValid = false;
    // }
    // if (!formData.revenu_mensuel || formData.revenu_mensuel <= 0) {
    //   formErrors.revenu_mensuel = "Veuillez entrer un revenu mensuel valide.";
    //   isValid = false;
    // }
    if (!formData.revenu_mensuel) {
      formErrors.revenu_mensuel = "Veuillez entrer un revenu mensuel valide.";
      isValid = false;
    }
    if (!formData.nombre_enfants || formData.nombre_enfants <= 0) {
      formErrors.nombre_enfants = "Veuillez entrer un nombre d'enfant valide.";
      isValid = false;
    }

    setErrors(formErrors);
    //return Object.keys(formErrors).length === 0;
    return isValid;
  };

  // Méthode pour passer à l'étape suivante
  const handelNextStep = () => {
    if (step === "I") {
      // Passer à l'étape A après l'initialisation
      setStep("A");
    } else if (step === "A" && validateForm()) {
      // Si "A" est complété, passez à "B" en vérifiant les conditions

      // if (!formData.region) {
      //   console.log("Region is required");
      // }
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

  // Méthode pour revenir à l'étape précédente
  const handelPrevStep = () => {
    if (step === "D") {
      if (formData.isEducation) {
        setStep("C");
      } else if (formData.isEmploi) {
        setStep("B");
      } else if (step === "B") {
        setStep("A");
      }
    } else if (step === "C") {
      if (formData.isEmploi) {
        setStep("B");
      } else if (step === "B") {
        setStep("A");
      }
    } else if (step === "B") {
      if (step === "B") {
        setStep("A");
      }
    } else if (step === "A") {
      setStep("I");
    }
  };

  //   // We nedd a method to go to next step
  //   const handelNextStep = () => {
  //     if (step === "I") setStep("A");
  //     else if (step === "A") setStep("B");
  //     else if (step === "B") setStep("C");
  //     else if (step === "C") setStep("D");
  //   };

  //   // We nedd a method to go to prev step
  //   const handelPrevStep = () => {
  //     if (step === "D") setStep("C");
  //     else if (step === "C") setStep("B");
  //     else if (step === "B") setStep("A");
  //     else if (step === "A") setStep("I");
  //   };

  // We nedd a method to go to prev step
  const handelChangeInput = (event) => {
    const { name, value } = event.target;
    let fieldValue;

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
    //console.log(formData.genre);

    // const fieldName = event.target.name;
    // let fieldValue;
    // if (fieldName === "agreeToTerms") {
    //   fieldValue = event.target.checked;
    // } else {
    //   fieldValue = event.target.value;
    // }

    //console.log(fieldValue);

    // setFormData({
    //   ...formData,
    //   [fieldName]: fieldValue,
    // });
  };

  // We need a method to do final operation
  const handleSubmitFormData = () => {
    //console.log(formData.agreeToTerms);
    // Here You can do final validation and the Submit You form
    if (!formData.agreeToTerms) {
      alert("Error!!!!!! Ypu muste agree to Terms of Services!!!");
    } else {
      setStep("Final");
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // Section for render StepNumbers
  const renderTopStepNumbers = () => {
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
                    className={`flex items-center justify-center w-8 h-8 border  rounded-full shrink-0  ${
                      item === step
                        ? "border-blue-600 dark:border-blue-500"
                        : " border-gray-500 dark:border-gray-400"
                    }`}
                  >
                    {item}
                  </span>
                  <span>
                    <h3 className="font-medium leading-tight">
                      {stepDetail.label}
                    </h3>
                    <p className="text-sm">{stepDetail.description}</p>
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
      <form className="">
        {renderTopStepNumbers()}

        {/* // Render steps */}
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
            errors={errors}
          />
        ) : null}
        {step === "B" && formData.isEmploi === true ? (
          <StepB
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelNextStep={handelNextStep}
            handelPrevStep={handelPrevStep}
            handleSubmitFormData={handleSubmitFormData}
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
//https://www.youtube.com/watch?v=aKb05Kbgr-k&t=432s
