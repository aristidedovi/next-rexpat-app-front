import React, { useState, useRef, useEffect } from "react";
//import { ChevronDown, X } from "lucide-react";

interface MultiSelectDropdownProps {
  educationTypeEcole: string[];
  errorsEducation: string | undefined;
  handelChangeInput: (e: { target: { name: string; value: string[] } }) => void;
  name: string;
}

// const typeEcole = [
//   "Privée",
//   "Publique",
//   "Internationale",
//   "A domicile",
// ] as const;

//type TypeEcole = (typeof typeEcole)[number];

const MultiInputBudget: React.FC<MultiSelectDropdownProps> = ({
  educationTypeEcole,
  errorsEducation,
  handelChangeInput,
  name,
}) => {
  //const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  const selectedValues = Array.isArray(educationTypeEcole)
    ? educationTypeEcole
    : [];

  // const toggleOption = (option: string): void => {
  //   const newValues = selectedValues.includes(option)
  //     ? selectedValues.filter((item) => item !== option)
  //     : [...selectedValues, option];

  //   handelChangeInput({
  //     target: {
  //       name,
  //       value: newValues,
  //     },
  //   });
  // };

  const removeOption = (
    option: string,
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    const newValues = selectedValues.filter((item) => item !== option);
    handelChangeInput({
      target: {
        name,
        value: newValues,
      },
    });
  };

  const addOption = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !selectedValues.includes(trimmedValue)) {
      const newValues = [...selectedValues, trimmedValue];
      handelChangeInput({
        target: {
          name,
          value: newValues,
        },
      });
      setInputValue("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        // setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const getBorderClassName = (): string => {
    if (errorsEducation && selectedValues.length === 0) {
      return "border-red-500";
    }
    if (selectedValues.length > 0 && errorsEducation) {
      return "border-blue-500";
    }
    return "border-gray-300";
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className={labelClassName}>
        Budget scolaire*
      </label>

      <div className="relative" ref={dropdownRef}>
        <div
          className={`min-h-[41px] p-1.5 border rounded-md ${getBorderClassName()} hover:border-gray-400`}
        >
          <div className="flex flex-wrap gap-1">
            {
              selectedValues.length > 0
                ? selectedValues.map((value) => (
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
                        {/* <X size={14} /> */}
                      </button>
                    </span>
                  ))
                : ""
              // <span className="text-sm text-gray-950">Sélectionnez</span>
            }

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addOption();
                }
              }}
              className="flex-grow outline-none bg-transparent ml-1 text-sm"
              placeholder="Entrez les budgets"
              list="ecole-types"
            />
          </div>

          {/* <button
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
          </button> */}
        </div>

        {/* {isOpen && (
          <div
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
            role="listbox"
            aria-multiselectable="true"
          >
            {typeEcole.map((niveau) => (
              <div
                key={niveau}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedValues.includes(niveau) ? "bg-blue-50" : ""
                }`}
                onClick={() => toggleOption(niveau)}
                role="option"
                aria-selected={selectedValues.includes(niveau)}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(niveau)}
                    onChange={() => toggleOption(niveau)}
                    className="h-4 w-4 text-blue-600 rounded"
                    aria-label={`Sélectionner ${niveau}`}
                  />
                  <span className="ml-2">{niveau}</span>
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>

      {/* <datalist id="ecole-types">
        {typeEcole.map((type) => (
          <option key={type} value={type} />
        ))}
      </datalist> */}

      {errorsEducation && (
        <p className="mt-1 text-xs text-red-500" role="alert">
          {errorsEducation}
        </p>
      )}
    </div>
  );
};

export default MultiInputBudget;
