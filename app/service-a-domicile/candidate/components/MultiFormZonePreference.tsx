import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";
import { Candidat } from "./CandidatForm";

// Liste des quartiers
const quartiersDAKAR = [
  "Almadies",
  "Balmadies",
  "Baye Laye",
  "Cité Biagui",
  "Cocody",
  "Dakar Plateau",
  "Fann Résidence",
  "Grand Dakar",
  "HLM",
  "Hann Maristes",
  "Liberté",
  "Mermoz",
  "Ngor",
  "Ouakam",
  "Parcelles Assainies",
  "Point E",
  "Sacré Cœur",
  "Sicap Baobabs",
  "Tedjane",
  "Yoff",
] as const;

type QuartierDakar = (typeof quartiersDAKAR)[number];

interface MultiSelectQuartiersProps {
  zonePreference: string[];
  handelChangeInput: (
    field: keyof Candidat,
    e: { target: { name: string; value: string | string[] } }
  ) => void;
}

const MultiFormQuartiers: React.FC<MultiSelectQuartiersProps> = ({
  zonePreference,
  handelChangeInput,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] =
    useState<string[]>(zonePreference);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSelectedValues(zonePreference);
  }, [zonePreference]);

  const toggleOption = (
    option: QuartierDakar,
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const newValues = selectedValues.includes(option)
      ? selectedValues.filter((item) => item !== option)
      : [...selectedValues, option];

    setSelectedValues(newValues);

    handelChangeInput("zonePreference", {
      target: {
        name: "zonePreference",
        value: newValues,
      },
    });
  };

  const removeOption = (
    option: string,
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    const newValues = selectedValues.filter((item) => item !== option);

    setSelectedValues(newValues);

    handelChangeInput("zonePreference", {
      target: {
        name: "zonePreference",
        value: newValues,
      },
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Quartiers préférés
      </label>

      <div className="relative" ref={dropdownRef}>
        <div
          className="min-h-[41px] p-1.5 border rounded-md cursor-pointer hover:border-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-wrap gap-1">
            {selectedValues.length > 0 ? (
              selectedValues.map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-2 py-0.5 rounded-md"
                >
                  {value}
                  <button
                    type="button"
                    onClick={(e) => removeOption(value, e)}
                    className="ml-1 hover:text-blue-900"
                    aria-label={`Supprimer ${value}`}
                  >
                    <X size={14} />
                  </button>
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-950">
                Sélectionnez des quartiers
              </span>
            )}
          </div>

          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer la liste" : "Ouvrir la liste"}
          >
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {isOpen && (
          <div
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
            role="listbox"
            aria-multiselectable="true"
          >
            {quartiersDAKAR.map((quartier) => (
              <div
                key={quartier}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedValues.includes(quartier) ? "bg-blue-50" : ""
                }`}
                onClick={(e) => toggleOption(quartier, e as any)}
                role="option"
                aria-selected={selectedValues.includes(quartier)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(quartier)}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleOption(quartier, e);
                    }}
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    aria-label={`Sélectionner ${quartier}`}
                  />
                  <span className="ml-2">{quartier}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiFormQuartiers;
