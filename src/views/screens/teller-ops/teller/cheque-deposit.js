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
import { APP_URL } from "../../../../config/constant";
import AccountSummary from "../../../../components/others/AccountSummary";

function CashDeposit() {
  const [response, setResponse] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  //dropzone section

  // function handleChange(e) {
  //   setAccountNumber(e.target.value);
  // }
  function onBlur(e) {
    setAccountNumber(e.target.value);
  }

  function onKeyPress(e) {
    if (e.key === "Enter") {
      setAccountNumber(e.target.value);
    }
  }
  return (
    <>
      <div className="">
        <div className=" rounded h-auto pb-2 pt-2  bg-gray-200">
          <div style={{ width: "100%" }} className="wrapper  px-2 md:flex  ">
            {/**Right Section */}
            <div className="md:w-[65%] rounded py-4 px-4  md:mr-2 md:mb-0 first shadow bg-white">
              <div className="flex space-x-1 mb-2">
                <div className="w-1/2">
                  <InputField
                    label={"Credit Account"}
                    labelWidth={"49%"}
                    inputWidth={"48%"}
                    onBlur={onBlur}
                    id="creditAccount"
                    // onChange={handleChange}
                    onKeyPress={onKeyPress}
                  />
                </div>
                <div className="w-1/2">
                  <InputField
                    label={"Account Name"}
                    labelWidth={"35%"}
                    inputWidth={"65%"}
                    disabled={true}
                    value={response?.accountName}
                  />
                </div>
              </div>
              <div>
                <div className="flex space-x-2 mb-2">
                  <div className="w-1/2">
                    <InputField
                      label={"Product Type"}
                      labelWidth={"49%"}
                      inputWidth={"51%"}
                      disabled={true}
                    />
                  </div>

                  <div className="w-1/2">
                    <InputField
                      label={"Source Branch"}
                      labelWidth={"40%"}
                      inputWidth={"60%"}
                      disabled={true}
                    />
                  </div>
                </div>
                <hr className="mt-0 my-3" />
              </div>

              <div className="bg-gray-200 my-[2px] py-[2px] px-[4px]">
                <div className="flex space-x-3 items-center">
                  <div className="w-[40%] mb-2">
                    <InputField
                      label={"Total Amount"}
                      labelWidth={"66%"}
                      inputWidth={"30%"}
                    />
                  </div>
                  <div className="w-1/3 mb-2">
                    <InputField
                      required={true}
                      label={"No. of Cheque(s)"}
                      labelWidth={"40%"}
                      inputWidth={"60%"}
                    />
                  </div>

                  {/*Right section*/}
                </div>
              </div>
              <hr className=" mt-0 my-3" />

              <div className="flex">
                <div className="w-1/2 mb-2">
                  <ListOfValue
                    label={"Cheque Category"}
                    type="number"
                    labelWidth={"48%"}
                    inputWidth={"45%"}
                    required={true}
                  />
                </div>
                <div className="w-1/2 mb-2">
                  <InputField
                    label={"Value Date"}
                    type="number"
                    labelWidth={"48%"}
                    inputWidth={"45%"}
                    required={true}
                  />
                </div>
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

                  {/*Right section*/}
                </div>
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
            <div className="md:w-[35%]  ">
              {/* <div>
                <div className="px-2">
                  <label className="text-lg text-gray-500 font-semibold">
                    BALANCE BEFORE
                  </label>

                  <hr className="mb-[10px] mt-0 my-3" />
                </div>
                <div
                  style={{ flex: 0.5, padding: "8px", borderRadius: "4px" }}
                  className="space-y-3"
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                    }}
                  ></div>

                  <InputField
                    label={"Customer Status"}
                    // type="number"
                    labelWidth={"55%"}
                    inputWidth={"45%"}
                    disabled={true}
                    value={response?.permittedBalance}
                  />
                  <InputField
                    label={"Account Source Branch"}
                    // type="number"
                    labelWidth={"55%"}
                    inputWidth={"45%"}
                    disabled={true}
                    value={response?.ledgerBalance}
                  />

                  <InputField
                    label={"Available Balance"}
                    // type="number"
                    labelWidth={"55%"}
                    inputWidth={"45%"}
                    disabled={true}
                    value={response?.availableLimit}
                  />
                  <InputField
                    label={"Ledger Balance"}
                    // type="number"
                    labelWidth={"55%"}
                    inputWidth={"45%"}
                    disabled={true}
                    value={response?.accountBranch}
                  />
                  <InputField
                    label={"Available Limit"}
                    // type="number"
                    labelWidth={"55%"}
                    inputWidth={"45%"}
                    disabled={true}
                    value={response?.accountBranch}
                  />
                </div>
              </div>
              <div className="mt-3">
                <div className="px-2">
                  <label className="text-lg text-gray-500 font-semibold">
                    BALANCE AFTER
                  </label>

                  <hr className="mb-[10px] mt-0 my-3" />
                </div>
                <div
                  style={{ flex: 0.5, padding: "8px", borderRadius: "4px" }}
                  className="space-y-3"
                >
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                    }}
                  ></div>

                  <InputField
                    label={"Available Balance"}
                    // type="number"
                    labelWidth={"55%"}
                    inputWidth={"45%"}
                    disabled={true}
                    value={response?.permittedBalance}
                  />
                  <InputField
                    label={"Ledger Balance"}
                    // type="number"
                    labelWidth={"55%"}
                    inputWidth={"45%"}
                    disabled={true}
                    value={response?.ledgerBalance}
                  />
                </div>
              </div> */}
              <AccountSummary accountNumber={accountNumber} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CashDeposit;
