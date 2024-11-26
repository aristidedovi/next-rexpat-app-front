export default function EducationBudgetCurrencyInput({
  handelChangeInput,
  inputName,
  inputId,
  inputValue,
  //formErrors,
  inputDeviseValue,
  inputDeviseName,
  //inputSituationProActuelle,
  inputplaceholder,
}: any) {
  // const inputClassName =
  //   "w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-md focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  // const inputClassNameSelect =
  //   "p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-md focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  // const labelClassName =
  //   "block mb-2 text-sm font-medium text-gray-900 dark:text-white";

  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
        <input
          name={inputName}
          id={inputId}
          type="text"
          placeholder={inputplaceholder}
          value={inputValue}
          onChange={handelChangeInput}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm/6"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            name={inputDeviseName}
            value={inputDeviseValue}
            onChange={handelChangeInput}
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-900 focus:ring-2 sm:text-sm"
          >
            <option value="USD">USD</option>
            <option value="XOF">XOF</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
}
