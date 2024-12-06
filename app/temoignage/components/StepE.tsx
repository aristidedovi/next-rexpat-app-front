//import LogementBudgetCurrencyInput from "@/components/LogementBudgetCurrencyInput";
import TransportBudgetCurrencyInput from "@/components/temoignages/ui/TransportBudgetCurrencyInput";
//import NextButton from "@/components/ui/NextButton";
import PrevButton from "@/components/temoignages/button/PrevButton";
import SubmitButton from "@/components/temoignages/button/SubmitButton";
import React, { useEffect, useState } from "react";

interface Transport {
  moyenUtilise: string;
  proprietaire: string;
  budget: string;
  devise: string;
  chauffeurPrive: string;
}

const StepE = ({
  formData,
  handelChangeInput,
  //errorsLogement,
  handleSubmitFormData,
  handelPrevStep,
  //handelNextStep,
  isLoading,
}: any) => {
  const [transport, setTransport] = useState<Transport>(
    () => formData.transport || 0
  );
  const inputClassName =
    "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  // const logementData: Logement = {
  //   statut: formData.logement.statut || "",
  //   typeLogement: formData.logement.typeLogement || "",
  //   nombreDePieces: formData.logement.nombreDePieces || "",
  //   budget: formData.logement.budget || "",
  //   zoneGeographique: formData.logement.zoneGeographique || "",
  //   canalAquisition: formData.logement.canalAquisition || "",
  //   siRecommandation: formData.logement.siRecommandation || "",
  // };

  // Synchronize child info with form data whenever it changes
  useEffect(() => {
    if (!transport.devise) {
      transport.devise = "USD";
    }
    //Update form data when child info changes
    handelChangeInput({
      target: {
        name: "transport",
        value: transport,
      },
    });
  }, [transport]);

  // const handelChangeLogementInput = (e: {
  //   target: { name: string; value: string };
  // }) => {
  //   console.log(logement);
  // };

  // const handleChildInfoChange = (field: keyof Logement, value: string) => {
  //   setLogement((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

  const handleChildInfoChange = (
    field: keyof Transport,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransport((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

    //handelChangeInput(e);
  };
  return (
    <div>
      <div className={`grid lg:grid-cols-3 sm:grid-cols-1 gap-4`}>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="moyenUtilise" className={labelClassName}>
            Moyen de Transport utilisé ?
          </label>
          <select
            id="moyenUtilise"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   errorsLogement.emploiSituationProActuelle &&
            //   !formData.emploiSituationProActuelle
            //     ? "border-red-500"
            //     : formData.emploiSituationProActuelle &&
            //       errorsLogement.emploiSituationProActuelle !== ""
            //     ? "border-blue-500"
            //     : ""
            // }`}
            //name="moyenUtilise"
            value={transport.moyenUtilise}
            onChange={(e: any) => handleChildInfoChange("moyenUtilise", e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Vélo">Vélo</option>
            <option value="Bus">Bus</option>
            <option value="Taxi">Taxi</option>
            <option value="Voiture personnelle">Voiture personnelle</option>
            <option value="VTC">VTC</option>
            <option value="Moto">Moto</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="proprietaire" className={labelClassName}>
            Est vous proprietaire d'un véhicule ?
          </label>
          <select
            id="proprietaire"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   errorsLogement.emploiSituationProActuelle &&
            //   !formData.emploiSituationProActuelle
            //     ? "border-red-500"
            //     : formData.emploiSituationProActuelle &&
            //       errorsLogement.emploiSituationProActuelle !== ""
            //     ? "border-blue-500"
            //     : ""
            // }`}
            //name="proprietaire"
            value={transport.proprietaire}
            onChange={(e: any) => handleChildInfoChange("proprietaire", e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
        </div>

        <div className="lg:my-4 sm:my-2">
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Budget mensuel transport / véhicule
          </label>
          <TransportBudgetCurrencyInput
            handelChangeInput={handleChildInfoChange}
            handelSelectInput={handleChildInfoChange}
            inputName="budget"
            inputId="budget"
            inputValue={transport.budget}
            inputDeviseValue={transport.devise}
            inputDeviseName="devise"
          />
        </div>

        {/* <div className="lg:my-4 sm:my-2">
          <label htmlFor="typeLogement" className={labelClassName}>
            Type de logement*
          </label>
          <select
            id="typeLogement"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   errorsLogement.emploiSituationProActuelle &&
            //   !formData.emploiSituationProActuelle
            //     ? "border-red-500"
            //     : formData.emploiSituationProActuelle &&
            //       errorsLogement.emploiSituationProActuelle !== ""
            //     ? "border-blue-500"
            //     : ""
            // }`}
            name="typeLogement"
            value={logement.typeLogement}
            onChange={(e) =>
              handleChildInfoChange("typeLogement", e.target.value)
            }
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
            // className={`${inputClassName} ${
            //   errorsLogement.emploiSituationProActuelle &&
            //   !formData.emploiSituationProActuelle
            //     ? "border-red-500"
            //     : formData.emploiSituationProActuelle &&
            //       errorsLogement.emploiSituationProActuelle !== ""
            //     ? "border-blue-500"
            //     : ""
            // }`}
            name="nombreDePieces"
            value={logement.nombreDePieces}
            onChange={(e) =>
              handleChildInfoChange("nombreDePieces", e.target.value)
            }
          >
            <option value="">Sélectionnez</option>
            <option value="Chambre">Chambre</option>
            <option value="Studio">Studio</option>
            <option value="F2">F2</option>
            <option value="F3">F3</option>
            <option value="F4">F4</option>
            <option value="F5+">F5+</option>
          </select>
        </div> */}
      </div>
      <div className={`grid lg:grid-cols-3 sm:grid-cols-1 gap-4`}>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="chauffeurPrive" className={labelClassName}>
            Avez vous besoin d'un chauffeur privé ?
          </label>
          <select
            id="chauffeurPrive"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   errorsLogement.emploiSituationProActuelle &&
            //   !formData.emploiSituationProActuelle
            //     ? "border-red-500"
            //     : formData.emploiSituationProActuelle &&
            //       errorsLogement.emploiSituationProActuelle !== ""
            //     ? "border-blue-500"
            //     : ""
            // }`}
            //name="proprietaire"
            value={transport.chauffeurPrive}
            onChange={(e: any) => handleChildInfoChange("chauffeurPrive", e)}
          >
            <option value="">Sélectionnez</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
        </div>
        {/* <div className="lg:my-4 sm:my-2">
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
            // className={`${inputClassName} ${
            //   errorsLogement.emploiSituationProActuelle &&
            //   !formData.emploiSituationProActuelle
            //     ? "border-red-500"
            //     : formData.emploiSituationProActuelle &&
            //       errorsLogement.emploiSituationProActuelle !== ""
            //     ? "border-blue-500"
            //     : ""
            // }`}
            name="canalAquisition"
            value={logement.canalAquisition}
            onChange={(e) =>
              handleChildInfoChange("canalAquisition", e.target.value)
            }
          >
            <option value="">Sélectionnez</option>
            <option value="Agence immobilière">Agence immobilière</option>
            <option value="Bouche à oreille">Bouche à oreille</option>
            <option value="Sur internet">Sur internet</option>
          </select>
        </div>

        <div className="lg:my-4 sm:my-2">
          <label htmlFor="siRecommandation" className={labelClassName}>
            Recommandez-vous votre logement?
          </label>
          <select
            id="siRecommandation"
            className={inputClassName}
            // className={`${inputClassName} ${
            //   errorsLogement.emploiSituationProActuelle &&
            //   !formData.emploiSituationProActuelle
            //     ? "border-red-500"
            //     : formData.emploiSituationProActuelle &&
            //       errorsLogement.emploiSituationProActuelle !== ""
            //     ? "border-blue-500"
            //     : ""
            // }`}
            name="siRecommandation"
            value={logement.siRecommandation}
            onChange={(e) =>
              handleChildInfoChange("siRecommandation", e.target.value)
            }
          >
            <option value="">Sélectionnez</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
        </div> */}
      </div>
      {/* <DataConfirmRow label="First Name: " value={formData.firstname} />
      <DataConfirmRow label="Last Name: " value={formData.lastname} />
      <DataConfirmRow label="Business Name: " value={formData.businessName} />
      <DataConfirmRow label="Business City: " value={formData.businessCity} />
      <DataConfirmRow
        label="Business Web Site: "
        value={formData.businessWebSite}
      />
      <DataConfirmRow label="Business Email: " value={formData.businessEmail} />
      <DataConfirmRow
        label="Income Per Month: "
        value={formData.incomePerMonth}
      />
      <DataConfirmRow label="Tax Percantage: " value={formData.taxPercantage} /> */}
      {/* <div className="my-4 flex items-center">
        <input
          type="checkbox"
          name="agreeToTerms"
          id="agreeToTerms"
          value={formData.agreeToTerms}
          onChange={(e) => handelChangeInput(e)}
          className="w-4 h-4 mr-2 accent-pink-300 focus:accent-pink-500"
        />
        <label htmlFor="agreeToTerms">I Agree to Terms of Services</label>
      </div>

      <div className="my-2 flex justify-between items-center">
        <button
          className="bg-yellow-400 px-4 py-2 rounded-xl"
          onClick={handelPrevStep}
        >
          Prev
        </button>

        <button
          className="bg-blue-400 px-4 py-2 rounded-xl"
          onClick={handleSubmitFormData}
        >
          Submit
        </button>
      </div> */}
      <div className="my-2 flex justify-between items-center">
        <PrevButton handelPrevStep={handelPrevStep} />

        {/* // Afficher le submit buton quand emploi est à true et les autre sont à false */}
        {formData.isTransport === true && !isLoading && (
          // <button
          //   type="button"
          //   disabled={isLoading}
          //   className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          //   onClick={handleSubmitFormData}
          // >
          //   {isLoading ? "En cours..." : "Soumettre"}
          // </button>
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
        {/* {formData.isLogement === true && (
          <NextButton handelNextStep={handelNextStep} />
        )} */}
      </div>
    </div>
  );
};

export default StepE;

// // A separate component to sho data
// const DataConfirmRow = ({ label, value }: any) => {
//   return (
//     <div className="my-3 border border-dashed border-gray-200 p-1 rounded-lg">
//       <span className="mr-4 text-slate-500">{label}</span>
//       <span className="mr-4 text-slate-900">{value}</span>
//     </div>
//   );
// };
