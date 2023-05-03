import React, { useState, useEffect } from "react";
import InputField from "../../../../../components/others/Fields/InputField";
import Label from "../../../../../components/others/Label/Label";
import SelectField from "../../../../../components/others/Fields/SelectField";
import ButtonComponent from "../../../../../components/others/Button/ButtonComponent";
import TextAreaField from "../../../../../components/others/Fields/TextArea";
import ListOfValue from "../../../../../components/others/Fields/ListOfValue";
// import DataTable from "../../../../../components/others/Datatable/DataTable";
import ButtonType from "../../../../../components/others/Button/ButtonType";
import axios from 'axios'
import DataTable from "./datatable-annex";
import PhoneNumberField from "../../../../../components/others/Fields/phone-input"
// import DataTableChris from "../../../../../components/others/Datatable/DataTableChris";
// import DataTable_Annex from "../../../../../components/others/Datatable/DataTable_Annex";
import swal from 'sweetalert'
import Risk_analysis_test from "./risk-analysis-test";
import {API_SERVER} from '../../../../../config/constant'
import Permanent_Address from "./permanent-address";
const host = window.location.host;


function Current_Address({data, validationRules,activeStep, formValues, setFormValues, formErrors, setFormErrors, handleClose, handleShow, show_Second}) {
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [tinNumber, setTinNumber] = useState('')
  const [id_number, setId_number] = useState('')
  const [issuing_auth, setIssuing_auth] = useState('')
  const [issuing_date, setIssuingDate] = useState('')
  const [idExpiryDate, setIdExpiryDate] = useState('')
  const [issuingPlace, setIssuingPlace] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [streetName, setStreetName] = useState('')
  const [locationGp, setLocationGp] = useState('')
  const [risk, setRisk] = useState('')
  const [relationNo, setRelationNo] = useState('')
  const [showRiskModal, setShowRiskModal]= useState(false)
  const [anothertableData, setAnothertableData] = useState([])
  const [minor, setMinor] = useState("No");
  const [guarantorID, setGuarantorID] = useState('')
  const [health, setHealth] = useState("No");
  const [healthChallengeType, setHealthChallengeType] = useState("");
  const [staff, setStaff] = useState("No")
  const [staffID, setStaffID] = useState("")

  

  const handleFirstName = (event) => {
    setFirstName(event.target.value)
  };

  console.log(firstName,"::: firstNamfirstNamee")

  const handleMiddleName = (event) => {
    setMiddleName(event.target.value)
  };

  const handleSurname = (event) => {
    setSurname(event.target.value)
  };

  const handleEmail = (event) => {
    setEmail(event.target.value)
  };

  const handleGender = (event) => {
    setGender(event.target.value)
  };

  const handleDoB = (event) => {
    setDob(event.target.value)
  };

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value)
  };

  const handleTinNumber = (event) => {
    setTinNumber(event.target.value)
  };

  const handleIdNumber = (event) => {
    setId_number(event.target.value)
  };

  const handleIssueAuth = (event) => {
    setIssuing_auth(event.target.value)
  }

  const handleIssuingDate = (event) => {
    setIssuingDate(event.target.value)
  }

  const handleIdExpiryDate = (event) => {
    setIdExpiryDate(event.target.value)
  }

  const handleIssuingPlace = (event) => {
    setIssuingPlace(event.target.value)
  }

  const handleHouseNo = (event) => {
    setHouseNumber(event.target.value)
  }

  const handleStreetName = (event) => {
    setStreetName(event.target.value)
  }

  const handleLocation = (event) => {
    setLocationGp(event.target.value)
  }

  const handleMinorChange = (event) => {
    setMinor(event.target.value);
  };

  const handleGuarantorIDChange = (event) => {
    setGuarantorID(event.target.value);
  };

  const handleHealth = (event) => {
    setHealth(event.target.value);
  };
  
  const handleHealthChallengeType= (event) => {
    setHealthChallengeType(event.target.value);
  };

  const handleStaff= (event) => {
    setStaff(event.target.value);
  };
  
  const handleStaffID= (event) => {
    setHealthChallengeType(event.target.value);
  };

  const handleRisk = (event) => {
    setRisk(event.target.value)
  }

  // useEffect(() => {
  //   setAnothertableData(tableData)
  // }, [])

////// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleSubmit = async (event) => {
   event.preventDefault();
  // axios.get(API_SERVER + '/get-unique-ref').then(response => {
  //       setRelationNo(response.data[0].unique_ref);
  //       // console.log(response.data[0].unique_ref,":::Batch")   
  //       console.log(relationNo,"::::::::::::::::::::Batch")
  //   });
  const response = await axios.get(API_SERVER + '/get-unique-ref');
    setRelationNo(response.data[0].unique_ref);
    console.log(response.data[0].unique_ref,"::::::::::::::::::::Batch");

    const formValuesFields = { relationNo:response.data[0].unique_ref, firstName, middleName, surname, email, dob, phoneNumber, gender, tinNumber, id_number, issuing_auth, issuing_date, idExpiryDate, issuingPlace, houseNumber, streetName, locationGp, risk };
    const newTableData = [...tableData, formValues, formValuesFields];
    console.log('Form data saved :::', formValues, formValuesFields);
    setTableData(newTableData);
    setAnothertableData(newTableData)
    localStorage.setItem("get User Data", JSON.stringify(newTableData))
    
    console.log(userData, "::::: get User Data")
    swal({
      title: 'Success',
      text: 'Data has been added to the table',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    setFirstName('');
    setMiddleName('');
    setSurname('');
    setGender('');
    setEmail('');
    setDob('');
    setPhoneNumber('');
    setTinNumber('');
    setId_number('');
    setIssuing_auth('');
    setIssuingDate('');
    setIdExpiryDate('');
    setIssuingPlace('');
    setHouseNumber('');
    setStreetName('');
    setLocationGp('');
    setRisk('');
    setFormValues('');
  };

  const userData = JSON.parse(localStorage.getItem("get User Data"))

  // console.log(anothertableData, " :::::::::::::::anothertableData")
  
  // const [data, setData] = useState()


// const columns = ["Relation No", "first Name", "Surname", "Middle Name", "Gender", "Date of Birth", "Mobile 1", "Mandate Level", "Approver Limit"];

const customTheme = JSON.parse(localStorage.getItem("theme"));

const getTheme = JSON.parse(localStorage.getItem("theme"));
const [randomString, setRandomString] = useState('');

const generateRandomString = () => {
  const randomNumber = Math.floor(Math.random() * 90000) + 10000; // generates a random 5-digit number
  setRisk(randomNumber.toString()); // converts the number to a string and sets it as the state value
};


  return (
    <div>
    <div>
        <div className="text-center text-black uppercase mb-2">Current Address</div>
        <hr/>
        {/* First Tab */}
        <div className="flex items-center justify-center space-x-20">
            {/* Region */}
            <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                    <Label label="Region" />
                    </div>
                    <div className="md:w-2/4 ">
                    <ListOfValue 
                    data={data.title} 
                    inputWidth="90%" 
                    value={formValues.title}
                        onChange={(value) =>
                        setFormValues((prevFormValues) => ({
                            ...prevFormValues,
                            title: value
                        }))
                        }
                    />
                    </div>
                </div>
            </div>

            {/* House Type */}
            <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                    <Label label="House Type" />
                    </div>
                    <div className="md:w-2/4 ">
                    <ListOfValue 
                    data={data.title} 
                    inputWidth="90%" 
                    value={formValues.title}
                        onChange={(value) =>
                        setFormValues((prevFormValues) => ({
                            ...prevFormValues,
                            title: value
                        }))
                        }
                    />
                    </div>
                </div>
            </div>

        </div>


        {/* Second Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/* Flat/Villa/House No */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Flat/Villa/House No" required={true} />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    id="firstName" 
                    name="firstName" 
                    type="text" 
                    required 
                    value={firstName}
                    onChange={handleFirstName}
                  />
                  {formErrors.firstName && (
                    <div className="error-message">{formErrors.firstName}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Building Name */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Building Name" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    type="text" 
                    value={middleName}
                    onChange={handleMiddleName}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Third Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/* Street Name */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Street Name" required={true} />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    type="text"
                    value={surname}
                    onChange={handleSurname}
                  />
                </div>
              </div>
            </div>

            {/* Location*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Location"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Fourth Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/* City */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="City" />
                </div>
                <div className="md:w-2/4 ">
                  <ListOfValue 
                    data={data.city} 
                    value={formValues.city}
                    onChange={(value) =>
                      setFormValues((prevFormValues) => ({
                        ...prevFormValues,
                        city: value
                      }))
                    }
                  />
                </div>
              </div>
            </div>

            {/* earest Land Mark*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Nearest Land Mark" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    type="text" 
                    value={middleName}
                    onChange={handleMiddleName}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Fifth Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/* Email*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Email" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    type="text"
                    value={surname}
                    onChange={handleSurname}
                  />
                </div>
              </div>
            </div>

            {/*Phone 1*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Phone 1"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Sixth Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/*Phone 2*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Phone 2"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

            {/* Nature of Ownership*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Nature of Ownership" required={true} />
                </div>
                <div className="md:w-2/4 ">
                  <ListOfValue 
                    data={data.country} 
                    inputWidth="100%" 
                    value={formValues.country}
                    onChange={(value) =>
                      setFormValues((prevFormValues) => ({
                        ...prevFormValues,
                        country: value
                      }))
                    }
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Seventh Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/*Stayed Since*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Stayed Since"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="date"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

            {/*Cost Of Accommodation*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Cost Of Accommodation"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Eighth Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/*Current Value */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Current Value"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

            {/* Balance Mortgage */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Balance Mortgage"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Ninth Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/* Fax*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Fax"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    disabled={minor === "No"}
                  />
                </div>
              </div>
            </div>

            {/* Attention Party */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Attention Party"/>
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    type="text"
                    value={surname}
                    onChange={handleSurname}
                  />
                </div>
              </div>
            </div>

        </div>


    </div>

    <hr/>
    <div className="text-center text-black uppercase mb-2">Permanent Address</div>
    <hr/>

    {/* Permanent */}

    <div>
        
        {/* First Tab */}
        <div className="flex items-center justify-center space-x-20">
            {/* Region */}
            <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                    <Label label="Region" />
                    </div>
                    <div className="md:w-2/4 ">
                    <ListOfValue 
                    data={data.title} 
                    inputWidth="90%" 
                    value={formValues.title}
                        onChange={(value) =>
                        setFormValues((prevFormValues) => ({
                            ...prevFormValues,
                            title: value
                        }))
                        }
                    />
                    </div>
                </div>
            </div>

            {/* House Type */}
            <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                    <div class="md:w-1/3">
                    <Label label="House Type" />
                    </div>
                    <div className="md:w-2/4 ">
                    <ListOfValue 
                    data={data.title} 
                    inputWidth="90%" 
                    value={formValues.title}
                        onChange={(value) =>
                        setFormValues((prevFormValues) => ({
                            ...prevFormValues,
                            title: value
                        }))
                        }
                    />
                    </div>
                </div>
            </div>

        </div>


        {/* Second Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/* Flat/Villa/House No */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Flat/Villa/House No" required={true} />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    id="firstName" 
                    name="firstName" 
                    type="text" 
                    required 
                    value={firstName}
                    onChange={handleFirstName}
                  />
                  {formErrors.firstName && (
                    <div className="error-message">{formErrors.firstName}</div>
                  )}
                </div>
              </div>
            </div>

            {/* Building Name */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Building Name" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    type="text" 
                    value={middleName}
                    onChange={handleMiddleName}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Third Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/* Street Name */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Street Name" required={true} />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    type="text"
                    value={surname}
                    onChange={handleSurname}
                  />
                </div>
              </div>
            </div>

            {/* Location*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Location"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Fourth Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/* City */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="City" />
                </div>
                <div className="md:w-2/4 ">
                  <ListOfValue 
                    data={data.city} 
                    value={formValues.city}
                    onChange={(value) =>
                      setFormValues((prevFormValues) => ({
                        ...prevFormValues,
                        city: value
                      }))
                    }
                  />
                </div>
              </div>
            </div>

            {/* earest Land Mark*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Nearest Land Mark" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    type="text" 
                    value={middleName}
                    onChange={handleMiddleName}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Fifth Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/* Email*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Email" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    type="text"
                    value={surname}
                    onChange={handleSurname}
                  />
                </div>
              </div>
            </div>

            {/*Phone 1*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Phone 1"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Sixth Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/*Phone 2*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Phone 2"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

            {/* Nature of Ownership*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Nature of Ownership" required={true} />
                </div>
                <div className="md:w-2/4 ">
                  <ListOfValue 
                    data={data.country} 
                    inputWidth="100%" 
                    value={formValues.country}
                    onChange={(value) =>
                      setFormValues((prevFormValues) => ({
                        ...prevFormValues,
                        country: value
                      }))
                    }
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Seventh Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/*Stayed Since*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Stayed Since"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="date"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

            {/*Cost Of Accommodation*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Cost Of Accommodation"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Eighth Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/*Current Value */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Current Value"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

            {/* Balance Mortgage */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Balance Mortgage"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
              </div>
            </div>

        </div>


        {/* Ninth Tab */}
        <div className="flex items-center justify-center space-x-20 -mt-3">
            {/* Fax*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label
                    label="Fax"
                  />
                </div>
                <div class="md:w-2/3 ">
                  <input 
                    className="risk_label" 
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    disabled={minor === "No"}
                  />
                </div>
              </div>
            </div>

            {/* Attention Party */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Attention Party"/>
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input 
                    className="my_inputs" 
                    type="text"
                    value={surname}
                    onChange={handleSurname}
                  />
                </div>
              </div>
            </div>

        </div>


    </div>
    </div>
  );
}

export default Current_Address;