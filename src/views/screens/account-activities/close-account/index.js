import React, { useState, useEffect } from "react";
import axios from "axios";
import Label from "../../../../components/others/Label/Label";
import ListOfValue from "../../../../components/others/Fields/ListOfValue";
import SelectField from '../../../../components/others/Fields/SelectField'
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
function CloseAccount({ data }) {
  const [themeState, setThemeState] = useState(themes.theme1);
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

  return (
    <div>
      <div className="border rounded">
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}
          <div className="w-full border shadow bg-white max-w-2xl">
            {/* Account Number */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Account Number" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="Number" />
                </div>
              </div>
            </div>

            {/* Transfer Type */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Transfer Type" />
                </div>
                <div class="md:w-2/3 md:mr-3">
                  <SelectField first_option="None" second_option="Trans" />
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
                  <input class="my_inputs" type="text" readOnly />
                </div>
              </div>
            </div>

            {/* Currency */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Currency" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="Number" readOnly />
                </div>
              </div>
            </div>

            {/* Product */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Product" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="Number" readOnly />
                </div>
              </div>
            </div>

            {/* Branch */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Branch" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="Number" readOnly />
                </div>
              </div>
            </div>

            {/* Account Status */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Account Status" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="Number" readOnly />
                </div>
              </div>
            </div>

            {/* Date Opened */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Date Opened" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="Number" readOnly />
                </div>
              </div>
            </div>

            {/* Date Of Last Activity */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Date Of Last Activity" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="Number" readOnly />
                </div>
              </div>
            </div>

            {/* Level */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Level" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="Number" readOnly />
                </div>
              </div>
            </div>

            {/* Transfer Account Number */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Transfer Account Number " />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Closure Reason */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Closure Reason" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <textarea class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Source Document */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Source Document" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>
          </div>
          {/* **************************************** */}

          {/* Second Side */}
          {/* Second Side */}
          {/* Second Side */}
          <div className="border w-full max-w-2xl bg-blue-50 md:p-5 shadow ">
            <div className="flex justify-center font-extrabold text-blue-500">BALANCE</div>
            <hr className="p-1"/>
            {/* Customer Status */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Customer Status " />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Accrued Interest */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Accrued Interest" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Accrued OD Amount */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Accrued OD Amount" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* COT Amount */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="COT Amount" required={true} />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Accrued Fees*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Accrued Fees" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Current Balance*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Current Balance" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Available Balance */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Available Balance" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Total Charges*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Total Charges" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseAccount;
