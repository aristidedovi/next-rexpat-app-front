import React, { useEffect, useState } from "react";

// Type pour chaque pays
type Country = {
  cca3: string;
  name: {
    common: string;
  };
  flags: {
    png: string; // URL de l'image du drapeau
  };
};

const CountrySelect = ({
  handelChangeInput,
  inputName,
  inputLabel,
  inputId,
  inputValue,
  formErrors,
}: any) => {
  const [countries, setCountries] = useState<Country[]>([]);
  //const [searchTerm, setSearchTerm] = useState<string>("");
  //const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);

  const inputClassName =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: Country[] = await response.json();

        const sortedCountries = data.sort((a: any, b: any) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
        //setFilteredCountries(sortedCountries);
      } catch (error) {
        console.error("Erreur lors de la récuperation des pays:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <label htmlFor={inputId} className={labelClassName}>
        {inputLabel}*
      </label>
      <select
        id={inputId}
        //className={inputClassName}
        //className={`${inputClassName} ${formErrors ? "border-red-500" : ""}`}
        className={`${inputClassName} ${
          formErrors && !inputValue
            ? "border-red-500"
            : inputValue && formErrors !== ""
            ? "border-blue-500"
            : ""
        }`}
        name={inputName}
        value={inputValue}
        onChange={(e) => handelChangeInput(e)}
      >
        <option value="">Sélectionnez {inputLabel} </option>
        {countries.map((country) => (
          <option key={country.cca3} value={country.name.common}>
            {/* <img
              src={country.flags.png}
              alt={`Drapeau de ${country.name.common}`}
              className="w-5 h-5 mr-2" // Ajustez la taille du drapeau ici
            /> */}
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
