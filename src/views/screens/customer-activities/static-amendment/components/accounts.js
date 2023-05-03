import React, { useState } from "react";
import AccountDetails from "./accounts/account-details";
import AccountMandate from "./accounts/account-mandate";

function Accounts() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClick = (index) => {
    setActiveStep(index);
  };

  const steps = [
    {
      count: 1,
      number: "Account Details",
      content: (
        <div>
          <h1></h1>
          <p>
            <AccountDetails />
          </p>
        </div>
      ),
    },
    {
      count: 2,
      number: "Account Mandate",
      content: (
        <div>
          <h1></h1>
          <p>
            <AccountMandate />
          </p>
        </div>
      ),
    },
  ];

  const customTheme = JSON.parse(localStorage.getItem("theme"));

  const custom =
    `url(` +
    window.location.origin +
    `/assets/images/headerBackground/` +
    customTheme.theme.headerImage +
    `)`;

  return (
    <div className="bg-gray-100 p-2">
      <ul className="stepper rounded mb-4">
        {steps.map((step, index) => (
          <li
            key={step.number}
            className="stepper__item cursor-pointer flex h-10 items-center justify-center"
            style={{
              background: index === activeStep ? custom : "",
              color: index === activeStep ? "white" : "",
              border: index < activeStep ? "1px" : "",
              borderRadius: index < activeStep ? "10%" : "",
            }}
            onClick={() => handleClick(index)}
          >
            <div className="flex space-x-5 items-center justify-center">
              <div className="border-2 rounded-full flex justify-center items-center w-7 h-7 p-1 bg-black text-white">
                {step.count}
              </div>
              <div>{step.number}</div>
            </div>
          </li>
        ))}
      </ul>
      {steps[activeStep].content}
      <div className="flex justify-between mt-4">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            activeStep === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Back
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r ${
            activeStep === steps.length - 1
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Accounts;
