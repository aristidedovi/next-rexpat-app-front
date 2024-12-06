import CountrySelect from "@/components/temoignages/ui/CountrySelect";
// import CurrencyInput from "@/components/CurrencyInput";
import NextButton from "@/components/temoignages/button/NextButton";
import PrevButton from "@/components/temoignages/button/PrevButton";
import React from "react";

const StepA = ({
  formData,
  handelChangeInput,
  handelNextStep,
  handelPrevStep,
  errors,
  handelBlur,
}: any) => {
  const inputClassName =
    "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  // const isRegionRequired = (region: string) => {
  //   if (region.length === 0) return true;
  //   // other checks here
  //   return false;
  // };

  return (
    <div>
      {/* <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step A: Information générale
      </h1> */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
        {/* // Votre pays */}
        <div className="lg:my-4 sm:my-2">
          <CountrySelect
            handelChangeInput={handelChangeInput}
            inputLabel="Nationalité"
            inputName="nationalite"
            inputId="countries"
            inputValue={formData.nationalite}
            formErrors={errors.nationalite}
          />
          {/* {errors.nationalite && (
            <p className="mt-2 text-pink-600 text-sm">{errors.nationalite}</p>
          )} */}
        </div>

        {/* // Genre */}
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="genre" className={labelClassName}>
            Genre*
          </label>
          <select
            id="genre"
            className={`${inputClassName} ${
              errors.genre && !formData.genre
                ? "border-red-500"
                : formData.genre && errors.genre !== ""
                ? "border-blue-500"
                : ""
            }`}
            name="genre"
            value={formData.genre}
            onChange={(e) => handelChangeInput(e)}
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
            value={formData.age !== null ? formData.age : ""}
            onChange={(e) => handelChangeInput(e)}
            onBlur={(e) => handelBlur(e)}
            id="age"
            // className={`${inputClassName} ${
            //   errors.age ? "border-red-500" : ""
            // }`}
            className={`${inputClassName} ${
              errors.age && !formData.age
                ? "border-red-500"
                : formData.age && errors.age !== ""
                ? "border-blue-500"
                : ""
            }`}
          />
          {/* {errors.age && (
            <p className="mt-2 text-pink-600 text-sm">{errors.age}</p>
          )} */}
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
            // className={`${inputClassName} ${
            //   errors.situation_matrimoniale ? "border-red-500" : ""
            // }`}
            className={`${inputClassName} ${
              errors.situation_matrimoniale && !formData.situation_matrimoniale
                ? "border-red-500"
                : formData.situation_matrimoniale &&
                  errors.situation_matrimoniale !== ""
                ? "border-blue-500"
                : ""
            }`}
            name="situation_matrimoniale"
            value={formData.situation_matrimoniale}
            onChange={(e) => handelChangeInput(e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Célibataire">Célibataire</option>
            <option value="Marié">Marié(e)</option>
            <option value="Divorcé">Divorcé(e)</option>
            <option value="Veuve">Veuve / Veuf</option>
          </select>
          {/* {errors.situation_matrimoniale && (
            <p className="mt-2 text-pink-600 text-sm">
              {errors.situation_matrimoniale}
            </p>
          )} */}
        </div>

        <div className="lg:my-4 sm:my-2">
          <label htmlFor="nombre_enfants" className={labelClassName}>
            Nombre d'enfants*
          </label>
          <input
            placeholder="3"
            type="number"
            name="nombre_enfants"
            //value={formData.nombre_enfants}
            value={
              formData.nombre_enfants !== null ? formData.nombre_enfants : ""
            }
            onChange={(e) => handelChangeInput(e)}
            onBlur={(e) => handelBlur(e)}
            // id="nombre_enfants"
            // className={`${inputClassName} ${
            //   errors.nombre_enfants ? "border-red-500" : ""
            // }`}
            className={`${inputClassName} ${
              errors.nombre_enfants && !formData.nombre_enfants
                ? "border-red-500"
                : formData.nombre_enfants && errors.nombre_enfants !== ""
                ? "border-blue-500"
                : ""
            }`}
          />
          {/* {errors.nombre_enfants && (
            <p className="mt-2 text-pink-600 text-sm">
              {errors.nombre_enfants}
            </p>
          )} */}
        </div>
        {/* <div className="lg:my-4 sm:my-2">
          <CurrencyInput
            handelChangeInput={handelChangeInput}
            inputLabel="Revenu mensuel"
            inputName="revenu_mensuel"
            inputId="revenu_mensuel"
            inputValue={formData.revenu_mensuel}
            formErrors={errors.revenu_mensuel}
            inputDeviseValue={formData.devise_revenu}
            inputDeviseName="devise_revenu"
          />
        </div> */}
        {/* <div className="lg:my-4 sm:my-2">
          <label htmlFor="revenu_mensuel" className={labelClassName}>
            Revenu mensuel (FCFA)*
          </label>
          <select
            name="revenu_mensuel"
            value={formData.revenu_mensuel}
            onChange={(e) => handelChangeInput(e)}
            id="revenu_mensuel"
            className={`${inputClassName} ${
              errors.revenu_mensuel ? "border-red-500" : ""
            }`}
          >
            <option>Choisir son revenu mensuel</option>
            <option value="0 - 100 000">0 - 100 000</option>
            <option value="100 000 - 250 000">100 000 - 250 000</option>
            <option value="250 000 - 500 000">250 000 - 500 000</option>
            <option value="500 000 - 750 000">500 000 - 750 000</option>
            <option value="750 000 - 1 000 000">750 000 - 1 000 000</option>
          </select>
        </div> */}
      </div>
      {/* // Pays de provenance  */}
      <div className="grid lg:grid-cols-2 sm:grid-cols-1  gap-4">
        <div className="lg:my-4 sm:my-2">
          <CountrySelect
            handelChangeInput={handelChangeInput}
            inputLabel="Pays de provenance"
            inputName="pays_provenance"
            inputId="pays_provenance"
            inputValue={formData.pays_provenance}
            formErrors={errors.pays_provenance}
          />
          {/* {errors.pays_provenance && (
            <p className="mt-2 text-pink-600 text-sm">
              {errors.pays_provenance}
            </p>
          )} */}
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="duree_pays_provenance" className={labelClassName}>
            Durée pays de provenance (ans)*
          </label>
          <select
            name="duree_pays_provenance"
            value={formData.duree_pays_provenance}
            onChange={(e) => handelChangeInput(e)}
            id="duree_pays_provenance"
            // className={`${inputClassName} ${
            //   errors.duree_pays_provenance ? "border-red-500" : ""
            // }`}
            className={`${inputClassName} ${
              errors.duree_pays_provenance && !formData.duree_pays_provenance
                ? "border-red-500"
                : formData.duree_pays_provenance &&
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
        {/* <div className="lg:my-4 sm:my-2">
          <label htmlFor="duree_pays_provenance" className={labelClassName}>
            Durée pays de provenance (ans)
          </label>
          <input
            placeholder="3 ans"
            type="number"
            name="duree_pays_provenance"
            value={formData.duree_pays_provenance}
            onChange={(e) => handelChangeInput(e)}
            id="duree_pays_provenance"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   errors.duree_pays_provenance ? "border-red-500" : ""
            // }`}
          /> */}
        {/* {errors.duree_pays_provenance && (
            <p className="mt-2 text-pink-600 text-sm">
              {errors.duree_pays_provenance}
            </p>
          )} */}
        {/* </div> */}
      </div>

      {/* // Pays d'accueil  */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-1  gap-4">
        <div className="lg:my-4 sm:my-2">
          <CountrySelect
            handelChangeInput={handelChangeInput}
            inputLabel="Pays d'accueil"
            inputName="pays_accueil"
            inputId="pays_accueil"
            inputValue={formData.pays_accueil}
            formErrors={errors.pays_accueil}
          />
          {/* {errors.pays_accueil && (
            <p className="mt-2 text-pink-600 text-sm">{errors.pays_accueil}</p>
          )} */}
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="region" className={labelClassName}>
            Région*
          </label>
          <input
            placeholder="Dakar"
            type="text"
            name="region"
            value={formData.region}
            onChange={(e) => handelChangeInput(e)}
            id="region"
            //className={inputClassName}
            // className={`${inputClassName} ${
            //   errors.region ? "border-red-500" : ""
            // }`}
            className={`${inputClassName} ${
              errors.region && !formData.region
                ? "border-red-500"
                : formData.region && errors.region !== ""
                ? "border-blue-500"
                : ""
            }`}
          />
          {/* {errors.region && (
            <p className="mt-2 text-pink-600 text-sm">{errors.region}</p>
          )} */}
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="quartier" className={labelClassName}>
            Quartier de résidence
          </label>
          <input
            placeholder="Sacré coeur"
            type="text"
            name="quartier"
            value={formData.quartier}
            onChange={(e) => handelChangeInput(e)}
            id="quartier"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   errors.quartier ? "border-red-500" : ""
            // }`}
          />
          {/* {errors.quartier && (
            <p className="mt-2 text-pink-600 text-sm">{errors.quartier}</p>
          )} */}
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="duree_pays_accueil" className={labelClassName}>
            Duree pays d'accueil (ans)*
          </label>
          <select
            name="duree_pays_accueil"
            value={formData.duree_pays_accueil}
            onChange={(e) => handelChangeInput(e)}
            id="duree_pays_accueil"
            // className={`${inputClassName} ${
            //   errors.duree_pays_accueil ? "border-red-500" : ""
            // }`}
            className={`${inputClassName} ${
              errors.duree_pays_accueil && !formData.duree_pays_accueil
                ? "border-red-500"
                : formData.duree_pays_accueil &&
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
        {/* <div className="lg:my-4 sm:my-2">
          <label htmlFor="duree_pays_accueil" className={labelClassName}>
            Duree pays d'accueil (ans)
          </label>
          <input
            placeholder="3 ans"
            type="number"
            name="duree_pays_accueil"
            value={formData.duree_pays_accueil}
            onChange={(e) => handelChangeInput(e)}
            id="duree_pays_provenance"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   errors.duree_pays_accueil ? "border-red-500" : ""
            // }`}
          /> */}
        {/* {errors.duree_pays_accueil && (
            <p className="mt-2 text-pink-600 text-sm">
              {errors.duree_pays_accueil}
            </p>
          )} */}
        {/* </div> */}
      </div>
      {/* // nombre d'enfant / revenue mensuel */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4"></div>

      {/* <div className="lg:my-4 sm:my-2">
        <label htmlFor="">Last name</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={(e) => handelChangeInput(e)}
          className={inputClassName}
        />
      </div> */}
      <div className="lg:my-4 sm:my-2 flex justify-between items-center">
        <PrevButton handelPrevStep={handelPrevStep} />

        <NextButton handelNextStep={handelNextStep} />
      </div>
    </div>
  );
};

export default StepA;
