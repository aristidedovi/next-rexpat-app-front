import LogementBudgetCurrencyInput from "@/components/temoignages/ui/LogementBudgetCurrencyInput";
import NextButton from "@/components/temoignages/button/NextButton";
import PrevButton from "@/components/temoignages/button/PrevButton";
import SubmitButton from "@/components/temoignages/button/SubmitButton";
import React, { useEffect, useState } from "react";
import { Logement } from "@/libs/temoignage/validateFormLogement";

const StepD = ({
  formData,
  handelChangeInput,
  errorsLogement,
  handleSubmitFormData,
  handelPrevStep,
  handelNextStep,
  isLoading,
}: any) => {
  const [logement, setLogement] = useState<Logement>(
    () => formData.logement || 0
  );

  const inputClassName =
    "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  // Synchronize child info with form data whenever it changes
  useEffect(() => {
    if (!logement.devise) {
      logement.devise = "USD";
    }
    // Update form data when child info changes
    handelChangeInput({
      target: {
        name: "logement",
        value: logement,
      },
    });
  }, [logement]);

  const handleChildInfoChange = (
    field: keyof Logement,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLogement((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

    //handelChangeInput(e);
  };
  return (
    <div>
      <div className={`grid lg:grid-cols-3 sm:grid-cols-1 gap-4`}>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="status" className={labelClassName}>
            Statut du logement*
          </label>
          <select
            id="status"
            //className={inputClassName}
            className={`${inputClassName} ${
              errorsLogement.logementStatut && !formData.logement.statut
                ? "border-red-500"
                : formData.logement.statut &&
                  errorsLogement.logementStatut !== ""
                ? "border-blue-500"
                : ""
            }`}
            name="status"
            value={logement.statut}
            onChange={(e: any) => handleChildInfoChange("statut", e)}
            //onChange={(e) => handleChildInfoChange("statut", e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Propriétaire">Propriétaire</option>
            <option value="Locataire">Locataire</option>
            <option value="Hébergé">Hébergé</option>
          </select>
        </div>

        <div className="lg:my-4 sm:my-2">
          <label htmlFor="typeLogement" className={labelClassName}>
            Type de logement*
          </label>
          <select
            id="typeLogement"
            //className={inputClassName}
            className={`${inputClassName} ${
              errorsLogement.logementTypeLogement &&
              !formData.logement.typeLogement
                ? "border-red-500"
                : formData.logement.typeLogement &&
                  errorsLogement.logementTypeLogement !== ""
                ? "border-blue-500"
                : ""
            }`}
            name="typeLogement"
            value={logement.typeLogement}
            onChange={(e: any) => handleChildInfoChange("typeLogement", e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Appartement">Appartement</option>
            <option value="Villa">Villa</option>
            <option value="Autres">autres</option>
          </select>
        </div>

        <div className="lg:my-4 sm:my-2">
          <label htmlFor="nombreDePieces" className={labelClassName}>
            Nombre de pièces
          </label>
          <select
            id="nombreDePieces"
            className={inputClassName}
            name="nombreDePieces"
            value={logement.nombreDePieces}
            onChange={(e: any) => handleChildInfoChange("nombreDePieces", e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Chambre">Chambre</option>
            <option value="Studio">Studio</option>
            <option value="F2">F2</option>
            <option value="F3">F3</option>
            <option value="F4">F4</option>
            <option value="F5+">F5+</option>
          </select>
        </div>
      </div>
      <div className={`grid lg:grid-cols-3 sm:grid-cols-1 gap-4`}>
        <div className="lg:my-4 sm:my-2">
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Budget Logement
          </label>
          <LogementBudgetCurrencyInput
            handelChangeInput={handleChildInfoChange}
            handelSelectInput={handleChildInfoChange}
            inputName="budget"
            inputId="budget"
            inputValue={logement.budget}
            inputDeviseValue={logement.devise}
            inputDeviseName="devise"
          />
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="canalAquisition" className={labelClassName}>
            Canal d'aquisition
          </label>
          <select
            id="canalAquisition"
            className={inputClassName}
            name="canalAquisition"
            value={logement.canalAquisition}
            onChange={(e: any) => handleChildInfoChange("canalAquisition", e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Agence immobilière">Agence immobilière</option>
            <option value="Bouche à oreille">Bouche à oreille</option>
            <option value="Sur internet">Sur internet</option>
          </select>
        </div>

        <div className="lg:my-4 sm:my-2">
          <label htmlFor="siRecommandation" className={labelClassName}>
            Recommanderiez-vous votre logement ?
          </label>
          <select
            id="siRecommandation"
            className={inputClassName}
            name="siRecommandation"
            value={logement.siRecommandation}
            onChange={(e: any) => handleChildInfoChange("siRecommandation", e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
        </div>
      </div>
      <div className="my-2 flex justify-between items-center">
        <PrevButton handelPrevStep={handelPrevStep} />

        {/* // Afficher le submit buton quand emploi est à true et les autre sont à false */}
        {formData.isLogement === true &&
          formData.isTransport === false &&
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
        {formData.isLogement === true && formData.isTransport === true && (
          <NextButton handelNextStep={handelNextStep} />
        )}
      </div>
    </div>
  );
};

export default StepD;
