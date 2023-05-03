import React, { useState } from "react";
import { GiReceiveMoney } from "react-icons/gi/index.esm";
import Label from "../../../../components/others/Label/Label";
import SelectField from "./components/SelectField";
import ButtonComponent from "../../../../components/others/Button/ButtonComponent";
import TextAreaField from "./components/TextArea";
import ListOfValue from "./components/ListOfValue";
import InputField from "./components/inputField";
import { DatePicker } from "antd";
import axios from "axios";
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import AccountSummary from "../../../../components/others/AccountSummary";
import { checkInternetConnection } from "./components/checkConnection";

function CashDeposit() {
  const [response, setResponse] = useState("");
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  const [accountNumber, setAccountNumber] = useState("");

  function onBlur(e) {
    checkInternetConnection();
    setAccountNumber(e.target.value);
  }

  function onKeyPress(e) {
    checkInternetConnection();
    if (e.key === "Enter") {
      setAccountNumber(e.target.value);
    }
  }

  function onChange(e) {
    setAccountNumber(e.target.value);
  }
  async function fetchAccountDetails() {
    const response = await axios.post(
      "http://localhost:4000/get-account-balance",
      { accountNumber: document.getElementById("accountNumber").value }
    );
    setResponse(response.data[0]);
  }
  console.log(response, "response");
  return (
    <>
      <div className="">
        <div className=" rounded h-auto pb-2 pt-2  bg-gray-200">
          <div style={{ width: "100%" }} className="wrapper  px-2 md:flex  ">
            {/**Right Section */}
            <div className="md:w-[70%] rounded py-4 px-4  md:mr-2 md:mb-0 first shadow bg-white">
              <div className="flex space-x-7 w-full items-center mb-2">
                <div className="md:w-[65%] w-full">
                  <ListOfValue
                    label={"Treasury Deal Number"}
                    labelWidth={"37%"}
                    inputWidth={"32%"}
                    required={true}
                    type={"number"}
                    id={""}
                  />
                </div>
              </div>
              <hr className="mb-[10px] mt-0 my-3" />
              <div>
                <div className="flex space-x-3 mb-2">
                  <div className="w-1/2">
                    <InputField
                      label={"Debit Account"}
                      labelWidth={"49%"}
                      inputWidth={"40%"}
                      onBlur={onBlur}
                      onKeyPress={onKeyPress}
                      onChange={onChange}
                    />
                  </div>
                  <div className="w-1/2">
                    <InputField
                      label={"Account Name"}
                      labelWidth={"30%"}
                      inputWidth={"70%"}
                      disabled={true}
                      value={response?.accountName}
                    />
                  </div>
                </div>
                <div className="flex space-x-2 mb-2">
                  <div className="w-1/2">
                    <InputField
                      label={"Currency"}
                      labelWidth={"49%"}
                      inputWidth={"20%"}
                      disabled={true}
                    />
                  </div>

                  <div className="w-1/2">
                    <InputField
                      label={"Product"}
                      labelWidth={"30%"}
                      inputWidth={"70%"}
                      disabled={true}
                    />
                  </div>
                </div>
                <hr className="mb-[10px] mt-0 my-3" />
              </div>

              <div className="w-1/2 mb-2">
                <ListOfValue
                  label={"Withdrawal currency "}
                  type="number"
                  labelWidth={"48%"}
                  inputWidth={"45%"}
                  required={true}
                />
              </div>
              <hr />

              <div className="bg-gray-200 my-[2px] py-[2px] px-[4px]">
                <div className="flex space-x-3 mt-2  items-center">
                  <div className="w-[40%] mb-2">
                    <InputField
                      label={"Withdrawal Amount"}
                      labelWidth={"66%"}
                      inputWidth={"30%"}
                    />
                  </div>
                  <div className="w-1/3 mb-2">
                    <InputField
                      label={"Reference"}
                      labelWidth={"40%"}
                      inputWidth={"60%"}
                    />
                  </div>
                  <div className="w-1/3 mb-2">
                    <InputField
                      label={"Value Date"}
                      labelWidth={"35%"}
                      inputWidth={"60%"}
                      type={"date"}
                    />
                  </div>

                  {/*Right section*/}
                </div>
                <div className="flex space-x-3 mt-2  items-center">
                  <div className="w-[40%] mb-2">
                    <InputField
                      label={"Debit Amount"}
                      labelWidth={"66%"}
                      inputWidth={"30%"}
                    />
                  </div>
                  <div className="w-1/3 mb-2">
                    <InputField
                      label={"Acqui Rate"}
                      labelWidth={"40%"}
                      inputWidth={"40%"}
                    />
                  </div>
                  <div className="w-1/3 mb-2">
                    <InputField
                      label={"Agreed Rate"}
                      labelWidth={"50%"}
                      inputWidth={"50%"}
                    />
                  </div>

                  {/*Right section*/}
                </div>
              </div>
              <hr />
              <div className="space-y-2 mt-2">
                <TextAreaField
                  labelWidth={"24.5%"}
                  inputWidth={"75%"}
                  label={"Narration"}
                  required={true}
                />

                <InputField
                  label={"Withdrawal By"}
                  required={true}
                  labelWidth={"24.5%"}
                  inputWidth={"70%"}
                />
                <InputField
                  label={"Contact / Telephone"}
                  type="number"
                  labelWidth={"24.5%"}
                  inputWidth={"35%"}
                  required={true}
                />
              </div>
            </div>

            {/**Left Section  */}
            <div className=" md:w-[30%]  ">
              <AccountSummary accountNumber={accountNumber} />
            </div>
          </div>
        </div>

        {/* <p>
              Timer :{timer}{" "}
              <button
                onClick={() => {
                  interval.current = setInterval(counter, 1000);
                }}
              >
                Start
              </button>
              <button onClick={() => clearInterval(interval.current)}>
                Stop
              </button>
            </p> */}
      </div>
    </>
  );
}

export default CashDeposit;
