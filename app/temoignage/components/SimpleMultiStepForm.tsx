"use client";

import React, { useEffect, useState, FC } from "react";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";
import StepFinal from "./StepFinal";
import StepFirst from "./StepFirst";
import StepE from "./StepE";
import {
  InitialFormData,
  initialFormDataRexpat,
} from "@/models/temoignage/model";
import { validateFormIG } from "@/libs/temoignage/validationFormIg";
import { validateFormEmploi } from "@/libs/temoignage/validateFormEmploi";
import {
  EducationErrors,
  validateFormEducation,
} from "@/libs/temoignage/validateFormEducation";
import { validateFormLogement } from "@/libs/temoignage/validateFormLogement";
import {
  stepsArray,
  stepsArrayDetails,
} from "@/libs/temoignage/stepsArrayDetails";

interface SimpleMultiStepFormProps {
  showStepNumber: boolean;
}

const SimpleMultiStepForm: FC<SimpleMultiStepFormProps> = ({
  showStepNumber,
}) => {
  const [step, setStep] = useState<string>("I");
  const [formData, setFormData] = useState<InitialFormData>(
    initialFormDataRexpat
  );
  const [errorsIG, setErrorsIG] = useState<Record<string, string>>({});
  const [errorsEmploi, setErrorsEmploi] = useState<Record<string, string>>({});
  const [errorsLogement, setErrorsLogement] = useState<Record<string, string>>(
    {}
  );
  const [errorsEducation, setErrorsEducation] = useState<
    Partial<EducationErrors>
  >({});

  const [isIGFormValidate, setIsIGFormValidate] = useState<boolean>(true);
  const [isEmploiFormValidate, setIsEmploiFormValidate] =
    useState<boolean>(true);
  const [isEducationFormValidate, setIsEducationFormValidate] =
    useState<boolean>(true);
  const [isLogementFormValidate, setIsLogementFormValidate] =
    useState<boolean>(true);
  // const [istransportFormValidate, setIsTransportFormValidate] =
  //   useState<boolean>(true);

  const stepConditions: Record<string, boolean> = {
    A: true,
    B: formData.isEmploi,
    C: formData.isEducation,
    D: formData.isLogement,
    E: formData.isTransport,
  };

  const [isLoading, setIsLoading] = useState(false);

  const handelNextStep = (): void => {
    if (step === "I") {
      setStep("A");
    } else if (
      step === "A" &&
      validateFormIG(formData, setErrorsIG, setIsIGFormValidate)
    ) {
      if (formData.isEmploi) {
        setStep("B");
      } else if (formData.isEducation) {
        setStep("C");
      } else if (formData.isLogement) {
        setStep("D");
      } else if (formData.isTransport) {
        setStep("E");
      }
    } else if (
      step === "B" &&
      validateFormEmploi(formData, setErrorsEmploi, setIsEmploiFormValidate)
    ) {
      if (formData.isEducation) {
        setStep("C");
      } else if (formData.isLogement) {
        setStep("D");
      } else if (formData.isTransport) {
        setStep("E");
      }
    } else if (
      step === "C" &&
      validateFormEducation(
        formData,
        setErrorsEducation,
        setIsEducationFormValidate
      )
    ) {
      if (formData.isLogement) {
        setStep("D");
      } else if (formData.isTransport) {
        setStep("E");
      }
    } else if (
      step === "D" &&
      validateFormLogement(
        formData,
        setErrorsLogement,
        setIsLogementFormValidate
      )
    ) {
      if (formData.isTransport) {
        setStep("E");
      }
    }
  };

  const handelPrevStep = (): void => {
    if (step === "E") {
      if (formData.isLogement) {
        setStep("D");
      } else if (formData.isEducation) {
        setStep("C");
      } else if (formData.isEmploi) {
        setStep("B");
      } else {
        setStep("A");
      }
    } else if (step === "D") {
      if (formData.isEducation) {
        setStep("C");
      } else if (formData.isEmploi) {
        setStep("B");
      } else {
        setStep("A");
      }
    } else if (step === "C") {
      if (formData.isEmploi) {
        setStep("B");
      } else {
        setStep("A");
      }
    } else if (step === "B") {
      setStep("A");
    } else if (step === "A") {
      setStep("I");
    }
  };

  const handelChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    //const { name, value } = event.target;
    const { name } = event.target;
    let fieldValue: string | boolean;
    //console.log(event.target.value);

    if (
      name === "agreeToTerms" ||
      name === "isEmploi" ||
      name === "isEducation" ||
      name === "isLogement" ||
      name === "isTransport"
    ) {
      fieldValue = event.target.checked;
    } else {
      fieldValue = event.target.value;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handelBlur = (e: any): void => {
    const { name } = e.target;
    let fieldValue: string | boolean;

    fieldValue = e.target.value;

    // Vérifie si la valeur est inférieure à 16 et la corrige
    if (name === "age" && Number(fieldValue) < 16) {
      //console.log("moins de 16 ans");
      fieldValue = ""; // Fixe la valeur minimale si elle est en dessous
    }

    // Vérifie si la valeur est inférieure à 0 et la corrige
    if (name === "nombre_enfants" && Number(fieldValue) < 0) {
      fieldValue = "";
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmitFormData = async () => {
    if (!formData.agreeToTerms) {
      alert("Error!!!!!! You must agree to Terms of Services!!!");
    } else {
      if (
        (validateFormIG(formData, setErrorsIG, setIsIGFormValidate) &&
          validateFormEmploi(
            formData,
            setErrorsEmploi,
            setIsEmploiFormValidate
          ) &&
          formData.isEmploi === true) ||
        (validateFormEducation(
          formData,
          setErrorsEducation,
          setIsEducationFormValidate
        ) &&
          formData.isEducation === true) ||
        (validateFormLogement(
          formData,
          setErrorsLogement,
          setIsLogementFormValidate
        ) &&
          formData.isLogement === true)
      ) {
        setIsLoading(true);

        try {
          // const response = await fetch("/api/create", {
          //   method: "POST",
          //   headers: {
          //     "Content-type": "application/json",
          //   },
          //   body: JSON.stringify(formData),
          // });
          // const newIg = await response.json();
          //console.log("Information created", newIg);
          //alert("Data created successfully");
          setStep("Final");

          // if (response.ok) {
          //   const newIg = await response.json();
          //   console.log("Ingomation created", newIg);
          //   setStep("Final");
          // }
          // else {
          //   console.error("Failde to create user");
          // }
        } catch (error) {
          console.error("Error during submission:", error);
          alert("Something went wrong");
        } finally {
          setIsLoading(false);
        }
      } else if (!validateFormIG(formData, setErrorsIG, setIsIGFormValidate)) {
        console.log("Information general form not validate!");
      }
    }
  };

  const setStepForm = (item: any) => {
    setStep(item);

    if (
      item === "B" &&
      validateFormIG(formData, setErrorsIG, setIsIGFormValidate) === true
    ) {
      setIsIGFormValidate(true);
    }

    if (
      item === "C" &&
      validateFormEmploi(formData, setErrorsEmploi, setIsEmploiFormValidate) ===
        true
    ) {
      setIsEmploiFormValidate(true);
    }

    if (
      item === "D" &&
      validateFormEducation(
        formData,
        setErrorsEducation,
        setIsEducationFormValidate
      ) === true
    ) {
      setIsEducationFormValidate(true);
    }

    if (
      item === "E" &&
      validateFormLogement(
        formData,
        setErrorsLogement,
        setIsLogementFormValidate
      ) === true
    ) {
      setIsLogementFormValidate(true);
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const getBorderColor = (
    item: string,
    currentStep: string,
    isIGValidate: boolean,
    isEmploiValidate: boolean,
    isEducationValidate: boolean,
    isLogementValidate: boolean
  ): string => {
    // Couleur par défaut
    let borderColor = "border-gray-500 dark:border-gray-400";

    // Étape active
    if (item === currentStep) {
      borderColor = "border-blue-600 dark:border-blue-500";
    }

    // Validation des formulaires
    if (
      (item === "A" && !isIGValidate) ||
      (item === "B" && !isEmploiValidate) ||
      (item === "C" && !isEducationValidate) ||
      (item === "D" && !isLogementValidate)
    ) {
      borderColor = "border-red-600 dark:border-red-500";
    }

    return borderColor;
  };

  const renderTopStepNumbers = (): JSX.Element | null => {
    if (!showStepNumber || step === "Final" || step === "I") {
      return null;
    }
    return (
      <section className="mt-2 mb-4 flex justify-center">
        <ol className="items-center justify-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
          {stepsArray.map((item) => {
            const stepDetail = stepsArrayDetails.find(
              (detail) => detail.id === item
            );

            return (
              stepConditions[item] && (
                <li
                  key={item}
                  //onClick={() => setStep(item)}
                  onClick={() => setStepForm(item)}
                  className={`flex items-center space-x-2.5 rtl:space-x-reverse cursor-pointer ${
                    item === step
                      ? "text-blue-600 dark:text-blue-500"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  <span
                    className={`
                    flex items-center justify-center 
                    w-8 h-8 
                    border rounded-full 
                    shrink-0 
                    ${getBorderColor(
                      item,
                      step,
                      isIGFormValidate,
                      isEmploiFormValidate,
                      isEducationFormValidate,
                      isLogementFormValidate
                    )}
                  `}
                  >
                    {item}
                  </span>
                  <span>
                    <h3 className="font-medium leading-tight">
                      {stepDetail?.label}
                    </h3>
                    <p className="text-sm">{stepDetail?.description}</p>
                  </span>
                </li>
              )
            );
          })}
        </ol>
      </section>
    );
  };

  return (
    <div className="w-[1000px] max-w-full px-6 py-1 mx-auto rounded-lg border-2 border-dotted border-sky-300">
      <form>
        {renderTopStepNumbers()}
        {/* <p>dsfsddsd</p> */}
        {step === "I" ? (
          <StepFirst
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelNextStep={handelNextStep}
          />
        ) : null}
        {step === "A" ? (
          <StepA
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelNextStep={handelNextStep}
            handelPrevStep={handelPrevStep}
            handelBlur={handelBlur}
            errors={errorsIG}
            isLoading={isLoading}
          />
        ) : null}
        {step === "B" && formData.isEmploi === true ? (
          <StepB
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelNextStep={handelNextStep}
            handelPrevStep={handelPrevStep}
            handleSubmitFormData={handleSubmitFormData}
            errorsEmploi={errorsEmploi}
            isLoading={isLoading}
          />
        ) : null}
        {step === "C" && formData.isEducation === true ? (
          <StepC
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelNextStep={handelNextStep}
            handelPrevStep={handelPrevStep}
            handelBlur={handelBlur}
            handleSubmitFormData={handleSubmitFormData}
            errorsEducation={errorsEducation}
            isLoading={isLoading}
          />
        ) : null}
        {step === "D" && formData.isLogement === true ? (
          <StepD
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelNextStep={handelNextStep}
            handelPrevStep={handelPrevStep}
            handleSubmitFormData={handleSubmitFormData}
            errorsLogement={errorsLogement}
          />
        ) : null}
        {step === "E" && formData.isTransport === true ? (
          <StepE
            formData={formData}
            handelChangeInput={handelChangeInput}
            handelPrevStep={handelPrevStep}
            handleSubmitFormData={handleSubmitFormData}
          />
        ) : null}
        {step === "Final" ? <StepFinal /> : null}
      </form>
    </div>
  );
};

export default SimpleMultiStepForm;
