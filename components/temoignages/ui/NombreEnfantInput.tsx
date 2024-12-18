import React, { useEffect, useState } from "react";

interface SelectNombreEnfant {
  educationNombreEnfant: string;
  errorsEducation: string | undefined;
  handelChangeInput: (e: { target: { name: string; value: number } }) => void;
  name: string;
}

const NombreEnfantInput: React.FC<SelectNombreEnfant> = ({
  name,
  handelChangeInput,
  educationNombreEnfant,
}) => {
  //const [quantity, setQuantity] = useState(0);
  const [quantity, setQuantity] = useState(0);
  //const [error, setError] = useState("");

  useEffect(() => {
    setQuantity(parseInt(educationNombreEnfant));
  });

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    handelChangeInput({
      target: {
        name,
        value: newQuantity,
      },
    });
    //setError("");
  };

  const handleIncrement = () => {
    if (quantity < 99999) {
      updateQuantity(quantity + 1);
    } else {
      //setError("La quantité maximale est de 99999");
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      updateQuantity(quantity - 1);
    } else {
      //setError("La quantité minimale est de 0");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = Number(value);

    if (
      value === "" ||
      (numValue >= 0 && numValue <= 99999 && /^\d+$/.test(value))
    ) {
      updateQuantity(numValue);
    } else {
      //setError("Veuillez saisir un nombre entre 0 et 99999");
    }
  };

  return (
    <div>
      {/* <label
        htmlFor="quantity-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Nombre d'enfants scolarisés(0-9999) :
      </label> */}

      <div className="relative flex items-center max-w-[8rem]">
        <button
          type="button"
          onClick={handleDecrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h16"
            />
          </svg>
        </button>

        <input
          type="text"
          id="quantity-input"
          name={name}
          value={quantity}
          onChange={handleChange}
          className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="0"
          required
        />

        <button
          type="button"
          onClick={handleIncrement}
          className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>

      {/* {error && <p className="mt-2 text-sm text-red-500">{error}</p>} */}

      {/* <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        Veuillez sélectionner un nombre entre 0 et 99999.
      </p> */}
    </div>
  );
};

export default NombreEnfantInput;
