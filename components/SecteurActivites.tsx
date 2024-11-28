import { Select } from "@headlessui/react";
import React, { useEffect, useState } from "react";

interface SecteurActivite {
  code: string;
  libelle: string;
  postes: string[];
}

const SecteurActivites = ({
  inputName,
  inputValue,
  inputId,
  errors,
  errorsPoste,
  inputPoste,
  handelChangeInput,
  emploiSituationProActuelle,
}: any) => {
  const [secteurs, setSecteurs] = useState<SecteurActivite[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [postes, setPostes] = useState<string[]>([]);
  const [selectedSecteur, setSelectedSecteur] = useState<string>("");

  const inputClassName =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  //   const labelClassName =
  //     "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  useEffect(() => {
    const fetchSecteurs = async () => {
      try {
        setLoading(true);
        const response = await fetch("/secteursPostes.json");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des secteurs d'activité");
        }
        const data: SecteurActivite[] = await response.json();
        setSecteurs(data);

        // Find the selected sector and its postes after data is loaded
        const selectedSecteurObj = data.find(
          (secteur) => secteur.libelle === inputValue
        );

        // Update postes based on the selected sector
        if (selectedSecteurObj) {
          setPostes(selectedSecteurObj.postes);
          //console.log(selectedSecteurObj);
        }
      } catch (error) {
        setError("Erreur lors du chargement des secteurs d'activité " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchSecteurs();
  }, []);

  const handleSecteurChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLibelle = e.target.value;
    //console.log(selectedLibelle);
    setSelectedSecteur(selectedLibelle);

    // Find the selected sector and its postes
    const selectedSecteurObj = secteurs.find(
      (secteur) => secteur.libelle === selectedLibelle
    );

    // Update postes based on the selected sector
    setPostes(selectedSecteurObj ? selectedSecteurObj.postes : []);

    // Call the parent component's change handler
    handelChangeInput(e);
  };

  const handlePosteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Call the parent component's change handler
    handelChangeInput(e);
  };

  return (
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
      <div className="lg:my-4 sm:my-2">
        <label htmlFor="emploiSecteur" className={labelClassName}>
          Secteur d'activité*
        </label>
        {loading ? (
          <p>Chargement des secteurs ...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
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
              //onChange={(e) => handelChangeInput(e)}
              onChange={handleSecteurChange}
            >
              <option value="">Sélectionnez</option>
              {secteurs.map((secteur) => (
                <option key={secteur.code} value={secteur.libelle}>
                  {secteur.libelle}
                </option>
              ))}
              <option value="autres">Autres</option>
            </Select>
          </div>
        )}
      </div>

      <div className="lg:my-4 sm:my-2">
        <label htmlFor="emploiPoste" className={labelClassName}>
          Poste / Métier
          {emploiSituationProActuelle === "Salarie" ? "*" : ""}
        </label>
        {loading ? (
          <p>Chargement des postes ...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div>
            {inputValue === "autres" ? (
              <div>
                <input
                  placeholder="Ex: Chauffeur"
                  type="text"
                  name="emploiPoste"
                  value={inputPoste}
                  onChange={(e) => handelChangeInput(e)}
                  id="emploiPoste"
                  className={inputClassName}
                />
              </div>
            ) : (
              <div>
                {" "}
                <Select
                  className={`${inputClassName} ${
                    errorsPoste &&
                    !inputPoste &&
                    emploiSituationProActuelle !== "Entrepreneur" &&
                    emploiSituationProActuelle !== "Chômeur" &&
                    emploiSituationProActuelle !== "Etudiant"
                      ? "border-red-500"
                      : inputValue && errors !== ""
                      ? "border-blue-500"
                      : ""
                  }`}
                  name="emploiPoste"
                  id="emploiPoste"
                  value={inputPoste}
                  disabled={!selectedSecteur && inputPoste === ""}
                  onChange={handlePosteChange}
                >
                  <option value="">
                    {selectedSecteur && inputPoste === ""
                      ? "Sélectionnez un poste"
                      : "Sélectionnez d'abord un secteur"}
                  </option>
                  {postes.map((poste, index) => (
                    <option key={index} value={poste}>
                      {poste}
                    </option>
                  ))}
                </Select>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SecteurActivites;
