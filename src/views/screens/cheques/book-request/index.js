import React, { useState, useEffect } from "react";
// import HeaderComponent from "../components/header/HeaderComponent";
import { GiBookCover } from "react-icons/gi/index.esm";
import InputField from "./../../../../components/others/Fields/InputField";
import DataTable from "./../../../../components/others/Datatable/DataTable";
import { Input } from "@mui/material";
import ButtonComponent from "./../../../../components/others/Button/ButtonComponent";
import ListOfValue from "./../../../../components/others/Fields/ListOfValue";
import SelectField from "./components/SelectField";
import axios from "axios";
import Swal from "sweetalert";
import "../book-request/index.css";
import Header from "../book-request/components/Header";
import {MDBIcon} from "mdb-react-ui-kit"


function ChequeBookRequisition() {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountDetails, setAccountDetails] = useState("");
  const [numberOfBooks, setNumberOfBooks] = useState("");
  const [error, setError] = useState(null);
  const [branch, setBranch] = useState("");
  const [leaves, setLeaves] = useState("");
  const [channel, setChannel] = useState("");

  // function leavesValue(value) {
  //   setLeaves(value);
  // }
  // function channelValue(value) {
  //   setChannel(value);
  // }
  // function branchValue(value) {
  //   setBranch(value);
  // }

  // function alert(message, icon) {
  //   Swal.fire(message, "", icon);
  // }
  // useEffect(() => {
  //   //setting lov data
  //   axios
  //     .get("http://localhost:3300/get-branch")
  //     .then((res) => {
  //       localStorage.setItem("Branch", JSON.stringify(res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   axios
  //     .get("http://localhost:3300/get-numberofleaves")
  //     .then((res) => {
  //       localStorage.setItem("Leaves", JSON.stringify(res.data));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // }, []);

  // // getting lov data
  // const storedBranch = JSON.parse(localStorage.getItem("Branch"));
  // const storedLeaves = JSON.parse(localStorage.getItem("Leaves"));

  // let leavesArray = [];
  // let branchArray = [];
  // function getBranch() {
  //   storedBranch.map((branch) => {
  //     branchArray.push({
  //       value: branch.br_code,
  //       label: `${branch.br_code} - ${branch.br_description}`,
  //     });
  //   });
  // }
  // getBranch();
  // function getLeaves() {
  //   storedLeaves.map((leaf) => {
  //     leavesArray.push({
  //       label: `${leaf.short_descrp} - ${leaf.description}`,
  //       value: leaf.actual_code,
  //     });
  //   });
  // }
  // getLeaves();

  // // end of getting lov data

  // // getting account details
  function handleAccount(e) {
    //   if (e.key === "Enter") {
    //     e.preventDefault()
    //     axios
    //       .post("http://localhost:3300/get-account-details", {
    //         accountNumber: accountNumber,
    //       })
    //       .then((res) => {
    //         if (res.data.length !== 0) {
    //           setAccountDetails(res.data);
    //         } else if (!accountNumber) {
    //           setAccountDetails("");
    //           // alert("Please enter an account Number",  "error");
    //         } else {
    //           setAccountNumber("");
    //           alert(
    //             "Invalid Account Number, please check and try again",
    //             "error"
    //           );
    //           setAccountDetails("");
    //         }
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   }
  }
  // // end of getting account details

  // // form submission
  function handleSubmit(e) {
    //   e.preventDefault();
    //   console.log("submittinggg");
    //   axios
    //     .post("http://localhost:3300/cheque_book_req", {
    //       accountLink: accountNumber,
    //       numberOfBooks: numberOfBooks,
    //       leavesNo: leaves,
    //       deliveryBranch: branch,
    //       deliveryChannel: channel,
    //     })
    //     .then((res) => {
    //       let responseMessage = res.data["responseMessage"]
    //       if (res.data["success"]===true) {
    //         alert(responseMessage, "success");
    //         setAccountDetails("");
    //         setAccountNumber("");
    //       } else {
    //         alert(responseMessage, "error");
    //         setAccountDetails("");
    //         setAccountNumber("");
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   // if (accountNumber) {
    //   //   e.preventDefault();
    //   // } else {
    //   //   setError("Account Number is required");
    //   // }
  }

  //end of form submission
  const [getTheme, setGetTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  return (
    <div className="cheque__request">
      <div
        style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }}
        centered
      >
        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button
            className="btn btn-secondary"
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                getTheme.theme.headerImage +
                `)`,
            }}
          >
            <MDBIcon
              style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="file-alt"
            />
            <br />
            New
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="sync"
            />
            <br />
            Refresh
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="calendar-times"
            />
            <br />
            Delete
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="thumbs-up"
            />
            <br />
            Authorise
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="eye"
            />
            <br />
            View
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button
            className="btn btn-secondary"
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                getTheme.theme.headerImage +
                `)`,
            }}
          >
            <MDBIcon
              style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="check"
            />
            <br />
            Ok
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="ban"
            />
            <br />
            Cancel
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="thumbs-down"
            />
            <br />
            Reject
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="question-circle"
            />
            <br />
            Help
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button
            className="btn btn-secondary"
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                getTheme.theme.headerImage +
                `)`,
            }}
          >
            <MDBIcon
              style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="sign-out-alt"
            />
            <br />
            Exit
          </button>
        </span>
      </div>

      {/* <div
        style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }}
        centered
      >
        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button
            className="btn btn-secondary"
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                getTheme.theme.headerImage +
                `)`,
            }}
          >
            <MDBIcon
              style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="file-alt"
            />
            <br />
            New
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="sync"
            />
            <br />
            Refresh
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="calendar-times"
            />
            <br />
            Delete
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="thumbs-up"
            />
            <br />
            Authorise
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="eye"
            />
            <br />
            View
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button
            className="btn btn-secondary"
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                getTheme.theme.headerImage +
                `)`,
            }}
          >
            <MDBIcon
              style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="check"
            />
            <br />
            Ok
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="ban"
            />
            <br />
            Cancel
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="thumbs-down"
            />
            <br />
            Reject
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className="btn btn-light" style={{ background: "white" }}>
            <MDBIcon
              style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="question-circle"
            />
            <br />
            Help
          </button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button
            className="btn btn-secondary"
            style={{
              background:
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                getTheme.theme.headerImage +
                `)`,
            }}
          >
            <MDBIcon
              style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
              fas
              icon="sign-out-alt"
            />
            <br />
            Exit
          </button>
        </span>
      </div> */}

      {/* <HeaderComponent
          title="Cheque book requisition"
          icon={<GiBookCover />}
        /> */}
      <div className="request__id">
        <div className="dummy__control"></div>
        <div style={{ flex: "0.3" }} className="inner__div">
          <InputField
            label={"Request ID"}
            disabled={true}
            labelWidth={"40%"}
            inputWidth={"60%"}
            marginBottom="10px"
          />
        </div>
        <div className="dummy__controls"></div>
      </div>

      <div>{error}</div>
      <div className="outer__div">
        <form className="full__div" onSubmit={handleSubmit} id="form">
          <div className="inner__div">
            <div className="first__inner">
              <InputField
                label={"Account Number"}
                required={true}
                labelWidth={"40%"}
                inputWidth={"60%"}
                marginBottom="10px"
                type={"number"}
                onChange={(e) => setAccountNumber(e.target.value)}
                onKeyDown={handleAccount}
                name="accountNumber"
              />
            </div>
            <div className="first__inner">
              <InputField
                disabled={true}
                inputWidth="100%"
                marginBottom="10px"
                // value={accountDetails && accountDetails[0]["ACCOUNT_DESCRP"]}
              />
            </div>
          </div>
          <div className="inner__div">
            <div className="first__inner">
              <InputField
                disabled={true}
                label="Channel ID"
                labelWidth={"40%"}
                inputWidth="60%"
                marginBottom={"10px"}
              />
            </div>
            <div className="first__inner">
              <InputField
                disabled={true}
                label="Currency"
                labelWidth={"40%"}
                inputWidth="60%"
                marginBottom={"10px"}
                // value={accountDetails && accountDetails[0]["Currency"]}
              />
            </div>
          </div>
          <br></br>
          <div className="inner__div">
            <div className="first__inner">
              <InputField
                label={"Document Number"}
                labelWidth={"40%"}
                inputWidth={"60%"}
                marginBottom="10px"
              />
            </div>
            <div className="first__inner">
              <ButtonComponent
                label={"View Documents"}
                buttonWidth="130px"
                type={"button"}
                buttonBackgroundColor="rgb(21 163 183)"
                buttonHeight={"25px"}
                buttonColor={"white"}
                marginBottom="10px"
                // handleClick={handleClick}

                // buttonHeight={"10%"}
              />
            </div>
          </div>
          <div className="inner__div">
            <div className="first__inner">
              <ListOfValue
                label={"Number of leaves"}
                labelWidth={"40%"}
                inputWidth={"60%"}
                marginBottom="10px"
                // data={leavesArray}
                required={true}
                // onChange={leavesValue}
                // value={leaves}
              />
            </div>
            <div className="first__inner">
              <InputField
                label={"Number of Books"}
                inputWidth="60%"
                labelWidth={"40%"}
                marginBottom="10px"
                type={"number"}
                name={"NumberOfBooks"}
                onChange={(e) => setNumberOfBooks(e.target.value)}
                required={true}
              />
            </div>
          </div>
          <div className="inner__div">
            <div className="first__inner">
              <SelectField
                label={"Delivery Channel"}
                labelWidth={"40%"}
                // marginBottom="30px"
                inputWidth={"60%"}
                // value={channel}
                // onChange={channelValue}
                data={[
                  { value: "branch", label: "BRANCH" },
                  { value: "courrier", label: "COURRIER" },
                ]}
              />
            </div>
            <div className="first__inner">
              <ListOfValue
                label={"Delivery Branch"}
                labelWidth={"40%"}
                inputWidth={"60%"}
                // data={branchArray}
                // onChange={branchValue}
                // value={branch}
              />
            </div>
          </div>
        </form>

        <div className="account__details">
          <Header title={"Account Details"} />
          <div className="padding">
            <InputField
              disabled={true}
              label="Source Branch"
              labelWidth={"40%"}
              inputWidth="60%"
              marginBottom={"10px"}
              // value={accountDetails && accountDetails[0]["BRDESC"]}
            />
            <InputField
              disabled={true}
              label="Available Balance"
              labelWidth={"40%"}
              inputWidth="60%"
              marginBottom={"10px"}
              // value={accountDetails && accountDetails[0]["AV_BAL"].trim()}
            />
            <InputField
              disabled={true}
              label="Ledger Balance"
              labelWidth={"40%"}
              inputWidth="60%"
              marginBottom={"10px"}
            />
            <InputField
              disabled={true}
              label="Available Limit"
              labelWidth={"40%"}
              inputWidth="60%"
              marginBottom={"10px"}
            />
            <InputField
              disabled={true}
              label="Account Status"
              labelWidth={"40%"}
              inputWidth="60%"
              marginBottom={"10px"}
              // value={accountDetails && accountDetails[0]["STATUS_DESC"]}
            />

            {/* <InputField
              disabled={true}
              label="Channel ID"
              labelWidth={"40%"}
              inputWidth="70%"
              marginBottom={"30px"}
            /> */}
          </div>
        </div>
      </div>
      <DataTable
        headerColor={"rgb(21 163 183)"}
        headerText="white"
        title={"Cheque Book Requisition"}
        columns={[
          "#",
          "Chg.Code",
          "Fee Account",
          "Fee Acount Description",
          "Fees Description",
          "Fee Amount Per Book",
          "Currency",
        ]}
      />
    </div>
  );
}

export default ChequeBookRequisition;
