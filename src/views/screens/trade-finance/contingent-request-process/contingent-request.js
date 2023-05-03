import React, {useState} from 'react'
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import RequestDetails from './components/request-details';
import RequestWriteup from './components/request-writeup-and-summary';
import Document from './components/document';

function ContingentRequest() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
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
        {count: 1, number: 'Request Details', content: <RequestDetails /> },
        {count: 2, number: 'Request Writeup and Summary', content: <RequestWriteup /> },
        {count: 3, number: 'Document', content: <Document/> },
      ];

      const custom = `url(` +
      window.location.origin +
      `/assets/images/headerBackground/` +
      getTheme.theme.headerImage +
    `)`;
    
  return (
    <div style={{zoom:'0.85'}}>
        <div className="w-full">
          <div
            style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }}
            centered
          >
            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button
                className="btn btn-secondary"
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`,
                }}
              >
                <MDBIcon
                  style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="file-alt"
                />
                <br />
                New
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="sync"
                />
                <br />
                Refresh
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="calendar-times"
                />
                <br />
                Delete
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="thumbs-up"
                />
                <br />
                Authorise
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="eye"
                />
                <br />
                View
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button
                className="btn btn-secondary"
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`,
                }}
              >
                <MDBIcon
                  style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="check"
                />
                <br />
                Ok
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="ban"
                />
                <br />
                Cancel
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="thumbs-down"
                />
                <br />
                Reject
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="question-circle"
                />
                <br />
                Help
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button
                className="btn btn-secondary"
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`,
                }}
              >
                <MDBIcon
                  style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="sign-out-alt"
                />
                <br />
                Exit
              </button>
            </span>
            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button
                className="btn btn-secondary"
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`,
                }}
              >
                Rejected Requests
              </button>
            </span>
          </div>
        </div>
        <hr />
    <div className="bg-gray-100 p-2">
      <ul className="stepper rounded mb-4">
        {steps.map((step, index) => (
          <li
            key={step.number}
            className={`stepper__item cursor-pointer flex h-10 items-center justify-center `}
            style={{
              background: index === activeStep ? custom : "",
              color: index === activeStep ? "white" : "",
              border: index < activeStep ? "1px" : "",
              borderRadius: index < activeStep ? "10%" : "",
            }}
            onClick={() => handleClick(index)}
          >
            <div className='flex space-x-5 items-center justify-center'>
              <div className="border-2 rounded-full w-7 h-7 flex justify-center items-center p-1 bg-black text-white">{step.count}</div> 
              <div>{step.number}</div>
           </div>
          </li>
        ))}
      </ul>
      {steps[activeStep].content}
      <div className="flex justify-between mt-4">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            activeStep === 0 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Back
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r ${
            activeStep === steps.length - 1 ? 'cursor-not-allowed opacity-50' : ''
          }`}
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  )
}

export default ContingentRequest