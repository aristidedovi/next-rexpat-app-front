import { Select } from "@headlessui/react";
import React, { useEffect, useState } from "react";

interface SecteurActivite {
  code: string;
  libelle: string;
}

const SecteurActivites = ({
  inputName,
  inputValue,
  inputId,
  errors,
  handelChangeInput,
}: any) => {
  const [secteurs, setSecteurs] = useState<SecteurActivite[]>([]);
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
        const data: SecteurActivite[] = await response.json();
        setSecteurs(data);
      } catch (error) {
        setError("Erreur lors du chargement des secteurs d'activité", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSecteurs();
  }, []);
  return (
    <div>
      {loading ? (
        <p>Chargement des secteurs ...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Select
          className={`${inputClassName} ${errors ? "border-red-500" : ""}`}
          name={inputName}
          id={inputId}
          value={inputValue}
          onChange={(e) => handelChangeInput(e)}
        >
          <option value=""> Sélectionner un secteur d'activité</option>
          {secteurs.map((secteur) => (
            <option key={secteur.code} value={secteur.libelle}>
              {secteur.libelle}
            </option>
          ))}
        </Select>
      )}
    </div>
  );
};

export default SecteurActivites;
