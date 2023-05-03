import React, { useState, useEffect } from "react";
import InputField from "../components/fields/InputField";
import ListOfValue from "../components/fields/ListOfValue";
import ButtonComponent from "../components/button/ButtonComponent";
import DataTable from "../components/data-table/DataTable";
import HeaderComponent from "../components/header/HeaderComponent";
import ButtonType from "../components/button/ButtonType";
import { Checkbox } from "@mantine/core";
import TextAreaField from "../components/fields/TextArea";
import SelectField from "../components/fields/SelectField";
import Label from "../components/label/Label";
import { API_SERVER } from "../../../../config/constant";
import { MDBIcon } from "mdb-react-ui-kit";
import axios from "axios";
import { useSSR } from "react-i18next";
import swal from "sweetalert";
// import Box from "@mui/material/Box";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const LoanQuotation = () => {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  const [applicantName, setApplicantName] = useState();
  const [netMonthlyIncomeSlashSalary, setNetMonthlyIncomeSlashSalary] =
    useState(1);
  const [debtServiceRatio, setDebtServiceRatio] = useState();

  const [allLoanProducts, setAllLoanProducts] = useState([]);
  const [loanProduct, setLoanProduct] = useState();

  const [allInterestType, setAllInterestType] = useState([]);
  const [interestType, setInterestType] = useState();

  const [currency, setCurrency] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState([]);

  // const [dat, setDat] = useState();
  const [facilityNumber, setFacilityNumber] = useState(0);
  const [effectiveDate, setEffectiveDate] = useState("");
  //   const [currency, setCurrency] = useState(0);
  const [facilityAmount, setFacilityAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [tenorInMonths, setTenorInMonths] = useState("");
  const [exemptMonth, setExemptMonth] = useState();
  const [withInterest, setWithInterest] = useState();
  const [lastWorkingDay, setLastWorkingDay] = useState();
  const [expiryDate, setExpiryDate] = useState();

  const [allPrincipalRepaymentFrequency, setAllPrincipalRepaymentFrequency] =
    useState([]);
  const [principalRepaymentFrequency, setPrincipalRepaymentFrequency] =
    useState();

  const [allInterestRepaymentFrequency, setAllInterestRepaymentFrequency] =
    useState([]);

  const [interestRepaymentFrequency, setInterestRepaymentFrequency] =
    useState();

  const [principalRepaymentCount, setPrincipalRepaymentCount] = useState(0);
  const [interestRepaymentCount, setInterestRepaymentCount] = useState(0);
  const [moratoriumPeriod, setMoratorium] = useState(0);
  const [moratoriumInterest, setMoratoriumInterest] = useState("");
  //   const [lastWorkingDay, setLastWorkingDay] = useState("");

  const [balloonInstallment, setBalloonInstallment] = useState("");
  const [firstRepaymentDate, setFirstRepaymentDate] = useState("");
  const [processingFees, setProcessingFees] = useState("");
  const [balloonInstallmentNumber, setBalloonInstallmentNumber] = useState("");
  const [lastRepaymentDate, setLastRepaymentDate] = useState("");
  const [legalForm, setLegalForm] = useState("");

  const [data, setData] = useState([]);

  // console.log(
  //   facilityNumber +
  //     "," +
  //     effectiveDate +
  //     ", " +
  //     currency +
  //     "," +
  //     facilityAmount +
  //     "," +
  //     interestRate +
  //     "," +
  //     tenorInMonths +
  //     "," +
  //     exemptMonth +
  //     "," +
  //     principalRepaymentFrequency +
  //     "," +
  //     interestRepaymentFrequency +
  //     "," +
  //     principalRepaymentCount +
  //     "," +
  //     interestRepaymentCount +
  //     "," +
  //     moratoriumPeriod +
  //     "," +
  //     moratoriumInterest +
  //     "," +
  //     lastWorkingDay +
  //     "," +
  //     interestType +
  //     "," +
  //     balloonInstallment +
  //     "," +
  //     firstRepaymentDate +
  //     "," +
  //     processingFees +
  //     "," +
  //     balloonInstallmentNumber +
  //     "," +
  //     lastRepaymentDate +
  //     "," +
  //     legalForm
  // );

  const [quotationNumber, setQuotationNumber] = useState(null);

  useEffect(() => {
    async function getQuotationNumber() {
      let response = await fetch(API_SERVER + "/get-unique-ref");
      response = await response.json();
      setQuotationNumber(response[0]["unique_ref"]);
      //   console.log(response[0]["unique_ref"]);
    }

    getQuotationNumber();
  }, []);

  useEffect(() => {
    async function getLoanProducts() {
      let response = await fetch(API_SERVER + "/get-loan-products");
      response = await response.json();
      setAllLoanProducts(response);
      //   console.log(response);
    }

    async function getCurrency() {
      let response = await fetch(API_SERVER + "/get-currency");
      response = await response.json();
      setCurrency(response);
      //   console.log(response);
    }

    async function getInterestType() {
      let response = await fetch(API_SERVER + "/get-interest-type");
      response = await response.json();
      setAllInterestType(response);
      //   console.log(response);
    }

    async function getPrincipalRepaymentFrequency() {
      let response = await fetch(
        API_SERVER + "/get-principal-repayment-frequency"
      );
      response = await response.json();
      setAllPrincipalRepaymentFrequency(response);
      //   console.log(response);
    }

    async function getInterestRepaymentFrequency() {
      let response = await fetch(
        API_SERVER + "/get-interest-repayment-frequency"
      );
      response = await response.json();
      setAllInterestRepaymentFrequency(response);
      //   console.log(response);
    }

    getInterestRepaymentFrequency();
    getPrincipalRepaymentFrequency();
    getInterestType();
    getCurrency();
    getLoanProducts();
  }, []);

  const handleApplicantNameChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setApplicantName(value);
  };

  const handleLoanProductChange = (value) => {
    setLoanProduct(value);
  };

  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
  };

  const handleInterestType = (value) => {
    setInterestType(value);
  };

  const handlePrincipalRepaymentFrequency = (value) => {
    setPrincipalRepaymentFrequency(value);
  };

  const handleInterestRepaymentFrequency = (value) => {
    setInterestRepaymentFrequency(value);
  };

  console.log(interestRepaymentFrequency, "interest frequencies");

  console.log(principalRepaymentFrequency, "freq");

  console.log(interestType, "int");
  console.log(loanProduct, selectedCurrency);

  const handleNetMonthlyIncomeSalaryChange = (event) => {
    const value = event.target.value;
    setNetMonthlyIncomeSlashSalary(value);
  };

  const handleEffectiveDateChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setEffectiveDate(value);
  };

  const handleFacilityNumberChange = (event) => {
    const value = event.target.value;

    setFacilityNumber(value);
  };

  const handleInterestRateChange = (event) => {
    const value = event.target.value;
    console.log(value);

    setInterestRate(value);
  };

  const handleTenorInMonthsChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setTenorInMonths(value);
  };

  //   exempt month
  const handleChangeExemptMonths = (value) => {
    setExemptMonth(value);
  };
  //   console.log(exemptMonth,"month")

  // with interest
  const handleChangeWithInterest = (value) => {
    setWithInterest(value);
  };
  //   console.log(withInterest, "interest");

  //  last working day
  const handleChangeLastWorkingDay = (value) => {
    setLastWorkingDay(value);
  };
  //   console.log(lastWorkingDay, "last working day");

  async function postLoanScheduleEnquiry() {
    const facilityNumber = document.getElementById("quotationNumber").value;
    const applicantName = document.getElementById("applicantName").value;
    const netMonthlyIncomeSalary = document.getElementById(
      "netMonthlyIncomeSalary"
    ).value;
    const effectiveDate = document.getElementById("effectiveDate").value;

    const eDate = new Date(effectiveDate);
    const effective_date = eDate
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .replace(/ /g, "-");

    // return console.log(loanProduct);
    // return console.log(selectedCurrency);

    const facilityAmount = document.getElementById("facilityAmount").value;
    const interestRate = document.getElementById("interestRate").value;
    const tenorInMonths = document.getElementById("tenorInMonths").value;

    // return console.log(exemptMonth);

    if (document.getElementById("principalRepaymentFrequency")) {
      const principalRepaymentFrequency = document.getElementById(
        "principalRepaymentFrequency"
      ).value;
    }
    if (document.getElementById("interestRepaymentFrequency")) {
      const interestRepaymentFrequency = document.getElementById(
        "interestRepaymentFrequency"
      ).value;
    }
    if (document.getElementById("principalRepaymentCount")) {
      const principalRepaymentCount = document.getElementById(
        "principalRepaymentCount"
      ).value;
    }
    if (document.getElementById("interestRepaymentCount")) {
      const interestRepaymentCount = document.getElementById(
        "interestRepaymentCount"
      ).value;
    }
    if (document.getElementById("moratoriumPeriod")) {
      const moratoriumPeriod =
        document.getElementById("moratoriumPeriod").value;
    }
    if (document.getElementById("moratoriumInterest")) {
      const moratoriumInterest =
        document.getElementById("moratoriumInterest").value;
    }
    if (document.getElementById("lastWorkingDay")) {
      const lastWorkingDay = document.getElementById("lastWorkingDay").value;
    }
    if (document.getElementById("interestType")) {
      const interestType = document.getElementById("interestType").value;
    }
    if (document.getElementById("balloonInstallment")) {
      const balloonInstallment =
        document.getElementById("balloonInstallment").value;
    }
    if (document.getElementById("firstRepaymentDate")) {
      const firstRepaymentDate =
        document.getElementById("firstRepaymentDate").value;
    }
    if (document.getElementById("processingFees")) {
      const processingFees = document.getElementById("processingFees").value;
    }
    if (document.getElementById("balloonInstallmentNumber")) {
      const balloonInstallmentNumber = document.getElementById(
        "balloonInstallmentNumber"
      ).value;
    }
    if (document.getElementById("lastRepaymentDate")) {
      const lastRepaymentDate =
        document.getElementById("lastRepaymentDate").value;
    }
    // if (document.getElementById("legalForm")) {
    //   const legalForm = document.getElementById("legalForm").value;
    // }

    console.log(
      {
        facility_number: quotationNumber,
        interest_rate: interestRate,
        facility_amount: facilityAmount,
        principal_moratorium: moratoriumPeriod,
        interest_moratorium: moratoriumInterest,
        loan_tenor_in_months: tenorInMonths,
        effective_date: effective_date,
        interest_type: interestType,
        principal_repayment_frequency: principalRepaymentFrequency,
        principal_repayment_count: principalRepaymentCount,
        schedule_start_date: effectiveDate,
        processing_fees: processingFees,
        last_working_day_of_the_month: lastWorkingDay,
        interest_repayment_frequency: interestRepaymentFrequency,
        interest_repayment_count: interestRepaymentCount,
        ballon_installment_to_be_applied: balloonInstallment,
        ballon_on_installment_number: balloonInstallmentNumber,
        first_principal_repay_date: firstRepaymentDate,
        last_repayment_date: lastRepaymentDate,
        legal_form: legalForm,
        currency: selectedCurrency,
        exempt_month: exemptMonth,
        net_monthly_income: netMonthlyIncomeSalary,
      },
      "cool things.."
    );

    if (
      interestRate === "" ||
      facilityAmount === "" ||
      tenorInMonths === "" ||
      effectiveDate === "" ||
      interestType === "" ||
      principalRepaymentFrequency === "" ||
      // principalRepaymentCount === "" ||
      effectiveDate === "" ||
      // processingFees === "" ||
      interestRepaymentFrequency === "" ||
      // interestRepaymentCount === "" ||
      // firstRepaymentDate === "" ||
      // lastRepaymentDate === "" ||
      // legalForm === "" ||
      selectedCurrency === ""
    ) {
      swal({
        title: "All Fields Are Required",
        text: "Please fill all the fields",
        icon: "warning",
        button: "Ok",
      }).then((result) => {
        // Do something here..
        // document.getElementById("postBTN").disabled = false;
      });
    } else {
      await axios
        .post(API_SERVER + "/loan-schedule-quotation", {
          facility_number: quotationNumber,
          interest_rate: interestRate,
          facility_amount: facilityAmount,
          principal_moratorium: moratoriumPeriod,
          interest_moratorium: moratoriumInterest,
          loan_tenor_in_months: tenorInMonths,
          effective_date: effective_date,
          interest_type: interestType,
          principal_repayment_frequency: principalRepaymentFrequency,
          principal_repayment_count: principalRepaymentCount,
          schedule_start_date: effective_date,
          processing_fees: processingFees,
          last_working_day_of_the_month: lastWorkingDay,
          interest_repayment_frequency: interestRepaymentFrequency,
          interest_repayment_count: interestRepaymentCount,
          ballon_installment_to_be_applied: balloonInstallment,
          ballon_on_installment_number: balloonInstallmentNumber,
          first_principal_repay_date: firstRepaymentDate,
          last_repayment_date: lastRepaymentDate,
          legal_form: legalForm,
          currency: selectedCurrency,
          exempt_month: exemptMonth,
          net_monthly_income: netMonthlyIncomeSalary,
        })
        .then(function (response) {
          console.log(response);

          console.log(response.data[0].responseCode);

          if (response.data[0].responseCode === "000") {
            swal({
              title: "Success",
              text: response.data[0].responseMessage,
              icon: "success",
              button: "Ok",
            }).then((result) => {
              // Do something here..
              // document.getElementById("postBTN").disabled = false;

              loanScheduleEnquiry();

              getExtraLoanInfo();
            });
          }

          async function loanScheduleEnquiry() {
            await axios
              .post(API_SERVER + "/loan-schedule-enquiry", {
                facility_number: quotationNumber,
              })
              .then(function (response) {
                // let data = response;
                // console.log(response.data.responseMessage);

                console.log(quotationNumber, "quotationNumber");

                let resp = response.data.responseMessage;

                let details = [];

                for (let i = 0; i < resp.length; i++) {
                  const repay_seq_no = resp[i].repay_seq_no;

                  const date_due = resp[i].date_due;

                  const dDue = new Date(date_due);
                  const dateDue = dDue
                    .toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                    .replace(/ /g, "-");

                  const principal = resp[i].principal;
                  const interest = resp[i].interest;
                  const cum_p = resp[i].cum_p;

                  details.push([
                    repay_seq_no,
                    dateDue,
                    principal,
                    interest,
                    cum_p,
                  ]);
                }

                setData(details);
              });
          }

          // Get DSR
          async function getExtraLoanInfo() {
            let resp = await axios
              .post(API_SERVER + "/get-extra-loan-info", {
                facility_number: quotationNumber,
                net_monthly_salary: netMonthlyIncomeSlashSalary,
              })
              .then(function (response) {
                // console.log
                if (response) {
                  let resp1 = response.data.responseMessage;
                  console.log(response, "am dey here some..");
                  setDebtServiceRatio(resp1[0].dsr);
                }
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

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
                onClick={postLoanScheduleEnquiry}
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
          <div
            style={{
              padding: "5px",
              border: "0.5px solid #d6d7d9",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              borderRadius: "5px",
              width: "25%",
              backgroundColor: "white",
            }}
          >
            <div>
              <InputField
                label={"Quotation Number"}
                labelWidth={"50%"}
                id="quotationNumber"
                value={quotationNumber}
                disabled
              />
            </div>
          </div>
        </div>
        <br />
        <div
          style={{
            padding: "5px",
            border: "0.5px solid #d6d7d9",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            borderRadius: "5px",
            backgroundColor: "white",
          }}
        >
          <div style={{ borderBottom: "0.5px solid " }}>
            <h6 style={{ margin: "10px" }}>Applicant Details</h6>
          </div>
          <div style={{ marginTop: "10px", display: "flex" }}>
            <div style={{ flex: 0.3 }}>
              <InputField
                label={"Applicant Name"}
                labelWidth={"35%"}
                id="applicantName"
                // onChange={handleApplicantNameChange}
                inputWidth={"65%"}
              />
            </div>
            <div style={{ flex: 0.35 }}>
              <InputField
                label={"Net Monthly Income/Salary"}
                id="netMonthlyIncomeSalary"
                onChange={handleNetMonthlyIncomeSalaryChange}
                labelWidth={"50%"}
              />
            </div>
            <div style={{ flex: 0.25 }}>
              <InputField
                color={"red"}
                value={debtServiceRatio}
                id="debtServiceRatio"
                label={"Debt Service Ratio (DSR)"}
                labelWidth={"50%"}
                disabled
              />
            </div>
            <div style={{ marginTop: "5px", flex: 0.1 }}>
              <ButtonComponent
                label={"Print"}
                background={
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`
                }
                buttonHeight={"40px"}
                buttonWidth={"120px"}
                buttonColor={"white"}
              />
            </div>
          </div>
        </div>
        <br />
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              flex: 0.47,
              padding: "5px",
              border: "0.5px solid #d6d7d9",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          >
            <div>
              <InputField
                type={"date"}
                label={"Effective Date"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                required
                id="effectiveDate"
                // onChange={handleEffectiveDateChange}
              />
            </div>
            <div>
              <ListOfValue
                label={"Loan Product"}
                onChange={handleLoanProductChange}
                lovdata={allLoanProducts}
                labelWidth={"35%"}
                inputWidth={"60%"}
                required
                id="loanProduct"
              />
            </div>
            <div>
              <SelectField
                label={"Currency"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                onChange={handleCurrencyChange}
                required
                lovdata={currency}
                id="currency"
                // onChange={(e) => setCurrency(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "5px" }}>
              <InputField
                label={"Facility Amount"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                required
                // onChange={handleFacilityNumberChange}
                id="facilityAmount"
              />
            </div>
            {/* <div style={{ display: "flex" }}>
              <div style={{ flex: 0.33, marginTop: "5px", marginRight: "4px" }}>
                <Label
                  required
                  label={"Interest Rate P.M / P.A"}
                  fontSize={"85%"}
                />
              </div>
              <div style={{ flex: 0.18, marginTop: "" }}>
                <InputField
                  inputWidth={"98%"}
                  onChange={(e) => {
                    setInterestRate(e.target.value);
                  }}
                />
              </div>
              <div style={{ flex: 0.2, marginTop: "" }}>
                <InputField
                  inputWidth={"90%"}
                  onChange={(e) => {
                    setInterestRate(e.target.value);
                  }}
                />
              </div>
            </div> */}
            <div style={{ marginBottom: "5px" }}>
              <InputField
                label={"Interest Rate"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                required
                onChange={handleInterestRateChange}
                id="interestRate"
              />
            </div>
            <div style={{ marginBottom: "5px" }}>
              <InputField
                label={"Tenor (In Months)"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                required
                // onChange={handleTenorInMonthsChange}
                id="tenorInMonths"
              />
            </div>
            <div>
              <SelectField
                label={"Apply Exempt Months"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                required
                lovdata={[
                  { label: "Yes", value: "Y" },
                  { label: "No", value: "N" },
                ]}
                id="applyExemptMonths"
                onChange={handleChangeExemptMonths}
                // onChange={(value) => setExemptMonth(value)}
              />
            </div>
            <div>
              <ListOfValue
                label={"Interest Type"}
                labelWidth={"35%"}
                inputWidth={"60%"}
                required
                lovdata={allInterestType}
                id="interestType"
                onChange={handleInterestType}
                // value={interestType}
              />
            </div>
            <div>
              <ListOfValue
                label={"Principal Repayment Frequency"}
                labelWidth={"35%"}
                inputWidth={"60%"}
                required
                onChange={handlePrincipalRepaymentFrequency}
                lovdata={allPrincipalRepaymentFrequency}
                id="principalRepaymentFrequency"
                // onChange={(e) => setPrincipalRepaymentFrequency(e)}
              />
            </div>
            <div>
              <ListOfValue
                label={"Interest Repayment Frequency"}
                labelWidth={"35%"}
                inputWidth={"60%"}
                required
                onChange={handleInterestRepaymentFrequency}
                lovdata={allInterestRepaymentFrequency}
                id="interestRepaymentFrequency"
                // onChange={(value) => setInterestRepaymentFrequency(value)}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 0.33, marginTop: "5px", marginRight: "5px" }}>
                <Label label={"Principal/Int. Repay. Count"} fontSize={"85%"} />
              </div>
              <div style={{ flex: 0.18, marginTop: "" }}>
                <InputField
                  inputWidth={"98%"}
                  disabled
                  // onChange={(e) => setPrincipalRepaymentCount(e.target.value)}
                  id="principalRepaymentCount"
                />
              </div>
              <div style={{ flex: 0.2, marginTop: "" }}>
                <InputField
                  inputWidth={"90%"}
                  disabled
                  // onChange={(e) => setInterestRepaymentCount(e.target.value)}
                  id="interestRepaymentCount"
                />
              </div>
            </div>
            <div>
              <InputField
                label={"Moratorium Period"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                // onChange={(e) => setMoratorium(e.target.value)}
                id="moratoriumPeriod"
              />
            </div>
            <div>
              <SelectField
                label={"With Interest"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                lovdata={[
                  { label: "Yes", value: "Y" },
                  { label: "No", value: "N" },
                ]}
                onChange={handleChangeWithInterest}
                id="moratoriumInterest"
              />
            </div>
            <div>
              <SelectField
                label={"Last Working Day"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                lovdata={[
                  { label: "Yes", value: "Y" },
                  { label: "No", value: "N" },
                ]}
                onChange={handleChangeLastWorkingDay}
                id="lastWorkingDay"
              />
            </div>
            <div>
              <InputField
                label={"Balloon Installment"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                // onChange={(e) => setBalloonInstallment(e.target.value)}
                id="balloonInstallment"
              />
            </div>
            <div>
              <InputField
                label={"First Repayment Date"}
                labelWidth={"35%"}
                inputWidth={"33%"}
                // onChange={(e) => setFirstRepaymentDate(e.target.value)}
                disabled
                id="firstRepaymentDate"
              />
            </div>
            <div>
              <InputField
                label={"Expiry Date"}
                labelWidth={"35%"}
                // onChange={(e) => setExpiryDate(e.target.value)}
                inputWidth={"33%"}
                disabled
                id="expiryDate"
              />
            </div>
          </div>
          <div style={{ flex: 0.53 }}>
            <DataTable
              columns={[
                "Seq Number",
                "Due Date",
                "Principal",
                "Interest",
                "Payment",
              ]}
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanQuotation;
