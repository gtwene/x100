import React, { useState } from "react";
import InputField from "../components/fields/InputField";
import ListOfValue from "../components/fields/ListOfValue";
import ButtonComponent from "../components/button/ButtonComponent";
import DataTable from "../components/data-table/DataTable";
import HeaderComponent from "../components/header/HeaderComponent";
import { Checkbox } from "@mantine/core";
import TextAreaField from "../components/fields/TextArea";
import { MdMoneyOff } from "react-icons/md";
import { MDBIcon } from "mdb-react-ui-kit";

const LoanCancellation = () => {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  return (
    <div style={{ zoom: "0.8" }}>
      <div style={{ padding: "10px" }}>
        <div>
          <div style={{ marginTop: "-15px", textAlign: "center" }} centered>
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
        </div>
        <hr />
        <div
          style={{
            padding: "5px",
            border: "none",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "5px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ flex: "0.4" }}>
              <ListOfValue
                label={"Customer Number"}
                labelWidth={"30%"}
                inputWidth={"70%"}
              />
            </div>
            <div style={{ flex: "0.3" }}>
              <InputField
                label={"Facility Number"}
                labelWidth={"30%"}
                inputWidth={"60%"}
                disabled
              />
            </div>
            <div style={{ flex: "0.3" }}>
              <InputField
                label={"Account Class"}
                labelWidth={"30%"}
                inputWidth={"60%"}
                disabled
              />
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "-15px" }}>
            <div style={{ flex: "0.4" }}>
              <ListOfValue
                label={"Principal Account"}
                labelWidth={"30%"}
                inputWidth={"70%"}
              />
            </div>
            <div style={{ flex: "0.3" }}>
              <InputField
                label={"Rate"}
                labelWidth={"30%"}
                inputWidth={"60%"}
                disabled
              />
            </div>
            <div
              style={{
                flex: "0.3",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div></div>
              <div style={{ marginRight: "50px", marginTop: "10px" }}>
                <ButtonComponent
                  label={"Loan Enquiry"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"40px"}
                  buttonWidth={"160px"}
                  buttonColor={"white"}
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: "-15px" }}>
            <div style={{ flex: "0.25" }}>
              <InputField
                label={"Effective Date"}
                labelWidth={"50%"}
                inputWidth={"40%"}
                disabled
              />
            </div>
            <div style={{ flex: "0.2" }}>
              <InputField
                label={"Expiry Date"}
                labelWidth={"40%"}
                inputWidth={"50%"}
                disabled
              />
            </div>
            <div style={{ flex: "0.25" }}>
              <InputField
                label={"Reschedule Amount"}
                labelWidth={"50%"}
                inputWidth={"38%"}
                disabled
              />
            </div>
            <div style={{ flex: "0.25" }}>
              <InputField
                label={"Amount Granted"}
                labelWidth={"60%"}
                inputWidth={"40%"}
                disabled
              />
            </div>
          </div>
        </div>
        <br></br>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              flex: "0.5",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            {/* <div style={{ borderBottom: "1px solid" }}>
              <h6 style={{ margin: "10px" }}>Principal Account Details</h6>
            </div> */}
            <div>
              <HeaderComponent title={"Principal Account Details"} />
            </div>
            <div style={{ marginTop: "10px", display: "flex" }}>
              <div style={{ flex: "0.35" }}></div>
              <div style={{ flex: "0.25" }}>
                <h6>Balance</h6>
              </div>
              <div style={{ flex: "0.25" }}>
                <h6>Arrears</h6>
              </div>
              <div style={{ flex: "0.25" }}>
                <h6>Suspense</h6>
              </div>
            </div>
            <div style={{ marginTop: "-10px", display: "flex" }}>
              <div style={{ flex: "0.48" }}>
                <InputField
                  label={"Principal"}
                  labelWidth={"58%"}
                  inputWidth={"38%"}
                  disabled
                />
              </div>
              <div style={{ flex: "0.22" }}>
                <InputField inputWidth={"100%"} disabled />
              </div>
              <div style={{ flex: "0.25" }}>
                {/* <InputField inputWidth={"90%"} disabled/> */}
              </div>
            </div>
            <div style={{ marginTop: "-20px", display: "flex" }}>
              <div style={{ flex: "0.48" }}>
                <ListOfValue
                  label={"Interest"}
                  labelWidth={"58%"}
                  inputWidth={"38%"}
                  disabled
                />
              </div>
              <div style={{ flex: "0.22" }}>
                <InputField inputWidth={"100%"} disabled />
              </div>
              <div style={{ flex: "0.25" }}>
                <ListOfValue inputWidth={"90%"} disabled />
              </div>
            </div>
            <div style={{ marginTop: "-20px", display: "flex" }}>
              <div style={{ flex: "0.48" }}>
                <ListOfValue
                  label={"Penalty"}
                  labelWidth={"58%"}
                  inputWidth={"38%"}
                  disabled
                />
              </div>
              <div style={{ flex: "0.22" }}>
                <InputField inputWidth={"100%"} disabled />
              </div>
              <div style={{ flex: "0.25" }}>
                <ListOfValue inputWidth={"90%"} disabled />
              </div>
            </div>
            <div style={{ marginTop: "-20px", display: "flex" }}>
              <div style={{ flex: "0.48" }}>
                <InputField
                  label={"Arr Interest"}
                  labelWidth={"58%"}
                  inputWidth={"38%"}
                  disabled
                />
              </div>
              <div style={{ flex: "0.22" }}>
                <ListOfValue inputWidth={"100%"} disabled />
              </div>
              <div style={{ flex: "0.25" }}>
                <ListOfValue inputWidth={"90%"} disabled />
              </div>
            </div>
            <div style={{ marginTop: "5px", display: "flex" }}>
              <div style={{ flex: "0.35" }}></div>
              <div style={{ flex: "0.25" }}>
                <h6>Interest </h6>
              </div>
              <div style={{ flex: "0.25" }}>
                <h6>Principal</h6>
              </div>
              <div style={{ flex: "0.25" }}>
                <h6>Penalty</h6>
              </div>
            </div>
            <div style={{ marginTop: "-10px", display: "flex" }}>
              <div style={{ flex: "0.48" }}>
                <ListOfValue
                  label={"Payments"}
                  labelWidth={"58%"}
                  inputWidth={"38%"}
                  disabled
                />
              </div>
              <div style={{ flex: "0.22" }}>
                <ListOfValue inputWidth={"100%"} disabled />
              </div>
              <div style={{ flex: "0.25" }}>
                <ListOfValue inputWidth={"90%"} disabled />
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <div>
                <HeaderComponent title={"Processing Fees and Charges"} />
              </div>
              <DataTable columns={["Charges", "%", "Fee Amount"]} />
            </div>
          </div>
          <div
            style={{
              flex: "0.5",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            {/* <div style={{ borderBottom: "1px solid" }}>
              <h6 style={{ margin: "10px" }}>Principal Account Details</h6>
            </div> */}
            <div>
              <HeaderComponent title={"Repayment Account Details"} />
            </div>
            {/* <br></br> */}
            {/* <br></br> */}
            {/* <br></br>
            <br></br> */}
            <div style={{ display: "flex", marginTop: "5px" }}>
              <div style={{ flex: "0.5" }}>
                <InputField
                  label={"Repayment Account"}
                  inputWidth={"50%"}
                  labelWidth={"80%"}
                  disabled
                />
              </div>
              <div style={{ flex: "0.5" }}>
                <InputField inputWidth={"100%"} disabled />
              </div>
            </div>
            <div style={{ marginTop: "-20px" }}>
              <InputField
                label={"Repayment Account Balance"}
                labelWidth={"53%"}
                disabled
              />
            </div>
            <div style={{ marginTop: "-5px" }}>
              <InputField
                label={"Interest Accrued"}
                labelWidth={"53%"}
                disabled
              />
            </div>
            <div style={{ marginTop: "-5px" }}>
              <InputField
                label={"Penalty Accrued"}
                labelWidth={"53%"}
                disabled
              />
            </div>
            <div style={{ display: "flex", marginTop: "-20px" }}>
              <div style={{ flex: "0.5" }}>
                <InputField
                  label={"Disbursement Account"}
                  inputWidth={"50%"}
                  labelWidth={"80%"}
                  disabled
                />
              </div>
              <div style={{ flex: "0.5" }}>
                <InputField inputWidth={"100%"} disabled />
              </div>
            </div>
            <br></br>
            <div style={{ margin: "15px", marginTop: "11px" }}>
              <Checkbox
                label="Tick To Reverse Processing Fees"
                color="green"
                size="sm"
              />
            </div>
            <br></br>
            <div>
              <HeaderComponent title={"Reasons"} />
              <TextAreaField rows={5} cols={70} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCancellation;
