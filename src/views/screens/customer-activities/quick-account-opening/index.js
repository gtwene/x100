import React, { useState, useEffect } from "react";
import axios from 'axios'
import Label from "../../../../components/others/Label/Label";
import ListOfValue from "../../../../components/others/Fields/ListOfValue"
import { MDBIcon } from "mdb-react-ui-kit";
import Account_Details from "../individual-account-opening/components/account-details";
import { API_SERVER } from "../../../../config/constant";
import swal from "sweetalert";
import qs from "qs"
import { Modal, Button } from 'react-bootstrap';
// import Risk_analysis_test from "./components/risk-analysis-test";
import Risk_analysis_test from "../individual-account-opening/components/risk-analysis-test";
import ImageCapturing from "../../../../components/ImageCapturing";
import ImageVerification from "../../../../components/ImageVerification";
// import SelectField from "../../../../../components/others/Fields/SelectField";
const host = window.location.host;

const themes = {
  // default color
  defaultColorTheme: {
    backgroundColor: "#fff",
    backgroundImage: `url("http://${host}/assets/purple.jpeg")`,
    headerColor: "#845ef6",
    buttonColor: "#845ef6",
    nextColor: "violet",
  },

  // blue
  theme1: {
    backgroundColor: "#c8d6e8",
    backgroundImage: `url("http://${host}/assets/blue.png")`,
    headerColor: "rgb(21 163 183)",
    buttonColor: "rgb(66, 157, 232)",
    nextColor: "cyan",
  },

  // red
  theme2: {
    backgroundColor: "#facfcf",
    backgroundImage: `url("http://${host}/assets/redwall.jpeg")`,
    headerColor: "#ed716d",
    buttonColor: "#ed716d",
    nextColor: "red",
  },
  // grape or violet
  theme3: {
    backgroundColor: "#f2dcfa",
    backgroundImage: `url("http://${host}/assets/purpr.webp")`,
    headerColor: "#995ead",
    buttonColor: "#c895f5",
    nextColor: "grape",
  },
  // orange
  theme4: {
    backgroundColor: "#faddca",
    backgroundImage: `url("http://${host}/assets/orann.jpeg")`,
    headerColor: "#fc9403",
    buttonColor: "#edaf6d",
    nextColor: "orange",
  },

  // green
  theme5: {
    backgroundColor: "#b1fcb2",
    backgroundImage: `url("http://${host}/assets/leaf.jpeg")`,
    headerColor: "#008000a7",
    buttonColor: "#4eb550",
    nextColor: "green",
  },
};
function QuickAccountOpening({data, accountTypes, setAccountTypes}) {
  const [themeState, setThemeState] = useState(themes.theme1);
  // const [data, setData] = useState()

  

  // creating states to be used in the application
  const [permittedBal, setPermittedBal] = useState();
  const [availableBal, setAvailableBal] = useState();
  const [ledgerBal, setLedgerBal] = useState();
  const [accountBranch, setAccountBranch] = useState();
  // const [transactionType, setTransactionType] = useState("CADD - CASH DEPOSIT");
  // const customTheme = JSON.parse(localStorage.getItem("theme"));

  // console.log(customTheme);

  const [title, setTitle] = useState([]);
  const [salutation, setSalutation] = useState([]);
  const [idType, setIdType] = useState([]);
  const [city, setCity] = useState([])
  const [country, setCountry] = useState([])
  const [documentRequiredType, setDocumentRequiredType] = useState([])
  const [productGroup, setProductGroup] = useState([])
  const [productSubGroup, setProductSubGroup] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [selectedSubgroup, setSelectedSubgroup] = useState([])
  const [IntroductorySource, setIntroductorySource] = useState([])
  const [activeStep, setActiveStep] = useState(0);
  //  const [customerSegment, setCustomerSegment] = useState("");
   const [customerSubSegment, setCustomerSubSegment] = useState([]);
   const [sector, setSector] = useState([]);
   const [subSector, setSubSector] = useState([]);
   const [bankNames, setBankNames] = useState([])
   const [relationships, setRelationship] = useState([]);
   const [handleData, setHandleData] = useState("");
   const [productData, setProductData] = useState([]);
   const [active, setActive] = useState(0);
   const [isChecked, setIsChecked] = useState(false);

  //  Quick Account Opening 
  const [effectiveDate, SetEffectiveDate] = useState(new Date().toISOString().substr(0, 10));
  const [isValidDate, setIsValidDate] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  // Define state variables for form inputs
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [riskCategory, setRiskCategory] = useState("");
  const [productCode, setProductCode] = useState("");
  const [subProduct, setSubProduct] = useState("");
  const [accountCurrency, setAccountCurrency] = useState("");
  const [customerSegment, setCustomerSegment] = useState("");
  const [subCustomerSegment, setSubCustomerSegment] = useState("");
  const [quickaccount, setQuickAccount] = useState("")
  const [effective, setEffective] = useState("")
  const [armcode, setArmcode] = useState([])
  const [isImageCapturing, setIsImageCapturing] = useState(false)
  const [sweetAlertConfirmed, setSweetAlertConfirmed] = useState(false);

   
  //  Anti Money Laundering 
  const [sourceOfWealth, setSourceOfWealth] = useState([])
  const [sourceOfFund, setSourceOfFund] = useState([])
  const [transactionType, setTransactionType] = useState([])
  const [showModal, setShowModal] = useState(false);

  const [avatar, setAvatar] = useState(null);
  const [signature, setSignature] = useState(null);
  const [riskDetails, setRiskDetails] = useState([]);

  // PEP Evanluation
  const [nameScreen, setNameScreen] = useState([])
  const [location, setLocation] = useState([])
  const [customerTypePEP, setCustomerTypePEP] = useState([])
  const [productPEP, setProductPEP] = useState([])
  const [channelPEP, setChannelPEP] = useState([])
  const [randomString, setRandomString] = useState("");

  const [relationNo, setRelationNo] = useState("")

  const [imageAccount, setImageAccount] = useState("")
  const [getFirstName, setGetFirstName] = useState("")
  const [getMiddleName, setGetMiddleName] = useState("")
  const [getLastName, setGetLastName] = useState("")
  const [createdCustomerID, setCreatedCustomerID] = useState("")

  const handleImageCapturing = () => {
    setIsImageCapturing(true);
  };

  const closeImageCapturing = () => {
    setIsImageCapturing(false);
  };

  const closeSweetAlertConfirm = () => {
    setSweetAlertConfirmed(false)
  }

  
  

  const handleInputClick = () => {
    setShowModal(true);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  const handleSignatureChange = (event) => {
    setSignature(event.target.files[0]);
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


   const customTheme = JSON.parse(localStorage.getItem("theme"));

   const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

   const validationRules = {
    firstName: { required: true },
    email: { required: true, pattern: /^\S+@\S+$/i }
  };

  const [formValues, setFormValues] = useState({ 
    title:'', 
    salutation:'',
    risk_id:'',
    id_type:'',
    city:'',
    country:'',
  });
  const [formErrors, setFormErrors] = useState({});

  const [accountDetailsData, setAccountDetailsData] = useState({
    productGroup:'',
    subprod:'',
    currencies:'',
    customerSegment:'',
    sub_segment:'',
    sector:'',
    sub_sector:'',
    armcode:''
  })

  const [formValueAccountReferees, setFormValueAccountReferees] = useState({
    typeofReferees:'',
    bankName:'',
    accountName:'',
    residentAddress:'',
    emailAddress:'',
    relationship:'',
    noOfYearsKnown:'',
    phoneNumber:''
  })

   // console.log(customTheme);
 
   const [getTheme, setTheme] = useState(customTheme);
   const nextStep = () =>
     setActive((current) => (current < 9 ? current + 1 : current));
   const prevStep = () =>
     setActive((current) => (current > 0 ? current - 1 : current));

   useEffect(() => {

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

    const response = axios.get(API_SERVER + '/get-unique-ref').then((response)=>{
      setRelationNo(response.data[0].unique_ref);
    });

     // Get Customer Segment
     const getCustomersegmentindividual = () => {
       axios
         .get(API_SERVER + "/get-customer-segment-individual")
         .then(function (response) {
          //  console.log("getCustomersegmentindividual :", response.data);
           setCustomerSegment(response.data)
         });

       // setShow(false)
     };

      // Get Customer Sub Category
      const getCustomerSubsegmentindividual = () => {
        axios
          .get(API_SERVER + "/get-customer-sub-segment-individual")
          .then(function (response) {
            console.log("get Customer Subsegment individual ::::", response.data);
            setCustomerSubSegment(response.data)

          });
 
        // setShow(false)
      };

       // Get Bank Names
     const getBankNames = () => {
      axios
        .post(API_SERVER + "/get-code-details", {
          code: "BNC",
        })
        .then(function (response) {
         //  localStorage.setItem("title", JSON.stringify(response.data));
          setBankNames(response.data);
        });
    };

     // Relationship
     const getRelationships = () => {
      axios
        .post(API_SERVER + "/get-code-details", {
          code: "RRE",
        })
        .then(function (response) {
         //  localStorage.setItem("title", JSON.stringify(response.data));
          setRelationship(response.data);
        });
    };



     // Get Customer Title
     const getCustomerTitle = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "TIT",
         })
         .then(function (response) {
          //  localStorage.setItem("title", JSON.stringify(response.data));
           setTitle(response.data);
         });
     };

     // Get Salutation
     const getSalutation = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "SAL",
         })
         .then(function (response) {
          //  localStorage.setItem("Salutation", JSON.stringify(response.data));
           // console.log("CurrencyAmount :",response.data);
           setSalutation(response.data);
         });
     };

     // Get ID Type
     const getIDType = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "HRD",
         })
         .then(function (response) {
          //  localStorage.setItem("getIDType", JSON.stringify(response.data));
           // console.log("getCountry :",response.data);
           setIdType(response.data)
         });
     };

     // Get City
     const getCity = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "CTY",
         })
         .then(function (response) {
          //  localStorage.setItem("getCity", JSON.stringify(response.data));
           setCity(response.data)
         });
     };

     // Get Country
     const getCountry = () => {
       axios
         .post(API_SERVER + "/get-code-details", {
           code: "CON",
         })
         .then(function (response) {
          //  localStorage.setItem("getCountry", JSON.stringify(response.data));
          //  console.log("getCountry :", response.data);
           setCountry(response.data)
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
           setDocumentRequiredType(response.data)
          //  console.log(response.data,":::Document Type")
         });
     };

     // Get Product Group
     async function getProductGroup() {
       axios.get(API_SERVER + "/get-product-group").then(function (response) {
         setProductGroup(response.data)
       });
     }

     // Get Product Sub Group
     
     async function getProductSubGroup() {
      
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

     // Get Source of Wealth
     const getSourceofWealth = () => {
      axios
        .post(API_SERVER + "/get-code-details", {
          code: "SOW",
        })
        .then(function (response) {
         //  localStorage.setItem("getCountry", JSON.stringify(response.data));
          // console.log("getSourceofWealth :", response.data);
          const arr = [];
          response.data.map((i)=>{
            const [a , b , c] = Object.values(i)
            const values = [b , a ,c]
            values.pop()
            arr.push([...values , <input type="text" className="border px-2"/>])
            // arr.pop()
            // arr.push(<input type="text" />)
          })
          setSourceOfWealth(arr)
          console.log("getSourceofWealth ::::",arr);
        });
      };


      // Get Source of fund
     const getSourceofFund = () => {
      axios
        .post(API_SERVER + "/get-code-details", {
          code: "SOF",
        })
        .then(function (response) {
         //  localStorage.setItem("getCountry", JSON.stringify(response.data));
          // console.log("getSourceofWealth :", response.data);
          const arr = [];
          response.data.map((i)=>{
            const [a , b , c] = Object.values(i)
            const values = [b , a ,c]
            values.pop()
            arr.push([...values , <input type="checkbox" className="border"/>])
            // arr.pop()
            // arr.push(<input type="text" />)
          })
          setSourceOfFund(arr)
          console.log("getSourceofWealth ::::",arr);
        });
      };


      // Get Transaction Type
     const getTransactionType = () => {
      axios
        .post(API_SERVER + "/get-code-details", {
          code: "TRQ",
        })
        .then(function (response) {
         //  localStorage.setItem("getCountry", JSON.stringify(response.data));
          // console.log("getSourceofWealth :", response.data);
          const arr = [];
          response.data.map((i)=>{
            const [a , b , c] = Object.values(i)
            const values = [b , a ,c]
            values.pop()
            arr.push([...values , <input type="checkbox" className="border"/>])
            // arr.pop()
            // arr.push(<input type="text" />)
          })
          setTransactionType(arr)
          console.log("getSourceofWealth ::::",arr);
        });
      };

      async function getIntroductorySource() {
        try {
          const response = await axios.get(API_SERVER + "/get-introductory-source");
          setIntroductorySource(response.data);
        } catch (error) {
          console.error(error);
        }
      }

      // Relation Manager
      const fetchRelationManagers = async () => {
        try {
          const response = await axios.get('http://localhost:3020/get-relation-manager-id');
          setArmcode(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      async function nameScreen() {
        try {
          const response = await axios.get(API_SERVER + '/get-name-screen');
          const data = response.data;
      
          // Do something with the data, for example:
          setNameScreen(data); // Log the data to the console
          // Render the data on the front-end using a framework like React, Angular or Vue.js
        } catch (error) {
          console.error(error);
          // Handle errors here
        }
      }

      async function getLocation() {
        try {
          const response = await axios.get(API_SERVER + '/get-location');
          const data = response.data;
      
          // Do something with the data, for example:
          setLocation(data); // Log the data to the console
          // Render the data on the front-end using a framework like React, Angular or Vue.js
        } catch (error) {
          console.error(error);
          // Handle errors here
        }
      }


      async function getCustomerTypePEP() {
        try {
          const response = await axios.get(API_SERVER + '/get-customer-type');
          const data = response.data;
      
          // Do something with the data, for example:
          setCustomerTypePEP(data); // Log the data to the console
          // Render the data on the front-end using a framework like React, Angular or Vue.js
        } catch (error) {
          console.error(error);
          // Handle errors here
        }
      }

      async function getproductPeP() {
        try {
          const response = await axios.get(API_SERVER + '/get-product-pep');
          const data = response.data;
      
          // Do something with the data, for example:
          setProductPEP(data); // Log the data to the console
          // Render the data on the front-end using a framework like React, Angular or Vue.js
        } catch (error) {
          console.error(error);
          // Handle errors here
        }
      }


      async function getchannelPeP() {
        try {
          const response = await axios.get(API_SERVER + '/get-channel-pep');
          const data = response.data;
      
          // Do something with the data, for example:
          setChannelPEP(data); // Log the data to the console
          // Render the data on the front-end using a framework like React, Angular or Vue.js
        } catch (error) {
          console.error(error);
          // Handle errors here
        }
      }

     Promise.all([
       getCustomersegmentindividual(),
       getCustomerSubsegmentindividual(),
       getBankNames(),
       getRelationships(),
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
       getSourceofWealth(),
       getSourceofFund(),
       getTransactionType(),
       fetchRelationManagers(),
       nameScreen(),
       getLocation(),
       getCustomerTypePEP(),
       getproductPeP(),
       getchannelPeP(),
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
 
   const allLovs = {
     customerCategory: [],
     banks:[],
     relationship:[],
     title: [],
     salutation: [],
     id_type: [],
     city: [],
     country: [],
     postalAddress: [],
     signatoryLevel: [],
     preferredLanguage: [],
     productGroup: [],
     productSubGroup: "",
     documentRequiredType: [],
     accountMandate: [],
     natureOfOwnership: [],
     customerSegment: [],
     customerSubSegment:[],
     introductory: [],
     sector:[],
     currencies:"",
     sourceOfWealth,
    //  nameScreen:[]
   };

  //  Source Of Wealth
  // sourceOfWealth?.map((i) => 
  //  allLovs.sourceOfWealth.push({
  //   value:i.actual_code,
  //   label
  //  })
  // )

  ////////////////////////////////PEP Evaluation//////////////////////////////////
  // nameScreen?.map((i) =>
  //    allLovs.nameScreen.push(
  //     {
  //        value: `${i.actual_code}`, 
  //        label: `${i.description}`
  //       }
  //     )
  //  );


  ////////////////////////////////////////////////////////////////////////////////

   const getCustomerCat = JSON.parse(
     localStorage.getItem("getCustomerCategory")
   );
   getCustomerCat?.map((i) =>
     allLovs.customerCategory.push({
       value: i.actual_code,
       label: i.description,
     })
   );

   bankNames?.map((i) =>
     allLovs.banks.push(
      {
         value: `${i.actual_code}`, 
         label: `${i.actual_code} - ${i.description}`
        }
      )
   );

   relationships?.map((i) =>
     allLovs.relationship.push(
      {
        value: `${i.actual_code}`, 
        label: `${i.actual_code} - ${i.description}`
      }
      )
   );
   

  console.log(title,"Title")
   title?.map((i) =>
     allLovs.title.push(
      { 
        value: `${i.actual_code}`, 
        label: `${i.actual_code} - ${i.description}` 
      }
    )
   );

  //  const getSalutation = JSON.parse(localStorage.getItem("Salutation"));
   salutation?.map((i) =>
     allLovs.salutation.push(
      { 
        value: i.actual_code, 
        label: `${i.actual_code} - ${i.description}`
      }
    )
   );

  //  const getIDType = JSON.parse(localStorage.getItem("getIDType"));
   idType?.map((i) =>
     allLovs.id_type.push(
      { 
        value: i.actual_code, 
        label: `${i.actual_code} - ${i.description}`
      }
    )
   );

  //  const getCity = JSON.parse(localStorage.getItem("getCity"));
   city?.map((i) =>
     allLovs.city.push(
      { 
        value: i.actual_code,
        label: `${i.actual_code} - ${i.description}`
      }
    )
   );

  //  const getCountry = JSON.parse(localStorage.getItem("getCountry"));
   country?.map((i) =>
     allLovs.country.push(
      { 
        value: i.actual_code, 
        label: `${i.actual_code} - ${i.description}` 
      }
    )
   );

   sector?.map((i) =>
   allLovs.sector.push(
    { 
      value: i.actual_code, 
      label: `${i.actual_code} - ${i.description}`
    }))

  //  currencies?.map((i) => 
  //  allLovs.currencies.push({value: i.actual_code, label: i.description}))

  // if (customerSegment > 0) {
  //   customerSegment.map((i) =>
  //     allLovs.customerSegment.push(i)
  //   );
  // }

  console.log(customerSegment, "customerSegment")
  // customerSegment?.map((i)=> 
  // allLovs.customer_segment.push({value: i.actual_code, label: i.description}))

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
       label: `${i.actual_code} - ${i.description}`,
     })
   );




  ///////////////////// product Group ///////////////////////////
   if (productGroup) {
     productGroup.map((i) =>
       allLovs.productGroup.push(i)
     );
   }
 
   if(productSubGroup){
     allLovs.productSubGroup = productSubGroup
   }


   if (customerSegment) {
    customerSegment.map((i) =>
      allLovs.customerSegment.push({
        value: `${i.actual_code}`,
        label:`${i.description}`,
      })
    );
  }

  // console.log(customerSubSegment, "::::::::::::::::")    

  // if(customerSubSegment){
  //   allLovs.customerSubSegment = customerSubSegment
  // }

  if (customerSubSegment) {
    customerSubSegment.map((i) =>
      allLovs.customerSubSegment.push({
        value: `${i.actual_code}`,
        label: i.description,
      })
    );
  }

  console.log(customerSubSegment, "::::::::::::::::")

  //  const getProductSubGroup = JSON.parse(
  //    localStorage.getItem("ProductSubGroup")
  //  );
  //  getProductGroup?.map((i) =>
  //    allLovs.productSubGroup.push({
  //      value: i.actual_code,
  //      label: i.description,
  //    })
  //  );

  
   documentRequiredType?.map((i) =>
     allLovs.documentRequiredType.push({
       value: `${i.actual_code} - ${i.description}`,
       label: `${i.actual_code} - ${i.description}`,
     })
   );

   const getAccountMandate = JSON.parse(localStorage.getItem("AccountMandate"));
    getAccountMandate?.map((i) =>
      allLovs.accountMandate.push(
        {
          value: i.actual_code,
          label:`${i.actual_code} - ${i.description}`
        }
      )
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

  //////////////////////////GET INTRODUCTORY SOURCE///////////////////////////////////////
  if (IntroductorySource) {
    IntroductorySource.map((i) =>
    // console.log("GET INTRODUCTORY SOURCE",i),
    allLovs.introductory.push(i)
    );
    console.log("GET INTRODUCTORY SOURCE:::", allLovs.introductory);
  }

    const handleOnChange = {
     fetchRelationManagers : async function (value) {
      try {
        const response = await axios.get('http://localhost:3020/get-relation-manager-id',{
          relationMan: value
        });
        setArmcode(response.data);
      } catch (error) {
        console.error(error);
      }
      setAccountDetailsData((prevFormValues) => ({
        ...prevFormValues,
        armcode: value
      }))
    },
    
    myMethod: function () {
       const getProductGroup = JSON.parse(localStorage.getItem("ProductGroup"));
       getProductGroup?.map((i) =>
         allLovs.productGroup.push({
           value: `${i.actual_code}`,
           label: `${i.actual_code} - ${i.description}`,
         })
       );
       console.log("Hello World!");
    },

     bankNames: async function (value){
      console.log(value)
     },

    customerSegment_: async function (value) {
      // console.log(value,":::Customer Segment")
       const data = await axios.get(API_SERVER + "/get-customer-segment-individual", {
         segmentCode: value
       });
       if (data.data.length > 0) {
         const response = data.data;
         const arr = [];
         if (response[0].responseCode === "000") {
           
           console.log(response, "jfj");
           response.map((i) => {
             arr.push({ value: i.actual_code, label: i.description });
             // console.log(arr)
           });
         }
         ;
         console.log(arr, "::::Customer Segment")

         setAccountDetailsData((prevFormValues) => ({
          ...prevFormValues,
          customerSegment: value
        }))
       }

    },


    customerSubSegment: async function (value){
      console.log(value,'VVVVVVVVVVV')
      setAccountDetailsData((prevFormValues) => ({
        ...prevFormValues,
        sub_segment: value
      }))
    },
     

    productGroup: function (value){

        console.log("is this working ?")
      axios
         .post(API_SERVER + "/get-product-sub-group" ,{ 
          productGroup : value.split("-")[0].trim() 
        })
         .then(function (response) {
          console.log(response.data,value.split("-")[0] , "from me")
          setProductSubGroup(response.data);
         });

         setAccountDetailsData((prevFormValues) => ({
          ...prevFormValues,
          productGroup: value
        }))
    },
      

      

      sector: async function (value) {
       console.log(value.split("-")[0]  , "mmmmmSector");
       const data = await axios.post(API_SERVER + "/get-sub-sector", {
         sectorClassCode: value.split("-")[0].trim(),
       });
       if (data.data.length > 0) {
         const response = data.data;
         const arr = [];
        //  console.log(response, "Mannnn");
         response.map((i) => {
           arr.push(
            { 
              value: i.description, 
              label: `${i.description} - ${i.actual_code}`
            }
          );
           // console.log(arr)
         });
         setSubSector(arr);
       }

       setAccountDetailsData((prevFormValues) => ({
        ...prevFormValues,
        sector: value
       }))
      },

     subSector: async function (value){
      console.log(value, "Sub Sector");
      setAccountDetailsData((prevFormValues) => ({
        ...prevFormValues,
        sub_sector: value
      }))
     },

     
     productSubGroup: async function (value) {
      // setSelectedSubgroup(value)
       console.log(value, "mmmmm");
       const data = await axios.post(API_SERVER + "/currencies", {
        type_of_acct: value.split("-")[0].trim()
       });
       if (data.data.length > 0) {
         const response = data.data;
         const arr = [];
        //  console.log(response, "Mannnn");
         response.map((i) => {
           arr.push({ value: i.actual_code, label: i.description });
           // console.log(arr)
         });
         console.log(arr,"Araudiso")
         setCurrencies(arr);
       }else{
        setCurrencies("")
       }

       setAccountDetailsData((prevFormValues) => ({
        ...prevFormValues,
        subprod: value.trim()
      }))
     },


     currencies: async function (value) {
      console.log(value)
      setAccountDetailsData((prevFormValues) => ({
        ...prevFormValues,
        currencies: value
      }))
     },

     documentRequiredType: async function(value){
      console.log(value, "Decoment")
      setAccountDetailsData((prevFormValues) => ({
        ...prevFormValues,
        documentRequiredType: value
      }))
     },

     introductorysource: async function(value){
      console.log(value)
      setAccountDetailsData((prevFormValues) => ({
        ...prevFormValues,
        introductorySource: value
      }))
     }

     

   };

   console.log(currencies, "Currencies")

   console.log("accountDetailsData", accountDetailsData)

  

  if(currencies){
   allLovs.currencies = currencies
  }
  // const [getTheme, setTheme] = useState(customTheme);
  
  const handleEnter = () => {
    alert("Populate");
  };

  console.log({showModal})
useEffect(()=>{
  setAccountDetailsData((prev)=>({...prev , fname: firstName}))
  setAccountDetailsData((prev)=>({...prev , lname: lastName}))
  setAccountDetailsData((prev)=>({...prev , oname: middleName}))
  setAccountDetailsData((prev)=>({...prev , DOB: dateOfBirth}))
  setAccountDetailsData((prev)=>({...prev , personlphone: phoneNumber}))
  setAccountDetailsData((prev)=>({...prev , risk_code: randomString}))

} , [firstName , lastName ,middleName, dateOfBirth, phoneNumber, randomString ])
// 'risk_code': 'K07',
const headers = {
  "x-api-key": process.env.REACT_APP_API_KEY,
  "Content-Type": "application/json",
};
  const handleSubmit = (event) => {
      event.preventDefault();
const {fname , lname ,oname , DOB, personlphone, risk_code, sub_sector , subprod ,sub_segment, armcode} =  accountDetailsData
const value_date = new Date(DOB).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");
      axios.post('http://localhost:3020/api/create-account-quick', {
        'cust_type': 'I',
        'CUSTOMER_cat': '',
        'title': 'Mr',
        fname,
        lname,
        oname,
        'tin_v': '0098766',
        DOB: value_date,
        'sufix_v': 'test4',
        'place_ofbirth': 'Acrra',
        'country_residence': 'GHA',
        'staff_cat': '',
        risk_code,
        'reason': 'text4',
        'company_name': 'text4',
        'contitution_code': 'text4',
        'corp_tin': 'text4',
        'date_of_corp': '02-MAR-2022',
        'domiciel_coun': 'text4',
        'residence_status': '',
        'prefer_lang': 'English',
        'approval_panel': 'text4',
        'sex_v': 'M',
        'nationality': 'Ghanaian',
        'homeaddr': 'NA MZ 181',
        'homeaddr1': 'text4',
        'workaddr': 'test4',
        'city': 'ccrqa',
         subprod,
        'username': 'UNIONADMIN',
        'posted_by_v': 'text4',
        sub_sector,
        sub_segment,
        'doctype': '100',
        'docid': `'${Math.floor(Math.random()*10000)}'` ,
        'doc_expirydate': '02-MAR-2022',
        personlphone,
        'mandate': 'text5',
        'email': 'godfy@gmail.com',
        'issueauth': 'text4',
        'issuedte': '02-MAR-2022',
        'sig': '',
        'pic': '',
        'fing': '',
        'NO_DB_TRANS': '2',
        'TOTAL_DB_TRANS': '100',
        'NO_CR_TRANS': '1',
        'TOTAL_CR_TRANS': '500',
        'doc_ref': 'test4',
        'PROOF_ADDRESS': '',
        'SOURCE_OF_FUNDS': 'test4',
        'OCCUPATION': 'test4',
        'NATURE_OF_BUSINESS': 'test4',
        armcode,
        'source_of_worth': 'test4',
        'worth_val': 'test4',
        'rfid': 'test4',
        'kycdoc': '',
        'terminal': 'test4',
        'approval': 'P',
        'para3': 'BRA' 
      }, {headers})
        .then(response => {
          // console.log(response.data.created_acct_no);
          setImageAccount(response.data.created_acct_no)
          setQuickAccount(response.data)
          setGetFirstName(accountDetailsData.fname)
          setGetMiddleName(accountDetailsData.oname)
          setGetLastName(accountDetailsData.lname)
          setCreatedCustomerID(response.data.created_customer_no)
          swal({
            title: "Success",
            text:
              `Account Created succesfully for ${accountDetailsData.fname}
               ACCOUNT NUMBER : ${response.data.created_acct_no}
               CUSTOMER ID : ${response.data.created_customer_no}`,
            icon: "success",
            buttons: "OK",
          }).then((result) => {
            if (result) {
             
              setFirstName("")
              setMiddleName("")
              setLastName("")
              setDateOfBirth("")
              setPhoneNumber("")
              setRandomString("")
              setQuickAccount((prev) =>({...prev, created_customer_no:"", created_acct_no:"" }))
              setAccountDetailsData((prev)=>({...prev , productGroup: "" , subprod: "" , sub_segment: "" , sub_sector: "" , currencies:"" , sector:"" , customerSegment:"", armcode:""}))

            }

            setSweetAlertConfirmed(true);

          });

        }) 
        .catch(error => console.error(error));
    
  }

  console.log("Quick", quickaccount)
  console.log("response.data.created_acct_no", imageAccount)
  console.log("response.data.created_acct_no", getFirstName)
  console.log("response.data.created_acct_no", getLastName)
  console.log("response.data.created_acct_no", createdCustomerID)



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3020/get-effective-date');
        const data = response.data[0].effective_date;
        setEffective(data.substring(0, 10));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const handleKeyDown = (event) => {
    // Get today's date and format it to yyyy-mm-dd
    const today = new Date().toISOString().split("T")[0];

    // Display SweetAlert notification if future date is entered
    if (dateOfBirth > today) {
      // Display SweetAlert notification if future date is selected
      swal({
        icon: "error",
        title: "Oops...",
        text: "Please Do Not Select Future Date",
      });
      setDateOfBirth("");
    } else {
      // Check if the selected date is a valid date
      const isValid = !isNaN(new Date(dateOfBirth).getTime());

      if (!isValid) {
        setIsValidDate(false);
      } else {
        setIsValidDate(true);
      }
      // setDate(selectedDate);
      setDateOfBirth(dateOfBirth);
    }
  };


  const handleBlur = () => {
    // Check if the selected date is a valid date
    const isValid = !isNaN(new Date(dateOfBirth).getTime());

    if (!isValid) {
      // Display SweetAlert notification if invalid date is entered
      swal({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid date!",
      });
      setDateOfBirth("");
      setIsValidDate(true);
    } else {
      setIsValidDate(true);
    }
  };


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
    }
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3020/pep-riskdetails');
        setRiskDetails(response.data);
        
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }

    fetchData();
  }, []);

  console.log("pep-riskdetails setData",riskDetails)
  // if(riskDetails){
  //   console.log("pep-riskdetails setData",riskDetails)
  // }else{
  //   console.log("Data No found")
  // }

  // const handleClose = () => setShowModal(false);

  const generateRandomString = () => {
    const randomNumber = Math.floor(Math.random() * 90000) + 10000;
    return randomNumber.toString();
  };

  // const handleSaveChanges = () => {
  //   const randomString = generateRandomString();
  //   console.log(`Generated random string: ${randomString}`);
  //   // props.onSave(randomString);
  //   handleClose()
  // };

  const handleSaveChanges = () => {
    const randomString = generateRandomString();
    console.log(`Generated random string: ${randomString}`);
    setRandomString(randomString);
    // props.onSave(randomString);
    handleClose();

    swal({
      icon: "success",
      title: "Risk Code Generated",
      text: randomString,
    });
  };


  
  


  return (
    <>
    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    <Modal size="xl" show={showModal} backdrop="static" centered onHide={() => setShowModal(false)}>
      {/* <Modal.Header closeButton>
        <Modal.Title>My Modal Title</Modal.Title>
      </Modal.Header> */}
      <Modal.Body className='bg-gray-100 overflow-y-auto md:max-h-96' >
            
                <div className="md:flex justify-center w-full">
                    {/* **************************************** */}

                    <div className="w-full max-w-2xl border md:px-2 md:py-2">
                        <div className='border bg-slate-400 rounded md:px-2'>Name Screening</div>
                        {/* Sanction */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Sanction" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue
                                      data={nameScreen}
                                      inputWidth="20%"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Adverse Media */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Adverse Media" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue 
                                    data={nameScreen}
                                      inputWidth="20%"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Political Exposed Person */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Political Exposed Person" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue 
                                    data={nameScreen}
                                      inputWidth="20%"
                                    />
                                </div>
                            </div>
                        </div>


{/* ***********************************************Location*************************************************************** */}

                        <div className='border bg-slate-400 rounded md:px-2'>Location</div>
                        {/* Branch */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Branch" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue 
                                      data={location}
                                      inputWidth="90%"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Country Of Origin */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Country Of Origin" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue 
                                    data={allLovs.country}
                                      inputWidth="90%"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Country Of Residence */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Country Of Residence" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue 
                                    data={allLovs.country}
                                      inputWidth="90%"
                                    />
                                </div>
                            </div>
                        </div>

{/* ***********************************************Customer Type*************************************************************** */}
                        <div className='border bg-slate-400 rounded md:px-2'>Customer Type</div>
                        {/* Customer Type */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Customer Type" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue 
                                      data={customerTypePEP}
                                      inputWidth="90%"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Customer Type */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Customer Type" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue
                                      data={customerTypePEP}
                                      inputWidth="90%"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Customer Type */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Customer Type" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue
                                      data={customerTypePEP}
                                      inputWidth="90%"
                                    />
                                </div>
                            </div>
                        </div>

{/* ***********************************************Product*************************************************************** */}
                        <div className='border bg-slate-400 rounded md:px-2'>Product</div>
                        {/* Product */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Product" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue
                                      data={productPEP}
                                      inputWidth="90%"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Product" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue
                                      data={productPEP}
                                      inputWidth="90%"
                                    />
                                </div>
                            </div>
                        </div>


{/* ***********************************************Channel*************************************************************** */}
                        <div className='border bg-slate-400 rounded md:px-2'>Channel</div>
                        {/* Channel */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Channel" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue 
                                      data={channelPEP}
                                      inputWidth="90%"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Channel */}
                        <div class="w-full max-w-xl mt-2">
                            <div class="md:flex md:items-center mb-2 ml-2">
                                <div class="md:w-1/3">
                                    <Label label="Channel" fontSize="85%" />
                                </div>
                                <div className="md:w-2/3 ">
                                    <ListOfValue
                                      data={channelPEP}
                                      inputWidth="90%"
                                    />
                                </div>
                            </div>
                        </div>
                        

                    </div>

                    
                    {/* **************************************** */}


                    {/* Second Side */}
                    {/* Second Side */}
                    {/* Second Side */}
                    <div className="w-full max-w-2xl">

                            <div className='border md:ml-5 md:p-2'>
                                <div className='border bg-slate-400 rounded md:px-2'>
                                    PEP Evaluation
                                </div>
                                <div></div>
                                

                                <div style={{ maxHeight: '300px', overflow: 'auto' }} >
                                  {riskDetails.length > 0 ? (
                                    riskDetails.map(row => (
                                      <div key={row.customerNumber} class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input type="checkbox" id={row.customerNumber} name={row.actualCode} value={row.actualCode} className="my_inputs_Source_of_fund" />
                                        {/* <label htmlFor={row.customerNumber}>{row.description}</label> */}
                                        <label htmlFor={row.customerNumber} className="my_labels_Source_of_fund">
                                          {row.description.length > 70 ? `${row.description.slice(0, 70)}...` : row.description}
                                        </label>
                                      </div>
                                    ))
                                  ) : (
                                    <p>Loading...</p>
                                  )}
                                </div>
                            
                            </div>

                            <div className='md:border md:ml-5 md:p-2 md:mt-2'>
                                <label className='font-bold'>composite risk score</label>
                                <div className='bg-green-500 text-white md:flex md:justify-between'>
                                    <label className='md:ml-2 uppercase'>low</label>
                                    <label className='md:mr-2'>1</label>
                                </div>
                                <div className='bg-yellow-500 text-white md:flex md:justify-between'>
                                    <label className='ml-2 uppercase'>medium</label>
                                    <label className='mr-2'>2</label>
                                </div>
                                <div className='bg-red-500 text-white md:flex md:justify-between'>
                                    <label className='ml-2 uppercase'>high</label>
                                    <label className='mr-2'>3</label>
                                </div>
                                <div className='bg-gray-500 text-white md:flex md:justify-between'>
                                    <label className='ml-2 uppercase'>Refer to compliance</label>
                                    <label className='mr-2'>4</label>
                                </div>

                            </div>

                        </div>

                </div>
               </Modal.Body>
      <Modal.Footer>
        <button onClick={handleClose}>Close</button>
        <button onClick={handleSaveChanges}>Generate Risk ID</button>
      </Modal.Footer>
    </Modal>
    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div style={{ zoom: "0.85" }} className="-mb-5">
        {/* <Risk_analysis_test handleClose={handleClose} handleShow={handleShow} showModal={showModal} setShowModal={setShowModal}/> */}
        <form>
          <div>
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
                  onClick={handleSubmit}
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
          <div className="border rounded">
            <div>
              
              <div className="border p-2 m-1 bg-white">
              <div className="flex justify-end">
              <div>
                  <div class="w-full max-w-xl mt-2">
                    <div class="md:flex md:items-center mb-2 ml-2">
                      <div class="md:w-1/3">
                        <Label label="Customer ID" />
                      </div>
                      <div className="md:w-2/3 md:mr-2">
                        <input className="my_inputs bg-gray-300" value={quickaccount.created_customer_no} type="text" readOnly />
                      </div>
                    </div>
                  </div>
                  
                  <div class="w-full max-w-xl mt-2">
                    <div class="md:flex md:items-center mb-2 ml-2">
                      <div class="md:w-1/3">
                        <Label label="Account No" />
                      </div>
                      <div className="md:w-2/3 md:mr-2">
                        <input className="my_inputs bg-gray-300" value={quickaccount.created_acct_no} type="text" readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="md:flex ">
              {/*  */}
            <div className="md:flex md:justify-center w-full">
              {/* **************************************** */}
              <div className="w-full max-w-2xl">
                {/* Effective Date */}
                <div class="w-full max-w-xl mt-2">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label="Effective Date" required={true} />
                    </div>
                    <div class="md:w-2/3 ">
                      <input 
                        className="risk_label text-center bg-gray-200" 
                        type="text"
                        id="effectiveDate"
                        value={effective}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                {/* First Name */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label="First Name" required={true} />
                    </div>
                    <div className="md:w-2/3 md:mr-2">
                      <input 
                        className="my_inputs" 
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => {setFirstName(e.target.value)
                          }}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Middle Name */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label="Middle Name" />
                    </div>
                    <div className="md:w-2/3 md:mr-2">
                      <input 
                        className="my_inputs" 
                        type="text"
                        id="middleName"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Last Name */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label="Last Name" />
                    </div>
                    <div className="md:w-2/3 md:mr-2">
                      <input 
                        className="my_inputs" 
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Date Of Birth */}
                <div class="w-full max-w-xl mt-2">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label="Date Of Birth " required={true} />
                    </div>
                    <div class="md:w-2/3 ">
                      <input 
                        className="risk_label" 
                        type="date"
                        id="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        required
                        max={today}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label="Phone Number" required={true} />
                    </div>
                    <div class="md:w-2/3 ">
                      <input 
                        className="risk_label" 
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <hr className="" />

                {/* Product Code */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label="Product Code" required={true} />
                    </div>
                    <div className="md:w-2/4 ">
                      <ListOfValue 
                        inputWidth="65%"
                        data={productGroup}
                        value={accountDetailsData.productGroup}
                        onChange={handleOnChange.productGroup}
                      />
                    </div>
                  </div>
                </div>

                {/* Sub Product  */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label=" Sub Product" required={true} />
                    </div>
                    <div className="md:w-2/4 ">
                      <ListOfValue
                        inputWidth="90%"
                        data={allLovs.productSubGroup}
                        onChange={handleOnChange.productSubGroup}
                        value={accountDetailsData.subprod}
                      />
                    </div>
                  </div>
                </div>

                {/* Account Currency  */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label="Account Currency" required={true} />
                    </div>
                    <div className="md:w-2/4 ">
                      <ListOfValue
                        data={currencies}   
                        onChange={handleOnChange.currencies}
                        value={accountDetailsData.currencies}
                      />
                    </div>
                  </div>
                </div>



                {/* Customer Segment */}
                  <div class="w-full max-w-xl -mt-1">
                    <div class="md:flex md:items-center mb-2 ml-2">
                      <div class="md:w-1/3">
                        <Label label="Customer Segment" required={true} />
                      </div>
                      <div className="md:w-2/4 ">
                        <ListOfValue 
                          inputWidth="90%"
                          data={allLovs.customerSegment}
                          value={accountDetailsData.customerSegment}
                          onChange={handleOnChange.customerSegment_}
                        />
                      </div>
                    </div>
                  </div>

                {/* Sub Customer Segment */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label=" Sub Customer Segment" />
                    </div>
                    <div className="md:w-2/4 ">
                      <ListOfValue 
                        inputWidth="100%"
                        data={allLovs.customerSubSegment}
                        value={accountDetailsData.sub_segment}
                        onChange={handleOnChange.customerSubSegment}

                      />
                    </div>
                  </div>
                </div>

                {/* Sector Code */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label="Sector Code" required={true} />
                    </div>
                    <div className="md:w-2/4 ">
                      <ListOfValue 
                        inputWidth="80%"
                        data={sector}
                        value={accountDetailsData.sector}
                        onChange={handleOnChange.sector}
                      />
                    </div>
                  </div>
                </div>

                {/* Sub Sector Code */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label=" Sub Sector Code" required={true} />
                    </div>
                    <div className="md:w-2/4 ">
                      <ListOfValue 
                        inputWidth="95%"
                        data={subSector}
                        value={accountDetailsData.sub_sector}
                        onChange={handleOnChange.subSector}

                      />
                    </div>
                  </div>
                </div>

                {/* Risk Category */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label="Risk Category" required={true} />
                    </div>
                    <div class="md:w-2/3 ">
                    {/* onFocus={()=>{handleShow(); console.log("ghna")}}  */}
                      <input className="risk_label"id="risk" type="text" value={randomString}  onClick={handleInputClick}/>
                    </div>
                  </div>
                </div>

                
                {/* Relation Manager ID */}
                <div class="w-full max-w-xl -mt-1">
                  <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                      <Label label=" Relation Manager ID" required={true} />
                    </div>
                    <div className="md:w-2/4 ">
                      <ListOfValue 
                        inputWidth="95%"
                        data={armcode}
                        value={accountDetailsData.armcode}
                        onChange={handleOnChange.fetchRelationManagers}
                      />
                    </div>
                  </div>
                </div>

                  
                {/* <Account_Details /> */}
              </div>
              <div className="w-full" zoom="0.50px">
                <ImageCapturing id={relationNo} />
              </div>
              {sweetAlertConfirmed && (
                // <Modal show={true} >
                //   // modal content goes here
                // </Modal>

                <Modal show={sweetAlertConfirmed} size="md" centered style={{height:'95%'}} >
                <div className="flex items-center justify-between mx-2">
                  <div className="font-extrabold text-black">Image Capturing</div>
                  <div className="border rounded-full px-2 bg-red-400 text-white cursor-pointer" onClick={closeSweetAlertConfirm}>x</div>
                </div>
                <Modal.Body>
                  <ImageVerification accountNumber={imageAccount} firstName={getFirstName} otherName={getMiddleName} lastName={getLastName} customerID={createdCustomerID} />
                </Modal.Body>
                <Modal.Footer> 
                <Button onClick={closeSweetAlertConfirm}>Close</Button>
                </Modal.Footer>
                </Modal>
              )}
              {/* <div>Mandate</div> */}
              {/* <div className="flex flex-col items-center space-y-4">
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  {avatar ? (
                    <img src={URL.createObjectURL(avatar)} alt="avatar" className="w-full h-full object-cover" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 11a3 3 0 100-6 3 3 0 000 6z" />
                      <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18.75A8.75 8.75 0 1118.75 10 8.76 8.76 0 0110 18.75z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <label className="flex flex-col items-center space-y-1">
                  <span className="text-gray-500 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={handleImageCapturing}>Image & Signature Capturing</span>
                 
                  <div >
                    <Modal show={isImageCapturing} size="xl" centered style={{height:'95%'}} className="shadow-md shadow-black">
                        <div className="flex items-center justify-between mx-2">
                          <div className="font-extrabold text-black">Image Capturing</div>
                          <div className="border rounded-full px-2 bg-red-400 text-white cursor-pointer" onClick={closeImageCapturing}>x</div>
                        </div>
                      <Modal.Body>
                      </Modal.Body>
                      <Modal.Footer> 
                        <Button onClick={closeImageCapturing}>Close</Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </label>
              </div> */}

              </div>
              

            </div>
            
          </div>
        </form>
      </div>
    </>
  );
}

export default QuickAccountOpening;