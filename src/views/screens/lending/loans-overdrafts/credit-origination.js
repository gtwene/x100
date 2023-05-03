import React, { useState } from "react";
import InputField from "../components/fields/InputField";
import ListOfValue from "../components/fields/ListOfValue";
import ButtonComponent from "../components/button/ButtonComponent";
import DataTable from "../components/data-table/DataTable";
import HeaderComponent from "../components/header/HeaderComponent";
import ButtonType from "../components/button/ButtonType";
import { Checkbox } from "@mantine/core";
import TextAreaField from "../components/fields/TextArea";
import SelectField from "../components/fields/SelectField";
import ArrowStepper from "../components/arrow-stepper/arrow-stepper";
import { MDBIcon } from "mdb-react-ui-kit";

const CreditOrigination = () => {
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
                id="postBTN"
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`,
                }}
                // onClick={postLoanScheduleEnquiry}
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
        <hr/>
        <div
          style={{
            display: "flex",
            padding: "10px",
            border: "none",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            borderRadius: "5px",
          }}
        >
          <div style={{ flex: "0.7" }}>
            <div>
              <SelectField
                label={"Facility Type"}
                labelWidth={"25%"}
                inputWidth={"30%"}
              />
            </div>
            <div>
              <SelectField
                label={"Customer Type"}
                labelWidth={"25%"}
                inputWidth={"30%"}
              />
            </div>
            <div>
              <ListOfValue
                label={"Facility Service Account"}
                labelWidth={"25%"}
                inputWidth={"51%"}
              />
            </div>
            <div>
              <InputField
                label={"Account Name"}
                labelWidth={"25%"}
                disabled
                inputWidth={"50%"}
              />
            </div>
          </div>
          <div
            style={{
              flex: "0.3",
            }}
          >
            <div
              style={{
                padding: "5px",
                border: "0.5px solid #d6d7d9",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                borderRadius: "5px",
              }}
            >
              <div>
                <InputField
                  label={"Application Number"}
                  labelWidth={"45%"}
                  disabled
                />
              </div>
              <div>
                <InputField
                  label={"Pep Status"}
                  labelWidth={"45%"}
                  disabled
                  color="red"
                />
              </div>
              <div>
                <InputField
                  label={"Risk Status"}
                  labelWidth={"45%"}
                  disabled
                  color="red"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div>
          <ArrowStepper />
        </div>
        <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <ButtonComponent
                label={"Apply"}
                // buttonBackgroundColor={"orange"}
                background={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonColor={"white"}
                buttonHeight={"40px"}
                buttonWidth={"100px"}
              />
            </div>
            <div>
              <ButtonComponent
                label={"View Schedule"}
                // buttonBackgroundColor={"orange"}
                background={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonColor={"white"}
                buttonHeight={"40px"}
                buttonWidth={"150px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditOrigination;
