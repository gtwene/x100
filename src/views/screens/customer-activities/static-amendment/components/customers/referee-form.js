import React, { useState, useEffect } from "react";
import axios from "axios";
import Label from "../../../../../../components/others/Label/Label";
import ListOfValue from "../../../../../../components/others/Fields/ListOfValue";
import { Button } from "react-bootstrap";
import DataTable from "../datatable-annex";
import SelectField from "../../../../../../components/others/Fields/ListOfValue";
import InputField from "../../../../../../components/others/Fields/InputField";
import PreviewModalReferees from "./preview-modal-referees";

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
function RefereeInfo({ data }) {
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

    const customTheme = JSON.parse(localStorage.getItem("theme"));

    const bgColor =
      `url(` +
      window.location.origin +
      `/assets/images/background/` +
      customTheme.theme.backgroundImage +
      `)`;

    const columns = [
      {
        name: "#",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Customer ID",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Customer Description",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Posting Date",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Date Of Incorp",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Created By",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Relationship Type",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
    ];

    const arr = ["man", "woman", "girl"];

  return (
    <div>
      <div className="border rounded">
        <div className=" ">
          {/* **************************************** */}
          <div className="w-full border shadow bg-white ">
            {/* Customer Name */}
            <DataTable columns={columns} arr={arr} />
          </div>
          {/* **************************************** */}

          <div className="text-center font-extrabold pb-2 pt-2">
            Account Referees
          </div>

          {/* Second Side */}
          {/* Second Side */}
          {/* Second Side */}
          <div className="md:flex border m-1 rounded bg-white shadow justify-center w-full">
            {/* **************************************** */}
            <div className="w-full max-w-2xl">
              {/* Type Of Referees */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Type Of Referees" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    <select className="risk_label" type="text">
                      <option></option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Account Number */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Account Number" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Bank Name */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Bank Name" required={true} />
                  </div>
                  <div className="md:w-2/4 ">
                    <ListOfValue />
                  </div>
                </div>
              </div>

              {/* Account Name */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Account Name" required={true} />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input className="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Residential Address */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Residential Address" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
                  </div>
                </div>
              </div>
            </div>
            {/* **************************************** */}

            {/* Second Side */}
            {/* Second Side */}
            {/* Second Side */}
            <div className="w-full max-w-2xl">
              {/* Email */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Email" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Relationship */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Relationship" required={true} />
                  </div>
                  <div className="md:w-2/4 ">
                    <ListOfValue />
                  </div>
                </div>
              </div>

              {/* Number Of Years Known */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Number Of Years Known" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Phone Number */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Phone Number" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="md:ml-2">
            <Button className="bg-blue-500 md:mt-5" onClick={toggleModal}>
              Preview Changes
            </Button>
            {showModal && (
              <PreviewModalReferees
                showModal={showModal}
                setShowModal={setShowModal}
              />
            )}
          </div>

          <div>
            <Button className="bg-blue-500 md:mt-5">
              New
            </Button>

            <Button className="bg-blue-500 md:mt-5">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefereeInfo;
