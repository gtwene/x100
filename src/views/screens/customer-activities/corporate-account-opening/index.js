import { useState, useEffect } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { GiHumanTarget } from "react-icons/gi";
import { SiNike } from "react-icons/si";
import { MdOutlinePersonalInjury } from "react-icons/md";
import Individual_account_opening from "./components/individual-account-opening";
import Corporate_Bank from "./components/corporate-bank";
import Corporate_Relations from "./components/corporate-relations";
import Account_Details from "./components/account-details";
import Account_Mandate from "./components/account-mandate";
import Ebanking_Customer_Risk from "./components/ebanking-customer-risk";
import Account_Referees from "./components/account-referees";
import Anti_Money_Laundering from "./components/anti-money-laundering";
import { API_SERVER } from "../../../../config/constant";
import { ScrollArea } from "@mantine/core";
import axios from "axios";
import HeaderComponent from "../../../../components/others/Header/HeaderComponent";
import { MDBIcon } from "mdb-react-ui-kit";

function CorporateAccountOpening({ accountTypes, setAccountTypes }) {
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
   const [customerSegment, setCustomerSegment] = useState("");
   const [customerSubSegment, setCustomerSubSegment] = useState([]);
   const [sector, setSector] = useState([]);
   const [subSector, setSubSector] = useState([]);
   const [bankNames, setBankNames] = useState([])
   const [relationships, setRelationship] = useState([]);
   const [handleData, setHandleData] = useState("");
   const [productData, setProductData] = useState([]);
   const [active, setActive] = useState(0);
   const [isChecked, setIsChecked] = useState(false);
   
  //  Anti Money Laundering 
  const [sourceOfWealth, setSourceOfWealth] = useState([])
  const [sourceOfFund, setSourceOfFund] = useState([])
  const [transactionType, setTransactionType] = useState([])

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
    accountNumber:''
  });
  const [formErrors, setFormErrors] = useState({});

  const [accountDetailsData, setAccountDetailsData] = useState({
    productGroup:'',
    productSubGroup:'',
    currencies:'',
    customerSegment:'',
    customerSubSegment:'',
    documentRequiredType:'',
    introductorySource:'',
    sector:'',
    subSector:''
  })

  const [formValueAccountReferees, setFormValueAccountReferees] = useState({
    typeofReferees:'',
    accountNumber:'',
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
    //  axios
    //    .post(API_SERVER + "/get-customer-category", { csType: accountTypes })
    //    .then((res) => {
    //      console.log(res.data, "from Tabs");
    //      if (res.data.length > 0) {
    //        const arr = [];
    //        res.data?.map((i) =>
    //          arr.push({ value: i.actual_code, label: i.description })
    //        );
    //        setCustomerSegment(arr);
    //        console.log(arr,"Cusotmer Segment:::")
    //      }

    //      // localStorage.setItem("customerSegment", JSON.stringify(customerSegment))
    //      console.log("customerSegment:::",JSON.stringify(customerSegment))
    //    });

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
    // async function getCustomersegmentindividual() {
    //   axios.get(API_SERVER + "/get-customer-segment-individual")
    //   .then(function (response) {
    //     setProductGroup(response.data)
    //     console.log(response.data)
    //   });
      
    // }

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
    
    

     // Get introductory source
    //  async function getIntroductorySource() {
    //    axios
    //      .get(API_SERVER + "/get-introductory-source")
    //      .then(function (response) {
    //        setIntroductorySource(response.data)
    //        console.log("Get introductory source::::",JSON.parse(introductorySource))
    //      });
    //   }

      async function getIntroductorySource() {
        try {
          const response = await axios.get(API_SERVER + "/get-introductory-source");
          setIntroductorySource(response.data);
        } catch (error) {
          console.error(error);
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
     sourceOfWealth
   };

  //  Source Of Wealth
  // sourceOfWealth?.map((i) => 
  //  allLovs.sourceOfWealth.push({
  //   value:i.actual_code,
  //   label
  //  })
  // )

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
      value: `${i.actual_code} - ${i.description}`, 
      label: i.description 
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
       label: i.description,
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
     myMethod: function () {
       const getProductGroup = JSON.parse(localStorage.getItem("ProductGroup"));
       getProductGroup?.map((i) =>
         allLovs.productGroup.push({
           value: `${i.actual_code} - ${i.description}`,
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
         setCustomerSubSegment(arr);
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
        customerSubSegment: value
      }))
     },
     

      productGroup: function (value){
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
       console.log(value, "mmmmmSector");
       const data = await axios.post(API_SERVER + "/get-sub-sector", {
         sectorClassCode: value,
       });
       if (data.data.length > 0) {
         const response = data.data;
         const arr = [];
        //  console.log(response, "Mannnn");
         response.map((i) => {
           arr.push(
            { 
              value: `${i.actual_code}`, 
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
        subSector: value
      }))
     },

     
     productSubGroup: async function (value) {
      // setSelectedSubgroup(value)
      //  console.log(value, "mmmmm");
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
        productSubGroup: value
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

  //  console.log(subSector, "kkk");

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


 



  const handleSubmit = (event) => {
    event.preventDefault();
  
    const errors = {};
    let hasErrors = false;
  
    Object.entries(validationRules).forEach(([field, rules]) => {
      if (rules.required && !formValues[field]) {
        errors[field] = `${field} is required`;
        hasErrors = true;
      } else if (rules.pattern && !rules.pattern.test(formValues[field])) {
        errors[field] = `${field} is not valid`;
        hasErrors = true;
      }
    });
  
    if (hasErrors) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  
  const steps = [
    {
      count: 1,
      number: "Corporate Bank",
      content: (
        <div>
          <Corporate_Bank 
            data={allLovs}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </div>
      ),
    },
    {
      count: 2,
      number: "Corporate Relations",
      content: (
        <div>
          <Corporate_Relations 
            data={allLovs}
            formValues={formValues}
            setFormValues={setFormValues}
          />
        </div>
      ),
    },
    {
      count: 3,
      number: "Account Details",
      content: (
        <div>
          <Account_Details
            sector={sector}
            subSector={subSector}
            customerSegment={customerSegment}
            // customerSubSegment={customerSubSegment}
            accountDetailsData={accountDetailsData}
            setAccountDetailsData={setAccountDetailsData}
            accountTypes={accountTypes}
            setAccountTypes={setAccountTypes}
            data={allLovs}
            onChange={handleOnChange}
          />
        </div>
      ),
    },
    {
      count: 4,
      number: "Account Mandate",
      content: (
        <div>
          <Account_Mandate data={allLovs} />
        </div>
      ),
    },
    {
      count: 5,
      number: "E-banking",
      content: (
        <div>
          <Ebanking_Customer_Risk />
        </div>
      ),
    },
    {
      count: 6,
      number: "Anti Money Laundering",
      content: (
        <div>
          <Anti_Money_Laundering 
            sourceOfWealth={sourceOfWealth} 
            sourceOfFund={sourceOfFund} 
            transactionType={transactionType} 
            data={allLovs} 
          />
        </div>
      ),
    },
  ];

  const custom = `url(` +
  window.location.origin +
  `/assets/images/headerBackground/` +
  customTheme.theme.headerImage +
`)`;

  return (
    <div style={{ zoom: "0.75"}}>
      {" "}
      <div >
        <div
          style={{ marginTop: "-15px", textAlign: "center" }}
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
      </div>
      <div className="border rounded-md shadow-sm bg-gray-100">
        <HeaderComponent
          accountTypes={accountTypes}
          setAccountTypes={setAccountTypes}
          data={allLovs}
        />
      </div>

      <div className="bg-gray-100 p-2">
        <ul className="stepper rounded mb-4">
          {steps.map((step, index) => (
            <li
            key={step.number}
            className="stepper__item cursor-pointer flex h-10 items-center justify-center"
            style={{
              background: index === activeStep ? custom : "",
              color: index === activeStep ? "white" : "",
              border: index < activeStep ? "1px" : "",
              borderRadius: index < activeStep ? "10%" : "",
            }}
            onClick={() => handleClick(index)}
          >
            <div className="flex space-x-5 items-center justify-center">
              <div className="border-2 rounded-full flex justify-center items-center w-7 h-7 p-1 bg-black text-white">
                {step.count}
              </div>
              <div>{step.number}</div>
            </div>
          </li>
            // <li
            //   key={step.number}
            //   className={`stepper__item cursor-pointer flex h-10 items-center justify-center ${
            //     index === activeStep
            //       ? "current text-white"
            //       : index < activeStep
            //       ? "complete"
            //       : ""
            //   }`}
            //   onClick={() => handleClick(index)}
            // >
            //   <div className="flex space-x-5 items-center justify-center">
            //     <div className="border-2 rounded-full flex justify-center items-center w-7 h-7 p-1 bg-black text-white">
            //       {step.count}
            //     </div>
            //     <div>{step.number}</div>
            //   </div>
            // </li>
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

export default CorporateAccountOpening;


