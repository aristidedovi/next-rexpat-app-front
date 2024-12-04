//import LogementBudgetCurrencyInput from "@/components/LogementBudgetCurrencyInput";
import NextButton from "@/components/ui/NextButton";
import PrevButton from "@/components/ui/PrevButton";
import React from "react";

// interface Logement {
//   statut: string;
//   typeLogement: string;
//   nombreDePieces: string;
//   budget: string;
//   devise: string;
//   zoneGeographique: string;
//   canalAquisition: string;
//   siRecommandation: string;
// }

const StepE = ({
  formData,
  //handelChangeInput,
  //errorsLogement,
  handleSubmitFormData,
  handelPrevStep,
  handelNextStep,
  isLoading,
}: any) => {
  // const [logement, setLogement] = useState<Logement>(
  //   () => formData.logement || 0
  // );
  // const inputClassName =
  //   "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

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
  // useEffect(() => {
  //   if (!logement.devise) {
  //     logement.devise = "USD";
  //   }
  // Update form data when child info changes
  //   handelChangeInput({
  //     target: {
  //       name: "logement",
  //       value: logement,
  //     },
  //   });
  // }, [logement]);

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

  return (
    <div>
      <div className={`grid lg:grid-cols-3 sm:grid-cols-1 gap-4`}>
        <div className="lg:my-4 sm:my-2">
          <label htmlFor="status" className={labelClassName}>
            Transport
          </label>
          {/* <select
            id="status"
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
            name="status"
            value={logement.statut}
            onChange={(e) => handleChildInfoChange("statut", e.target.value)}
          >
            <option value="">Sélectionnez</option>
            <option value="Propriétaire">Propriétaire</option>
            <option value="Locataire">Locataire</option>
            <option value="Hébergé">Hébergé</option>
          </select> */}
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
        {formData.isLogement === true && !isLoading && (
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
