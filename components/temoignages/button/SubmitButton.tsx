import React from "react";

const SubmitButton = ({ isLoading, handleSubmitFormData }: any) => {
  return (
    <div>
      <button
        type="button"
        disabled={isLoading}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleSubmitFormData}
      >
        {isLoading ? "En cours..." : "Soumettre"}
      </button>
    </div>
  );
};

export default SubmitButton;