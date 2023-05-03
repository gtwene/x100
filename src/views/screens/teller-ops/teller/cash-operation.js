import { useEffect, useState } from "react";
import ListOfValue from "./components/ListOfValue";
import CashWithdrawal from "./cash-withdrawal";
import CashDeposit from "./cash-deposit";
import ChequeDeposit from "./cheque-deposit";
import ChequeWithdrawal from "./cheque-withdrawal";
import InputField from "./components/inputField";
import ButtonComponent from "../../../../components/others/Button/ButtonComponent";

import MultiCurrencyCashWithdrawal from "./multi-currency-cash-withdrawal";
import { API_SERVER } from "../../../../config/constant";
import MultiCurrencyCashDeposit from "./multi-currency-cash-deposit";
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import axios from "axios";
export default function CashOperation() {
  const [modalBody, setModalBody] = useState("");
  const [body, setBody] = useState("Cash Withdrawal");
  const [formData, setFormData] = useState({});
  const [cashDepositFormData, setCashDepositFormData] = useState({});
  const [batchNo, setBatchNo] = useState("");
  const [checked, setChecked] = useState(false);
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  useEffect(() => {
    if (body === "Cash Withdrawal") {
      setModalBody(
        <CashWithdrawal
          handleSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
          setBatchNo={setBatchNo}
          body={body}
          checked={checked}
        />
      );
    } else if (body === "Multi-currency Cash Deposit") {
      setModalBody(<MultiCurrencyCashDeposit />);
    } else if (body === "Multi-currency Cash Withdrawal") {
      setModalBody(<MultiCurrencyCashWithdrawal />);
    } else if (body === "Cash Deposit") {
      setModalBody(
        <CashDeposit
          handleSubmit={handleSubmit}
          formData={cashDepositFormData}
          setFormData={setCashDepositFormData}
          setBatchNo={setBatchNo}
          body={body}
          checked={checked}
        />
      );
    } else if (body === "Cheque Deposit") {
      setModalBody(<ChequeDeposit />);
    } else if (body === "Cheque Withdrawal") {
      setModalBody(<ChequeWithdrawal />);
    }
  }, [body, checked]);

  async function handleSubmit(body) {
    if (body === "Cash Withdrawal") {
      const {
        accountNumber,
        amount,
        reference,
        isThirdParty,
        narration,
        withdrawalBy,
        contact,
      } = formData;
      // return console.log({ formData });
      if (
        accountNumber === "" ||
        reference === "" ||
        amount === "" ||
        isThirdParty === "" ||
        narration === "" ||
        withdrawalBy === "" ||
        contact === ""
      ) {
        swal({
          title: "Kindly Fill all required fields",
          text: "Kindly fill all required fields",
          icon: "warning",
          buttons: "OK",
          dangerMode: true,
        }).then((result) => {
          if (result) {
            // setShowModal(false);
          }
        });
      } else {
        // const response = await axios.get(
        //   "http://192.168.1.195:3020/get-batch-number"
        // );
        // // console.log(response, "pppp");
        // setBatchNo(response.data[0]["batch_no"]);

        // return console.log({
        //   account_number: formData.accountNumber,
        //   amount: parseFloat(formData.amount),
        //   voucher_date: formData.valueDate,
        //   transaction_details: formData.narration,
        //   username: JSON.parse(localStorage.getItem("userInfo")).id,
        //   approved_by: JSON.parse(localStorage.getItem("userInfo")).id,
        //   machine_id: "192.168.1.205",
        //   branch: JSON.parse(localStorage.getItem("userInfo")).branchCode,
        //   batch_no: batchNo,
        //   document_ref: formData.reference,
        //   narration: "Cash-Withdrawal",
        //   trans_ref: formData.contact,
        //   source_of_funds: null,
        //   form_code: "CAW",
        // });
        const cashWithdrawalResponse = await axios.post(
          API_SERVER + "/cash-withdrawal",
          {
            account_number: formData.accountNumber,
            amount: formData.amount,
            voucher_date: formData.valueDate,
            transaction_details: formData.narration,
            username: JSON.parse(localStorage.getItem("userInfo")).id,
            approved_by: JSON.parse(localStorage.getItem("userInfo")).id,
            machine_id: "192.168.1.205",
            branch: JSON.parse(localStorage.getItem("userInfo")).branchCode,
            batch_no: batchNo,
            document_ref: formData.reference,
            narration: "Cash-Withdrawal",
            trans_ref: formData.contact,
            source_of_funds: null,
            form_code: "CAW",
          }
        );
        if (cashWithdrawalResponse.data[0].responseCode === "000")
          swal({
            title: "Success",
            text:
              cashWithdrawalResponse.data[0].responseMessage +
              " Batch number " +
              batchNo,
            icon: "success",
            buttons: "OK",
            // dangerMode: true,
          }).then((result) => {
            if (result) {
              setChecked(true);
            }
          });
        console.log(cashWithdrawalResponse, "llll");
      }

      console.log(formData);
    } else if (body === "Cash Deposit") {
      const {
        accountNumber,
        valueDate,
        amount,
        reference,
        isThirdParty,
        narration,
        withdrawalBy,
        contact,
      } = cashDepositFormData;
      // console.log({ accountNumber: cashDepositFormData.accountNumber });
      if (
        accountNumber === "" ||
        valueDate === "" ||
        reference === "" ||
        amount === "" ||
        isThirdParty === "" ||
        narration === "" ||
        withdrawalBy === "" ||
        contact === ""
      ) {
        swal({
          title: "Kindly Fill all required fields",
          text: "Kindly fill all required fields",
          icon: "warning",
          buttons: "OK",
          dangerMode: true,
        }).then((result) => {
          if (result) {
            // setShowModal(false);
          }
        });
      } else {
        // return console.log(cashDepositFormData, "ghdgs");
        // const response = await axios.get(
        //   "http://192.168.1.195:3020/get-batch-number"
        // );
        // // console.log(response, "pppp");
        // setBatchNo(response.data[0]["batch_no"]);

        const cashDepositResponse = await axios.post(
          API_SERVER + "/cash-deposit",
          {
            account_number: cashDepositFormData.accountNumber,
            amount: cashDepositFormData.amount,
            voucher_date: cashDepositFormData.valueDate,
            transaction_details: cashDepositFormData.narration,
            username: JSON.parse(localStorage.getItem("userInfo")).id,
            approved_by: JSON.parse(localStorage.getItem("userInfo")).id,
            machine_id: "192.168.1.205",
            branch: JSON.parse(localStorage.getItem("userInfo")).branchCode,
            batch_no: batchNo,
            document_ref: batchNo,
            narration: "Cash-Deposit",
            trans_ref: cashDepositFormData.contact,
            source_of_funds: null,
            form_code: "CADD",
          }
        );
        if (cashDepositResponse.data[0].responseCode === "000")
          swal({
            title: "Success",
            text:
              cashDepositResponse.data[0].responseMessage +
              " Batch number " +
              batchNo,
            icon: "success",
            buttons: "OK",
            // dangerMode: true,
          }).then((result) => {
            if (result) {
              setChecked(true);
            }
          });
        console.log(cashDepositResponse, "llll");
      }
    }
  }
  // console.log(
  //   batchNo,
  //   JSON.parse(localStorage.getItem("userInfo")).id,
  //   "formData"
  // );
  return (
    <>
      <div className="bg-gray-200 rounded py-[12px] ">
        <div className="w-full flex justify-center cursor-pointer">
          <div className="flex" style={{ zoom: "0.80" }} centered>
            <div
              style={{
                background:
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`,
              }}
              className="bg-white shadow-sm ml-3 flex flex-col items-center w-[86px]  justify-center rounded"
            >
              <div className="flex flex-col justify-center items-center">
                <MDBIcon
                  style={{
                    color: "white",
                    paddingTop: "15px",
                    marginBottom: "4px",
                    fontSize: 20,
                  }}
                  fas
                  icon="file-alt"
                />

                <p className="text-white text-lg mt-[-5px] ">New</p>
              </div>
            </div>
            <div className="bg-white shadow-sm ml-3 flex flex-col items-center w-[86px]  justify-center rounded">
              <div className="flex flex-col justify-center items-center">
                <MDBIcon
                  style={{
                    color: "grey",
                    paddingTop: "15px",
                    marginBottom: "4px",
                    fontSize: 20,
                  }}
                  fas
                  icon="sync"
                />

                <p className="text-gray-700 text-lg mt-[-5px] ">Refresh</p>
              </div>
            </div>
            <div className="bg-white shadow-sm ml-3 flex flex-col items-center w-[86px]  justify-center rounded">
              <div className="flex flex-col justify-center items-center">
                <MDBIcon
                  style={{
                    color: "grey",
                    paddingTop: "15px",
                    marginBottom: "4px",
                    fontSize: 20,
                  }}
                  fas
                  icon="calendar-times"
                />

                <p className="text-gray-700 text-lg mt-[-5px] ">Delete</p>
              </div>
            </div>

            <div className="bg-white shadow-sm ml-3 flex flex-col items-center w-[86px]  justify-center rounded">
              <div className="flex flex-col justify-center items-center">
                <MDBIcon
                  style={{
                    color: "grey",
                    paddingTop: "15px",
                    marginBottom: "4px",
                    fontSize: 20,
                  }}
                  fas
                  icon="thumbs-up"
                />

                <p className="text-gray-700 text-lg mt-[-5px] ">Authorise</p>
              </div>
            </div>

            <div className="bg-white shadow-sm ml-3 flex flex-col items-center w-[86px]  justify-center rounded">
              <div className="flex flex-col justify-center items-center">
                <MDBIcon
                  style={{
                    color: "grey",
                    paddingTop: "15px",
                    marginBottom: "4px",
                    fontSize: 20,
                  }}
                  fas
                  icon="eye"
                />

                <p className="text-gray-700 text-lg mt-[-5px] ">View</p>
              </div>
            </div>

            <div
              onClick={() => handleSubmit(body)}
              style={{
                background:
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`,
              }}
              className=" shadow-sm ml-3 flex flex-col items-center w-[86px]  justify-center rounded"
            >
              <div className="flex flex-col justify-center items-center">
                <MDBIcon
                  style={{
                    color: "white",
                    paddingTop: "15px",
                    marginBottom: "4px",
                    fontSize: 20,
                  }}
                  fas
                  icon="check"
                />

                <p className="text-white text-lg mt-[-5px] ">Ok</p>
              </div>
            </div>

            <div className="bg-white shadow-sm ml-3 flex flex-col items-center w-[86px]  justify-center rounded">
              <div className="flex flex-col justify-center items-center">
                <MDBIcon
                  style={{ color: "grey", paddingTop: "15px", fontSize: 20 }}
                  fas
                  icon="ban"
                />

                <p className="text-gray-700 text-lg mt-[-5px] ">Cancel</p>
              </div>
            </div>

            <div className="bg-white shadow-sm ml-3 flex flex-col items-center w-[86px]  justify-center rounded">
              <div className="flex flex-col justify-center items-center">
                <MDBIcon
                  style={{ color: "grey", paddingTop: "15px", fontSize: 20 }}
                  fas
                  icon="thumbs-down"
                />

                <p className="text-gray-700 text-lg mt-[-5px] ">Reject</p>
              </div>
            </div>

            <div className="bg-white shadow-sm mx-3 flex flex-col items-center w-[86px]  justify-center rounded">
              <div className="flex flex-col justify-center items-center">
                <MDBIcon
                  style={{ color: "grey", fontSize: 20, paddingTop: "15px" }}
                  fas
                  icon="question-circle"
                />

                <p className="text-gray-700 text-lg mt-[-5px] ">Help</p>
              </div>
            </div>
            <div
              // onClick={handleClose}
              className=" flex flex-col items-center w-[86px]  justify-center rounded"
              style={{
                background:
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`,
              }}
            >
              <div className="flex flex-col justify-center items-center">
                <MDBIcon
                  style={{ color: "white", fontSize: 20, paddingTop: "15px" }}
                  fas
                  icon="sign-out-alt"
                />

                <p className="text-white text-lg mt-[-5px] ">Exit</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-[3px] mt-3" />
        <div className="flex justify-center px-2 bg-white py-[10px]">
          <div className="w-[35%] ">
            <ListOfValue
              label={"Transaction Type"}
              labelWidth={"47%"}
              inputWidth={"53%"}
              onChange={(value) => {
                // setOpen(true);
                setBody(value);
              }}
              value={body}
              data={[
                // <div
                //   onClick={() => {
                //     setOpen(true);
                //   }}
                // >
                "Cash Deposit",
                "Cash Withdrawal",
                "Multi-currency Cash Deposit",
                "Multi-currency Cash Withdrawal",
                "Cheque Deposit",
                "Cheque Withdrawal",
                // </div>,
              ]}
            />
          </div>
          <div className="flex justify-end w-[65%]  items-center mb-2">
            <div className=" flex items-center space-x-2">
              <div className="w-[45%]">
                <InputField
                  label={"Batch Number"}
                  labelWidth={"50%"}
                  inputWidth={"50%"}
                  disabled={true}
                  value={batchNo}
                />
              </div>

              <ButtonComponent
                buttonBackgroundImage={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonColor={"white"}
                buttonWidth={"20%"}
                buttonHeight="30px"
                label={"Print Receipt"}
              />
              <ButtonComponent
                buttonBackgroundImage={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonColor={"white"}
                buttonWidth={"20%"}
                buttonHeight="30px"
                label={"Sig. Ver"}
              />
              <ButtonComponent
                buttonBackgroundImage={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonColor={"white"}
                buttonWidth={"20%"}
                buttonHeight="30px"
                label={"View Voucher"}
              />
            </div>
          </div>
        </div>

        <hr className="my-[3px]" />

        {modalBody}
        {/* <Modal showModal={open} setShowModal={setOpen} body={body} /> */}
      </div>
    </>
  );
}
