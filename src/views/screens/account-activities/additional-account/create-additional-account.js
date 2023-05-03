import { useState, useEffect } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { GiHumanTarget } from "react-icons/gi";
import { SiNike } from "react-icons/si";
import { MdOutlinePersonalInjury } from "react-icons/md";
import Individual_account_opening from "./components/account-details";
import Account_Details from "./components/relation-signatory-details";
import { API_SERVER } from "../../../../config/constant";
import { ScrollArea } from "@mantine/core";
import axios from "axios";
import HeaderComponent from "../../../../components/others/Header/HeaderComponent";
import Label from "../../../../components/others/Label/Label";
import AccountDetail from "./components/account-details";
import RelationSignatoryDetails from "./components/relation-signatory-details";
import { MDBIcon } from "mdb-react-ui-kit";

function CreateAdditionalAccount({ accountTypes, setAccountTypes }) {
  const [activeStep, setActiveStep] = useState(0);
   const [customerSegment, setCustomerSegment] = useState("");
   const [customerSubSegment, setCustomerSubSegment] = useState([]);
   const [sector, setSector] = useState([]);
   const [subSector, setSubSector] = useState([]);
   const [handleData, setHandleData] = useState("");
   const [productData, setProductData] = useState([]);
   const [active, setActive] = useState(0);
   const customTheme = JSON.parse(localStorage.getItem("theme"));

   // console.log(customTheme);

   const [getTheme, setTheme] = useState(customTheme);
   const nextStep = () =>
     setActive((current) => (current < 9 ? current + 1 : current));
   const prevStep = () =>
     setActive((current) => (current > 0 ? current - 1 : current));

   useEffect(() => {
     axios
       .post(API_SERVER + "/get-customer-category", { csType: accountTypes })
       .then((res) => {
         console.log(res.data, "from Tabs");
         if (res.data.length > 0) {
           const arr = [];
           res.data?.map((i) =>
             arr.push({ value: i.actual_code, label: i.description })
           );
           setCustomerSegment(arr);
         }

         // localStorage.setItem("customerSegment", JSON.stringify(customerSegment))
       });

     axios.get(API_SERVER + "/get-sector").then((res) => {
       // console.log(res.data , "from Tabs")
       if (res.data.length > 0) {
         const arr = [];
         res.data?.map((i) =>
           arr.push({ value: i.class_code, label: i.description })
         );
         setSector(arr);
       }

       // localStorage.setItem("customerSegment", JSON.stringify(customerSegment))
     });
   }, [accountTypes]);

   useEffect(() => {
     // Get Customer Category
     const getCustomerCategory = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "CUT",
         })
         .then(function (response) {
           localStorage.setItem(
             "getCustomerCategory",
             JSON.stringify(response.data)
           );

           console.log("getCustomerCategory :", response.data);
         });

       // setShow(false)
     };

     // Get Customer Title
     const getCustomerTitle = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "TIT",
         })
         .then(function (response) {
           localStorage.setItem("title", JSON.stringify(response.data));
           // console.log("CurrencyAmount :",response.data);
         });
     };

     // Get Salutation
     const getSalutation = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "SAL",
         })
         .then(function (response) {
           localStorage.setItem("Salutation", JSON.stringify(response.data));
           // console.log("CurrencyAmount :",response.data);
         });
     };

     // Get ID Type
     const getIDType = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "HRD",
         })
         .then(function (response) {
           localStorage.setItem("getIDType", JSON.stringify(response.data));
           // console.log("getCountry :",response.data);
         });
     };

     // Get City
     const getCity = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "CTY",
         })
         .then(function (response) {
           localStorage.setItem("getCity", JSON.stringify(response.data));
         });
     };

     // Get Country
     const getCountry = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "CON",
         })
         .then(function (response) {
           localStorage.setItem("getCountry", JSON.stringify(response.data));
           console.log("getCountry :", response.data);
         });
     };

     // Get Postal Address
     const getPostalAddress = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "CIT",
         })
         .then(function (response) {
           localStorage.setItem(
             "getPostalAddress",
             JSON.stringify(response.data)
           );
         });
     };

     // Get Signatory Level
     const getSignatoryLevel = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "APL",
         })
         .then(function (response) {
           localStorage.setItem(
             "getSignatoryLevel",
             JSON.stringify(response.data)
           );
         });
     };

     // Get Preferrred Language
     const getPreferredLanguage = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "LNG",
         })
         .then(function (response) {
           localStorage.setItem(
             "PreferrredLanguage",
             JSON.stringify(response.data)
           );
         });
     };

     // Get Document Required Type
     const getDocumentRequiredType = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "DRA",
         })
         .then(function (response) {
           localStorage.setItem(
             "DocumentRequiredType",
             JSON.stringify(response.data)
           );
         });
     };

     // Get Product Group
     async function getProductGroup() {
       axios.get(API_SERVER + "/product-group-data").then(function (response) {
         localStorage.setItem(
           "ProductGroup_data",
           JSON.stringify(response.data)
         );
       });
     }

     // Get Product Sub Group
     async function getProductSubGroup() {
       axios.get(API_SERVER + "/product-group-data").then(function (response) {
         localStorage.setItem("ProductSubGroup", JSON.stringify(response.data));
       });
     }

     // Get Account Mandate
     const getAccountMandate = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "AMD",
         })
         .then(function (response) {
           localStorage.setItem(
             "AccountMandate",
             JSON.stringify(response.data)
           );
         });
     };

     // Get Nature of Ownership
     const getNatureOfOwnership = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "NOW",
         })
         .then(function (response) {
           localStorage.setItem(
             "NatureOfOwnership",
             JSON.stringify(response.data)
           );
         });
     };

     // Get introductory source
     async function getIntroductorySource() {
       axios
         .get(API_SERVER + "/get-introductory-source")
         .then(function (response) {
           localStorage.setItem(
             "introductory_source",
             JSON.stringify(response.data)
           );
         });
     }

     Promise.all([
       getCustomerCategory(),
       getCustomerTitle(),
       getSalutation(),
       getIDType(),
       getCity(),
       getCountry(),
       getPostalAddress(),
       getSignatoryLevel(),
       getPreferredLanguage(),
       getProductGroup(),
       getProductSubGroup(),
       getDocumentRequiredType(),
       getAccountMandate(),
       getNatureOfOwnership(),
       getIntroductorySource(),
     ])
       .then(function (results) {
         // get currencies
         const getCurrencyAmount = results[0].data;
         localStorage.setItem(
           "getCurrencyAmount",
           JSON.stringify(getCurrencyAmount)
         );
         console.log(getCurrencyAmount);
       })
       .catch(function (error) {
         console.log(error);
       });
   }, []);
   console.log(customerSegment, accountTypes, "customerSegment");
   const allLovs = {
     customerCategory: [],
     title: [],
     salutation: [],
     id_type: [],
     city: [],
     country: [],
     postalAddress: [],
     signatoryLevel: [],
     preferredLanguage: [],
     productGroup: [],
     productSubGroup: [],
     documentRequiredType: [],
     accountMandate: [],
     natureOfOwnership: [],
     customer_segment: [],
     introductorysource: null,
   };

   console.log(customerSegment);
   // const getCustomerSeg = JSON.parse(localStorage.getItem('customerSegment'))
   // if(getCustomerSeg.length > 0){
   //     getCustomerSeg?.map((i) => (
   //         allLovs.customer_segment.push({value:i.actual_code ,label:i.description })
   //       ))
   // }

   const getCustomerCat = JSON.parse(
     localStorage.getItem("getCustomerCategory")
   );
   getCustomerCat?.map((i) =>
     allLovs.customerCategory.push({
       value: i.actual_code,
       label: i.description,
     })
   );

   const getTitle = JSON.parse(localStorage.getItem("title"));
   getTitle?.map((i) =>
     allLovs.title.push({ value: i.actual_code, label: i.description })
   );

   const getSalutation = JSON.parse(localStorage.getItem("Salutation"));
   getSalutation?.map((i) =>
     allLovs.salutation.push({ value: i.actual_code, label: i.description })
   );

   const getIDType = JSON.parse(localStorage.getItem("getIDType"));
   getIDType?.map((i) =>
     allLovs.id_type.push({ value: i.actual_code, label: i.description })
   );

   const getCity = JSON.parse(localStorage.getItem("getCity"));
   getCity?.map((i) =>
     allLovs.city.push({ value: i.actual_code, label: i.description })
   );

   const getCountry = JSON.parse(localStorage.getItem("getCountry"));
   getCountry?.map((i) =>
     allLovs.country.push({ value: i.actual_code, label: i.description })
   );

   const getPostalAddress = JSON.parse(
     localStorage.getItem("getPostalAddress")
   );
   getPostalAddress?.map((i) =>
     allLovs.postalAddress.push({ value: i.actual_code, label: i.description })
   );

   const getSignatoryLevel = JSON.parse(
     localStorage.getItem("getSignatoryLevel")
   );
   getSignatoryLevel?.map((i) =>
     allLovs.signatoryLevel.push({ value: i.actual_code, label: i.description })
   );

   const getPreferredLanguage = JSON.parse(
     localStorage.getItem("PreferrredLanguage")
   );
   getPreferredLanguage?.map((i) =>
     allLovs.preferredLanguage.push({
       value: i.actual_code,
       label: i.description,
     })
   );

   const getProductGroup = JSON.parse(localStorage.getItem("ProductGroup"));
   getProductGroup?.map((i) =>
     allLovs.productGroup.push({ value: i.actual_code, label: i.description })
   );

   const getProductSubGroup = JSON.parse(
     localStorage.getItem("ProductSubGroup")
   );
   getProductGroup?.map((i) =>
     allLovs.productSubGroup.push({
       value: i.actual_code,
       label: i.description,
     })
   );

   const getDocumentRequiredType = JSON.parse(
     localStorage.getItem("DocumentRequiredType")
   );
   getDocumentRequiredType?.map((i) =>
     allLovs.documentRequiredType.push({
       value: i.actual_code,
       label: i.description,
     })
   );

   const getAccountMandate = JSON.parse(localStorage.getItem("AccountMandate"));
   getAccountMandate?.map((i) =>
     allLovs.accountMandate.push({ value: i.actual_code, label: i.description })
   );

   const getNatureOfOwnership = JSON.parse(
     localStorage.getItem("NatureOfOwnership")
   );
   getNatureOfOwnership?.map((i) =>
     allLovs.natureOfOwnership.push({
       value: i.actual_code,
       label: i.description,
     })
   );

   const getIntroductorySource = JSON.parse(
     localStorage.getItem("introductory_source")
   );
   console.log(getIntroductorySource, "getIntroductorySource::::");

   allLovs.introductorysource = getIntroductorySource;

   const handleOnChange = {
     myMethod: function () {
       const getProductGroup = JSON.parse(localStorage.getItem("ProductGroup"));
       getProductGroup?.map((i) =>
         allLovs.productGroup.push({
           value: i.actual_code,
           label: i.description,
         })
       );
       console.log("Hello World!");
     },

     customerSegment: async function (value) {
       const data = await axios.post(API_SERVER + "/get-sub-segment-cat", {
         segmentCode: value,
       });
       if (data.data.length > 0) {
         const response = data.data;

         if (response[0].responseCode === "000") {
           const arr = [];
           console.log(response, "jfj");
           response.map((i) => {
             arr.push({ value: i.ACTUAL_CODE, label: i.DESCRIPTION });
             // console.log(arr)
           });
         }
         setCustomerSubSegment(arr);
       }
     },

     sector: async function (value) {
       console.log(value, "mmmmm");
       const data = await axios.post(API_SERVER + "/get-sub-sector", {
         sectorClassCode: value,
       });
       if (data.data.length > 0) {
         const response = data.data;
         const arr = [];
         console.log(response, "Mannnn");
         response.map((i) => {
           arr.push({ value: i.actual_code, label: i.description });
           // console.log(arr)
         });
         setSubSector(arr);
       }
     },
   };

   console.log(subSector, "kkk");

   const handleScroll = (e) => {
     console.log("X-axis scroll:", e.target.scrollRight);
   };

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
      number: "Account Details",
      content: (
        <div>
          {/* <Individual_account_opening data={allLovs} /> */}
          <AccountDetail />
        </div>
      ),
    },
    {
      count: 2,
      number: "Relation / Signatory Details",
      content: (
        <div>
          <RelationSignatoryDetails
            sector={sector}
            subSector={subSector}
            customerSegment={customerSegment}
            customerSubSegment={customerSubSegment}
            accountTypes={accountTypes}
            setAccountTypes={setAccountTypes}
            data={allLovs}
            onChange={handleOnChange}
          />
        </div>
      ),
    },
  ];

  return (
    <div style={{ zoom: 0.75 }}>
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
      <div className="border rounded-md shadow-sm bg-gray-100">
        {/* BBAN */}
        <div class="w-full max-w-xl mt-2">
          <div class="md:flex md:items-center mb-2 ml-2">
            <div class="md:w-1/3">
              <Label label="BBAN" required={true} />
            </div>
            <div className="md:w-2/3 md:mr-2">
              <input class="my_inputs" type="text" />
            </div>
          </div>
        </div>
      </div>
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
                <div className="border-2 rounded-full flex justify-center items-center w-7 h-7 p-1 bg-black text-white">
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
    </div>
  );
}

export default CreateAdditionalAccount;