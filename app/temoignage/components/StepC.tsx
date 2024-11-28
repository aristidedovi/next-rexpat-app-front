//import EducationBudgetCurrencyInput from "@/components/EducationBudgetCurrencyInput";
//import MultiSelectEcole from "@/components/MultiSelectEcole";
//import MultiSelectEducation from "@/components/MultiSelectEducation";
//import MultiSelectLangue from "@/components/MultiSelectLangue";
import NombreEnfantInput from "@/components/NombreEnfantInput";
import NextButton from "@/components/ui/NextButton";
import PrevButton from "@/components/ui/PrevButton";
//import { div } from "motion/react-client";
//import { span } from "motion/react-client";
import React, { useState } from "react";

// Types pour les informations de chaque enfant
interface ChildEducationInfo {
  niveau: string;
  budget: number;
  typeEcole: string;
}

const StepC = ({
  formData,
  handelChangeInput,
  handelNextStep,
  handelPrevStep,
  //handelBlur,
  handleSubmitFormData,
  errorsEducation,
  isLoading,
}: any) => {
  // const inputClassName =
  //   "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  // const labelClassName =
  //   "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  // Options pour les niveaux scolaires
  const niveauxScolaires = [
    "Maternelle",
    "Primaire",
    "Collège",
    "Lycée",
    "Études supérieures",
  ];

  // Options pour les types d'écoles
  const typesEcoles = [
    "Public",
    "Privé",
    "Privé sous contrat",
    "Établissement spécialisé",
  ];
  // State pour le nombre total d'enfants
  //const [nombreEnfants, setNombreEnfants] = useState(0);

  // State pour stocker les informations de chaque enfant
  const [childrenInfo, setChildrenInfo] = useState<ChildEducationInfo[]>([]);

  // Gère le changement du nombre d'enfants
  const handleNombreEnfantsChange = (e: {
    target: { name: string; value: number };
  }) => {
    const nombre = e.target.value;
    handelChangeInput(e);

    // Mise à jour du nombre d'enfants
    //setNombreEnfants(nombre);

    // Initialisation ou réduction du tableau des informations des enfants
    const newChildrenInfo = Array(nombre)
      .fill(null)
      .map(
        (_, index) =>
          childrenInfo[index] || {
            niveau: "",
            budget: 0,
            typeEcole: "",
          }
      );

    setChildrenInfo(newChildrenInfo);
  };

  // Gère les changements pour un enfant spécifique
  const handleChildInfoChange = (
    index: number,
    field: keyof ChildEducationInfo,
    value: string | number
  ) => {
    const updatedChildrenInfo = [...childrenInfo];
    updatedChildrenInfo[index] = {
      ...updatedChildrenInfo[index],
      [field]: value,
    };
    setChildrenInfo(updatedChildrenInfo);
  };

  return (
    <div>
      <div className="grid grid-cols-[auto_1fr] items-center gap-2">
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          Nombre d'enfants scolarisés (0 - 9999) :
        </label>
        <NombreEnfantInput
          name="educationNombreEnfant"
          educationNombreEnfant={formData.educationNombreEnfant}
          errorsEducation={errorsEducation.educationNombreEnfant}
          handelChangeInput={handleNombreEnfantsChange}
        />
      </div>
      {/* <div className="grid lg:grid-cols-2 justify-end sm:grid-cols-1 gap-4">
        <div className="lg:my-0 sm:my-0">
          <label
            htmlFor=""
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre d'enfants scolarisés(0-9999) :
          </label>
        </div>
        <div className="lg:my-0 sm:my-0">
          <NombreEnfantInput
            name="educationNombreEnfant"
            educationNombreEnfant={formData.educationNombreEnfant}
            errorsEducation={errorsEducation.educationNombreEnfant}
            //handelChangeInput={handelChangeInput}
            handelChangeInput={handleNombreEnfantsChange}
          />
        </div>
      </div> */}
      {/* Formulaires dynamiques pour chaque enfant */}
      {childrenInfo.map((child, index) => (
        <div key={`child-${index}`}>
          <div className="grid lg:grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="lg:my-0 sm:my-0">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Enfant {index + 1}
              </h3>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
            <div className="lg:my-4 sm:my-2">
              <label
                htmlFor={`niveau-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Niveau scolaire
              </label>
              <select
                id={`niveau-${index}`}
                value={child.niveau}
                onChange={(e) =>
                  handleChildInfoChange(index, "niveau", e.target.value)
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Sélectionnez un niveau</option>
                {niveauxScolaires.map((niveau) => (
                  <option key={niveau} value={niveau}>
                    {niveau}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:my-4 sm:my-2">
              <label
                htmlFor={`typeEcole-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Type d'école
              </label>
              <select
                id={`typeEcole-${index}`}
                value={child.typeEcole}
                onChange={(e) =>
                  handleChildInfoChange(index, "typeEcole", e.target.value)
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Sélectionnez un type d'école</option>
                {typesEcoles.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:my-4 sm:my-2">
              <label
                htmlFor={`budget-${index}`}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Budget annuel (€)
              </label>
              <input
                type="number"
                id={`budget-${index}`}
                value={child.budget}
                onChange={(e) =>
                  handleChildInfoChange(index, "budget", Number(e.target.value))
                }
                min="0"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Résumé (optionnel) */}
      {/* {nombreEnfants > 0 && (
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Résumé
          </h3>
          <pre className="text-sm text-gray-600 dark:text-gray-300">
            {JSON.stringify(childrenInfo, null, 2)}
          </pre>
        </div>
      )} */}
      {/* <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="educationNombreEnfant" className={labelClassName}>
            Nombre d'enfants scolarises*
          </label>
          <input
            placeholder="3"
            type="number"
            name="educationNombreEnfant"
            value={
              formData.educationNombreEnfant !== null
                ? formData.educationNombreEnfant
                : ""
            }
            onChange={(e) => handelChangeInput(e)}
            onBlur={(e) => handelBlur(e)}
            id="educationNombreEnfant"
            className={`${inputClassName} ${
              errorsEducation.educationNombreEnfant &&
              !formData.educationNombreEnfant
                ? "border-red-500"
                : formData.educationNombreEnfant &&
                  errorsEducation.educationNombreEnfant !== ""
                ? "border-blue-500"
                : ""
            }`}
          />
        </div>
        <div className="lg:my-4 sm:my-2">
          <MultiSelectEducation
            educationNiveauEtude={formData.educationNiveauEtude}
            errorsEducation={errorsEducation.educationNiveauEtude}
            handelChangeInput={handelChangeInput}
            name="educationNiveauEtude"
          />
        </div>

        <div className="lg:my-4 sm:my-2">
          <label
            htmlFor="educationAvecOuSansTransport"
            className={labelClassName}
          >
            Budget scolaire par enfant*
          </label>
          {formData.educationNiveauEtude.length > 0 ? (
            formData.educationNiveauEtude.map((niveau: any) => (
              <div
                key={niveau}
                className="flex items-center space-x-2 justify-between"
              >
                <EducationBudgetCurrencyInput
                  handelChangeInput={handelChangeInput}
                  inputLabel="Education Niveau d'étude"
                  inputplaceholder={`Budget ${niveau}`}
                  inputName={`educationBudgetScolaire.${niveau}`}
                  inputId={`educationBudgetScolaire_${niveau}`}
                  inputValue={formData.educationBudgetScolaire?.[niveau]}
                  formErrors={errorsEducation.educationBudgetScolaire?.[niveau]}
                  inputDeviseValue={formData.educationBudgetScolaire[niveau]}
                  inputDeviseName={`EducationDevise_scolaire.${niveau}`}
                  inputSituationProActuelle={
                    formData.emploiSituationProActuelle
                  }
                />
              </div>
            ))
          ) : (
            <span className={labelClassName}>
              Veuillez selectionner au moins un niveau scolaire
            </span>
          )}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div className="lg:my-4 sm:my-2">
          <MultiSelectLangue
            educationTypeEcole={formData.educationLanguesEnseignes}
            errorsEducation={errorsEducation.educationLanguesEnseignes}
            handelChangeInput={handelChangeInput}
            name="educationLanguesEnseignes"
          />
        </div>
        <div className="lg:my-4 sm:my-2">
          <label
            htmlFor="emploiSituationProActuelle"
            className={labelClassName}
          >
            Ecole avec ou sans uniforme*
          </label>
          <select
            id="educationAvecOuSansUniforme"
            className={`${inputClassName} ${
              errorsEducation.educationAvecOuSansUniforme &&
              !formData.educationAvecOuSansUniforme
                ? "border-red-500"
                : formData.educationAvecOuSansUniforme &&
                  errorsEducation.educationAvecOuSansTransport !== ""
                ? "border-blue-500"
                : ""
            }`}
            name="educationAvecOuSansUniforme"
            value={formData.educationAvecOuSansUniforme}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Avec">Avec</option>
            <option value="Sans">Sans</option>
          </select>
        </div>

        <div className="lg:my-4 sm:my-2">
          <label
            htmlFor="educationAvecOuSansTransport"
            className={labelClassName}
          >
            Ecole avec ou sans transport*
          </label>
          <select
            id="educationAvecOuSansTransport"
            className={`${inputClassName} ${
              errorsEducation.educationAvecOuSansTransport &&
              !formData.educationAvecOuSansTransport
                ? "border-red-500"
                : formData.educationAvecOuSansTransport &&
                  errorsEducation.educationAvecOuSansTransport !== ""
                ? "border-blue-500"
                : ""
            }`}
            name="educationAvecOuSansTransport"
            value={formData.educationAvecOuSansTransport}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Avec">Avec</option>
            <option value="Sans">Sans</option>
          </select>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div className="lg:my-4 sm:my-2">
          <MultiSelectEcole
            educationTypeEcole={formData.educationTypeEcole}
            errorsEducation={errorsEducation.educationTypeEcole}
            handelChangeInput={handelChangeInput}
            name="educationTypeEcole"
          />
        </div>
      </div> */}
      <div className="my-2 flex justify-between items-center">
        <PrevButton handelPrevStep={handelPrevStep} />

        {/* // Afficher le submit buton quand emploi est à true et les autre sont à false */}
        {formData.isEducation === true &&
          formData.isLogement === false &&
          !isLoading && (
            <button
              type="button"
              disabled={isLoading}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSubmitFormData}
            >
              {isLoading ? "En cours..." : "Soumettre"}
            </button>
          )}

        {/* Show loader */}
        {isLoading && (
          <div className="flex justify-center items-center mt-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-indigo-500 border-solid"></div>
          </div>
        )}

        {/* // Ne pas afficher le button si education et logement sont à true */}
        {formData.isLogement === true && (
          <NextButton handelNextStep={handelNextStep} />
        )}
      </div>
    </div>
  );
};

export default StepC;
