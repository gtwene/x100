import React, { useState } from 'react'
import InputField from '../../../../../components/others/Fields/InputField'
import ListOfValue from '../../../../../components/others/Fields/ListOfValue'
import TextAreaField from '../../../../../components/others/Fields/TextArea'
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";

function RequestDetails() {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  return (
    <div >
        <hr style={{marginBottom:'10px'}} />
      <div style={{display:'flex'}}>
        <InputField label={"Request Number"} labelWidth={"20%"} inputWidth={"40%"} disabled  required />
        <InputField label={"Source Branch"} labelWidth={"20%"} inputWidth={"40%"} disabled />
        </div>
        <hr  style={{border:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`,marginTop:'10px'}} />
        <br />
        <div style={{display:'flex',flex:1}}>
          <div style={{flex:0.69}}>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:"#ffffff"}}>
           <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.1em',paddingLeft:'10px',alignItems:'center'}}>
            <span>Customer and Account Details</span>
            </div>
            <div style={{padding:'10px'}}>
            <div style={{marginBottom:'15px'}}>
        <ListOfValue label={"Customer Number"} labelWidth={"20%"} inputWidth={"35%"} />
        </div>
        <div style={{marginBottom:'15px'}}>
        <ListOfValue label={"Account Number"} labelWidth={"20%"} inputWidth={"75%"} />
        </div>
        {/* <div style={{marginBottom:'15px',display:'flex',flex:1}}>
          <div style={{flex:0.7}}>
          <InputField label={"Account Product"} labelWidth={"29%"} inputWidth={"60%"} disabled />
          </div>
          <div style={{flex:0.3}}>
          <InputField label={"Currency"} labelWidth={"35%"} inputWidth={"50%"} disabled />
          </div>
        </div> */}
        <div style={{marginBottom:'15px'}}>
        <InputField label={"Account Product"} labelWidth={"20%"} inputWidth={"50%"} disabled />
        </div>
        <div style={{marginBottom:'15px'}}>
        <InputField label={"Currency"} labelWidth={"20%"} inputWidth={"25%"} disabled />
        </div>
        </div>
        </div>
        <br />
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:"#ffffff"}}>
           <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.1em',paddingLeft:'10px',alignItems:'center'}}>
            <span>Request Details</span>
            </div>
            <div style={{padding:'10px'}}>
            <div style={{marginBottom:'15px'}}>
        <ListOfValue label={"Product"} labelWidth={"20%"} inputWidth={"60%"} />
        </div>
        <div style={{marginBottom:'15px'}}>
        <ListOfValue label={"Product Currency"} labelWidth={"20%"} inputWidth={"50%"} />
        </div>
        <div style={{marginBottom:'15px',display:'flex',flex:1,alignItems:'center'}}>
          <div style={{flex:0.7}}>
        <InputField label={"Tenor (In days)"} labelWidth={"28.7%"} inputWidth={"35%"} />
          </div>
          <div style={{flex:0.3}}>
        <InputField  label={"Booking Date"} labelWidth={"40%"} inputWidth={"50%"} />
          </div>
        </div>
        <div style={{marginBottom:'15px'}}>
        <InputField label={"Requested Amount"} labelWidth={"20%"} inputWidth={"30%"} />
        </div>
        <div style={{marginBottom:'18px'}}>
        <InputField label={"Cash Security (%)"} labelWidth={"20%"} inputWidth={"30%"} />
        </div>
        </div>
        </div> 
        </div>
        <div style={{flex:0.01}}></div>
        <div style={{flex:0.3}}>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:"#ffffff"}}>
           <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.1em',paddingLeft:'10px',alignItems:'center'}}>
            <span>Account Balance Details</span>
            </div>
            <div style={{padding:'10px'}}>
            <div style={{marginBottom:'16px'}}>
        <InputField label={"Available Balance"} labelWidth={"45%"} inputWidth={"45%"} disabled />
        </div>
            <div style={{marginBottom:'16px'}}>
        <InputField label={"Book Balance"} labelWidth={"45%"} inputWidth={"45%"} disabled />
        </div>
            <div style={{marginBottom:'16px'}}>
        <InputField label={"Available Limit"} labelWidth={"45%"} inputWidth={"45%"} disabled />
        </div>
            <div style={{marginBottom:'17px'}}>
        <InputField label={"Account Status"} labelWidth={"45%"} inputWidth={"45%"} disabled />
        </div>
        </div>
            </div>
            <br />
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:"#ffffff"}}>
           <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.1em',paddingLeft:'10px',alignItems:'center'}}>
            <span>Purpose and Other Details</span>
            </div>
            <div style={{padding:'10px'}}>
            <div style={{marginBottom:'15px'}}>
            <TextAreaField label={"Purpose"} labelWidth={"30%"} inputWidth={"70%"} rows={5}  required  />
        </div>
            <div style={{marginBottom:'15px'}}>
            <TextAreaField label={"Other Details"} labelWidth={"30%"} inputWidth={"70%"} rows={5} />
        </div>
        </div>
            </div>
            </div>
        </div>
        {/* <br/>
        <div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px"}}>
           <div style={{backgroundColor:"lightblue",borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'25px'}}>
            <p>Purpose and Other Details</p>
            </div>
            <div style={{padding:'10px'}}>
        <div style={{marginBottom:'15px'}}>
        <TextAreaField label={"Purpose"} labelWidth={"30%"} inputWidth={"50%"} required  />
        </div>
        <div style={{marginBottom:'15px'}}>
        <TextAreaField label={"Other Details"} labelWidth={"30%"} inputWidth={"30%"}  />
        </div>
        </div>
        </div>
        </div> */}
      
    </div>
  )
}

export default RequestDetails