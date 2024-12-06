import React from "react";

const PrevButton = ({ handelPrevStep }: any) => {
  return (
    <div>
      <button
        type="button"
        className="text-white text-xs bg-gray-950 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        onClick={handelPrevStep}
      >
        <svg
          className="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0l4-4m-4 4l4 4"
          />
        </svg>
        <span className="sr-only">Precedent</span>
      </button>
    </div>
  );
};

export default PrevButton;
