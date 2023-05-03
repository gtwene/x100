import React, { useState } from "react";
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";

import ListOfValue from "./components/ListOfValue";
import InputField from "./components/inputField";
import Label from "../../../../components/others/Label/Label";
import SelectField from "./components/SelectField";
import ButtonComponent from "../../../../components/others/Button/ButtonComponent";
import TextAreaField from "./components/TextArea";
import AccountSummary from "../../../../components/others/AccountSummary";
import DataTable from "../../../../components/others/Datatable/DataTable";
import axios from "axios";

function ChequeWithdrawal() {
  const [response, setResponse] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

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
      <div className="w-full ">
        <div className=" rounded h-auto pb-2 pt-2  bg-gray-200">
          <div style={{ width: "100%" }} className="wrapper  px-2 md:flex  ">
            {/**Right Section */}
            <div className="md:w-[70%] rounded py-4 px-4  md:mr-2 md:mb-0 first shadow bg-white">
              <div className="flex space-x-7 w-full items-center">
                <div className=" w-[100%] mb-2">
                  <InputField
                    label={"Account Number"}
                    labelWidth={"27%"}
                    inputWidth={"50%"}
                    required={true}
                    type={"number"}
                    id={"accountNumber"}
                    onBlur={fetchAccountDetails}
                  />
                </div>
              </div>

              <div>
                <div className="flex space-x-4 mb-2">
                  <div className="w-[40%] ">
                    <InputField
                      label={"Currency"}
                      labelWidth={"63%"}
                      inputWidth={"40%"}
                      disabled={true}
                    />
                  </div>
                  <div className="w-[60%]">
                    <InputField
                      label={"Account Name"}
                      labelWidth={"20%"}
                      inputWidth={"80%"}
                      disabled={true}
                      value={response?.accountName}
                    />
                  </div>
                </div>
                <div className="flex space-x-4 mb-2">
                  <div className="w-[80%]">
                    <InputField
                      label={"Product"}
                      labelWidth={"35%"}
                      inputWidth={"60%"}
                      disabled={true}
                    />
                  </div>

                  <ButtonComponent
                    label="SigVer"
                    buttonWidth="20%"
                    buttonHeight="30px"
                    buttonColor="white"
                  />
                </div>
                <hr className="mb-[10px] mt-0 my-3" />
              </div>
              <div className="md:flex items-center space-x-7 mb-2">
                <div className="w-1/2">
                  <InputField
                    label={"Cheque Date "}
                    type="date"
                    labelWidth={"55%"}
                    inputWidth={"35%"}
                    required={true}
                  />
                </div>
                <div className="w-1/2">
                  <InputField
                    label={"Cheque Number "}
                    type="number"
                    labelWidth={"30%"}
                    inputWidth={"40%"}
                    required={true}
                  />
                </div>
              </div>
              <div className="md:flex items-center space-x-7 mb-2">
                <div className="w-1/2">
                  <InputField
                    label={"Amount "}
                    type="number"
                    labelWidth={"55%"}
                    inputWidth={"35%"}
                    required={true}
                  />
                </div>
                <div className="w-1/2">
                  <InputField
                    label={"Contact Account Number "}
                    type="number"
                    labelWidth={"30%"}
                    inputWidth={"40%"}
                    disabled={true}
                  />
                </div>
              </div>

              <div className="w-full mb-2">
                <InputField
                  label={"Reference"}
                  labelWidth={"26.5%"}
                  inputWidth={"50%"}
                />
              </div>

              {/*Right section*/}

              <div className="w-1/2 mb-2">
                <SelectField
                  label={"Third Party Transaction"}
                  labelWidth={"52.5%"}
                  inputWidth={"40%"}
                />
              </div>
              <div className="space-y-2">
                <TextAreaField
                  labelWidth={"26.5%"}
                  inputWidth={"73.5%"}
                  label={"Narration"}
                  required={true}
                />

                <InputField
                  label={"Withdrawal By"}
                  required={true}
                  labelWidth={"26.5%"}
                  inputWidth={"73.5%"}
                />
                <InputField
                  label={"Contact / Telephone"}
                  type="number"
                  labelWidth={"26.5%"}
                  inputWidth={"73.5%"}
                  required={true}
                />
              </div>
            </div>

            {/**Left Section  */}
            <div className="second shadow px-2 bg-white rounded ">
              <div className="  ">
                <AccountSummary accountNumber={accountNumber} />
              </div>
              <div>
                <DataTable title={"Denomination"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChequeWithdrawal;
