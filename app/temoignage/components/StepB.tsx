import CurrencyInput from "@/components/CurrencyInput";
import SecteurActivites from "@/components/SecteurActivites";
import NextButton from "@/components/ui/NextButton";
import PrevButton from "@/components/ui/PrevButton";
import React from "react";

const StepB = ({
  formData,
  handelChangeInput,
  handelNextStep,
  handelPrevStep,
  handleSubmitFormData,
  errorsEmploi,
  isLoading,
}: any) => {
  const inputClassName =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  return (
    <div>
      {/* <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step B: Information sur l'emploi
      </h1> */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div
          className="lg:my-4 sm:my-2"
          // className={`lg:my-4 sm:my-2 ${
          //   formData.emploiSituationProActuelle !== "" ? "hidden" : ""
          // }`}
        >
          <label htmlFor="emploiEmail" className={labelClassName}>
            Adresse email
          </label>
          <input
            placeholder="Ex: nom@gmail.com"
            type="text"
            name="emploiEmail"
            value={formData.emploiEmail}
            onChange={(e) => handelChangeInput(e)}
            id="emploiEmail"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   errorsEmploi.emploiSecteur ? "border-red-500" : ""
            // }`}
          />
        </div>
        <div className="lg:my-4 sm:my-2">
          <label
            htmlFor="emploiSituationProActuelle"
            className={labelClassName}
          >
            Situation professionnele actuelle*
          </label>
          <select
            id="emploiSituationProActuelle"
            //className={inputClassName}
            // className={`${inputClassName} ${
            //   errorsEmploi.emploiSituationProActuelle ? "border-red-500" : ""
            // }`}

            className={`${inputClassName} ${
              errorsEmploi.emploiSituationProActuelle &&
              !formData.emploiSituationProActuelle
                ? "border-red-500"
                : formData.emploiSituationProActuelle &&
                  errorsEmploi.emploiSituationProActuelle !== ""
                ? "border-blue-500"
                : ""
            }`}
            name="emploiSituationProActuelle"
            value={formData.emploiSituationProActuelle}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Chômeur">Chômeur / chômeuse</option>
            <option value="Entrepruneur">Entrepreuneur / entrepreneuse</option>
            <option value="Salarie">Salarié(e)</option>
            <option value="Etudiant">Etudiant(e)</option>
          </select>
        </div>

        <div className="lg:my-4 sm:my-2">
          <label htmlFor="emploiSecteur" className={labelClassName}>
            Secteur d'activité*
          </label>
          <SecteurActivites
            inputName="emploiSecteur"
            inputValue={formData.emploiSecteur}
            inputId="emploiSecteur"
            errors={errorsEmploi.emploiSecteur}
            handelChangeInput={handelChangeInput}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div
          className="lg:my-4 sm:my-2"
          // className={`lg:my-4 sm:my-2 ${
          //   formData.emploiSituationProActuelle === "Chômeur" ? "hidden" : ""
          // }`}
        >
          <label htmlFor="emploiEmployeur" className={labelClassName}>
            Employeur actuel
          </label>
          <input
            placeholder="Ex: Sonatel"
            type="text"
            name="emploiEmployeur"
            value={formData.emploiEmployeur}
            onChange={(e) => handelChangeInput(e)}
            id="emploiEmployeur"
            className={inputClassName}
            disabled={formData.emploiSituationProActuelle === "Chômeur"}
          />
        </div>
        <div
          className="lg:my-4 sm:my-2"
          // className={`lg:my-4 sm:my-2 ${
          //   formData.emploiSituationProActuelle === "Chômeur" ? "hidden" : ""
          // }`}
        >
          <label htmlFor="emploiTypeContrat" className={labelClassName}>
            Type de contrat{" "}
            {formData.emploiSituationProActuelle === "Chômeur" ? "" : "*"}
          </label>
          <select
            id="emploiTypeContrat"
            //className={inputClassName}
            // className={`${inputClassName} ${
            //   errorsEmploi.emploiTypeContrat ? "border-red-500" : ""
            // }`}
            className={`${inputClassName} ${
              errorsEmploi.emploiTypeContrat &&
              !formData.emploiTypeContrat &&
              formData.emploiSituationProActuelle !== "Chômeur"
                ? "border-red-500"
                : formData.emploiTypeContrat &&
                  errorsEmploi.emploiTypeContrat !== ""
                ? "border-blue-500"
                : ""
            }`}
            disabled={formData.emploiSituationProActuelle === "Chômeur"}
            name="emploiTypeContrat"
            value={formData.emploiTypeContrat}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Stage">Stage</option>
            <option value="Freelance">Freelance</option>
            <option value="Consultance">Consultance</option>
            <option value="CDD">CDD</option>
            <option value="CDI">CDI</option>
          </select>
        </div>
        <div className="lg:my-4 sm:my-2">
          <CurrencyInput
            handelChangeInput={handelChangeInput}
            inputLabel="Revenu mensuel"
            inputName="emploiRevenu_mensuel"
            inputId="emploiRevenu_mensuel"
            inputValue={formData.emploiRevenu_mensuel}
            formErrors={errorsEmploi.emploiRevenu_mensuel}
            inputDeviseValue={formData.emploiDevise_revenu}
            inputDeviseName="emploiDevise_revenu"
            inputSituationProActuelle={formData.emploiSituationProActuelle}
          />
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4"> */}
      {/* <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          How much do you expect to use each month?
        </h3> */}

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="emploiCanaux" className={labelClassName}>
            Comment avez-vous trouvé votre dernier emploi?
          </label>
          <select
            id="emploiCanaux"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   formData.emploiSituationProActuelle === "Chômeur"
            //     ? "border-black"
            //     : ""
            // }`}
            // disabled={formData.emploiSituationProActuelle === "Chômeur"}
            name="emploiCanaux"
            value={formData.emploiCanaux}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Site web">Site web</option>
            <option value="Reseaux Sociaux">Reseaux sociaux</option>
            <option value="Recommandation">Recommandation</option>
            <option value="Autres">Autres</option>
          </select>
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="emploiAvantApres" className={labelClassName}>
            Avez vous trouvé un emploi avant ou après votre arriver ?
          </label>
          <select
            id="emploiAvantApres"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   formData.emploiSituationProActuelle === "Chômeur"
            //     ? "border-black"
            //     : ""
            // }`}
            // disabled={formData.emploiSituationProActuelle === "Chômeur"}
            name="emploiAvantApres"
            value={formData.emploiAvantApres}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="">Sélectionnez</option>
            <option value="avant">Avant</option>
            <option value="après">Après</option>
          </select>
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="emploiDelai" className={labelClassName}>
            Sur quel délai avez vous trouvé un emploi &nbsp; (mois)
          </label>
          <select
            id="emploiDelai"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   formData.emploiSituationProActuelle === "Chômeur"
            //     ? "border-black"
            //     : ""
            // }`}
            // disabled={formData.emploiSituationProActuelle === "Chômeur"}
            name="emploiDelai"
            value={formData.emploiDelai}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="">Sélectionnez</option>
            <option value="-3">moins 3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        {/* <div className="lg:my-4 sm:my-2">
          <label className={`${labelClassName}`}>
            Niveau de difficulté pour trouver un emploi
          </label>
          <div className=" grid lg:grid-cols-1">
            <ul className="items-center h-10 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="emploiNiveauDifficulte-facile"
                    type="radio"
                    name="emploiNiveauDifficulte"
                    value="Facile"
                    checked={formData.emploiNiveauDifficulte === "Facile"}
                    onChange={(e) => handelChangeInput(e)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="emploiNiveauDifficulte-facile"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Facile
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="emploiNiveauDifficulte-moyen"
                    type="radio"
                    name="emploiNiveauDifficulte"
                    value="Moyen"
                    checked={formData.emploiNiveauDifficulte === "Moyen"}
                    onChange={(e) => handelChangeInput(e)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="emploiNiveauDifficulte-moyen"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Moyen
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    id="emploiNiveauDifficulte-difficile"
                    type="radio"
                    name="emploiNiveauDifficulte"
                    value="Difficile"
                    checked={formData.emploiNiveauDifficulte === "Difficile"}
                    onChange={(e) => handelChangeInput(e)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="emploiNiveauDifficulte-difficile"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Difficile
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div> */}
      </div>

      <div className="my-2 flex justify-between items-center">
        <PrevButton handelPrevStep={handelPrevStep} />

        {/* // Afficher le submit buton quand emploi est à true et les autre sont à false */}
        {formData.isEmploi === true &&
          formData.isEducation === false &&
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
        {formData.isEducation === false ||
          (formData.isLogement === false && (
            <NextButton handelNextStep={handelNextStep} />
          ))}
      </div>
    </div>
  );
};

export default StepB;
