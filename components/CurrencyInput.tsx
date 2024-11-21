export default function CurrencyInput({
  handelChangeInput,
  inputLabel,
  inputName,
  inputId,
  inputValue,
  formErrors,
  inputDeviseValue,
  inputDeviseName,
  inputSituationProActuelle,
}: any) {
  const inputClassName =
    "w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const inputClassNameSelect =
    "p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-md focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  return (
    <div>
      <label htmlFor={inputId} className={labelClassName}>
        {inputLabel} {inputSituationProActuelle === "Chômeur" ? "" : "*"}
      </label>
      <div className="w-full">
        <input
          name={inputName}
          id={inputId}
          type="number"
          placeholder="Ex: 8000"
          value={inputValue}
          onChange={handelChangeInput}
          disabled={inputSituationProActuelle === "Chômeur"}
          //className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          //className={inputClassName}
          //className={`${inputClassName} ${formErrors ? "border-red-500" : ""}`}
          className={`${inputClassName} ${
            formErrors && !inputValue && inputSituationProActuelle !== "Chômeur"
              ? "border-red-500"
              : inputValue && formErrors !== ""
              ? "border-blue-500"
              : ""
          }`}
        />
        <select
          name={inputDeviseName}
          value={inputDeviseValue}
          onChange={handelChangeInput}
          className={inputClassNameSelect}
          disabled={inputSituationProActuelle === "Chômeur"}
          //className="p-2 border border-gray-300 bg-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="USD">USD</option>
          <option value="XOF">XOF</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    </div>
  );
}
