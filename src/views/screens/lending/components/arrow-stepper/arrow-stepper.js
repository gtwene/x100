import React, { useState } from "react";
import ListOfValue from "../fields/ListOfValue";
import InputField from "../fields/InputField";
import SelectField from "../fields/SelectField";
import Label from "../label/Label";
import DataTable from "../data-table/DataTable";
import HeaderComponent from "../header/HeaderComponent";
import { Radio, Group } from "@mantine/core";
import ButtonComponent from "../button/ButtonComponent";

function ArrowStepper() {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClick = (index) => {
    setActiveStep(index);
  };

  const steps = [
    {
      count: 1,
      number: "General",
      content: (
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              flex: "0.5",
              padding: "10px",
              border: "none",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              backgroundColor: "white",
              borderRadius: "5px",
              border: "1px solid #cbd4d8",
            }}
          >
            <div style={{ marginTop: "20px" }}>
              <ListOfValue
                label={"Loan Product"}
                labelWidth={"35%"}
                inputWidth={"50%"}
                required
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <InputField
                label={"Currency"}
                labelWidth={"35%"}
                inputWidth={"15%"}
                required
                disabled
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <InputField
                label={"Facility Amount"}
                labelWidth={"35%"}
                inputWidth={"30%"}
                required
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <ListOfValue
                label={"Intro Source"}
                labelWidth={"35%"}
                inputWidth={"50%"}
                required
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <ListOfValue
                label={"Purpose"}
                labelWidth={"35%"}
                inputWidth={"50%"}
                required
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <ListOfValue
                label={"Sector"}
                labelWidth={"35%"}
                inputWidth={"50%"}
                required
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <ListOfValue
                label={"Sub Sector"}
                labelWidth={"35%"}
                inputWidth={"50%"}
                required
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <ListOfValue
                label={"Sales/Intro Staff"}
                labelWidth={"35%"}
                inputWidth={"50%"}
                required
              />
            </div>
            {/* <div style={{ marginTop: "20px" }}>
                <InputField
                  label={"Interest Rate"}
                  labelWidth={"30%"}
                  inputWidth={"15%"}
                />
              </div> */}
          </div>
          <div
            style={{
              flex: "0.5",
              padding: "10px",
              border: "none",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              backgroundColor: "white",
              borderRadius: "5px",
              border: "1px solid #cbd4d8",
            }}
          >
            <div style={{ borderBottom: "1px solid" }}>
              <h6>Loan Plan</h6>
            </div>
            <div style={{ marginTop: "20px", display: "flex", flex: 1 }}>
              <div style={{ flex: 0.34 }}>
                <Label label={"Interest Rate P.M / P.A"} fontSize={"85%"} />
              </div>
              <div style={{ flex: 0.2 }}>
                <InputField inputWidth={"90%"} />
              </div>
              <div style={{ flex: 0.2 }}>
                <InputField inputWidth={"90%"} />
              </div>
            </div>
            <div style={{}}>
              <ListOfValue
                label={"Interest Type"}
                labelWidth={"35%"}
                inputWidth={"50%"}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <ListOfValue
                label={"Principal Repay Freq."}
                labelWidth={"35%"}
                inputWidth={"50%"}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <ListOfValue
                label={"Interest Repay Freq."}
                labelWidth={"35%"}
                inputWidth={"50%"}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <InputField
                label={"Tenor (Months)"}
                labelWidth={"35%"}
                inputWidth={"15%"}
                required
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <SelectField
                label={"Last Working Day"}
                labelWidth={"35%"}
                inputWidth={"15%"}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <DataTable columns={["Charges", "%", "Fee Amount"]} />
            </div>
          </div>
        </div>
      ),
    },
    {
      count: 2,
      number: "Tranches",
      content: (
        <div style={{ padding: "10px" }}>
          <div>
            <HeaderComponent title={"Syndicate Tranches"} />
          </div>
          <br />
          <div style={{ padding: "60px" }}>
            <DataTable
              columns={["Seq. Number", "Narration", "Due Date", "%", "Amount"]}
            />
          </div>
          <br />
          <div>
            <ButtonComponent
              label={"Add Comments"}
              // buttonBackgroundColor={"black"}
              background={
                `url(` +
                window.location.origin +
                `/assets/images/headerBackground/` +
                getTheme.theme.headerImage +
                `)`
              }
              buttonHeight={"50px"}
              buttonWidth={"150px"}
              buttonColor={"white"}
            />
          </div>
        </div>
      ),
    },
    {
      count: 3,
      number: "Statistics",
      content: (
        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 0.6 }}>
              <div>
                <DataTable
                  columns={[
                    "Income Details (Individual)",
                    "Income Amount",
                    "Amount to Consider",
                  ]}
                />
              </div>
            </div>
            <div style={{ flex: 0.4 }}>
              <div>
                <DataTable
                  columns={["Asset Details (Individuals)", "Amount"]}
                />
              </div>
            </div>
          </div>
          <br />
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 0.6 }}>
              <div>
                <DataTable
                  columns={[
                    "Expenditure and Other Contributions (Individual)",
                    "Amount",
                  ]}
                />
              </div>
            </div>
            <div style={{ flex: 0.4 }}>
              <div>
                <DataTable
                  columns={["Liability Details (Individuals)", "Amount"]}
                />
              </div>
            </div>
          </div>
          <br />
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 0.6 }}>
              <div>
                <DataTable
                  columns={[
                    "Facility Type",
                    "Account Number",
                    "CCY",
                    "Facility Amount",
                    "Installment",
                    "Expiry Date",
                  ]}
                />
              </div>
            </div>
            <div style={{ flex: 0.4 }}>
              <div>
                <DataTable
                  columns={[
                    "Bank Code",
                    "Amount Granted",
                    "Monthly Amount",
                    "Date Granted",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      count: 4,
      number: "Employment",
      content: (
        <div>
          <div>
            <HeaderComponent
              title={"Employment Details"}
              backgroundColor={"orange"}
              height={"35px"}
              color={"white"}
            />
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <div
              style={{
                flex: 0.6,
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                backgroundColor: "white",
              }}
            >
              <div>
                <SelectField
                  label={"Employment Category"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <ListOfValue
                  label={"Employment Type"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Employer"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Others"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Position Held"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  type={"date"}
                  label={"Employed Since"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  type={"date"}
                  label={"Date of Commencement"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  type={"date"}
                  label={"Date of Exited"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Address 1"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Address 2"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Email Address"}
                  labelWidth={"30%"}
                  inputWidth={"50%"}
                />
              </div>
            </div>
            <div
              style={{
                flex: 0.4,
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                backgroundColor: "white",
              }}
            >
              <div>
                <InputField
                  label={"Phone 1"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Phone 2"}
                  labelWidth={"35%"}
                  inputWidth={"55%"}
                />
              </div>
              <div>
                <InputField
                  label={"Location"}
                  labelWidth={"35%"}
                  inputWidth={"55%"}
                />
              </div>
              <div>
                <ListOfValue
                  label={"City"}
                  labelWidth={"35%"}
                  inputWidth={"55%"}
                />
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ marginTop: "-5px" }}>
                  <Label label={"Fixed Term Contract"} />
                </div>
                <div style={{ marginLeft: "30px", marginTop: "-15px" }}>
                  <Radio.Group>
                    <Group mt="xs">
                      <Radio value="yes" label="Yes" color={"orange"} />
                      <Radio value="no" label="No" color={"orange"} />
                    </Group>
                  </Radio.Group>
                </div>
              </div>
              <div>
                <InputField
                  label={"Employment Number"}
                  labelWidth={"35%"}
                  inputWidth={"25%"}
                />
              </div>
              <div>
                <InputField
                  label={"Department"}
                  labelWidth={"35%"}
                  inputWidth={"55%"}
                />
              </div>
              <div>
                <InputField
                  label={"Salary Day"}
                  labelWidth={"35%"}
                  inputWidth={"25%"}
                />
              </div>
              <div>
                <InputField
                  label={"Fax Number"}
                  labelWidth={"35%"}
                  inputWidth={"55%"}
                />
              </div>
              <div>
                <InputField
                  label={"Landmark"}
                  labelWidth={"35%"}
                  inputWidth={"55%"}
                />
              </div>
              <br />
              <div style={{ textAlign: "right" }}>
                <ButtonComponent
                  label={"Save"}
                  // buttonBackgroundColor={"black"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"40px"}
                  buttonWidth={"100px"}
                  buttonColor={"white"}
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      count: 5,
      number: "Guarantors",
      content: (
        <div>
          <div>
            <HeaderComponent
              title={"Guarantors"}
              backgroundColor={"orange"}
              height={"35px"}
              color={"white"}
            />
          </div>
          <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <div
              style={{
                flex: 0.5,
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                backgroundColor: "white",
              }}
            >
              <div>
                <SelectField
                  label={"Guarantor Type"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Guarantor's Account with Bank"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Guarantor's Name"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <ListOfValue
                  label={"Guarantor's ID Type"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"ID Number"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  type={"date"}
                  label={"ID Issue Date"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  type={"date"}
                  label={"ID Expiry Date"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Relation to Borrower"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  type={"date"}
                  label={"Date of Incorperation/Birth"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Place of Birth"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
            </div>
            <div
              style={{
                flex: 0.5,
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                backgroundColor: "white",
              }}
            >
              <div>
                <InputField
                  label={"Residential Address / Business Location"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Postal / Digital Address"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  type={"date"}
                  label={"Residence Since"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Guarantor's Phone Number"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Guarantor's Occupation / Employer"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Residential Address / Business Location"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  type={"date"}
                  label={"Employed Since"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Guarantor's Position"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"End of Service Benefit"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Guarantor's Net Monthly Income"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Email"}
                  labelWidth={"45%"}
                  inputWidth={"50%"}
                />
              </div>
            </div>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <ButtonComponent
                label={"Add Comments"}
                // buttonBackgroundColor={"black"}
                background={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonHeight={"40px"}
                buttonWidth={"150px"}
                buttonColor={"white"}
              />
            </div>
            <div>
              <ButtonComponent
                label={"Clear"}
                // buttonBackgroundColor={"black"}
                background={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonHeight={"40px"}
                buttonWidth={"100px"}
                buttonColor={"white"}
              />
            </div>
            <div>
              <ButtonComponent
                label={"Save"}
                // buttonBackgroundColor={"black"}
                background={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonHeight={"40px"}
                buttonWidth={"100px"}
                buttonColor={"white"}
              />
            </div>
            <div>
              <ButtonComponent
                label={"Send Email"}
                // buttonBackgroundColor={"black"}
                background={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonHeight={"40px"}
                buttonWidth={"150px"}
                buttonColor={"white"}
              />
            </div>
            <div>
              <ButtonComponent
                label={"Send SMS"}
                // buttonBackgroundColor={"black"}
                background={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonHeight={"40px"}
                buttonWidth={"150px"}
                buttonColor={"white"}
              />
            </div>
          </div>
          <br />
          <div>
            <DataTable
              columns={[
                "Guarantor's ID Applicant Number",
                "Guarantor's Name",
                "Postal Address",
                "Guarantor Contact",
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      count: 6,
      number: "Document",
      content: (
        <div>
          <div>
            <DataTable
              columns={[
                "Seq Number",
                "Document Type",
                "Presented Document",
                "Scan Document Number",
                "Scan Date",
                "Document Expiry Date",
                "Mand",
                "Received Date",
              ]}
            />
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <div style={{ flex: 0.2 }}></div>
            <div style={{ display: "flex", flex: 0.6, gap: "40px" }}>
              <div>
                <ButtonComponent
                  label={"Add Comments"}
                  // buttonBackgroundColor={"black"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"40px"}
                  buttonWidth={"150px"}
                  buttonColor={"white"}
                />
              </div>
              <div>
                <ButtonComponent
                  label={"Add Other Documents"}
                  // buttonBackgroundColor={"black"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"40px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                />
              </div>
              <div>
                <ButtonComponent
                  label={"Account Creation Document Details"}
                  // buttonBackgroundColor={"black"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"40px"}
                  buttonWidth={"290px"}
                  buttonColor={"white"}
                />
              </div>
            </div>
            <div style={{ flex: 0.2 }}></div>
          </div>
        </div>
      ),
    },
    {
      count: 7,
      number: "Collateral",
      content: (
        <div>
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              backgroundColor: "white",
            }}
          >
            <div style={{ flex: 0.7 }}>
              <div>
                <ListOfValue
                  label={"Collateral Number"}
                  labelWidth={"25%"}
                  inputWidth={"50%"}
                />
              </div>
              <div>
                <InputField
                  label={"Total Amount"}
                  labelWidth={"25%"}
                  inputWidth={"50%"}
                  disabled
                />
              </div>
              <div>
                <InputField
                  label={"Collateral Amount"}
                  labelWidth={"25%"}
                  inputWidth={"50%"}
                  disabled
                />
              </div>
              <div>
                <InputField
                  label={"Amount Available to Use"}
                  labelWidth={"25%"}
                  inputWidth={"50%"}
                  disabled
                />
              </div>
              <div>
                <InputField
                  label={"Amount Utilized"}
                  labelWidth={"25%"}
                  inputWidth={"50%"}
                  disabled
                />
              </div>
            </div>
            <div
              style={{
                flex: 0.3,
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                backgroundColor: "white",
                height: "120px",
                border: "0.5px solid #e0dfe0",
                marginTop: "35px",
              }}
            >
              <div>
                <InputField
                  label={"Coverage %"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <InputField
                  label={"Loan Amount"}
                  labelWidth={"35%"}
                  inputWidth={"50%"}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              backgroundColor: "white",
              border: "0.5px solid #e0dfe0",
              marginTop: "15px",
            }}
          >
            <div>
              <InputField
                label={"Loan Percentage Coverage"}
                labelWidth={"55%"}
                inputWidth={"50%"}
                disabled
              />
            </div>
            <div>
              <InputField
                label={"Amount to be Utilized"}
                labelWidth={"55%"}
                inputWidth={"50%"}
              />
            </div>
            <div>
              <InputField
                label={"Amount Available"}
                labelWidth={"55%"}
                inputWidth={"50%"}
                disabled
              />
            </div>
          </div>
          <br />
          <div style={{ display: "flex" }}>
            <div style={{ flex: 0.2 }}></div>
            <div style={{ flex: 0.6, display: "flex", gap: "30px" }}>
              <div>
                <ButtonComponent
                  label={"Add Comments"}
                  // buttonBackgroundColor={"black"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"40px"}
                  buttonWidth={"150px"}
                  buttonColor={"white"}
                />
              </div>
              <div>
                <ButtonComponent
                  label={"Add Other Comments"}
                  // buttonBackgroundColor={"black"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"40px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                />
              </div>
              <div>
                <ButtonComponent
                  label={"Save"}
                  // buttonBackgroundColor={"black"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"40px"}
                  buttonWidth={"100px"}
                  buttonColor={"white"}
                />
              </div>
              <div>
                <ButtonComponent
                  label={"Clear Record"}
                  // buttonBackgroundColor={"black"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"40px"}
                  buttonWidth={"150px"}
                  buttonColor={"white"}
                />
              </div>
            </div>
            <div style={{ flex: 0.2 }}></div>
          </div>
          <br />
          <div>
            <DataTable
              columns={[
                "Sr. Number",
                "Collateral Number",
                "Collateral Type",
                "Collateral Amount",
                "Loan Amount",
                "Loan % Covered",
                "Amount Utilized",
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      count: 8,
      number: "External Credit Bureau",
      content: (
        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div
              style={{
                flex: 0.5,
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                backgroundColor: "white",
                border: "0.5px solid #e0dfe0",
              }}
            >
              <div>
                <HeaderComponent
                  title={"External Credit Bureau Details"}
                  backgroundColor={"orange"}
                  height={"35px"}
                  color={"white"}
                />
              </div>
              <div style={{ marginTop: "15px" }}>
                <div style={{ borderBottom: "0.5px solid #828083" }}>
                  <h6>Enquiry made within the last 12 months</h6>
                </div>
              </div>
              <div>
                <InputField
                  label={"Number of enquiry made on behalf of this cutomer"}
                  labelWidth={"70%"}
                />
              </div>
              <div>
                <InputField
                  label={
                    "Number of banks that have enquired about this customer"
                  }
                  labelWidth={"70%"}
                />
              </div>
              <div>
                <InputField
                  type={"date"}
                  label={"Printed Date"}
                  labelWidth={"70%"}
                />
              </div>
              <div>
                <InputField
                  type={"date"}
                  label={"Expiry Date"}
                  labelWidth={"70%"}
                />
              </div>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <ButtonComponent
                    label={"Add Comments"}
                    // buttonBackgroundColor={"black"}
                    background={
                      `url(` +
                      window.location.origin +
                      `/assets/images/headerBackground/` +
                      getTheme.theme.headerImage +
                      `)`
                    }
                    buttonHeight={"40px"}
                    buttonWidth={"150px"}
                    buttonColor={"white"}
                  />
                </div>
                <div>
                  <ButtonComponent
                    label={"New"}
                    // buttonBackgroundColor={"black"}
                    background={
                      `url(` +
                      window.location.origin +
                      `/assets/images/headerBackground/` +
                      getTheme.theme.headerImage +
                      `)`
                    }
                    buttonHeight={"40px"}
                    buttonWidth={"100px"}
                    buttonColor={"white"}
                  />
                </div>
                <div>
                  <ButtonComponent
                    label={"Save Credit Bureau"}
                    // buttonBackgroundColor={"black"}
                    background={
                      `url(` +
                      window.location.origin +
                      `/assets/images/headerBackground/` +
                      getTheme.theme.headerImage +
                      `)`
                    }
                    buttonHeight={"40px"}
                    buttonWidth={"200px"}
                    buttonColor={"white"}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                flex: 0.5,
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                backgroundColor: "white",
                border: "0.5px solid #e0dfe0",
              }}
            >
              <div>
                <HeaderComponent
                  title={"Previous Credit Records"}
                  backgroundColor={"orange"}
                  height={"35px"}
                  color={"white"}
                />
              </div>
              <div>
                <SelectField
                  label={"Received Credit Facility and paid on time"}
                  labelWidth={"70%"}
                />
              </div>
              <div>
                <SelectField
                  label={"Received Credit Facility and didn't pay on time"}
                  labelWidth={"70%"}
                />
              </div>
              <div>
                <SelectField
                  label={
                    "Received Credit Facility that is past due and still outstanding"
                  }
                  labelWidth={"70%"}
                />
              </div>
              <div>
                <SelectField
                  label={
                    "Received Credit Facility that is still outstanding but performing"
                  }
                  labelWidth={"70%"}
                />
              </div>
              <div>
                <SelectField
                  label={"Received Credit Facility that has been written off"}
                  labelWidth={"70%"}
                />
              </div>
              <div>
                <SelectField
                  label={
                    "Received Credit Facility that has been negotiated for settlement"
                  }
                  labelWidth={"70%"}
                />
              </div>
            </div>
          </div>
          <br />
          <div>
            <DataTable
              columns={[
                "Bank Code",
                "Amount Granted",
                "Outstanding Amount",
                "Date Granted",
                "Maturity Date",
                "Status",
                "Type of Facility",
              ]}
            />
          </div>
          <br />
          <div>
            <HeaderComponent
              title={"Debts in the Name of Other Companies"}
              backgroundColor={"orange"}
              height={"35px"}
              color={"white"}
            />
          </div>
          <div>
            <DataTable
              columns={[
                "Bank Code",
                "Amount Granted",
                "Outstanding Amount",
                "Date Granted",
                "Maturity Date",
                "Status",
                "Type of Facility",
              ]}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 p-2">
      <ul className="stepper rounded mb-4">
        {steps.map((step, index) => (
          <li
            key={step.number}
            className={`stepper__item cursor-pointer flex h-10 items-center justify-center ${
              index === activeStep
                ? "current text-white"
                : index < activeStep
                ? "complete"
                : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <div className="flex space-x-5 items-center justify-center">
              <div className="border-2 rounded-full w-7 h-7 flex justify-center items-center p-1 bg-black text-white">
                {step.count}
              </div>
              <div>{step.number}</div>
            </div>
          </li>
        ))}
      </ul>
      {steps[activeStep].content}
      <div className="flex justify-between mt-4">
        <button
          className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${
            activeStep === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Back
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r ${
            activeStep === steps.length - 1
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ArrowStepper;
