import React, { useState } from "react";
import Address from "./relation/address";
import Contact from "./relation/contact";
import Employment from "./relation/employment";
import Hobby from "./relation/hobby";
import OtherBankDetails from "./relation/other-bank-details";
import RelationInfo from "./relation/relation-info";

function Relation() {
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

  const customTheme = JSON.parse(localStorage.getItem("theme"));

  const custom =
    `url(` +
    window.location.origin +
    `/assets/images/headerBackground/` +
    customTheme.theme.headerImage +
    `)`;

  const steps = [
    {
      count: 1,
      number: "Relation Info",
      content: (
        <div>
          <h1></h1>
          <RelationInfo />
        </div>
      ),
    },
    {
      count: 2,
      number: "Address",
      content: (
        <div>
          <h1></h1>
          <p>
            <Address />
          </p>
        </div>
      ),
    },
    {
      count: 3,
      number: "Employment",
      content: (
        <div>
          <h1 className="text-center">Employment Details of UNION1494</h1>
          <p>
            <Employment />
          </p>
        </div>
      ),
    },
    {
      count: 4,
      number: "Contact",
      content: (
        <div>
          <h1 className="text-center">Contact Details of UNION1494</h1>
          <p>
            <Contact />
          </p>
        </div>
      ),
    },
    {
      count: 5,
      number: "Other Bank Details",
      content: (
        <div>
          <h1 className="text-center">Other Bank Details of UNION1494</h1>
          <p>
            <OtherBankDetails />
          </p>
        </div>
      ),
    },
    {
      count: 6,
      number: "Hobby",
      content: (
        <div>
          <h1></h1>
          <p>
            <Hobby />
          </p>
        </div>
      ),
    },
  ];

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

export default Relation;
