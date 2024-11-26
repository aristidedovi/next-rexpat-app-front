import EducationBudgetCurrencyInput from "@/components/EducationBudgetCurrencyInput";
import MultiSelectEcole from "@/components/MultiSelectEcole";
import MultiSelectEducation from "@/components/MultiSelectEducation";
import MultiSelectLangue from "@/components/MultiSelectLangue";
import NextButton from "@/components/ui/NextButton";
import PrevButton from "@/components/ui/PrevButton";
//import { span } from "motion/react-client";
import React from "react";

const StepC = ({
  formData,
  handelChangeInput,
  handelNextStep,
  handelPrevStep,
  handelBlur,
  handleSubmitFormData,
  errorsEducation,
  isLoading,
}: any) => {
  const inputClassName =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
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

        {/* transport */}
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
      </div>
      <div className="my-2 flex justify-between items-center">
        <PrevButton handelPrevStep={handelPrevStep} />

        {/* // Afficher le submit buton quand emploi est à true et les autre sont à false */}
        {formData.isEducation === true &&
          formData.isLogement === false &&
          !isLoading && (
            // <button
            //   className="bg-blue-400 px-4 py-2 rounded-xl"
            //   onClick={handleSubmitFormData}
            // >
            //   Submit
            // </button>
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
