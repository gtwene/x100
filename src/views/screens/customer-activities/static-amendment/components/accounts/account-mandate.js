import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ListOfValue from "../../../../../../components/others/Fields/ListOfValue";
import SelectField from "../../../../../../components/others/Fields/SelectField";
import Label from "../../../../../../components/others/Label/Label";
import PreviewModalAccountMandate from "./preview-modal-account-mandate";


const AccountMandate = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const customTheme = JSON.parse(localStorage.getItem("theme"));

  const bgColor =
    `url(` +
    window.location.origin +
    `/assets/images/background/` +
    customTheme.theme.backgroundImage +
    `)`;



  return (
    <div>
      <div
        className={`border p-2 font-extrabold`}
        style={{ background: bgColor }}
      ></div>
      <div>
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}

          <div className="w-full max-w-2xl">
            <div
              className="text-center font-bold p-2 border"
              style={{ background: bgColor }}
            >
              Account Mandate Information
            </div>

            {/* Enter Account Number */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Enter Account Number" required={true} />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/*Account Name*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Account Name" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/*Original Mandate*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Original Mandate" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* New Mandate */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="New Mandate" required={true} />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* Source Document */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Source Document" required={true} />
                </div>
                <div class="md:w-2/3 md:ml-10 ">
                  <input className="risk_label" type="text" />
                </div>
                <div className="border rounded hover:bg-green-500" style={{ background:bgColor }}>
                  <button className="">View Document</button>
                </div>
              </div>
            </div>
          </div>
          {/* **************************************** */}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="md:ml-2">
          <Button className="bg-blue-500 md:mt-5" onClick={toggleModal}>
            Preview Changes
          </Button>
          {showModal && (
            <PreviewModalAccountMandate
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </div>

        <div>
          <Button className="bg-blue-500 md:mt-5">New</Button>

          <Button className="bg-blue-500 md:mt-5">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountMandate;
