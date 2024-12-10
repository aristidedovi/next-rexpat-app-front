import CurrencyInput from "@/components/temoignages/ui/CurrencyInput";
import EmailInput from "@/components/temoignages/ui/EmailInput";
import SecteurActivites from "@/components/temoignages/ui/SecteurActivites";
import NextButton from "@/components/temoignages/button/NextButton";
import PrevButton from "@/components/temoignages/button/PrevButton";
import SubmitButton from "@/components/temoignages/button/SubmitButton";
//import { div } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { Emploi } from "@/libs/temoignage/validateFormEmploi";

// interface EmploiData {
//   emploiSecteur: string;
//   emploiPoste: string;
//   emploiEmployeur: string;
//   emploiTypeContrat: string;
//   emploiRevenu_mensuel: string;
//   emploiDevise_revenu: string;
//   emploiCanaux: string;
//   emploiSituationProActuelle: string;
//   emploiEmail: string;
//   emploiMotif: string;
//   emploiDureChomage: string;
// }

const StepB = ({
  formData,
  handelChangeInput,
  handelNextStep,
  handelPrevStep,
  handleSubmitFormData,
  errorsEmploi,
  isLoading,
}: any) => {
  const [emploi, setEmploi] = useState<Emploi>(() => formData.emploi || 0);

  const inputClassName =
    "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  // const [emploiInfo, setEmploiInfo] = useState<EmploiData>(() => {
  //   // Use existing data or create empty array
  //   const existingEmploiData = formData.emploiData || {};
  //   console.log(existingEmploiData);

  // // Synchronize child info with form data whenever it changes
  useEffect(() => {
    if (!emploi.devise_revenu) {
      emploi.devise_revenu = "USD";
    }
    // Update form data when child info changes
    handelChangeInput({
      target: {
        name: "emploi",
        value: emploi,
      },
    });
  }, [emploi]);

  // const handleChildInfoChange = (field: keyof EmploiData, value: string) => {
  //   setEmploiInfo((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

  const handleChildInfoChange = (
    field: keyof Emploi,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmploi((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

    //handelChangeInput(e);
  };

  return (
    <div>
      <div
        className={`grid lg:grid-cols-${
          emploi.situationProActuelle !== "Entrepreneur" ? 4 : 3
        } sm:grid-cols-1 gap-4`}
      >
        <div className="lg:my-4 sm:my-2">
          <label
            htmlFor="emploiSituationProActuelle"
            className={labelClassName}
          >
            Situation professionnele actuelle*
          </label>
          <select
            id="situationProActuelle"
            className={`${inputClassName} ${
              errorsEmploi.emploiSituationProActuelle &&
              !formData.emploi.situationProActuelle
                ? "border-red-500"
                : formData.emploi.situationProActuelle &&
                  errorsEmploi.emploiSituationProActuelle !== ""
                ? "border-blue-500"
                : ""
            }`}
            name="situationProActuelle"
            value={emploi.situationProActuelle}
            //onChange={(e) => handelChangeInput(e)}
            onChange={(e: any) =>
              handleChildInfoChange("situationProActuelle", e)
            }
            // value={emploiInfo.emploiSituationProActuelle}
            // onChange={(e) =>
            //   handleChildInfoChange(
            //     "emploiSituationProActuelle",
            //     e.target.value
            //   )
            // }
          >
            <option value="">Sélectionnez</option>
            <option value="Etudiant">Etudiant(e)</option>
            <option value="Chômeur">Chômeur / chômeuse</option>
            <option value="Entrepreneur">Entrepreneur / entrepreneuse</option>
            <option value="Salarie">Salarié(e)</option>
          </select>
        </div>
        {emploi.situationProActuelle !== "Entrepreneur" ? (
          <>
            <EmailInput
              emploiEmail={emploi.email}
              handelChangeInput={handleChildInfoChange}
            />
          </>
        ) : (
          ""
        )}
        {/* <div className="lg:my-4 sm:my-2">
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
          />
        </div> */}

        {/* <div className="lg:my-4 sm:my-2"> */}
        {/* <label htmlFor="emploiSecteur" className={labelClassName}>
            Secteur d'activité*
          </label> */}
        <div className="col-span-2">
          <SecteurActivites
            inputName="secteur"
            inputValue={emploi.secteur}
            inputPoste={emploi.poste}
            inputId="secteur"
            errors={errorsEmploi.emploiSecteur}
            errorsPoste={errorsEmploi.emploiPoste}
            handelChangeInput={handleChildInfoChange}
            emploiSituationProActuelle={emploi.situationProActuelle}
            // inputSecteurName="emploiSecteur"
            // inputPostName="emploiPoste"
            // inputValue={emploiInfo.emploiSecteur}
            // inputPoste={emploiInfo.emploiPoste}
            // inputId="emploiSecteur"
            // errors={errorsEmploi.emploiSecteur}
            // errorsPoste={errorsEmploi.emploiPoste}
            // handelChangeInput={handleChildInfoChange}
            // handelChangeInput={(e: any) =>
            //   handleChildInfoChange("emploiSecteur", e.target.value)
            // }
            //emploiSituationProActuelle={emploiInfo.emploiSituationProActuelle}
          />
        </div>

        {/* </div> */}
        {/* <div className="lg:my-4 sm:my-2">
          <label htmlFor="emploiPoste" className={labelClassName}>
            Poste actuel
          </label>
        </div> */}
      </div>
      {emploi.situationProActuelle === "Chômeur" ||
      emploi.situationProActuelle === "Etudiant" ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          <div>
            <label htmlFor="motif" className={labelClassName}>
              Motif
            </label>
            <select
              id="motif"
              className={`${inputClassName} ${
                errorsEmploi.emploiMotif &&
                !emploi.motif &&
                emploi.situationProActuelle !== "Chômeur" &&
                //emploiInfo.emploiSituationProActuelle !== "Entrepreneur" &&
                emploi.situationProActuelle !== "Etudiant"
                  ? "border-red-500"
                  : emploi.motif && errorsEmploi.emploiMotif !== ""
                  ? "border-blue-500"
                  : ""
              }`}
              name="motif"
              value={emploi.motif}
              //onChange={(e) => handelChangeInput(e)}
              onChange={(e: any) => handleChildInfoChange("motif", e)}
              // value={emploiInfo.emploiMotif}
              // onChange={(e: any) =>
              //   handleChildInfoChange("emploiMotif", e.target.value)
              // }
            >
              <option value="">Sélectionnez</option>
              <option value="Rupture conventionnelle">
                Rupture conventionnelle
              </option>
              <option value="Licenciement">Licenciement</option>
              <option value="Démission">Démission</option>
              <option value="Changement de zone géographique">
                Changement de zone géographique
              </option>
              <option value="Fin de contrat">Fin de contrat</option>
              <option value="Recherche premier emploi">
                Recherche premier emploi
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="dureChomage" className={labelClassName}>
              Durée de chômage
            </label>
            <select
              name="dureChomage"
              value={emploi.dureChomage}
              onChange={(e: any) => handleChildInfoChange("dureChomage", e)}
              //onChange={(e) => handelChangeInput(e)}
              // value={emploiInfo.emploiDureChomage}
              // onChange={(e: any) =>
              //   handleChildInfoChange("emploiDureChomage", e.target.value)
              // }
              className={`${inputClassName} ${
                errorsEmploi.emploiTypeContrat &&
                !emploi.dureChomage &&
                emploi.situationProActuelle !== "Chômeur" &&
                //emploiInfo.emploiSituationProActuelle !== "Entrepreneur" &&
                emploi.situationProActuelle !== "Etudiant"
                  ? "border-red-500"
                  : emploi.dureChomage && errorsEmploi.emploiDureChomage !== ""
                  ? "border-blue-500"
                  : ""
              }`}
              id="dureChomage"
            >
              <option value="Moins de 1 an">Moins de 1 an</option>
              <option value="Plus de 1 an">Plus de 1 an</option>
            </select>
          </div>
        </div>
      ) : (
        ""
      )}

      {emploi.situationProActuelle === "Chômeur" ||
      emploi.situationProActuelle === "Etudiant" ? (
        ""
      ) : (
        <div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
            {emploi.situationProActuelle === "Entrepreneur" ? (
              ""
            ) : (
              <>
                <div className="lg:my-4 sm:my-2">
                  <label htmlFor="employeur" className={labelClassName}>
                    Employeur actuel
                  </label>
                  <input
                    placeholder="Ex: Sonatel"
                    type="text"
                    name="employeur"
                    value={emploi.employeur}
                    onChange={(e: any) => handleChildInfoChange("employeur", e)}
                    //onChange={(e) => handelChangeInput(e)}
                    // value={emploiInfo.emploiEmployeur}
                    // onChange={(e: any) =>
                    //   handleChildInfoChange("emploiEmployeur", e.target.value)
                    // }
                    id="employeur"
                    className={inputClassName}
                    disabled={
                      emploi.situationProActuelle === "Chômeur" ||
                      emploi.situationProActuelle === "Entrepreneur" ||
                      emploi.situationProActuelle === "Etudiant"
                    }
                  />
                </div>
                <div className="lg:my-4 sm:my-2">
                  <label htmlFor="typeContrat" className={labelClassName}>
                    Type de contrat{" "}
                    {emploi.situationProActuelle === "Chômeur" ||
                    emploi.situationProActuelle === "Entrepreneur" ||
                    emploi.situationProActuelle === "Etudiant"
                      ? ""
                      : "*"}
                  </label>
                  <select
                    id="typeContrat"
                    className={`${inputClassName} ${
                      errorsEmploi.emploiTypeContrat &&
                      !emploi.typeContrat &&
                      emploi.situationProActuelle !== "Chômeur" &&
                      emploi.situationProActuelle !== "Entrepreneur" &&
                      emploi.situationProActuelle !== "Etudiant"
                        ? "border-red-500"
                        : formData.emploiTypeContrat &&
                          errorsEmploi.emploiTypeContrat !== ""
                        ? "border-blue-500"
                        : ""
                    }`}
                    disabled={
                      emploi.situationProActuelle === "Chômeur" ||
                      emploi.situationProActuelle === "Entrepreneur" ||
                      emploi.situationProActuelle === "Etudiant"
                    }
                    name="typeContrat"
                    value={emploi.typeContrat}
                    onChange={(e: any) =>
                      handleChildInfoChange("typeContrat", e)
                    }

                    //onChange={(e) => handelChangeInput(e)}
                    // value={emploiInfo.emploiTypeContrat}
                    // onChange={(e: any) =>
                    //   handleChildInfoChange("emploiTypeContrat", e.target.value)
                    // }
                  >
                    <option value="">Sélectionnez</option>
                    <option value="Stage">Stage</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Consultance">Consultance</option>
                    <option value="Prestation">Prestation</option>
                    <option value="CDD">CDD</option>
                    <option value="CDI">CDI</option>
                  </select>
                </div>
              </>
            )}
            <div className="lg:my-4 sm:my-2">
              <CurrencyInput
                handelChangeInput={handleChildInfoChange}
                inputLabel="Revenu mensuel"
                inputName="revenu_mensuel"
                inputId="revenu_mensuel"
                inputValue={emploi.revenu_mensuel}
                formErrors={errorsEmploi.emploiRevenu_mensuel}
                inputDeviseValue={emploi.devise_revenu}
                inputDeviseName="devise_revenu"
                inputSituationProActuelle={emploi.situationProActuelle}
              />
            </div>
            {emploi.situationProActuelle === "Entrepreneur" ? (
              <>
                <EmailInput
                  emploiEmail={emploi.email}
                  handelChangeInput={handleChildInfoChange}
                />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      )}

      {emploi.situationProActuelle === "Entrepreneur" ||
      emploi.situationProActuelle === "Etudiant" ||
      emploi.situationProActuelle === "Chômeur" ? (
        ""
      ) : (
        <>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
            <div className="lg:my-4 sm:my-2">
              <label htmlFor="canaux" className={labelClassName}>
                Comment avez-vous trouvé votre dernier emploi?
              </label>
              <select
                id="canaux"
                className={inputClassName}
                name="canaux"
                value={emploi.canaux}
                onChange={(e: any) => handleChildInfoChange("canaux", e)}
              >
                <option value="">Sélectionnez</option>
                <option value="Site web">Site web</option>
                <option value="Reseaux Sociaux">Reseaux sociaux</option>
                <option value="Recommandation">Recommandation</option>
                <option value="Autres">Autres</option>
              </select>
            </div>
            <div className="lg:my-4 sm:my-2">
              <label htmlFor="avantApres" className={labelClassName}>
                Avez-vous trouvé un emploi avant ou après votre arrivée ?
              </label>
              <select
                id="avantApres"
                className={inputClassName}
                name="avantApres"
                value={emploi.avantApres}
                //onChange={(e) => handelChangeInput(e)}
                onChange={(e: any) => handleChildInfoChange("avantApres", e)}
              >
                <option value="">Sélectionnez</option>
                <option value="avant">Avant</option>
                <option value="après">Après</option>
              </select>
            </div>
            <div className="lg:my-4 sm:my-2">
              <label htmlFor="delai" className={labelClassName}>
                Sous quel délai avez vous trouvé un emploi ? &nbsp; (mois)
              </label>
              <select
                id="delai"
                className={inputClassName}
                name="delai"
                value={emploi.delai}
                onChange={(e: any) => handleChildInfoChange("delai", e)}
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
                <option value="+12">Plus de 12</option>
              </select>
            </div>
          </div>
        </>
      )}

      <div className="my-2 flex justify-between items-center">
        <PrevButton handelPrevStep={handelPrevStep} />

        {/* // Afficher le submit buton quand emploi est à true et les autre sont à false */}
        {formData.isEmploi === true &&
          formData.isEducation === false &&
          formData.isLogement === false &&
          !isLoading && (
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
        {/* {formData.isEducation === true ||
          (formData.isLogement === false && (
            <NextButton handelNextStep={handelNextStep} />
          ))} */}
        {formData.isEducation === true && (
          <NextButton handelNextStep={handelNextStep} />
        )}
      </div>
    </div>
  );
};

export default StepB;
