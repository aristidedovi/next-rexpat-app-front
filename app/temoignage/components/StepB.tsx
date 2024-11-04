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
}: any) => {
  const inputClassName =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  // const stepConditions = {
  //   A: true,
  //   B: formData.isEmploi,
  //   C: formData.isEducation,
  //   D: formData.isLogement,
  //   // D: formData.isTransport,
  // };

  return (
    <div>
      {/* <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step B: Information sur l'emploi
      </h1> */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div className="lg:my-4 sm:my-2">
          <label
            htmlFor="emploiSituationProActuelle"
            className={labelClassName}
          >
            Situation professionnele actuelle
          </label>
          <select
            id="emploiSituationProActuelle"
            //className={inputClassName}
            className={`${inputClassName} ${
              errorsEmploi.emploiSituationProActuelle ? "border-red-500" : ""
            }`}
            name="emploiSituationProActuelle"
            value={formData.emploiSituationProActuelle}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="DEFAULT">Choisir ma situation</option>
            <option value="Chômeur">Chômeur</option>
            <option value="Entrepruneur">Entrepreuneur</option>
            <option value="Salarie">Salarie</option>
            <option value="Etudiant">Etudiant</option>
          </select>
        </div>
        <div
          className={`lg:my-4 sm:my-2 ${
            formData.emploiSituationProActuelle !== "Chômeur" ? "hidden" : ""
          }`}
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
            //className={inputClassName}
            className={`${inputClassName} ${
              errorsEmploi.emploiSecteur ? "border-red-500" : ""
            }`}
          />
        </div>
        <div
          className={`lg:my-4 sm:my-2 ${
            formData.emploiSituationProActuelle === "Chômeur" ? "hidden" : ""
          }`}
        >
          <label htmlFor="emploiSecteur" className={labelClassName}>
            Secteur d-activite
          </label>
          <input
            placeholder="Ex: Communication"
            type="text"
            name="emploiSecteur"
            value={formData.emploiSecteur}
            onChange={(e) => handelChangeInput(e)}
            id="emploiSecteur"
            //className={inputClassName}
            className={`${inputClassName} ${
              errorsEmploi.emploiSecteur ? "border-red-500" : ""
            }`}
            disabled={formData.emploiSituationProActuelle === "Chômeur"}
          />
        </div>

        <div
          className={`lg:my-4 sm:my-2 ${
            formData.emploiSituationProActuelle === "Chômeur" ? "hidden" : ""
          }`}
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
            //className={inputClassName}
            className={`${inputClassName} ${
              formData.emploiSituationProActuelle === "Chômeur"
                ? "border-black"
                : ""
            }`}
            disabled={formData.emploiSituationProActuelle === "Chômeur"}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        <div
          className={`lg:my-4 sm:my-2 ${
            formData.emploiSituationProActuelle === "Chômeur" ? "hidden" : ""
          }`}
        >
          <label htmlFor="emploiTypeContrat" className={labelClassName}>
            Type de contrat
          </label>
          <select
            id="emploiTypeContrat"
            //className={inputClassName}
            className={`${inputClassName} ${
              errorsEmploi.emploiTypeContrat ? "border-red-500" : ""
            }`}
            disabled={formData.emploiSituationProActuelle === "Chômeur"}
            name="emploiTypeContrat"
            value={formData.emploiTypeContrat}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="DEFAULT">Choisir son type</option>
            <option value="Stage">Stage</option>
            <option value="Freelance">Freelance</option>
            <option value="Consultance">Consultance</option>
            <option value="CDD">CDD</option>
            <option value="CDI">CDI</option>
          </select>
        </div>
        <div
          className={`lg:my-4 sm:my-2 ${
            formData.emploiSituationProActuelle === "Chômeur" ? "hidden" : ""
          }`}
        >
          <label htmlFor="emploiCanaux" className={labelClassName}>
            Canal utilisé
          </label>
          <select
            id="emploiCanaux"
            //className={inputClassName}
            className={`${inputClassName} ${
              formData.emploiSituationProActuelle === "Chômeur"
                ? "border-black"
                : ""
            }`}
            disabled={formData.emploiSituationProActuelle === "Chômeur"}
            name="emploiCanaux"
            value={formData.emploiCanaux}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="DEFAULT">Choisir un canal</option>
            <option value="Site web">Site web</option>
            <option value="Reseaux Sociaux">Reseaux sociaux</option>
            <option value="Recommandation">Recommandation</option>
            <option value="Autres">Autres</option>
          </select>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4"> */}
      {/* <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          How much do you expect to use each month?
        </h3> */}

      <label className={`${labelClassName} my-4`}>
        Niveau de difficulté pour trouver un emploi
      </label>
      <div className=" grid lg:grid-cols-2">
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
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
                htmlFor="horizontal-list-radio-id"
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

      {/* </div> */}

      {/* <div className="grid lg:grid-cols-2 sm:grid-cols-1 mb-8 gap-4">
        <div className="relative mb-8 lg:my-4 sm:my-2">
          <label
            htmlFor="labels-range-input-emploiNiveauDifficulte"
            className="sr-only"
          >
            Labels range
          </label>
          <div className="flex items-center space-x-4">
            <input
              id="labels-range-input-emploiNiveauDifficulte"
              type="range"
              name="emploiNiveauDifficulte"
              value={formData.emploiNiveauDifficulte}
              onChange={(e) => handelChangeInput(e)}
              min="0"
              max="10"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${
                  formData.emploiNiveauDifficulte * 10
                }%, #e5e7eb ${formData.emploiNiveauDifficulte * 10}%)`,
              }}
            />
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              {formData.emploiNiveauDifficulte}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
              Facile (0)
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
              Moyen (5)
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
              Difficile (10)
            </span>
          </div>
        </div>
      </div> */}

      {/* <div className="my-2">
        <label htmlFor="">Business Name</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={(e) => handelChangeInput(e)}
          className="w-full outline-none border-gray-400 px-2 rounded-lg focus:border-blue-600"
        />
      </div>
      <div className="my-2">
        <label htmlFor="">Business City</label>
        <input
          type="text"
          name="businessCity"
          value={formData.businessCity}
          onChange={(e) => handelChangeInput(e)}
          className="w-full outline-none border-gray-400 px-2 rounded-lg focus:border-blue-600"
        />
      </div>
      <div className="my-2">
        <label htmlFor="">Business Web Site</label>
        <input
          type="text"
          name="businessWebSite"
          value={formData.businessWebSite}
          onChange={(e) => handelChangeInput(e)}
          className="w-full outline-none border-gray-400 px-2 rounded-lg focus:border-blue-600"
        />
      </div>

      <div className="my-2">
        <label htmlFor="">Business Email</label>
        <input
          type="email"
          name="businessEmail"
          value={formData.businessEmail}
          onChange={(e) => handelChangeInput(e)}
          className="w-full outline-none border-gray-400 px-2 rounded-lg focus:border-blue-600"
        />
      </div> */}

      <div className="my-2 flex justify-between items-center">
        {/* <button
          className="bg-yellow-400 px-4 py-2 rounded-xl"
          onClick={handelPrevStep}
        >
          Prev
        </button> */}
        <PrevButton handelPrevStep={handelPrevStep} />

        {/* // Afficher le submit buton quand emploi est à true et les autre sont à false */}
        {formData.isEmploi === true &&
          formData.isEducation === false &&
          formData.isLogement === false && (
            // <button
            //   className="bg-blue-400 px-4 py-2 rounded-xl"
            //   onClick={handleSubmitFormData}
            // >
            //   Submit
            // </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSubmitFormData}
            >
              Soumettre
            </button>
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
