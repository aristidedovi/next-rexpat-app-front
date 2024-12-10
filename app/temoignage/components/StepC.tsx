import EducationBudgetCurrencyInput from "@/components/temoignages/ui/EducationBudgetCurrencyInput";
import EducationTypeEcoleSelect from "@/components/temoignages/ui/EducationTypeEcoleSelect";
import NombreEnfantInput from "@/components/temoignages/ui/NombreEnfantInput";
import NextButton from "@/components/temoignages/button/NextButton";
import PrevButton from "@/components/temoignages/button/PrevButton";
import SubmitButton from "@/components/temoignages/button/SubmitButton";
import React, { useEffect, useState } from "react";
import { ChildEducationInfo } from "@/libs/temoignage/validateFormEducation";

const StepC = ({
  formData,
  handelChangeInput,
  handelNextStep,
  handelPrevStep,
  handleSubmitFormData,
  errorsEducation,
  isLoading,
}: any) => {
  const inputClassName =
    "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-colors duration-200";
  //"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  // Options pour les niveaux scolaires
  const niveauxScolaires = [
    "Crèche",
    "Préscolaire",
    "Primaire",
    "Secondaire",
    "Lycée",
    "Université",
  ];

  // State initialization with default or existing data
  const [nombreEnfants, setNombreEnfants] = useState(
    () => formData.educationNombreEnfant || 0
  );

  const [childrenInfo, setChildrenInfo] = useState<ChildEducationInfo[]>(() => {
    // Use existing data or create empty array
    const existingChildren = formData.educationEnfant || [];
    return existingChildren.length > 0
      ? existingChildren
      : Array(nombreEnfants)
          .fill(null)
          .map(() => ({
            niveau: "",
            budget: "",
            typeEcole: "",
            uniforme: "",
            transport: "",
            satisfaction: "",
            devise: "USD",
            internat: "",
          }));
  });

  // Synchronize child info with form data whenever it changes
  useEffect(() => {
    // Update form data when child info changes
    handelChangeInput({
      target: {
        name: "educationEnfant",
        value: childrenInfo,
      },
    });
  }, [childrenInfo]);

  // Handle number of children change
  const handleNombreEnfantsChange = (e: {
    target: { name: string; value: number };
  }) => {
    const nombre = Number(e.target.value);

    // Update number of children in form data
    handelChangeInput(e);
    console.log(errorsEducation);

    // Update local state
    setNombreEnfants(nombre);

    // Preserve existing child data or create new entries
    const newChildrenInfo = Array(nombre)
      .fill(null)
      .map(
        (_, index) =>
          childrenInfo[index] || {
            niveau: "",
            budget: 0,
            typeEcole: "",
            uniforme: "",
            transport: "",
            satisfaction: "",
            devise: "USD",
          }
      );

    setChildrenInfo(newChildrenInfo);
  };

  // Handle individual child info change
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
      <div className="grid grid-cols-[auto_1fr] mb-4 items-center gap-2">
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
      <div className="space-y-6">
        {childrenInfo.map((child, index) => (
          <div
            key={`child-${index}`}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              Informations de l'enfant {index + 1}
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Niveau scolaire */}
              <div>
                <label
                  htmlFor={`niveau-${index}`}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Niveau scolaire*
                </label>
                <select
                  id={`niveau-${index}`}
                  value={child.niveau}
                  onChange={(e) =>
                    handleChildInfoChange(index, "niveau", e.target.value)
                  }
                  className={`${inputClassName} ${
                    errorsEducation.educationEnfantErrors &&
                    errorsEducation.educationEnfantErrors[index] &&
                    errorsEducation.educationEnfantErrors[index].niveau &&
                    !child.niveau
                      ? "border-red-500"
                      : child.niveau &&
                        errorsEducation.educationEnfantErrors &&
                        errorsEducation.educationEnfantErrors[index] &&
                        errorsEducation.educationEnfantErrors[index].niveau !==
                          ""
                      ? "border-blue-500"
                      : ""
                  }`}
                >
                  <option value="">Sélectionnez un niveau</option>
                  {niveauxScolaires.map((niveau) => (
                    <option key={niveau} value={niveau}>
                      {niveau}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type d'école */}
              <div>
                <EducationTypeEcoleSelect
                  index={index}
                  typeEcole={child.typeEcole}
                  handleChildInfoChange={handleChildInfoChange}
                  errorsEducation={errorsEducation}
                />
              </div>

              {/* Budget annuel */}
              <div>
                <label
                  htmlFor={`budget-${index}`}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Budget annuel
                </label>
                <EducationBudgetCurrencyInput
                  handelChangeInput={(e: any) => {
                    const value = e.target.value.trim();
                    const numericValue = Number(value);

                    // If input is not a valid number, set budget to 0
                    const budgetValue = isNaN(numericValue) ? "" : numericValue;

                    handleChildInfoChange(index, "budget", budgetValue);
                  }}
                  handelSelectInput={(e: any) =>
                    handleChildInfoChange(
                      index,
                      "devise",
                      String(e.target.value)
                    )
                  }
                  inputplaceholder="Ex: 8000"
                  inputValue={child.budget}
                  inputDeviseValue={child.devise}
                />
              </div>
            </div>
            {/* {educationAvecOuSansUniforme, educationAvecOuSansTransport , educationNiveauSatisfaction} */}
            <div className="grid md:grid-cols-3 mt-4 gap-4">
              <div>
                <label htmlFor={`uniforme-${index}`} className={labelClassName}>
                  Ecole avec ou sans uniforme*
                </label>
                <select
                  id={`uniforme-${index}`}
                  className={`${inputClassName} ${
                    errorsEducation.educationEnfantErrors &&
                    errorsEducation.educationEnfantErrors[index] &&
                    errorsEducation.educationEnfantErrors[index].uniforme &&
                    !child.uniforme
                      ? "border-red-500"
                      : child.uniforme &&
                        errorsEducation.educationEnfantErrors &&
                        errorsEducation.educationEnfantErrors[index] &&
                        errorsEducation.educationEnfantErrors[index]
                          .uniforme !== ""
                      ? "border-blue-500"
                      : ""
                  }`}
                  value={child.uniforme}
                  onChange={(e) =>
                    handleChildInfoChange(index, "uniforme", e.target.value)
                  }
                >
                  <option value="">Sélectionnez</option>
                  <option value="Avec">Avec</option>
                  <option value="Sans">Sans</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor={`transport-${index}`}
                  className={labelClassName}
                >
                  Ecole avec ou sans transport*
                </label>
                <select
                  id={`transport-${index}`}
                  className={`${inputClassName} ${
                    errorsEducation.educationEnfantErrors &&
                    errorsEducation.educationEnfantErrors[index] &&
                    errorsEducation.educationEnfantErrors[index].transport &&
                    !child.transport
                      ? "border-red-500"
                      : child.transport &&
                        errorsEducation.educationEnfantErrors &&
                        errorsEducation.educationEnfantErrors[index] &&
                        errorsEducation.educationEnfantErrors[index]
                          .transport !== ""
                      ? "border-blue-500"
                      : ""
                  }`}
                  value={child.transport}
                  onChange={(e) =>
                    handleChildInfoChange(index, "transport", e.target.value)
                  }
                >
                  <option value="">Sélectionnez</option>
                  <option value="Avec">Avec</option>
                  <option value="Sans">Sans</option>
                </select>
              </div>
              <div>
                <label htmlFor={`internat-${index}`} className={labelClassName}>
                  Internat*
                </label>
                <select
                  id={`internat-${index}`}
                  className={`${inputClassName} ${
                    errorsEducation.educationEnfantErrors &&
                    errorsEducation.educationEnfantErrors[index] &&
                    errorsEducation.educationEnfantErrors[index].internat &&
                    !child.internat
                      ? "border-red-500"
                      : child.internat &&
                        errorsEducation.educationEnfantErrors &&
                        errorsEducation.educationEnfantErrors[index] &&
                        errorsEducation.educationEnfantErrors[index]
                          .internat !== ""
                      ? "border-blue-500"
                      : ""
                  }`}
                  value={child.internat}
                  onChange={(e) =>
                    handleChildInfoChange(index, "internat", e.target.value)
                  }
                >
                  <option value="">Sélectionnez</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-2 flex justify-between items-center">
        <PrevButton handelPrevStep={handelPrevStep} />

        {/* // Afficher le submit buton quand emploi est à true et les autre sont à false */}
        {formData.isEducation === true &&
          formData.isLogement === false &&
          !isLoading && (
            <SubmitButton
              isLoading={isLoading}
              handleSubmitFormData={handleSubmitFormData}
            />
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
