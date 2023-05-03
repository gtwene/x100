import React from 'react'
import InputField from "../../../../../components/others/Fields/InputField";
import Label from "../../../../../components/others/Label/Label";
import SelectField from "../../../../../components/others/Fields/SelectField";
import ButtonComponent from "../../../../../components/others/Button/ButtonComponent";
import TextAreaField from "../../../../../components/others/Fields/TextArea";
import ListOfValue from "../../../../../components/others/Fields/ListOfValue";
import ButtonType from "../../../../../components/others/Button/ButtonType";
import DataTable from "./datatable-annex"

const Corporate_Relations = ({data, formValues, setFormValues}) => {

  const customTheme = JSON.parse(localStorage.getItem("theme"));

  const getTheme = JSON.parse(localStorage.getItem("theme"));

  const bgColor =
    `url(` +
    window.location.origin +
    `/assets/images/background/` +
    customTheme.theme.backgroundImage +
  `)`;

  const columns = [
    {
      name: "#",
      options:{
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Customer ID",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Customer Description",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Posting Date",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Date Of Incorp",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Created By",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Relationship Type",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },  
  ];

    // const columns = ["Relation No", "first Name", "Surname", "Middle Name", "Gender", "Date of Birth", "Mobile 1", "Mandate Level"];


//   const data_1 = [
//     ["Joe James", "Test Corp", "Yonkers", "NY", "Joe James", "Test Corp", "Yonkers", "2"],
//     ["John Walsh", "Test Corp", "Hartford", "CT", "Joe James", "Test Corp", "Yonkers", "1"],
//     ["Bob Herm", "Test Corp", "Tampa", "FL", "Joe James", "Test Corp", "Yonkers", "2"],
//    ];

   const rows = [];
  return (
    <div>
      <div>
        <div className="border rounded">
          <div className="md:flex justify-center w-full">
            {/* **************************************** */}
            <div className="w-full max-w-2xl">
              {/* Title */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Title" fontSize="85%" />
                  </div>
                  <div className="md:w-2/4 ">
                    <ListOfValue 
                      data={data.title}
                      value={formValues.title}
                      onChange={(value) =>
                        setFormValues((prevformValues) => ({
                          ...prevformValues,
                          title: value
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Salutation */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Salutation" fontSize="85%" />
                  </div>
                  <div className="md:w-2/4 ">
                    <ListOfValue 
                      data={data.salutation}
                      value={formValues.salutation}
                      onChange={(value) =>
                        setFormValues((prevformValues) => ({
                          ...prevformValues,
                          salutation: value
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* First Name */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="First Name" required={true} fontSize="85%" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Middle Name */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Middle Name" fontSize="85%" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Surname */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label
                      label="Surname Name"
                      required={true}
                      fontSize="85%"
                    />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
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

              {/* Date of Birth */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label
                      label="Date Of Birth"
                      required={true}
                      fontSize="85%"
                    />
                  </div>
                  <div class="md:w-2/3 ml-1">
                    <InputField type={"date"} />
                  </div>
                </div>
              </div>

              {/* Gender */}
              <div class="w-full max-w-xl mt-2">
              <div className="md:flex md:items-center mb-2 ml-2">
              <div class="md:w-1/3">
                  <Label label="Gender"/>
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
                        <option value="Foreign">Male</option>
                        <option value="Forex">Female</option>
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
                    <Label
                      label="Primary Phone Number"
                      required={true}
                      fontSize="85%"
                    />
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
            </div>
            {/* **************************************** */}

            {/* Second Side */}
            {/* Second Side */}
            {/* Second Side */}
            <div className="w-full max-w-2xl">
              {/* ID Type */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="ID Type" required={true} fontSize="85%" />
                  </div>
                  <div className="md:w-2/4 ">
                    <ListOfValue 
                      data={data.id_type}
                      value={formValues.id_type}
                      onChange={(value) =>
                        setFormValues((prevformValues) => ({
                          ...prevformValues,
                          id_type: value
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* ID Number */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="ID Number" required={true} fontSize="85%" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Issuing Auth */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label
                      label="Issuing Auth"
                      required={true}
                      fontSize="85%"
                    />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Issuing Date */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label
                      label="Issuing Date"
                      required={true}
                      fontSize="85%"
                    />
                  </div>
                  <div class="md:w-2/3 ">
                    {/* <input className="risk_label" type="date" /> */}
                    <InputField type={"date"} />
                  </div>
                </div>
              </div>

              {/* ID Expiry Date */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label
                      label="ID Expiry Date"
                      required={true}
                      fontSize="85%"
                    />
                  </div>
                  <div class="md:w-2/3 ">
                    {/* <input className="risk_label" type="date" /> */}
                    <InputField type={"date"} />
                  </div>
                </div>
              </div>

              {/* Issuing Place */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label
                      label="Issuing Place"
                      required={true}
                      fontSize="85%"
                    />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Flat/Villa/House No */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label
                      label="Flat/Villa/House No"
                      required={true}
                      fontSize="85%"
                    />
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
                    <Label label="Street Name" fontSize="85%" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Country Code */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label
                      label="Country Code"
                      required={true}
                      fontSize="85%"
                    />
                  </div>
                  <div className="md:w-2/4 ">
                      <ListOfValue 
                      inputWidth="100%"
                          data={data.country}
                          value={formValues.country}
                          onChange={(value) =>
                              setFormValues((prevformValues) => ({
                                ...prevformValues,
                                country: value
                              }))
                          }
                      />
                  </div>
                </div>
              </div>

              {/* Signatory Level */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label
                      label="Signatory Level"
                      required={true}
                      fontSize="85%"
                    />
                  </div>
                  <div className="md:w-2/4 ">
                    <ListOfValue 
                    inputWidth="100%"
                      data={data.signatoryLevel}
                      value={formValues.signatoryLevel}
                      onChange={(value) =>
                        setFormValues((prevformValues) => ({
                          ...prevformValues,
                          signatoryLevel: value
                        }))
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Approval Limit */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Approval Limit" fontSize="85%" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-end mr-5 mb-2 text-white'>
            <button type="submit" className='border p-2 rounded' style={{background:
            `url(` +
            window.location.origin +
            `/assets/images/headerBackground/` +
            getTheme.theme.headerImage +
            `)`,}}
            >Submit</button>
            </div>

          {/* <div className="flex justify-end mr-5">
            <ButtonComponent
              label="Save"
              buttonBackgroundColor="green"
              buttonWidth="120px"
              buttonHeight="30px"
            />
          </div> */}

          {/* <DataTable data={data_1} columns={columns} /> */}
          {/* <DataTable rows={rows} columns={columns} /> */}
          <table className="min-w-full divide-y divide-gray-200">
          {/* <colgroup>
            <col style={{width: '30%'}} />
            <col style={{width: '30%'}} />
            <col style={{width: '40%'}} />
          </colgroup> */}
          <thead className="bg-gray-50" 
          style={{background:
              `url(` +
              window.location.origin +
              `/assets/images/headerBackground/` +
              getTheme.theme.headerImage +
              `)`,}}
              >
              <tr>
                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  style={{borderRight: '1px solid #ddd'}}
                  >
                  Customer ID
                  </th>
                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  style={{borderRight: '1px solid #ddd'}}
                  >
                  Customer Description
                  </th>
                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  style={{borderRight: '1px solid #ddd'}}
                  >
                  Posting Date
                  </th>

                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  style={{borderRight: '1px solid #ddd'}}
                  >
                  Date of Incorp
                  </th>
                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  style={{borderRight: '1px solid #ddd'}}
                  >
                  Created By
                  </th>

                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  style={{borderRight: '1px solid #ddd'}}
                  >
                  Relationship Type
                  </th>

                  {/* <th className="px-4 py-2">Actions</th> */}
              </tr> 
          </thead>
        <tbody>
          {/* {userData?.map((data, index) => ( */}
            <tr >
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              {/* <td>{data.email}</td> */}
              {/* <td className="px-4 py-2">
                <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td> */}
            </tr>
          {/* ))} */}
        </tbody>
      </table>
        </div>
      </div>
    </div>
  );
}

export default Corporate_Relations