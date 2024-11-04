import React from "react";

const StepC = ({
  formData,
  handelChangeInput,
  handelNextStep,
  handelPrevStep,
}: any) => {
  return (
    <div>
      <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step C: Customer Financial Info
      </h1>
      <div className="my-2">
        <label htmlFor="">Income Per Month</label>
        <input
          type="number"
          name="incomePerMonth"
          value={formData.incomePerMonth}
          onChange={(e) => handelChangeInput(e)}
          className="w-full outline-none border-gray-400 px-2 rounded-lg focus:border-blue-600"
        />
      </div>
      <div className="my-2">
        <label htmlFor="">Tax Percantage</label>
        <input
          type="number"
          name="taxPercantage"
          value={formData.taxPercantage}
          onChange={(e) => handelChangeInput(e)}
          className="w-full outline-none border-gray-400 px-2 rounded-lg focus:border-blue-600"
        />
      </div>
      <div className="my-2 flex justify-between items-center">
        <button
          className="bg-yellow-400 px-4 py-2 rounded-xl"
          onClick={handelPrevStep}
        >
          Prev
        </button>
        <button
          className="bg-gray-400 px-4 py-2 rounded-xl"
          onClick={handelNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepC;
