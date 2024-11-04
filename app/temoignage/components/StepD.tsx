import React from "react";

const StepD = ({
  formData,
  handelChangeInput,
  handleSubmitFormData,
  handelPrevStep,
}: any) => {
  return (
    <div>
      <h1 className="mt-2 text-xl font-bold text-blue-900">
        Step D: Customer Financial Info
      </h1>
      <DataConfirmRow label="First Name: " value={formData.firstname} />
      <DataConfirmRow label="Last Name: " value={formData.lastname} />
      <DataConfirmRow label="Business Name: " value={formData.businessName} />
      <DataConfirmRow label="Business City: " value={formData.businessCity} />
      <DataConfirmRow
        label="Business Web Site: "
        value={formData.businessWebSite}
      />
      <DataConfirmRow label="Business Email: " value={formData.businessEmail} />
      <DataConfirmRow
        label="Income Per Month: "
        value={formData.incomePerMonth}
      />
      <DataConfirmRow label="Tax Percantage: " value={formData.taxPercantage} />
      <div className="my-4 flex items-center">
        <input
          type="checkbox"
          name="agreeToTerms"
          id="agreeToTerms"
          value={formData.agreeToTerms}
          onChange={(e) => handelChangeInput(e)}
          className="w-4 h-4 mr-2 accent-pink-300 focus:accent-pink-500"
        />
        <label htmlFor="agreeToTerms">I Agree to Terms of Services</label>
      </div>

      <div className="my-2 flex justify-between items-center">
        <button
          className="bg-yellow-400 px-4 py-2 rounded-xl"
          onClick={handelPrevStep}
        >
          Prev
        </button>

        <button
          className="bg-blue-400 px-4 py-2 rounded-xl"
          onClick={handleSubmitFormData}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepD;

// A separate component to sho data
const DataConfirmRow = ({ label, value }: any) => {
  return (
    <div className="my-3 border border-dashed border-gray-200 p-1 rounded-lg">
      <span className="mr-4 text-slate-500">{label}</span>
      <span className="mr-4 text-slate-900">{value}</span>
    </div>
  );
};
