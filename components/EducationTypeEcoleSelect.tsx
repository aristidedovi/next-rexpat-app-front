import React from "react";

const EducationTypeEcoleSelect = ({
  index,
  child,
  handleChildInfoChange,
}: any) => {
  //const [selectedValue, setSelectedValue] = useState("");
  const inputClassName =
    "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200 transition-colors duration-200";

  //   const handleChange = (e: any) => {
  //     setSelectedValue(e.target.value);
  //   };

  return (
    <div className="w-full max-w-xs mx-auto">
      <label
        htmlFor={`typeEcole-${index}`}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        Type d'école
      </label>
      <select
        //value={selectedValue}
        id={`typeEcole-${index}`}
        value={child.typeEcole}
        //onChange={handleChange}
        onChange={(e) =>
          handleChildInfoChange(index, "typeEcole", e.target.value)
        }
        className={inputClassName}
        //className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Sélectionnez une option</option>

        <optgroup label="Privée">
          <option value="Privée Sénégalaise">Sénégalaise</option>
          <option value="Privée Franco-Arabe">Franco-Arabe</option>
          <option value="Privée Arabe">Arabe</option>
        </optgroup>

        <optgroup label="Internationale">
          <option value="Internationale Bilingue">Bilingue</option>
          <option value="Internationale Française">Français</option>
          <option value="Internationale Américaine">Américaine</option>
        </optgroup>

        <optgroup label="Autres">
          <option value="autres">Autres école</option>
          {/* <option value="riz">Riz</option>
          <option value="pates">Pâtes</option> */}
        </optgroup>
      </select>

      {/* {selectedValue && (
        <p className="mt-4 text-sm text-gray-600">
          Vous avez sélectionné : {selectedValue}
        </p>
      )} */}
    </div>
  );
};

export default EducationTypeEcoleSelect;
