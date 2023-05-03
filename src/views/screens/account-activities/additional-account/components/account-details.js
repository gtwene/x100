import React, { useState, useEffect } from "react";
import InputField from "../../../../../components/others/Fields/InputField";
import Label from "../../../../../components/others/Label/Label";
import SelectField from "../../../../../components/others/Fields/SelectField";
import ButtonComponent from "../../../../../components/others/Button/ButtonComponent";
import TextAreaField from "../../../../../components/others/Fields/TextArea";
import ListOfValue from "../../../../../components/others/Fields/ListOfValue";
import ButtonType from "../../../../../components/others/Button/ButtonType";
import axios from 'axios'
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
function AccountDetail({
  data,
  onChange,
  accountTypes,
  setAccountTypes,
  customerSegment,
  customerSubSegment,
  sector,
  subSector,
}) {
  const [themeState, setThemeState] = useState(themes.theme1);
 

  // creating states to be used in the application
  const [permittedBal, setPermittedBal] = useState();
  const [availableBal, setAvailableBal] = useState();
  const [ledgerBal, setLedgerBal] = useState();
  const [accountBranch, setAccountBranch] = useState();
  const [transactionType, setTransactionType] = useState("CADD - CASH DEPOSIT");
  const handleEnter = () => {
    alert("Populate");
  };

  return (
    <div>
      <div className="border rounded">
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}
          <div className="w-full max-w-2xl">
            {/* Customer ID */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Customer ID" required={true} />
                </div>
                <div className="md:w-2/4 ">
                  <ListOfValue  />
                </div>
              </div>
            </div>

            {/* Source Branch  */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Source Branch" />
                </div>
                <div className="md:w-2/3 md:mr-4">
                  <input className="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Account Name */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Account Name" />
                </div>
                <div className="md:w-2/3 md:mr-4">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Product Group */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Product Group" />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue  />
                </div>
              </div>
            </div>

            {/* Product Sub Group */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Product Sub Group" />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="90%"  />
                </div>
              </div>
            </div>

            {/* Currency */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Currency" />
                </div>
                <div className="md:w-2/3 ">
                  {/* <ListOfValue onChange={onChange.myMethod} /> */}
                  <ListOfValue />
                </div>
              </div>
            </div>

            {/* Account Mandate */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Account Mandate" />
                </div>
                <div className="md:w-2/3 ">
                  {/* <ListOfValue onChange={onChange.myMethod} /> */}
                  <ListOfValue />
                </div>
              </div>
            </div>

            {/* PC Code */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="PC Code" />
                </div>
                <div className="md:w-2/3 ">
                  {/* <ListOfValue onChange={onChange.myMethod} /> */}
                  <ListOfValue />
                </div>
              </div>
            </div>
          </div>
          {/* **************************************** */}

          {/* Second Side */}
          {/* Second Side */}
          {/* Second Side */}
          <div className="w-full max-w-2xl">
            {/* Customer Segment */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Customer Segment" />
                </div>
                <div className="md:w-2/3 ">
                  {/* <ListOfValue onChange={onChange.myMethod} /> */}
                  <ListOfValue />
                </div>
              </div>
            </div>

            {/* Customer Sub Segment */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Customer Sub Segment" />
                </div>
                <div className="md:w-2/3 ">
                  {/* <ListOfValue onChange={onChange.myMethod} /> */}
                  <ListOfValue inputWidth="100%" />
                </div>
              </div>
            </div>

            {/* Sector */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Sector" />
                </div>
                <div className="md:w-2/3 ">
                  {/* <ListOfValue data={sector} onChange={onChange.sector}  /> */}
                  <ListOfValue />
                </div>
              </div>
            </div>

            {/* Sub Sector */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Sub Sector" />
                </div>
                <div className="md:w-2/3 ">
                  {/* <ListOfValue data={subSector}  /> */}
                  <ListOfValue inputWidth="90%" />
                </div>
              </div>
            </div>

            {/* Freq Of Statement */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Freq Of Statement" />
                </div>
                <div class="md:w-2/3 ">
                  <SelectField first_option="None" second_option="Female" inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* Fx Category */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Fx Category" />
                </div>
                <div class="md:w-2/3">
                  <SelectField first_option="None" second_option="Female" />
                </div>
              </div>
            </div>

            {/* Start Date */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Start Date" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="date" />
                </div>
              </div>
            </div>

            {/* Statement Required */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Statement Required" />
                </div>
                <div class="md:w-2/3">
                  <SelectField first_option="None" second_option="Female" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetail;
