"use client";

//import { div } from "motion/react-client";
// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import { ChevronDownIcon } from "@heroicons/react/16/solid";

import { useEffect, useState } from "react";
import ZoneDakar from "./ZoneDakar";
import { CandidatValidationForm } from "./formValidation/CandidatValidationForm";

export interface Candidat {
  nom: string;
  prenom: string;
  age: number | null;
  genre: string;
  situationMatrimoniale: string;
  adresse: string;
  phone: string;
  avecOuSansEnfant: string;
  typeDeService: string;
  frequencePrestation: string;
  frequenceDescente: string;
  zonePreference: string;
  rayonAction: string;
}

const intialCandidateDate: Candidat = {
  nom: "",
  prenom: "",
  age: null,
  genre: "",
  situationMatrimoniale: "",
  adresse: "",
  phone: "",
  avecOuSansEnfant: "",
  typeDeService: "",
  frequencePrestation: "",
  frequenceDescente: "",
  zonePreference: "",
  rayonAction: "",
};

export default function CandidatForm() {
  const [candidat, SetCandidat] = useState<Candidat>(intialCandidateDate);
  const [errorsCandidat, setErrorsCandidat] = useState<Record<string, string>>(
    {}
  );

  const [isCandidatFormValidate, setIsCandidatFormValidate] =
    useState<boolean>(true);

  const inputClassName =
    "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6";

  useEffect(() => {
    // Update form data when child info changes
    // handelChangeInput({
    //   target: {
    //     name: "informationGeneral",
    //     value: informationGeneral,
    //   },
    // });
    //handleChildInfoChange(candidat, e)
    console.log(candidat);
  }, [candidat]);

  const handleChildInfoChange = (
    field: keyof Candidat,
    // e: { target: { name: string; value: string | string[] } }
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    SetCandidat((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
    //handelChangeInput(e);
  };

  const handleSubmitCandidat = () => {
    if (
      CandidatValidationForm(
        candidat,
        setErrorsCandidat,
        setIsCandidatFormValidate
      )
    ) {
      console.log(candidat);
    } else {
      console.log(errorsCandidat, isCandidatFormValidate);
    }
  };

  // const handelChangeInput = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   //const { name, value } = event.target;
  //   const { name } = event.target;
  //   let fieldValue: string | boolean;
  //   //console.log(event.target.value);

  //   fieldValue = event.target.value;
  //   console.log(fieldValue);

  //   SetCandidat((prevData) => ({
  //     ...prevData,
  //     [name]: fieldValue,
  //   }));

  //   //console.log(candidat);
  // };

  return (
    // <form>
    <div>
      <div className="space-y-12">
        {/* <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Formulaire de depôt de candidature
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="nom"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Nom
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-white pl-0 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
                    workcation.com/
                  </div>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Ex: Fall"
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm/6 font-medium text-gray-900"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  aria-hidden="true"
                  className="size-12 text-gray-300"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    aria-hidden="true"
                    className="mx-auto size-12 text-gray-300"
                  />
                  <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Formulaire de depôt de candidature
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Remplissez et soumettez le formulaire et notre service client vous
            contactera !
          </p>

          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="nom"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Nom
              </label>
              <div className="mt-2">
                <input
                  id="nom"
                  name="nom"
                  onChange={(e) => handleChildInfoChange("nom", e)}
                  type="text"
                  placeholder="Ex: Fall"
                  autoComplete="family-name"
                  className={`${inputClassName} ${
                    errorsCandidat.nom && !candidat.nom
                      ? "border-red-500"
                      : candidat.nom && errorsCandidat.nom !== ""
                      ? "border-blue-500"
                      : ""
                  }`}
                />
                {/* Error Message */}
                {errorsCandidat.nom && !candidat.nom && (
                  <em className="text-sm text-red-500">{errorsCandidat.nom}</em>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="prenom"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Prénom
              </label>
              <div className="mt-2">
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  onChange={(e) => handleChildInfoChange("prenom", e)}
                  placeholder="Ex: Fatou"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="age"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Age (ans)
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="number"
                  onChange={(e) => handleChildInfoChange("age", e)}
                  placeholder="Ex: 25"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 ">
              <label
                htmlFor="genre"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Genre
              </label>
              <div className="mt-2">
                <select
                  id="genre"
                  name="genre"
                  onChange={(e: any) => handleChildInfoChange("genre", e)}
                  autoComplete="genre"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Selectionnez</option>
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="situationMatrimoniale"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Situation matrimoniale
              </label>
              <div className="mt-2">
                <select
                  id="situationMatrimoniale"
                  onChange={(e: any) =>
                    handleChildInfoChange("situationMatrimoniale", e)
                  }
                  name="situationMatrimoniale"
                  autoComplete="situationMatrimoniale"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Célibataire">Célibataire</option>
                  <option value="Marié">Marié(e)</option>
                  <option value="Divorcé">Divorcé(e)</option>
                  <option value="Veuve">Veuve / Veuf</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="adresse"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Adresse
              </label>
              <div className="mt-2">
                <input
                  id="adresse"
                  name="adresse"
                  onChange={(e: any) => handleChildInfoChange("adresse", e)}
                  type="text"
                  placeholder="Ex: Liberté 6"
                  autoComplete="adresse"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Numéro de téléphone
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  onChange={(e: any) => handleChildInfoChange("phone", e)}
                  type="text"
                  placeholder="Ex: 77 777 77 77"
                  autoComplete="phone"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="avecOuSansEnfant"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Avez vous un ou des enfants
              </label>
              <div className="mt-2">
                <select
                  id="avecOuSansEnfant"
                  name="avecOuSansEnfant"
                  autoComplete="avecOuSansEnfant"
                  onChange={(e: any) =>
                    handleChildInfoChange("avecOuSansEnfant", e)
                  }
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Sélectionnez</option>
                  <option value="Oui">Oui</option>
                  <option value="Nom">Nom</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="typeDeService"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Type de service
              </label>
              <div className="mt-2">
                <select
                  id="typeDeService"
                  name="typeDeService"
                  autoComplete="typeDeService"
                  onChange={(e: any) =>
                    handleChildInfoChange("typeDeService", e)
                  }
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Selectionnez</option>
                  <option value="Ménage">Ménage</option>
                  <option value="Repassage">Repassage</option>
                  <option value="Cuisine">Cuisine</option>
                  <option value="Nounou">Garde d'enfant (Nounou)</option>
                </select>
                {/* <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                /> */}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="zonePreference"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Zone de préférence
              </label>
              <ZoneDakar handleChildInfoChange={handleChildInfoChange} />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="zonePreference"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Rayon d'action (Km)
              </label>
              <div className="mt-2">
                <select
                  id="rayonAction"
                  name="rayonAction"
                  onChange={(e: any) => handleChildInfoChange("rayonAction", e)}
                  autoComplete="rayonAction"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Selectionnez</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="Peu importe">Peu importe</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="frequencePrestation"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Fréquence de prestation
              </label>
              <div className="mt-2">
                <select
                  id="frequencePrestation"
                  name="frequencePrestation"
                  onChange={(e: any) =>
                    handleChildInfoChange("frequencePrestation", e)
                  }
                  autoComplete="frequencePrestation"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Selectionnez</option>
                  <option value="Quotidienne">Quotidienne</option>
                  <option value="2/7">2 fois dans la semaine</option>
                  <option value="3/7">3 fois dans la semaine</option>
                  <option value="1/30">1 fois dans le mois</option>
                  <option value="Peu importe">Peu importe</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="frequenceDescente"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Fréquence de descente
              </label>
              <div className="mt-2">
                <select
                  id="frequenceDescente"
                  name="frequenceDescente"
                  autoComplete="frequenceDescente"
                  onChange={(e: any) =>
                    handleChildInfoChange("frequenceDescente", e)
                  }
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="">Selectionnez</option>
                  <option value="Quotidienne">Quotidienne</option>
                  <option value="2/7">2 fois dans la semaine</option>
                  <option value="3/7">3 fois dans la semaine</option>
                  <option value="1/30">1 fois dans le mois</option>
                  <option value="Peu importe">Peu importe</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-end gap-x-6">
        {/* <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button> */}
        <button
          //type="submit"
          onClick={handleSubmitCandidat}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Soumettre
        </button>
      </div>
      {/* </form> */}
    </div>
  );
}
