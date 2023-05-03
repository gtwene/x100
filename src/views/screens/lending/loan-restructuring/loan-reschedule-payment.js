import React, { useState } from "react";
import InputField from "../components/fields/InputField";
import ListOfValue from "../components/fields/ListOfValue";
import ButtonComponent from "../components/button/ButtonComponent";
import DataTable from "../components/data-table/DataTable";
import HeaderComponent from "../components/header/HeaderComponent";
import { Checkbox } from "@mantine/core";
import TextAreaField from "../components/fields/TextArea";
import SelectField from "../components/fields/SelectField";
import { Tabs } from "@mantine/core";
import { FaMoneyCheck } from "react-icons/fa";
import { MDBIcon } from "mdb-react-ui-kit";


const LoanReschedule = () => {
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
            <div style={{ flex: "0.15" }}>
              <InputField
                label={"Rate"}
                labelWidth={"70%"}
                inputWidth={"30%"}
                disabled
              />
            </div>
            <div style={{ flex: "0.25" }}>
              <div>
                <InputField
                  label={"Tenor"}
                  labelWidth={"25%"}
                  inputWidth={"20%"}
                  disabled
                />
              </div>
            </div>
            <div
              style={{
                flex: "0.2",
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
          <div
            style={{
              display: "flex",
              border: "1px solid #b8babb",
              borderRadius: "5px",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
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
                label={"Amount Granted"}
                labelWidth={"50%"}
                inputWidth={"39%"}
                disabled
              />
            </div>
            <div style={{ flex: "0.3" }}>
              <InputField
                label={"Repayment Count Outstanding"}
                labelWidth={"65%"}
                inputWidth={"25%"}
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
            <div style={{ marginTop: "", display: "flex" }}>
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
            <br />
            <div style={{ marginTop: "-25px" }}>
              <div>
                <HeaderComponent
                  title={"Account Details"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                />
              </div>
              <div style={{ marginTop: "", display: "flex" }}>
                <div style={{ flex: "0.48" }}>
                  <InputField
                    label={"Total"}
                    labelWidth={"58%"}
                    inputWidth={"35%"}
                    disabled
                  />
                </div>
                <div style={{ flex: "0.22" }}>
                  <InputField inputWidth={"100%"} disabled />
                </div>
                <div style={{ flex: "0.25" }}>
                  <InputField inputWidth={"90%"} disabled />
                </div>
              </div>

              <div
                style={{
                  border: "1px solid #b8babb",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                <div style={{ borderBottom: "1px solid" }}>
                  <h6 style={{ margin: "10px" }}>Repayment Account Details</h6>
                </div>

                <div style={{ marginTop: "20px" }}>
                  <div>
                    <InputField
                      label={"Repayment Account"}
                      labelWidth={"25%"}
                      inputWidth={"42%"}
                      disabled
                    />
                  </div>
                  <div>
                    <InputField
                      label={"Account Balance"}
                      labelWidth={"25%"}
                      inputWidth={"42%"}
                      disabled
                    />
                  </div>
                  <div>
                    <InputField
                      label={"Accrued Interest"}
                      labelWidth={"25%"}
                      inputWidth={"42%"}
                      disabled
                    />
                  </div>
                  <div>
                    <InputField
                      label={"Accrued Penal"}
                      labelWidth={"25%"}
                      inputWidth={"42%"}
                      disabled
                    />
                  </div>
                </div>
              </div>
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
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              {/* <div style={{ borderBottom: "1px solid" }}>
                <h4 style={{ margin: "10px" }}>Repayment Account Details</h4>
              </div> */}
              <div>
                <HeaderComponent
                  title={"Repayment Account Details"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <SelectField
                  label={"Transaction Type"}
                  labelWidth={"25%"}
                  inputWidth={"50%"}
                />
              </div>
              <div style={{ marginTop: "15px", color: "red" }}>
                <SelectField
                  label={"Force Debit"}
                  labelWidth={"25%"}
                  inputWidth={"50%"}
                />
              </div>
            </div>
            <br />
            <div>
              <Tabs
                color="cyan"
                radius="xs"
                variant="default"
                defaultValue="gallery"
              >
                <Tabs.List>
                  <Tabs.Tab value="gallery">Waiver Options</Tabs.Tab>
                  <Tabs.Tab
                    value="messages"
                    // icon={<IconMessageCircle size="0.8rem" />}
                  >
                    Charges Details
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="settings"
                    // icon={<IconSettings size="0.8rem" />}
                  >
                    Reschedule Details
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="payment"
                    // icon={<IconSettings size="0.8rem" />}
                  >
                    Payment Reason
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery" pt="xs">
                  <div style={{ padding: "10px" }}>
                    <div style={{ marginTop: "-20px" }}>
                      <ListOfValue
                        label={"waiver"}
                        labelWidth={"25%"}
                        inputWidth={"50%"}
                      />
                    </div>
                    <hr />
                    <div style={{ marginTop: "-10px", display: "flex" }}>
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
                    <div style={{ marginTop: "-15px", display: "flex" }}>
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
                        <InputField inputWidth={"90%"} disabled />
                      </div>
                    </div>
                    <div style={{ marginTop: "-15px", display: "flex" }}>
                      <div style={{ flex: "0.48" }}>
                        <InputField
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
                        <InputField inputWidth={"90%"} disabled />
                      </div>
                    </div>
                    <div style={{ marginTop: "-15px", display: "flex" }}>
                      <div style={{ flex: "0.48" }}>
                        <InputField
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
                        <InputField inputWidth={"90%"} disabled />
                      </div>
                    </div>
                    <div
                      style={{
                        // display: "flex",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        borderRadius: "5px",
                        padding: "5px",
                        border: "1px solid #b8babb",
                      }}
                    >
                      <div style={{}}>
                        <InputField
                          label={"Total Interest To be Paid"}
                          labelWidth={"50%"}
                          inputWidth={"43%"}
                          disabled
                        />
                      </div>
                      <div style={{}}>
                        <InputField
                          label={"Total Penalty To be Paid"}
                          labelWidth={"50%"}
                          inputWidth={"43%"}
                          disabled
                        />
                      </div>
                      <div style={{}}>
                        <InputField
                          label={"Total Arr To be Paid"}
                          labelWidth={"50%"}
                          inputWidth={"43%"}
                          disabled
                        />
                      </div>
                      <div style={{}}>
                        <InputField
                          label={"Loan Principal"}
                          labelWidth={"50%"}
                          inputWidth={"43%"}
                          disabled
                        />
                      </div>
                      <div style={{}}>
                        <InputField
                          label={"New Loan Balance After Waiver(s)"}
                          labelWidth={"50%"}
                          inputWidth={"43%"}
                          disabled
                        />
                      </div>
                      <div style={{ color: "red" }}>
                        <InputField
                          label={"Remaining Loan Balance After Reduction"}
                          labelWidth={"50%"}
                          inputWidth={"43%"}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </Tabs.Panel>

                <Tabs.Panel value="messages" pt="xs">
                  <div style={{ padding: "20px", display: "grid" }}>
                    <div
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        borderRadius: "5px",
                        padding: "10px",
                        border: "1px solid #b8babb",
                      }}
                    >
                      <InputField
                        label={"Fee"}
                        labelWidth={"30%"}
                        inputWidth={"40%"}
                      />
                      <InputField
                        label={"Insurance"}
                        labelWidth={"30%"}
                        inputWidth={"40%"}
                      />
                      <InputField
                        label={"Total Fees Amount"}
                        labelWidth={"30%"}
                        inputWidth={"40%"}
                        disabled
                      />
                    </div>
                  </div>
                </Tabs.Panel>

                <Tabs.Panel value="settings" pt="xs">
                  <div style={{ padding: "20px" }}>
                    <div
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        borderRadius: "5px",
                        padding: "20px",
                        border: "1px solid #b8babb",
                      }}
                    >
                      <div>
                        <InputField
                          label={"Balance To Reschedule"}
                          labelWidth={"40%"}
                          disabled
                        />
                      </div>
                      <div>
                        <InputField
                          label={"Interest Rate P.M / P.A"}
                          labelWidth={"40%"}
                        />
                      </div>
                      {/* <div>
                        <InputField
                          label={"Interest Rate per Annum"}
                          labelWidth={"40%"}
                        />
                      </div> */}
                      <div>
                        <InputField
                          label={"New Tenor (In Months)"}
                          labelWidth={"40%"}
                        />
                      </div>
                      <div>
                        <ListOfValue
                          label={"Interest Type"}
                          labelWidth={"40%"}
                          inputWidth={"60%"}
                        />
                      </div>
                      <div>
                        <ListOfValue
                          label={"Principal Repayment Frequency"}
                          labelWidth={"40%"}
                          inputWidth={"60%"}
                        />
                      </div>
                      <div>
                        <ListOfValue
                          label={"Interest Repayment Frequency"}
                          labelWidth={"40%"}
                          inputWidth={"60%"}
                        />
                      </div>
                      <div>
                        <InputField
                          label={"Moratorium Period"}
                          labelWidth={"40%"}
                        />
                      </div>
                      <div>
                        <SelectField
                          label={"Moratorium with Interest"}
                          labelWidth={"40%"}
                        />
                      </div>
                      <div>
                        <InputField
                          type={"date"}
                          label={"Next Schedule Date"}
                          labelWidth={"40%"}
                        />
                      </div>
                      <div>
                        <InputField
                          type={"date"}
                          label={"Effective Date"}
                          labelWidth={"40%"}
                        />
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <ButtonComponent
                          label={"Preview Schedule"}
                          background={
                            `url(` +
                            window.location.origin +
                            `/assets/images/headerBackground/` +
                            getTheme.theme.headerImage +
                            `)`
                          }
                          buttonHeight={"40px"}
                          buttonWidth={"140px"}
                          buttonColor={"white"}
                        />
                      </div>
                    </div>
                  </div>
                </Tabs.Panel>

                <Tabs.Panel value="payment" pt="xs">
                  <div>
                    <br />
                    <div style={{ textAlign: "center" }}>
                      <ButtonComponent
                        label={"Attach Document"}
                        background={
                          `url(` +
                          window.location.origin +
                          `/assets/images/headerBackground/` +
                          getTheme.theme.headerImage +
                          `)`
                        }
                        buttonHeight={"40px"}
                        buttonWidth={"140px"}
                        buttonColor={"white"}
                      />
                    </div>
                    <br />
                    <div
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                        borderRadius: "5px",
                        padding: "20px",
                        border: "1px solid #b8babb",
                      }}
                    >
                      <TextAreaField label={"Reason"} labelWidth={"20%"} />
                    </div>
                  </div>
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanReschedule;
