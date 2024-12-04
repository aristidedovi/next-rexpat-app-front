import CurrencyInput from "@/components/CurrencyInput";
import EmailInput from "@/components/EmailInput";
import SecteurActivites from "@/components/SecteurActivites";
import NextButton from "@/components/ui/NextButton";
import PrevButton from "@/components/ui/PrevButton";
//import { div } from "motion/react-client";
import React from "react";

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
  // const [emploiInfo, setEmploiInfo] = useState<EmploiData>(() => {
  //   // Use existing data or create empty array
  //   const existingEmploiData = formData.emploiData || {};
  //   console.log(existingEmploiData);

  //   // const existingEmploiData: EmploiData = {
  //   //   emploiSituationProActuelle: emploiInfo.emploiSituationProActuelle || '',
  //   //   emploiSecteur: formData.emploiSecteur || '',
  //   //   emploiPoste: formData.emploiPoste || '',
  //   //   emploiEmployeur: formData.emploiEmployeur || '',
  //   //   emploiTypeContrat: formData.emploiTypeContrat || '',
  //   //   emploiRevenu_mensuel: formData.emploiRevenu_mensuel || '',
  //   //   emploiDevise_revenu: formData.emploiDevise_revenu || 'USD',
  //   //   emploiCanaux: formData.emploiCanaux || '',
  //   //   emploiEmail: formData.emploiEmail || '',
  //   //   emploiMotif: formData.emploiMotif || '',
  //   //   emploiDureChomage: formData.emploiDureChomage || '',
  //   //   emploiAvantApres: formData.emploiAvantApres || '',
  //   //   emploiDelai: formData.emploiDelai || '',
  //   // };
  //   return existingEmploiData;
  // });

  // // Synchronize child info with form data whenever it changes
  // useEffect(() => {
  //   // Update form data when child info changes
  //   handelChangeInput({
  //     target: {
  //       name: "emploiData",
  //       value: emploiInfo,
  //     },
  //   });
  // }, [emploiInfo]);

  // const handleChildInfoChange = (field: keyof EmploiData, value: string) => {
  //   setEmploiInfo((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

  const inputClassName =
    "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  return (
    <div>
      <div
        className={`grid lg:grid-cols-${
          formData.emploiSituationProActuelle !== "Entrepreneur" ? 4 : 3
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
            id="emploiSituationProActuelle"
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
        {formData.emploiSituationProActuelle !== "Entrepreneur" ? (
          <>
            <EmailInput
              // emploiEmail={emploiInfo.emploiEmail}
              // handelChangeInput={(e: any) =>
              //   handleChildInfoChange("emploiEmail", e.target.value)
              // }
              emploiEmai={formData.emploiEmail}
              handelChangeInput={handelChangeInput}
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
            inputName="emploiSecteur"
            inputValue={formData.emploiSecteur}
            inputPoste={formData.emploiPoste}
            inputId="emploiSecteur"
            errors={errorsEmploi.emploiSecteur}
            errorsPoste={errorsEmploi.emploiPoste}
            handelChangeInput={handelChangeInput}
            emploiSituationProActuelle={formData.emploiSituationProActuelle}
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
      {formData.emploiSituationProActuelle === "Chômeur" ||
      formData.emploiSituationProActuelle === "Etudiant" ? (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
          <div>
            <label htmlFor="emploiMotif" className={labelClassName}>
              Motif
            </label>
            <select
              id="emploiMotif"
              className={`${inputClassName} ${
                errorsEmploi.emploiTypeContrat &&
                !formData.emploiTypeContrat &&
                formData.emploiSituationProActuelle !== "Chômeur" &&
                //emploiInfo.emploiSituationProActuelle !== "Entrepreneur" &&
                formData.emploiSituationProActuelle !== "Etudiant"
                  ? "border-red-500"
                  : formData.emploiTypeContrat &&
                    errorsEmploi.emploiTypeContrat !== ""
                  ? "border-blue-500"
                  : ""
              }`}
              name="emploiMotif"
              value={formData.emploiMotif}
              onChange={(e) => handelChangeInput(e)}
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
            <label htmlFor="emploiDureChomage" className={labelClassName}>
              Durée de chômage
            </label>
            <select
              name="emploiDureChomage"
              value={formData.emploiDureChomage}
              onChange={(e) => handelChangeInput(e)}
              // value={emploiInfo.emploiDureChomage}
              // onChange={(e: any) =>
              //   handleChildInfoChange("emploiDureChomage", e.target.value)
              // }
              className={`${inputClassName} ${
                errorsEmploi.emploiTypeContrat &&
                !formData.emploiTypeContrat &&
                formData.emploiSituationProActuelle !== "Chômeur" &&
                //emploiInfo.emploiSituationProActuelle !== "Entrepreneur" &&
                formData.emploiSituationProActuelle !== "Etudiant"
                  ? "border-red-500"
                  : formData.emploiTypeContrat &&
                    errorsEmploi.emploiTypeContrat !== ""
                  ? "border-blue-500"
                  : ""
              }`}
              id="emploiDureChomage"
            >
              <option value="Moins de 1 an">Moins de 1 an</option>
              <option value="Plus de 1 an">Plus de 1 an</option>
            </select>
          </div>
        </div>
      ) : (
        ""
      )}

      {formData.emploiSituationProActuelle === "Chômeur" ||
      formData.emploiSituationProActuelle === "Etudiant" ? (
        ""
      ) : (
        <div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
            {formData.emploiSituationProActuelle === "Entrepreneur" ? (
              ""
            ) : (
              <>
                <div className="lg:my-4 sm:my-2">
                  <label htmlFor="emploiEmployeur" className={labelClassName}>
                    Employeur actuel
                  </label>
                  <input
                    placeholder="Ex: Sonatel"
                    type="text"
                    name="emploiEmployeur"
                    value={formData.emploiEmployeur}
                    onChange={(e) => handelChangeInput(e)}
                    // value={emploiInfo.emploiEmployeur}
                    // onChange={(e: any) =>
                    //   handleChildInfoChange("emploiEmployeur", e.target.value)
                    // }
                    id="emploiEmployeur"
                    className={inputClassName}
                    disabled={
                      formData.emploiSituationProActuelle === "Chômeur" ||
                      formData.emploiSituationProActuelle === "Entrepreneur" ||
                      formData.emploiSituationProActuelle === "Etudiant"
                    }
                  />
                </div>
                <div className="lg:my-4 sm:my-2">
                  <label htmlFor="emploiTypeContrat" className={labelClassName}>
                    Type de contrat{" "}
                    {formData.emploiSituationProActuelle === "Chômeur" ||
                    formData.emploiSituationProActuelle === "Entrepreneur" ||
                    formData.emploiSituationProActuelle === "Etudiant"
                      ? ""
                      : "*"}
                  </label>
                  <select
                    id="emploiTypeContrat"
                    className={`${inputClassName} ${
                      errorsEmploi.emploiTypeContrat &&
                      !formData.emploiTypeContrat &&
                      formData.emploiSituationProActuelle !== "Chômeur" &&
                      formData.emploiSituationProActuelle !== "Entrepreneur" &&
                      formData.emploiSituationProActuelle !== "Etudiant"
                        ? "border-red-500"
                        : formData.emploiTypeContrat &&
                          errorsEmploi.emploiTypeContrat !== ""
                        ? "border-blue-500"
                        : ""
                    }`}
                    disabled={
                      formData.emploiSituationProActuelle === "Chômeur" ||
                      formData.emploiSituationProActuelle === "Entrepreneur" ||
                      formData.emploiSituationProActuelle === "Etudiant"
                    }
                    name="emploiTypeContrat"
                    value={formData.emploiTypeContrat}
                    onChange={(e) => handelChangeInput(e)}
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
            {formData.emploiSituationProActuelle === "Entrepreneur" ? (
              <>
                <EmailInput
                  emploiEmai={formData.emploiEmail}
                  handelChangeInput={handelChangeInput}
                  // emploiEmail={formData.emploiEmail}
                  // handelChangeInput={(e: any) =>
                  //   handleChildInfoChange("emploiEmail", e.target.value)
                  // }
                />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      )}

      {formData.emploiSituationProActuelle === "Entrepreneur" ||
      formData.emploiSituationProActuelle === "Etudiant" ||
      formData.emploiSituationProActuelle === "Chômeur" ? (
        ""
      ) : (
        <>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
            <div className="lg:my-4 sm:my-2">
              <label htmlFor="emploiCanaux" className={labelClassName}>
                Comment avez-vous trouvé votre dernier emploi?
              </label>
              <select
                id="emploiCanaux"
                className={inputClassName}
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
                Avez-vous trouvé un emploi avant ou après votre arrivée ?
              </label>
              <select
                id="emploiAvantApres"
                className={inputClassName}
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
                Sous quel délai avez vous trouvé un emploi ? &nbsp; (mois)
              </label>
              <select
                id="emploiDelai"
                className={inputClassName}
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
