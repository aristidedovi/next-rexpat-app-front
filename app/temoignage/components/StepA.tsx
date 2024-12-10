import CountrySelect from "@/components/temoignages/ui/CountrySelect";
import NextButton from "@/components/temoignages/button/NextButton";
import PrevButton from "@/components/temoignages/button/PrevButton";
import React, { useEffect, useState } from "react";
import { InformationGeneral } from "@/libs/temoignage/validationFormIg";

const StepA = ({
  formData,
  handelChangeInput,
  handelNextStep,
  handelPrevStep,
  errors,
}: any) => {
  const inputClassName =
    "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  const [informationGeneral, setInformationGeneral] =
    useState<InformationGeneral>(() => formData.informationGeneral || 0);

  // // Synchronize child info with form data whenever it changes
  useEffect(() => {
    // Update form data when child info changes
    handelChangeInput({
      target: {
        name: "informationGeneral",
        value: informationGeneral,
      },
    });
  }, [informationGeneral]);

  const handleChildInfoChange = (
    field: keyof InformationGeneral,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInformationGeneral((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

    //handelChangeInput(e);
  };

  const handelBlur = (e: any): void => {
    const { name } = e.target;
    let fieldValue: string | boolean;

    fieldValue = e.target.value;

    // Vérifie si la valeur est inférieure à 16 et la corrige
    if (name === "age" && Number(fieldValue) < 16) {
      //console.log("moins de 16 ans");
      fieldValue = ""; // Fixe la valeur minimale si elle est en dessous
    }

    // Vérifie si la valeur est inférieure à 0 et la corrige
    if (name === "nombre_enfants" && Number(fieldValue) < 0) {
      fieldValue = "";
    }

    setInformationGeneral((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        {/* // Votre pays */}
        <div className="lg:my-4 sm:my-2">
          <CountrySelect
            handelChangeInput={handleChildInfoChange}
            inputLabel="Nationalité"
            inputName="nationalite"
            inputId="countries"
            inputValue={informationGeneral.nationalite}
            formErrors={errors.nationalite}
          />
        </div>

        {/* // Genre */}
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="genre" className={labelClassName}>
            Genre*
          </label>
          <select
            id="genre"
            className={`${inputClassName} ${
              errors.genre && !informationGeneral.genre
                ? "border-red-500"
                : informationGeneral.genre && errors.genre !== ""
                ? "border-blue-500"
                : ""
            }`}
            name="genre"
            value={informationGeneral.genre}
            onChange={(e: any) => handleChildInfoChange("genre", e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
          </select>
          {/* {errors.genre && (
            <p className="mt-2 text-pink-600 text-sm">{errors.genre}</p>
          )} */}
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="age" className={labelClassName}>
            Age (ans)*
          </label>
          <input
            placeholder=">= 16"
            type="number"
            min="16"
            name="age"
            //value={formData.age}
            value={
              informationGeneral.age !== null ? informationGeneral.age : ""
            }
            onChange={(e: any) => handleChildInfoChange("age", e)}
            onBlur={(e) => handelBlur(e)}
            id="age"
            className={`${inputClassName} ${
              errors.age && !informationGeneral.age
                ? "border-red-500"
                : informationGeneral.age && errors.age !== ""
                ? "border-blue-500"
                : ""
            }`}
          />
        </div>
      </div>

      {/* // age / région / quatier */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1  gap-4">
        {/* // Situation matrimoniale */}
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="situation_matrimoniale" className={labelClassName}>
            Situation matrimoniale*
          </label>
          <select
            id="situation_matrimoniale"
            className={`${inputClassName} ${
              errors.situation_matrimoniale &&
              !informationGeneral.situation_matrimoniale
                ? "border-red-500"
                : informationGeneral.situation_matrimoniale &&
                  errors.situation_matrimoniale !== ""
                ? "border-blue-500"
                : ""
            }`}
            name="situation_matrimoniale"
            value={formData.situation_matrimoniale}
            onChange={(e: any) =>
              handleChildInfoChange("situation_matrimoniale", e)
            }
          >
            <option value="">Sélectionnez</option>
            <option value="Célibataire">Célibataire</option>
            <option value="Marié">Marié(e)</option>
            <option value="Divorcé">Divorcé(e)</option>
            <option value="Veuve">Veuve / Veuf</option>
          </select>
        </div>

        <div className="lg:my-4 sm:my-2">
          <label htmlFor="nombre_enfants" className={labelClassName}>
            Nombre d'enfants*
          </label>
          <input
            placeholder="3"
            type="number"
            name="nombre_enfants"
            value={
              informationGeneral.nombre_enfants !== null
                ? informationGeneral.nombre_enfants
                : ""
            }
            onChange={(e: any) => handleChildInfoChange("nombre_enfants", e)}
            onBlur={(e) => handelBlur(e)}
            className={`${inputClassName} ${
              errors.nombre_enfants && !informationGeneral.nombre_enfants
                ? "border-red-500"
                : informationGeneral.nombre_enfants &&
                  errors.nombre_enfants !== ""
                ? "border-blue-500"
                : ""
            }`}
          />
        </div>
      </div>
      {/* // Pays de provenance  */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1  gap-4">
        <div className="lg:my-4 sm:my-2">
          <CountrySelect
            handelChangeInput={handleChildInfoChange}
            inputLabel="Pays de provenance"
            inputName="pays_provenance"
            inputId="pays_provenance"
            inputValue={informationGeneral.pays_provenance}
            formErrors={errors.pays_provenance}
          />
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="duree_pays_provenance" className={labelClassName}>
            Durée pays de provenance (ans)*
          </label>
          <select
            name="duree_pays_provenance"
            value={informationGeneral.duree_pays_provenance}
            onChange={(e: any) =>
              handleChildInfoChange("duree_pays_provenance", e)
            }
            id="duree_pays_provenance"
            className={`${inputClassName} ${
              errors.duree_pays_provenance &&
              !informationGeneral.duree_pays_provenance
                ? "border-red-500"
                : informationGeneral.duree_pays_provenance &&
                  errors.duree_pays_provenance !== ""
                ? "border-blue-500"
                : ""
            }`}
          >
            <option value="">Sélectionnez</option>
            <option value="moins de 3 mois">moins de 3 mois</option>
            <option value="3 à 12 mois">3 à 12 mois</option>
            <option value="2plus de 12 mois">plus de 12 mois</option>
          </select>
        </div>
      </div>

      {/* // Pays d'accueil  */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-1  gap-4">
        <div className="lg:my-4 sm:my-2">
          <CountrySelect
            handelChangeInput={handleChildInfoChange}
            inputLabel="Pays d'accueil"
            inputName="pays_accueil"
            inputId="pays_accueil"
            inputValue={informationGeneral.pays_accueil}
            formErrors={errors.pays_accueil}
          />
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="region" className={labelClassName}>
            Région*
          </label>
          <input
            placeholder="Dakar"
            type="text"
            name="region"
            value={informationGeneral.region}
            onChange={(e) => handleChildInfoChange("region", e)}
            id="region"
            className={`${inputClassName} ${
              errors.region && !informationGeneral.region
                ? "border-red-500"
                : informationGeneral.region && errors.region !== ""
                ? "border-blue-500"
                : ""
            }`}
          />
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="quartier" className={labelClassName}>
            Quartier de résidence
          </label>
          <input
            placeholder="Sacré coeur"
            type="text"
            name="quartier"
            value={informationGeneral.quartier}
            onChange={(e) => handleChildInfoChange("quartier", e)}
            id="quartier"
            className={inputClassName}
          />
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="duree_pays_accueil" className={labelClassName}>
            Duree pays d'accueil (ans)*
          </label>
          <select
            name="duree_pays_accueil"
            value={informationGeneral.duree_pays_accueil}
            onChange={(e: any) =>
              handleChildInfoChange("duree_pays_accueil", e)
            }
            id="duree_pays_accueil"
            className={`${inputClassName} ${
              errors.duree_pays_accueil &&
              !informationGeneral.duree_pays_accueil
                ? "border-red-500"
                : informationGeneral.duree_pays_accueil &&
                  errors.duree_pays_accueil !== ""
                ? "border-blue-500"
                : ""
            }`}
          >
            <option value="">Sélectionnez</option>
            <option value="moins de 3 mois">moins de 3 mois</option>
            <option value="3 à 12 mois">3 à 12 mois</option>
            <option value="2plus de 12 mois">plus de 12 mois</option>
          </select>
        </div>
      </div>
      {/* // nombre d'enfant / revenue mensuel */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4"></div>
      <div className="lg:my-4 sm:my-2 flex justify-between items-center">
        <PrevButton handelPrevStep={handelPrevStep} />

        <NextButton handelNextStep={handelNextStep} />
      </div>
    </div>
  );
};

export default StepA;
