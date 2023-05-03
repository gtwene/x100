import React, { useState, useEffect } from "react";
import { GiReceiveMoney } from "react-icons/gi/index.esm";
import ListOfValue from "./components/ListOfValue";
import InputField from "./components/inputField";
import Label from "../../../../components/others/Label/Label";
import SelectField from "./components/SelectField";
import ButtonComponent from "../../../../components/others/Button/ButtonComponent";
import TextAreaField from "./components/TextArea";
import AccountSummary from "../../../../components/others/AccountSummary";
import { checkInternetConnection } from "./components/checkConnection";
import { API_SERVER } from "../../../../config/constant";
import Modal from "./components/Modal";
import axios from "axios";
function CashDeposit({
  handleSubmit,
  formData,
  setFormData,
  setBatchNo,
  body,
  checked,
}) {
  const [response, setResponse] = useState("");
  const [inWords, setInWords] = useState("");
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  const [accountNumber, setAccountNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [valueDate, setValueDate] = useState("");
  const [reference, setReference] = useState("");
  const [narration, setNarration] = useState("");
  const [withdrawalBy, setWithdrawalBy] = useState("");
  const [contact, setContact] = useState("");
  const [isThirdParty, setisThirdParty] = useState("");
  const [accountName, setAccountName] = useState("");
  const [otherInfo, setOtherInfo] = useState("");

  const [inWord, setInWord] = useState("");

  function intoWords(amount) {
    // Define arrays for number words
    const ones = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ];
    const tens = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    const scales = ["", "thousand", "million", "billion", "trillion"];

    // Convert the amount to a string and split it into groups of three digits
    const numArr = amount.toString().split(/(?=(?:\d{3})+(?:\.|$))/g);

    // Initialize the result variable
    let result = "";

    // Loop through each group of three digits
    for (let i = 0; i < numArr.length; i++) {
      // Convert the current group of three digits to a number
      let num = parseInt(numArr[i]);

      // Handle the ones and tens places
      let words = "";
      if (num % 100 < 20) {
        words = ones[num % 100];
        num = Math.floor(num / 100);
      } else {
        words = ones[num % 10];
        num = Math.floor(num / 10);
        words = tens[num % 10] + " " + words;
        num = Math.floor(num / 10);
      }

      // Handle the hundreds place
      if (num > 0) {
        words = ones[num] + " hundred " + words;
      }

      // Add the scale word for the current group of three digits
      if (numArr[i] !== "000") {
        words += " " + scales[numArr.length - i - 1];
      }

      // Add the current group of three digits to the result variable
      result += words.trim() + " ";
    }

    // Add the word for the decimal portion of the amount
    const decimal = amount.toString().split(".")[1];
    if (decimal) {
      result += "and " + decimal + "/100";
    }

    // Capitalize the first letter of the result and return it
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

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

  useEffect(() => {
    // format(8494849);
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
      console.log(response, "pppp");
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
    if (e.target.value !== "") {
      setInWords(intoWords(e.target.value));
    } else {
      setInWords("");
    }
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

  return (
    <>
      <div className="">
        <div className=" rounded h-auto pb-2 pt-2  bg-gray-200">
          <div style={{ width: "100%" }} className="wrapper  px-2 md:flex  ">
            {/**Right Section */}
            <div className="md:w-[70%] rounded py-4 px-4  md:mr-2 md:mb-0 first shadow bg-white">
              <div className="flex space-x-7 w-full items-center mb-2">
                <div className="md:w-[65%] w-full flex items-center">
                  <InputField
                    label={"Credit Account"}
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
                  <Modal setShowModal={setShowModal} showModal={showModal} />
                </div>
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
              <div className="flex items-center space-x-2">
                <div className="w-[40%] mb-2">
                  <InputField
                    label={"Amount "}
                    type="number"
                    value={amount}
                    labelWidth={"56%"}
                    inputWidth={"44%"}
                    required={true}
                    textAlign={true}
                    onChange={onAmountChange}
                  />
                </div>
                <div className="w-[60%] mb-2">
                  <InputField
                    value={inWords}
                    inputWidth={"100%"}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="mb-2">
                <ListOfValue
                  label={"Source of Funds"}
                  labelWidth={"22%"}
                  inputWidth={"24%"}
                />
              </div>
              <div className="flex space-x-7  items-center">
                <div className="w-1/2 mb-2">
                  <InputField
                    label={"Voucher Reference"}
                    labelWidth={"45.8%"}
                    inputWidth={"50%"}
                    onChange={onReference}
                    value={reference}
                  />
                </div>
                <div className="w-1/2 mb-2 pl-10">
                  <SelectField
                    label={"Third Party Transaction"}
                    labelWidth={"70%"}
                    inputWidth={"30%"}
                    onChange={onThirdPartyChange}
                    value={isThirdParty}
                  />
                </div>
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
                      label={"Deposited By"}
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
                  onChange={onOtherInfoChange}
                  value={otherInfo}
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
