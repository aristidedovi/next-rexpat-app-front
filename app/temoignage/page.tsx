import React from "react";
import SimpleMultiStepForm from "./components/SimpleMultiStepForm";

const page = () => {
  return (
    <div>
      <div className="h-20"></div>
      <div className="bg-white rounded-lg mx-4 p-4">
        {/* <h1 className="text-blue-400 mx-auto text-2xl ">
          Simple Multi step Form
        </h1> */}
        {/* <br /> */}
        <SimpleMultiStepForm showStepNumber={true} />
      </div>
    </div>
  );
};

export default page;
