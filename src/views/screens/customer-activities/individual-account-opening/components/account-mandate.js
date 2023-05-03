import React, {useState} from 'react'
import InputField from "../../../../../components/others/Fields/InputField";
import Label from "../../../../../components/others/Label/Label";
import SelectField from "../../../../../components/others/Fields/SelectField";
import ButtonComponent from "../../../../../components/others/Button/ButtonComponent";
import TextAreaField from "../../../../../components/others/Fields/TextArea";
import ListOfValue from "../../../../../components/others/Fields/ListOfValue";
import ButtonType from "../../../../../components/others/Button/ButtonType";
import DataTable from './datatable-annex';

const Account_Mandate = ({data}) => {
  const [dataA, setDataA] = useState([
    { Tick: <input type='checkbox' />, RelationNo: '', FirstName: '', Surname: '', MiddleName: '', SignatoryLevels: '', ApproveLimit: '', PhotoSig: <button>PhotoSig</button>, FingerPrint: <button>PhotoSig</button> },
    { Tick: <input type='checkbox' />, RelationNo: '', FirstName: '', Surname: '', MiddleName: '', SignatoryLevels: '', ApproveLimit: '', PhotoSig: <button>PhotoSig</button>, FingerPrint: <button>PhotoSig</button>},
    { Tick: <input type='checkbox' />, RelationNo: '', FirstName: '', Surname: '', MiddleName: '', SignatoryLevels: '', ApproveLimit: '', PhotoSig: <button>PhotoSig</button>, FingerPrint: <button>PhotoSig</button> },
  
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalItems = dataA.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = dataA.slice(startIndex, endIndex);

  const customTheme = JSON.parse(localStorage.getItem("theme"));
  const getTheme = JSON.parse(localStorage.getItem("theme"));

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const bgColor =
    `url(` +
    window.location.origin +
    `/assets/images/background/` +
    customTheme.theme.backgroundImage +
  `)`;




  const dataData = []

    
  return (
    <div>
      <div className="border rounded">
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}
          <div className="w-full max-w-xl">
            {/* Account Mandate */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Account Mandate" fontSize="85%" />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue data={data.accountMandate} inputWidth="90%"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:p-5">
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
                      Tick
                      </th>
                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Relation No
                      </th>
                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      First Name
                      </th>

                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Surname
                      </th>
                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Middle Name
                      </th>

                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Signatory Levels
                      </th>

                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Approve Limit
                      </th>

                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Photo / Sig
                      </th>

                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Finger Print
                      </th>

                      {/* <th className="px-4 py-2">Actions</th> */}
                  </tr> 
              </thead>
           
                <tbody>
                {dataA.map(item => (
                  <tr key={item.Tick}>
                    <td>{item.Tick}</td>
                    <td>{item.RelationNo}</td>
                    <td>{item.FirstName}</td>
                    <td>{item.Surname}</td>
                    <td>{item.MiddleName}</td>
                    <td>{item.SignatoryLevels}</td>
                    <td>{item.ApproveLimit}</td>
                    <td>{item.PhotoSig}</td>
                    <td>{item.FingerPrint}</td>
                  </tr>
                ))}
                </tbody>
          </table>

        </div>

        <div className="md:p-5">
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
                      S/No
                      </th>
                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Description
                      </th>
                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Doc.Code
                      </th>

                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Document No
                      </th>
                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Doc Date
                      </th>

                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Mandate
                      </th>

                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                      style={{borderRight: '1px solid #ddd'}}
                      >
                      Received Date
                      </th>

                      {/* <th className="px-4 py-2">Actions</th> */}
                  </tr> 
              </thead>
            {dataData.length === 0 ? (
                <tbody>
                  <tr>
                    <td colSpan="6" style={{textAlign: 'center', fontWeight:'18px'}}>Sorry, No Matching Records found</td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {dataData.map((item) => (
                    <tr key={item.id}>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              )}
          </table>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <div>
              Showing {startIndex + 1}-{endIndex > totalItems ? totalItems : endIndex} of {totalItems} items
            </div>
            {/* <div className='flex space-x-3'>
              <button disabled={currentPage === 1} onClick={handlePrevPage}>Prev</button>
              <button disabled={currentPage === totalPages} onClick={handleNextPage}>Next</button>
            </div> */}
          </div>
        </div>

        {/* <div className="flex justify-end mr-5">
          <ButtonComponent
            label="Save"
            buttonBackgroundColor="green"
            buttonWidth="120px"
            buttonHeight="30px"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Account_Mandate