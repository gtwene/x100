import React, { useState } from 'react'
import DataTable from '../../../../components/others/Datatable/DataTable'
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import LCPaymentPage from './components/lc-payment-page';
import ButtonComponent from '../../../../components/others/Button/ButtonComponent';

function ImportLCPayment() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );

  const [showTable, setShowTable] = useState(true);
  const handleView = () => setShowTable(!showTable);
  return (
    <div style={{zoom:0.85}}>
       

{showTable ? (
           <DataTable title={"Import LC Payment "} rowsPerPage={'5'} columns={["Contract Ref Number","LC Type","Customer Number","Applicant Name","Currency","Contract Amount","Issue Date","Posted By","Action"]}
           data={[["IMLC190620000007","Documentary Credit","037421","Abu Augustine","SLE","105,000.00","20-JUN-2022","UNIONADMIN",
           <button
          //  className="btn btn-secondary"
           onClick={handleView}
           style={{
             background:
               `url(` +
               window.location.origin +
               `/assets/images/headerBackground/` +
               getTheme.theme.headerImage +
               `)`,
               height:'25px',
               width:'25px',alignItems:'center',
               borderRadius:'3px'
           }}
         >
           <MDBIcon
             style={{ color: "white", fontSize: 15 }}
             fas icon="angle-double-right"
           />
         </button>]]}
           />
           
          ) : (
            
            <LCPaymentPage exitbuttonclick={handleView} />
          )}
    </div>
  )
}

export default ImportLCPayment