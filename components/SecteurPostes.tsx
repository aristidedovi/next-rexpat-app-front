import { Select } from "@headlessui/react";
import React, { useEffect, useState } from "react";

interface SecteurPoste {
  code: string;
  libelle: string;
  postes: string[];
}

const SecteurPostes = ({
  inputName,
  inputValue,
  inputId,
  errors,
  handelChangeInput,
}: any) => {
  const [postes, setPostes] = useState<SecteurPoste[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const inputClassName =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  //   const labelClassName =
  //     "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  useEffect(() => {
    const fetchSecteurs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/secteurs.json");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des secteurs d'activité");
        }
        const data: SecteurPoste[] = await response.json();
        setPostes(data);
      } catch (error) {
        setError("Erreur lors du chargement des secteurs d'activité " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchSecteurs();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Chargement des postes ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Select
          //className={`${inputClassName} ${errors ? "border-red-500" : ""}`}
          className={`${inputClassName} ${
            errors && !inputValue
              ? "border-red-500"
              : inputValue && errors !== ""
              ? "border-blue-500"
              : ""
          }`}
          name={inputName}
          id={inputId}
          value={inputValue}
          onChange={(e) => handelChangeInput(e)}
        >
          <option value="">Sélectionnez</option>
          {postes.map((poste) => (
            <option key={poste.code} value={poste.libelle}>
              {poste.libelle}
            </option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default SecteurPostes;
