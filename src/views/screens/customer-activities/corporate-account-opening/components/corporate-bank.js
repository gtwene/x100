import React from 'react'
import InputField from "../../../../../components/others/Fields/InputField";
import Label from "../../../../../components/others/Label/Label";
import SelectField from "../../../../../components/others/Fields/SelectField";
import ButtonComponent from "../../../../../components/others/Button/ButtonComponent";
import TextAreaField from "../../../../../components/others/Fields/TextArea";
import ListOfValue from "../../../../../components/others/Fields/ListOfValue";
import DataTable from "../../../../../components/others/Datatable/DataTable";
import ButtonType from "../../../../../components/others/Button/ButtonType";

const Corporate_Bank = ({data, formValues, setFormValues}) => {
  return (
    <div>
        <div className="border rounded">
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}
          <div className="w-full max-w-2xl">
            {/* Flat/Villa/House No */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Flat/Villa/House No" required={true} fontSize="85%" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                      <input class="my_inputs" type="text" />
                  </div>
              </div>
            </div>

            {/* Street Name */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Street Name" required={true} fontSize="85%" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                      <input class="my_inputs" type="text" />
                  </div>
              </div>
            </div>

            {/* Location*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Location" fontSize="85%" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                      <input class="my_inputs" type="text" />
                  </div>
              </div>
            </div>

            {/* Postal Address */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Postal Address" required={true} fontSize="85%" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                      <textarea class="my_inputs" type="text" />
                  </div>
              </div>
            </div>

            {/* Country */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Country" required={true} fontSize="85%" />
                  </div>
                  <div className="md:w-2/4 ">
                    <ListOfValue 
                        data={data.country}
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


            {/* Email */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Email" fontSize="85%" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                      <input class="my_inputs" type="text" />
                  </div>
              </div>
            </div>

            {/* Preferred Language */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Preferred Language" required={true} fontSize="85%" />
                  </div>
                  <div className="md:w-2/4 ">
                    <ListOfValue 
                        data={data.preferredLanguage}
                        value={formValues.preferredLanguage}
                        onChange={(value) =>
                            setFormValues((prevFormValues) => ({
                              ...prevFormValues,
                              preferredLanguage: value
                            }))
                          }
                    />
                  </div>
              </div>
            </div>

            {/* Date of Incorporation */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Date of Incorporation" required={true} fontSize="85%" />
                  </div>
                  <div class="md:w-2/3 ">
                      <input className="risk_label" type="date" />
                  </div>
              </div>
            </div>

            {/* Communication Mode */}
            {/* <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Communication Mode" required={true} fontSize="85%" />
                  </div>
                  <div class="md:w-2/3 md:mr-3">
                      <SelectField first_option="Male" second_option="Female"  />
                  </div>
              </div>
            </div> */}
            {/* Communication Mode */}
            <div class="w-full max-w-xl mt-2">
              <div className="md:flex md:items-center mb-2 ml-2">
              <div class="md:w-1/3">
                  <Label label="Communication Mode" />
                  </div>
                  <div className="relative">
                  <select
                      id="select-field"
                      name="select-field"
                    //   value={typesOfReferee}
                    //   onChange={handleTypeOfReferee}
                      className="block appearance-none w-full py-1 pl-3 pr-10 leading-tight rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                      {/* <option value="" >-- Select --</option> */}
                      <option value="None">None</option>
                      <option value="Foreign">SMS</option>
                      <option value="Forex">Email</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                      className="h-4 w-4 fill-current text-gray-500"
                      viewBox="0 0 20 20"
                      >
                      <path
                          fillRule="evenodd"
                          d="M15.293 6.293a1 1 0 00-1.414-1.414L10 8.586 5.707 4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l5-5z"
                          clipRule="evenodd"
                      />
                      </svg>
                  </div>
                  </div>
              </div>
            </div>

            {/* Primary Phone Number */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Primary Phone Number" required={true} fontSize="85%" />
                  </div>
                  <div class="md:w-2/3 ">
                      <input className="risk_label" type="text" />
                  </div>
              </div>
            </div>

            {/* Tin Number*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Tin Number" fontSize="85%" />
                  </div>
                  <div class="md:w-2/3 ">
                      <input className="risk_label" type="text" />
                  </div>
              </div>
            </div>

            {/* Fax Number*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Fax Number" fontSize="85%" />
                  </div>
                  <div class="md:w-2/3 ">
                      <input className="risk_label" type="text" />
                  </div>
              </div>
            </div>
          
          </div>
          {/* **************************************** */}


          {/* Second Side */}
          {/* Second Side */}
          {/* Second Side */}
          <div className="w-full max-w-2xl">
            
            {/* Company Registration No.*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Company Registration No." required={true} fontSize="85%" />
                  </div>
                  <div class="md:w-1/3 ">
                      <input className="risk_label" type="text" />
                  </div>
              </div>
            </div>

            {/* Bank's Sist. Comp */}
            <div class="w-full max-w-xl mt-2">
              <div className="md:flex md:items-center mb-2 ml-2">
              <div class="md:w-1/3">
                  <Label label="Bank's Sist. Comp" />
                  </div>
                  <div className="relative">
                  <select
                      id="select-field"
                      name="select-field"
                    //   value={typesOfReferee}
                    //   onChange={handleTypeOfReferee}
                      className="block appearance-none w-full py-1 pl-3 pr-10 leading-tight rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                      {/* <option value="" >-- Select --</option> */}
                      <option value="None"></option>
                      <option value="Foreign">Yes</option>
                      <option value="Forex">No</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                      className="h-4 w-4 fill-current text-gray-500"
                      viewBox="0 0 20 20"
                      >
                      <path
                          fillRule="evenodd"
                          d="M15.293 6.293a1 1 0 00-1.414-1.414L10 8.586 5.707 4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l5-5z"
                          clipRule="evenodd"
                      />
                      </svg>
                  </div>
                  </div>
              </div>
            </div>

            {/* Description Of Business */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Description Of Business" required={true} fontSize="85%" />
                  </div>
                  <div className="md:w-1/3 md:mr-2">
                      <textarea class="my_inputs" type="text" />
                  </div>
              </div>
            </div>

            

          </div>

        </div>

        {/* <div className="flex justify-end mr-5">
          <ButtonComponent label="Save" buttonBackgroundColor="green" buttonWidth="120px" buttonHeight="30px" />
        </div> */}

        
      </div>
    </div>
  )
}

export default Corporate_Bank
