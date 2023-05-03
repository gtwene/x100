import React, {useState} from 'react'
import InputField from "../../../../../components/others/Fields/InputField";
import Label from "../../../../../components/others/Label/Label";
import SelectField from "../../../../../components/others/Fields/SelectField";
import ButtonComponent from "../../../../../components/others/Button/ButtonComponent";
import TextAreaField from "../../../../../components/others/Fields/TextArea";
import ListOfValue from "../../../../../components/others/Fields/ListOfValue";
import { API_SERVER } from '../../../../../config/constant';
import ButtonType from "../../../../../components/others/Button/ButtonType";
import swal from 'sweetalert';
import { SiWappalyzer } from 'react-icons/si';
import axios from 'axios'


const Account_Referees = ({data, onChange, formValueAccountReferees, setFormValueAccountReferees, onClick, isLoading, setIsLoading, isPEP, setIsPEP, isBlacklisted, setIsBlacklisted, isDuplicate, setIsDuplicate}) => {
    const [accountNumber, setAccountNumber] = useState('');
    const [bankNames, setBankNames] = useState('');
    const [relationships, setRelationship] = useState([]);
    const [accountName, setAccountName] = useState('');
    const [email, setEmail] = useState('');
    const [noOfYears, setNoOfYears] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [resident, setResident] = useState('');
    const [tableData, setTableData] = useState([]);
    const [batchNo, setBatchNo] =useState("");
    const [typeOfReferees, setTypeOfReferees] = useState('')

    const getTheme = JSON.parse(localStorage.getItem("theme"));

const handleTypeOfReferee = (event) => {
  setTypeOfReferees(event.target.value)
//   if(event.target.value === "Account Holder"){
//   swal({
//     title: `${event.target.value}`,
//     text: `Thank you be being an ${event.target.value} `,
//     icon: 'success',
//   });
// } else{
//   swal({
//     title: `${event.target.value}`,
//     text: `Please Provide Other Bank Details for this Referee`,
//     icon: 'warning',
//   });
// }
}
     
  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
  };

  const bankName = (value) => {
    console.log(value)
    setBankNames(value)
  };

  const Relationship = (value) => {
    console.log(value)
    setRelationship(value)
  };

  console.log(relationships, ":::: relationships")

  const handleAccountNameChange = (event) => {
    setAccountName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNoOfYearsChange = (event) => {
    setNoOfYears(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleResidentChange = (event) => {
    setResident(event.target.value);
  };

  const newTableData = []
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (accountNumber.trim() === '' || bankNames.trim() === '' || accountName.trim() === '' || email.trim() === '') {
      swal({
        title: 'Error',
        text: 'Please enter all fields',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }
    // axios.get(batchNo).then((response) => {
    //     console.log(response.data.batch_no, ":::Batch:::");
    //     setBatchNo(response.data.batch_no)
    // });
    // axios.get(API_SERVER + '/get-unique-ref').then(response => {
    //     setBatchNo(response.data[0].unique_ref);
    //     console.log(response.data[0].unique_ref,":::Batch")   
    // });

  const response = await axios.get(API_SERVER + '/get-unique-ref');
  setBatchNo(response.data[0].unique_ref);
    console.log(response.data[0].unique_ref,"::::::::::::::::::::Batch");

    // console.log(response.data[0],":::Batch")

    const formValues = { batchNo:response.data[0].unique_ref, accountNumber, bankNames, accountName, email };
    // const newTableData = [...tableData, formValues];
    newTableData.push(...tableData, formValues)
    // localStorage.setItem('formValues', JSON.stringify(formValues));
    // console.log('Form data saved to localStorage:', formValues);
    setTableData(newTableData);
    localStorage.setItem("get Referee Data", JSON.stringify(newTableData))
    swal({
      title: 'Success',
      text: 'Data has been added to the table',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    setAccountNumber('');
    setAccountName('');
    setEmail('');
    setBankNames('');
    setNoOfYears('');
    setPhoneNumber('');
    setRelationship('');
    setResident('');
    setTypeOfReferees('')
  };

  const userRefereeData = JSON.parse(localStorage.getItem("get Referee Data"))

  // const handleDelete = (index) => {
  //   swal({
  //     icon: 'warning',
  //     title: 'Are you sure?',
  //     text: 'You are about to delete this data',
  //     showCancelButton: true,
  //     buttons: ['Cancel', 'Yes, delete it!' ]
  //     // confirmButtonText: 'Yes, delete it!',
  //     // cancelButtonText: 'Cancel',
  //   }).then((result) => {
  //     if ([1]) {
  //       const newData = [...tableData];
  //       newData.splice(index, 1);
  //       setTableData(newData);
  //       swal({
  //         icon: 'success',
  //         title: 'Success',
  //         text: 'Data deleted from table',
  //       });
  //     }
  //   });
  // };


  const handleDelete = (index) => {
    console.log(index)
    if (index > -1) {
      userRefereeData.splice(index, 1)
      swal({
          title: 'Success!',
          text: `Item at index has been deleted.`,
          icon: 'success',
          timer: 2000,
      });
      localStorage.setItem("get Referee Data", JSON.stringify(newTableData))
    }
    
    // swal({
    //   title: 'Are you sure?',
    //   text: 'This action cannot be undone!',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   buttons: ['Cancel', 'Yes, delete it!' ],
    //   confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    //   if ([1]) {
    //     userRefereeData.splice(index, 1); // remove one item at the specified index
    //     localStorage.setItem('userArray', JSON.stringify(newTableData));
    //     swal({
    //       title: 'Success!',
    //       text: `Item at index has been deleted.`,
    //       icon: 'success',
    //       timer: 2000,
    //     });
    //   }
    // })
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className="border rounded">
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}
                <div className="w-full max-w-xl">
                    {/* Types of Referees */}
                    <div class="w-full max-w-xl mt-2">
                        <div className="md:flex md:items-center mb-2 ml-2">
                        <div class="md:w-1/3">
                            <Label label="Types Of Referees" />
                            </div>
                            <div className="relative">
                            <select
                                id="select-field"
                                name="select-field"
                                value={typeOfReferees}
                                onChange={handleTypeOfReferee}
                                // value={selectedOption}
                                // onChange={handleChange}
                                className="block appearance-none w-full py-1 pl-3 pr-10 leading-tight rounded-md border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            >
                                <option value="" >-- Select --</option>
                                <option value="Account Holder">Account Holder</option>
                                <option value="Others">Others</option>
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

                    {/* Account Number */}
                    <div class="w-full max-w-xl mt-2">
                      <div class="md:flex md:items-center mb-2 ml-2">
                          <div class="md:w-1/3">
                              <Label label="Account Number" required={true} fontSize="85%" />
                          </div>
                          <div class="md:w-2/3 ">
                              <input 
                                className="risk_label" 
                                type="text"
                                value={accountNumber} 
                                onChange={handleAccountNumberChange} 
                              />
                          </div>
                      </div>
                    </div>

                    {/* Bank Name */}
                    <div class="w-full max-w-xl mt-2">
                      <div class="md:flex md:items-center mb-2 ml-2">
                          <div class="md:w-1/3">
                              <Label label="Bank Name" required={true} fontSize="85%" />
                          </div>
                          <div className="md:w-2/4 ">
                              <ListOfValue data={data.banks} onChange={bankName} value={bankNames} inputWidth="100%" />
                          </div>
                      </div>
                    </div>

                    {/* Account Name */}
                    <div class="w-full max-w-xl mt-2">
                      <div class="md:flex md:items-center mb-2 ml-2">
                          <div class="md:w-1/3">
                              <Label label="Account Name" required={true} fontSize="85%" />
                          </div>
                          <div className="md:w-2/3 md:mr-2">
                              <input 
                                className="my_inputs" 
                                type="text"
                                value={accountName} 
                                onChange={handleAccountNameChange}
                              />
                          </div>
                      </div>
                    </div>

                    {/* Resident Address */}
                    <div class="w-full max-w-xl mt-2">
                      <div class="md:flex md:items-center mb-2 ml-2">
                          <div class="md:w-1/3">
                              <Label label="Resident Address" required={true} fontSize="85%" />
                          </div>
                          <div className="md:w-2/3 md:mr-2">
                              <input 
                                className="my_inputs" 
                                type="text" 
                                value={resident} 
                                onChange={handleResidentChange}
                              />
                          </div>
                      </div>
                    </div>

                    {/* Email Address */}
                    <div class="w-full max-w-xl mt-2">
                      <div class="md:flex md:items-center mb-2 ml-2">
                          <div class="md:w-1/3">
                              <Label label="Email Address" fontSize="85%" />
                          </div>
                          <div className="md:w-2/3 md:mr-2">
                              <input 
                                className="my_inputs" 
                                type="text"
                                value={email} 
                                onChange={handleEmailChange}
                              />
                          </div>
                      </div>
                    </div>

                    {/* Relationship */}
                    <div class="w-full max-w-xl mt-2">
                      <div class="md:flex md:items-center mb-2 ml-2">
                          <div class="md:w-1/3">
                              <Label label="Relationship" fontSize="85%" />
                          </div>
                          <div className="md:w-2/4 ">
                              <ListOfValue data={data.relationship} onChange={Relationship} value={relationships} inputWidth="60%" />
                          </div>
                      </div>
                    </div>

                    {/* Number of years known */}
                    <div class="w-full max-w-xl mt-2">
                      <div class="md:flex md:items-center mb-2 ml-2">
                          <div class="md:w-1/3">
                              <Label label="No of years known" required={true} fontSize="85%" />
                          </div>
                          <div class="md:w-1/3 ">
                              <input 
                                className="risk_label text-right" 
                                type="text"
                                value={noOfYears} 
                                onChange={handleNoOfYearsChange}
                              />
                          </div>
                      </div>
                    </div>

                   {/* Phone Number */}
                   <div class="w-full max-w-xl mt-2">
                      <div class="md:flex md:items-center mb-2 ml-2">
                          <div class="md:w-1/3">
                              <Label label="Phone Number" required={true} fontSize="85%" />
                          </div>
                          <div class="md:w-2/3 ">
                              <input 
                                className="risk_label" 
                                type="text"
                                value={phoneNumber} 
                                onChange={handlePhoneNumberChange}
                              />
                          </div>
                      </div>
                    </div>

                
                </div>
          {/* **************************************** */}

          

        </div>

        {/* <div className="flex justify-end mr-5">
          <ButtonComponent onClick={onClick} label="Save" buttonBackgroundColor="green" buttonWidth="120px" buttonHeight="30px" />
            {isLoading && <div>Loading...</div>}
            {isPEP && <div>This person is a PEP.</div>}
            {isBlacklisted && <div>This person is blacklisted.</div>}
            {isDuplicate && <div>This person is a duplicate.</div>}
        </div> */}
        <div className='flex justify-end mr-5 mb-2'>
            <button type="submit" className='border p-2 rounded' style={{background:
            `url(` +
            window.location.origin +
            `/assets/images/headerBackground/` +
            getTheme.theme.headerImage +
            `)`,}}
            >Submit</button>
        </div>

      </form>
      <table className="min-w-full divide-y divide-gray-200">
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
                className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                style={{borderRight: '1px solid #ddd'}}
                >
                REFEREE ID
                </th>
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                style={{borderRight: '1px solid #ddd'}}
                >
                ACCOUNT NUMBER
                </th>
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                style={{borderRight: '1px solid #ddd'}}
                >
                BANK NAME
                </th>

                <th
                scope="col"
                className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                style={{borderRight: '1px solid #ddd'}}
                >
                FULL NAME
                </th>
                <th
                scope="col"
                className="px-6 py-3 text-left text-xs text-black font-bold uppercase tracking-wider"
                style={{borderRight: '1px solid #ddd'}}
                >
                EMAIL ADDRESS
                </th>

                <th className="px-4 py-2" style={{borderRight: '1px solid #ddd'}}>Actions</th>
            </tr>
        </thead>
        <tbody>
          {userRefereeData?.map((data, index) => (
            <tr key={index}>
              <td>{data.batchNo}</td>
              <td>{data.accountNumber}</td>
              <td>{data.bankNames}</td>
              <td>{data.accountName}</td>
              <td>{data.email}</td>
              <td className="px-4 py-2">
                <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Account_Referees