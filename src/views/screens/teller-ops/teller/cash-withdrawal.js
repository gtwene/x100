import React, { useState, useEffect } from "react";
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
// import { API_SERVER } from "../../../../config/constant";
import Modal from "./components/Modal";
import { API_SERVER } from "../../../../config/constant";
function CashDeposit({
  handleSubmit,
  formData,
  checked,
  setFormData,
  setBatchNo,
  body,
}) {
  const [response, setResponse] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [valueDate, setValueDate] = useState("");
  const [reference, setReference] = useState("");
  const [narration, setNarration] = useState("");
  const [withdrawalBy, setWithdrawalBy] = useState("");
  const [contact, setContact] = useState("");
  const [isThirdParty, setisThirdParty] = useState("");
  const [otherInfo, setOtherInfo] = useState("");
  const [accountName, setAccountName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  const dates = new Date(
    JSON.parse(localStorage.getItem("userInfo")).postingDate
  );
  const month = dates.getMonth() + 1; // getMonth() returns a zero-indexed value, so add 1 to get the actual month number
  const day = dates.getDate();
  const year = dates.getFullYear();

  const eDate = new Date(
    JSON.parse(localStorage.getItem("userInfo")).postingDate
  );
  const value_date = eDate
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "/");

  console.log(value_date);
  useEffect(() => {
    setFormData({
      accountNumber,
      valueDate: value_date,
      amount,
      reference,
      isThirdParty,
      narration,
      withdrawalBy,
      contact,
    });
  }, [
    narration,
    withdrawalBy,
    amount,
    reference,
    isThirdParty,
    narration,
    withdrawalBy,
    contact,
  ]);

  useEffect(() => {
    if (checked) {
      setAccountNumber("");
      setAmount("");
      setReference("");
      setisThirdParty("");
      setNarration("");
      setWithdrawalBy("");
      setContact("");
      setOtherInfo("");
    }
  }, [checked]);
  useEffect(() => {
    async function getBatchNumber() {
      const response = await axios.get(API_SERVER + "/get-unique-ref");
      // console.log(response, "pppp");
      setBatchNo(response.data[0]["unique_ref"]);
    }
    getBatchNumber();
  }, [body, checked]);
  function onBlur(e) {
    checkInternetConnection();
    setAccountNumber(e.target.value);
    // getAccountName();
  }

  function onKeyPress(e) {
    checkInternetConnection();
    if (e.key === "Enter") {
      setAccountNumber(e.target.value);
    }
  }

  function onAccountNumberChange(e) {
    setAccountNumber(e.target.value);
    // console.log(e.target.value);
  }

  function onAmountChange(e) {
    setAmount(e.target.value);
    // console.log(amount, "hfjh");
    // console.log(e.target.value);
  }

  function onValueDate(e) {
    setValueDate(e.target.value);
  }
  function onReference(e) {
    setReference(e.target.value);
  }
  function onContactChange(e) {
    setContact(e.target.value);
  }
  function onThirdPartyChange(value) {
    setisThirdParty(value);
  }

  function onWithdrawalByChange(e) {
    setWithdrawalBy(e.target.value);
    // setFormData((prev) => ({ ...prev, withdrawalBy: narration }));
  }

  function onNarrationChange(e) {
    setNarration(e.target.value);
    // setFormData((prev) => ({ ...prev, narration: narration }));
  }
  function onOtherInfoChange(e) {
    setOtherInfo(e.target.value);
    // setFormData((prev) => ({ ...prev, withdrawalBy: narration }));
  }

  console.log({
    accountNumber,
    valueDate,
    amount,
    reference,
    isThirdParty,
    narration,
    withdrawalBy,
    contact,
  });

  // 004009110949770160
  // ac_trans_savings_rel(:two.ACCT_LINK ,(-1)*:two.amount, :two.VOUCHER_DATE, 'BRA',
  //                    :two.TRANSACTION_DETAILS,'CWLY', :GLOBAL.USERNAME ,
  //                    :two.approved_by,:GLOBAL.MACHINE_ID, :GLOBAL.BRA,
  //                    'CWD',NULL,:TWO.batch_NO,nvl(:two.DOCUMENT_REF,:two.ACCT_LINK), 'Y',:two.NARRATION,:two.TRANS_REF,
  //                    :two.CNTR_PROC, :global.frmcode);
  console.log(response, "response");
  return (
    <>
      <div className="m-0">
        <div className=" rounded h-auto pb-2 pt-2  bg-gray-200">
          <div>
            <div className="px-6 mb-2">
              <div className="flex space-x-2 w-full items-center mb-2"></div>
            </div>
          </div>

          <div style={{ width: "100%" }} className=" px-2 md:flex  ">
            {/**Right Section */}
            <div className="md:w-[70%] rounded py-4 px-4  md:mr-2 md:mb-0 first shadow bg-white">
              <div className="flex space-x-7 w-full items-center mb-2">
                <div className="md:w-[65%] w-full flex items-center">
                  <InputField
                    label={"Debit Account"}
                    labelWidth={"42.5%"}
                    inputWidth={"55%"}
                    required={true}
                    type={"number"}
                    name={"accountNumber"}
                    value={accountNumber}
                    onBlur={onBlur}
                    onKeyPress={onKeyPress}
                    onChange={onAccountNumberChange}
                  />
                  <ButtonComponent
                    onClick={() => {
                      setShowModal(true);
                    }}
                    label="Search"
                    buttonBackgroundImage={
                      `url(` +
                      window.location.origin +
                      `/assets/images/headerBackground/` +
                      getTheme.theme.headerImage +
                      `)`
                    }
                    buttonWidth="20%"
                    buttonHeight="30px"
                    buttonColor="white"
                  />
                </div>
                <Modal setShowModal={setShowModal} showModal={showModal} />
                <div className="w-[35%]">
                  <InputField
                    label={"Value Date"}
                    labelWidth={"35%"}
                    inputWidth={"65%"}
                    name={"valueDate"}
                    disabled={true}
                    value={`${day}/${month}/${year}`}
                  />
                </div>
              </div>
              <hr className="mb-[10px] mt-0 my-3" />
              <div>
                <div className="flex items-center w-[100%] mb-2">
                  <div className="w-[100%]">
                    <InputField
                      label={"Account Name"}
                      labelWidth={"22%"}
                      inputWidth={"78%"}
                      disabled={true}
                      name={"accountName"}
                      value={accountName}
                      // setFormData={setFormData}
                      // onChange={(e) => handleChange(e, "amount")}
                    />
                  </div>
                </div>

                {/* <div className="flex space-x-7 mb-2">
                  <div className="w-[80%]">
                    <InputField
                      label={"Product"}
                      labelWidth={"28.5%"}
                      inputWidth={"60%"}
                      disabled={true}
                    />
                  </div>
                </div> */}
                <hr className="mb-[10px] mt-0 my-3" />
              </div>
              <div className="md:flex items-center space-x-7">
                <div className="w-1/2 mb-2">
                  <InputField
                    label={"Amount "}
                    type="number"
                    labelWidth={"45.8%"}
                    inputWidth={"50%"}
                    required={true}
                    name={"amount"}
                    value={amount}
                    textAlign={true}
                    onChange={onAmountChange}
                  />
                </div>
                <div className="w-1/2 mb-2 pl-7">
                  <InputField
                    label={"Total Charges "}
                    type="number"
                    labelWidth={"40%"}
                    inputWidth={"60%"}
                    disabled={true}
                    name={"totaltCharges"}
                  />
                </div>
              </div>

              <div className="flex space-x-7  items-center">
                <div className="w-1/2 mb-2">
                  <InputField
                    label={"Reference"}
                    labelWidth={"45.8%"}
                    inputWidth={"50%"}
                    onChange={onReference}
                    required={true}
                    name={"reference"}
                    value={reference}
                  />
                </div>
                <div className="w-1/2 mb-2 pl-7">
                  <SelectField
                    label={"Third Party Transaction"}
                    labelWidth={"70%"}
                    inputWidth={"30%"}
                    onChange={onThirdPartyChange}
                    name={"isThirdParty"}
                    value={isThirdParty}
                  />
                </div>

                {/*Right section*/}
              </div>

              <div className="space-y-2">
                <TextAreaField
                  labelWidth={"22.28%"}
                  inputWidth={"77.72%"}
                  label={"Narration"}
                  required={true}
                  onChange={onNarrationChange}
                  value={narration}
                />

                <div className="flex s ">
                  <div className="w-[58%]">
                    <InputField
                      label={"Withdrawal By"}
                      required={true}
                      labelWidth={"38%"}
                      inputWidth={"58%"}
                      onChange={onWithdrawalByChange}
                      value={withdrawalBy}
                    />
                  </div>

                  <div className="w-[42%]">
                    <InputField
                      label={"Contact / Telephone"}
                      type="number"
                      labelWidth={"54%"}
                      inputWidth={"46%"}
                      required={true}
                      onChange={onContactChange}
                      value={contact}
                    />
                  </div>
                </div>
                <InputField
                  label={"Other Information"}
                  labelWidth={"22.28%"}
                  inputWidth={"77.72%"}
                  required={true}
                  value={otherInfo}
                  onChange={onOtherInfoChange}
                />
              </div>
            </div>

            <div className=" md:w-[30%]  ">
              <AccountSummary
                accountNumber={accountNumber}
                setAccountName={setAccountName}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CashDeposit;
