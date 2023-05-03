import React, { useState, useEffect } from "react";
import axios from "axios";
import Label from "../../../../../../components/others/Label/Label";
import ListOfValue from "../../../../../../components/others/Fields/ListOfValue"
import { Button } from "react-bootstrap";
import PreviewModal from "./preview-modal";

const host = window.location.host;

const themes = {
  // default color
  defaultColorTheme: {
    backgroundColor: "#fff",
    backgroundImage: `url("http://${host}/assets/purple.jpeg")`,
    headerColor: "#845ef6",
    buttonColor: "#845ef6",
    nextColor: "violet",
  },

  // blue
  theme1: {
    backgroundColor: "#c8d6e8",
    backgroundImage: `url("http://${host}/assets/blue.png")`,
    headerColor: "rgb(21 163 183)",
    buttonColor: "rgb(66, 157, 232)",
    nextColor: "cyan",
  },

  // red
  theme2: {
    backgroundColor: "#facfcf",
    backgroundImage: `url("http://${host}/assets/redwall.jpeg")`,
    headerColor: "#ed716d",
    buttonColor: "#ed716d",
    nextColor: "red",
  },
  // grape or violet
  theme3: {
    backgroundColor: "#f2dcfa",
    backgroundImage: `url("http://${host}/assets/purpr.webp")`,
    headerColor: "#995ead",
    buttonColor: "#c895f5",
    nextColor: "grape",
  },
  // orange
  theme4: {
    backgroundColor: "#faddca",
    backgroundImage: `url("http://${host}/assets/orann.jpeg")`,
    headerColor: "#fc9403",
    buttonColor: "#edaf6d",
    nextColor: "orange",
  },

  // green
  theme5: {
    backgroundColor: "#b1fcb2",
    backgroundImage: `url("http://${host}/assets/leaf.jpeg")`,
    headerColor: "#008000a7",
    buttonColor: "#4eb550",
    nextColor: "green",
  },
};
function CustomerInfo({ data }) {
  const [themeState, setThemeState] = useState(themes.theme1);
  const [showModal, setShowModal] = useState(false);
  // const [data, setData] = useState()

  // creating states to be used in the application
  const [permittedBal, setPermittedBal] = useState();
  const [availableBal, setAvailableBal] = useState();
  const [ledgerBal, setLedgerBal] = useState();
  const [accountBranch, setAccountBranch] = useState();
  const [transactionType, setTransactionType] = useState("CADD - CASH DEPOSIT");
  const handleEnter = () => {
    alert("Populate");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="border rounded">
        <div className="md:flex justify-center w-full ">
          {/* **************************************** */}
          <div className="w-full border shadow bg-white max-w-2xl md:p-2">
            {/* Customer Name */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Customer Name" required={true} />
                </div>
                <div className="md:w-2/3 md:mr-5">
                  <input class="my_inputs" type="text" readOnly />
                </div>
              </div>
            </div>

            {/* Customer Type */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Customer Type" required={true} />
                </div>
                <div className="md:w-2/3 md:mr-5">
                  <input class="my_inputs" type="text" readOnly />
                </div>
              </div>
            </div>

            {/* Customer Category */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Customer Category" required={true} />
                </div>
                <div class="md:w-2/3 md:mr-3">
                  <ListOfValue first_option="None" second_option="Trans" />
                </div>
              </div>
            </div>

            {/* Segment */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Segment" required={true} />
                </div>
                <div class="md:w-2/3 md:mr-3">
                  <ListOfValue first_option="None" second_option="Trans" />
                </div>
              </div>
            </div>

            {/* Sub Segment */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Sub Segment" required={true} />
                </div>
                <div class="md:w-2/3 md:mr-3">
                  <ListOfValue first_option="None" second_option="Trans" />
                </div>
              </div>
            </div>

            {/* Sector */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Sector" required={true} />
                </div>
                <div class="md:w-2/3 md:mr-3">
                  <ListOfValue first_option="None" second_option="Trans" />
                </div>
              </div>
            </div>

            {/* Sub Sector */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Transfer Type" required={true} />
                </div>
                <div class="md:w-2/3 md:mr-3">
                  <ListOfValue first_option="None" second_option="Trans" />
                </div>
              </div>
            </div>

            <Button className="bg-blue-300 md:mt-5" onClick={toggleModal}>
              Preview Changes
            </Button>
            {showModal && (
              <PreviewModal showModal={showModal} setShowModal={setShowModal} />
            )}
          </div>
          {/* **************************************** */}

          {/* Second Side */}
          {/* Second Side */}
          {/* Second Side */}
          <div className="border w-full max-w-2xl bg-blue-50 md:p-5 shadow ">
            {/* Swift Code */}
            <div class="w-full max-w-xl">
              <div class="md:flex md:items-center mb-2 md:ml-5">
                <div class="md:w-1/3">
                  <Label label="Swift Code" />
                </div>
                <div class="md:w-2/3">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            <div className="border md:ml-5 md:p-2">
              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">Deceased</label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">
                  Whereabout Unknown
                </label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">
                  Eligible for AR_AP Tracking
                </label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">MT920</label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">MT940</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
