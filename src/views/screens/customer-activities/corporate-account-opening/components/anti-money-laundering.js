import React, { useState } from "react";
import InputField from "../../../../../components/others/Fields/InputField";
import Label from "../../../../../components/others/Label/Label";
import SelectField from "../../../../../components/others/Fields/SelectField";
import ButtonComponent from "../../../../../components/others/Button/ButtonComponent";
import TextAreaField from "../../../../../components/others/Fields/TextArea";
import ListOfValue from "../../../../../components/others/Fields/ListOfValue";
import ButtonType from "../../../../../components/others/Button/ButtonType";
import DataTable from "./datatable-annex";

const Anti_Money_Laundering = ({data, sourceOfWealth, sourceOfFund, transactionType}) => {
    const customTheme = JSON.parse(localStorage.getItem("theme"));

      const bgColor =
        `url(` +
        window.location.origin +
        `/assets/images/background/` +
        customTheme.theme.headerImage +
        `)`;

       ////////////  Source of Fund ///////////////////////////
    const columns = ["Code","Descrition", "Check"]
    const rows = sourceOfFund
      ////////////////End  Source of Fund /////////////////////

      ////////////  Source of Wealth ////////////////
    const columns_ = ["Code","Descrition", "Wealth Value"]
    const rows_ = sourceOfWealth
      ////////////////End  Source of Wealth /////////////////////

    //////////// Transaction Type //////////////////////////////
    const columns__ = ["Code","Descrition", "Check"]
    const rows__ = transactionType
    //////////// End Transaction Type //////////////////////////////
        
        
      

  return (
    <div>
      <div className="border rounded">
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}
          <div className="w-full max-w-2xl">
               {/* <hr className="-mb-1" /> */}
               <div className=" p-2 mt-2 text-white" style={{
                background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    customTheme.theme.headerImage +
                    `)`,
                }}
            >
                Other Details
            </div>

            {/*No of Withdrawal per Month*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="No of Withdrawal per Month" required={true} fontSize="85%" />
                  </div>
                  <div class="md:w-2/3 ">
                      <input className="risk_label" type="text" />
                  </div>
              </div>
            </div>

            {/*Amount of Withdrawal per Month*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Amt Withdrawals per Month" required={true}  fontSize="85%" />
                  </div>
                  <div class="md:w-2/3 ">
                      <input className="risk_label" type="text" />
                  </div>
              </div>
            </div>

            {/*No of Deposits per Month*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="No of Deposits per Month" required={true} fontSize="85%" />
                  </div>
                  <div class="md:w-2/3 ">
                      <input className="risk_label" type="text" />
                  </div>
              </div>
            </div>

            {/*Amount Deposits per Month*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                      <Label label="Amount Deposits per Month" required={true} fontSize="85%" />
                  </div>
                  <div class="md:w-2/3 ">
                      <input className="risk_label" type="text" />
                  </div>
              </div>
            </div>
                
            <hr />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


            {/* Source Of Wealth */}
            <div className='border md:p-2 text-white md:mt-1' 
                style={{
                background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    customTheme.theme.headerImage +
                    `)`,
                }}
            >
              Source of Wealth
            </div>
            <DataTable columns={columns_} data={rows_} rowsPerPage={2} />

            

         
          
          </div>
          {/* **************************************** */}


          {/* Second Side */}
          {/* Second Side */}
          {/* Second Side */}
          <div className="w-full max-w-2xl">
            


                <div className='border md:p-2 text-white md:mt-1' 
                style={{
                background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    customTheme.theme.headerImage +
                    `)`,
                }}
                >
                    Source of Fund
                </div>
                <DataTable columns={columns} data={rows} rowsPerPage={2}   />

                


                <div className='border md:p-2 text-white md:mt-1'
                style={{
                    background:
                        `url(` +
                        window.location.origin +
                        `/assets/images/headerBackground/` +
                        customTheme.theme.headerImage +
                        `)`,
                    }}
                >
                
                    Transaction Type
                </div>
                <DataTable columns={columns__} data={rows__} rowsPerPage={2}  />

          </div>

        </div>

      
      </div>
    </div>
  )
}

export default Anti_Money_Laundering