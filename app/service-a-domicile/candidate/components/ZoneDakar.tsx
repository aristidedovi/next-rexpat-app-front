"use client";
import React, { useEffect, useState } from "react";

// Type pour chaque Region
type Departement = {
  nom: string;
  quartiers: string[];
};

const ZoneDakar = ({ handleChildInfoChange }: any) => {
  //const [states, setStates] = useState<State>();
  const [departements, setDepartements] = useState<Departement[]>([]);
  //const [searchTerm, setSearchTerm] = useState<string>("");
  //const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  // const inputClassName =
  //   "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  // //  "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  // const labelClassName =
  //   "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  useEffect(() => {
    //let isMounted = true; // Sert à éviter une mise à jour d'état si le composant est démonté

    const fetchDepartements = async () => {
      try {
        const response = await fetch("/regionsDakar.json");
        const data: Departement[] = await response.json();

        // Met à jour uniquement une fois l'état
        setDepartements(data);
        //console.log(data);
        // if (isMounted) {
        //   setDepartements(data);
        // }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des départements:",
          error
        );
      }
    };

    fetchDepartements();
    // return () => {
    //   isMounted = false; // Nettoie l'effet
    // };
  }, []);

  return (
    <div className="mt-2">
      {/* <label htmlFor={inputId} className={labelClassName}>
        {inputLabel}*
      </label> */}
      <select
        id="zone"
        //className={inputClassName}
        //className={`${inputClassName} ${formErrors ? "border-red-500" : ""}`}
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        name="zone"
        //value={inputValue}
        onChange={(e) => handleChildInfoChange("zonePreference", e)}
      >
        <option value="">Sélectionnez</option>
        {/* {states.map((state) => (
          <option key={state.cca3} value={state.name.common}>
            {state.name.common}
          </option>
        ))} */}
        {departements.map((departement) => (
          // <option key={departement.nom} value={departement.nom}>
          //   {departement.nom}
          // </option>
          <optgroup key={departement.nom} label={departement.nom}>
            {departement.quartiers.map((quartier) => (
              <option key={quartier} value={quartier}>
                {quartier}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

export default ZoneDakar;
