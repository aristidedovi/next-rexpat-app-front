import React from "react";

const EmailInput = ({ emploiEmail, handelChangeInput }: any) => {
  const inputClassName =
    "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const labelClassName =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  return (
    <div>
      <div className="lg:my-4 sm:my-2">
        <label htmlFor="emploiEmail" className={labelClassName}>
          Adresse email
        </label>
        <input
          placeholder="Ex: nom@gmail.com"
          type="text"
          name="emploiEmail"
          value={emploiEmail}
          onChange={handelChangeInput}
          id="emploiEmail"
          className={inputClassName}
        />
      </div>
    </div>
  );
};

export default EmailInput;
