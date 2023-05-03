import React, {useState} from 'react'
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import InputField from '../../../../../components/others/Fields/InputField';
import ButtonType from '../../../../../components/others/Button/ButtonType';
import ListOfValue from '../../../../../components/others/Fields/ListOfValue';

function BondGuaranteeParties() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div>
        <div style={{display:'flex',flex:1,justifyContent:'space-between'}}>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.54}}>
            <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>General</span>
                        </div>
                        <div style={{padding:'10px'}}>
                            <div style={{display:'flex',flex:1}}>
                                <div style={{flex:0.3}}>
                         <ButtonType name={"top"} id={"contingentTicket"} type={"radio"} label={"Use Contingent Ticket"} labelWidth={'80%'} />
                                </div>
                                <div style={{flex:0.2}}>
                                <ButtonType name={"top"} id={"tradeLimit"} type={"radio"} label={"Trade Limit"} labelWidth={'80%'} />
                                </div>
                                <div style={{flex:0.5}}>
                         <InputField label={"Contingent Ticket Number"} labelWidth={"54%"} inputWidth={"45%"} />
                                </div>
                            </div>
                            <hr style={{margin:'10px 0'}} />
                            <div style={{margin:'15px 0'}}>
                                <ListOfValue label={"Guarantee Type"} labelWidth={"20%"} inputWidth={"50%"} required={true} />
                            </div>
                            <div style={{margin:'15px 0'}}>
                                <ListOfValue label={"Customer ID"} labelWidth={"20%"} inputWidth={"70%"} required={true} />
                            </div>
                            <div style={{margin:'15px 0'}}>
                                <InputField type={'date'}  label={'Date of Application'} labelWidth={'20%'} inputWidth={"50%"} required={true} />
                            </div>
                            <div style={{margin:'15px 0',display:'flex',flex:1}}>
                            <div style={{flex:0.55}}>
                                <ListOfValue label={"Debit Account"} labelWidth={"36%"} inputWidth={"60%"} required={true} />
                            </div>
                            <div style={{flex:0.45}}>
                                <InputField label={'Debit Account Currency'} labelWidth={'55%'} inputWidth={"45%"} disabled={true} />
                            </div>
                            </div>
                            <div style={{margin:'15px 0'}}>
                                <ListOfValue label={'Currency/Amount'}  labelWidth={"20%"} inputWidth={"50%"} required={true} />
                            </div>
                        </div>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.45}}>
            <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Banker</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div>
                            <ListOfValue label={"Swift"} labelWidth={'20%'} inputWidth={'50%'}  />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField label={"Name"} labelWidth={'20%'} inputWidth={'70%'}  />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField label={"Contact Details"} labelWidth={'20%'} inputWidth={'70%'}  />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField label={"Address 2"} labelWidth={'20%'} inputWidth={'70%'} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField label={"Address 3"} labelWidth={'20%'} inputWidth={'70%'} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <ListOfValue label={"Country"} labelWidth={'20%'} inputWidth={'70%'} />
                        </div>
                        </div>
        </div>
        </div>
        <br />
        <div style={{display:'flex',flex:1,justifyContent:'space-between'}}>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.54}}>
            <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Applicant</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div>
                            <InputField label={"Name"} labelWidth={'20%'} inputWidth={'70%'} required />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField label={"Address 1"} labelWidth={'20%'} inputWidth={'70%'} required />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField label={"Address 2"} labelWidth={'20%'} inputWidth={'70%'} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField label={"Address 3"} labelWidth={'20%'} inputWidth={'70%'} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <ListOfValue label={"Country"} labelWidth={'20%'} inputWidth={'70%'} />
                        </div>
                        </div>
        </div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.45}}>
            <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Beneficiary</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div>
                            <InputField label={"Name"} labelWidth={'20%'} inputWidth={'70%'} required />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField label={"Address 1"} labelWidth={'20%'} inputWidth={'70%'} required />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField label={"Address 2"} labelWidth={'20%'} inputWidth={'70%'} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField label={"Address 3"} labelWidth={'20%'} inputWidth={'70%'} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <ListOfValue label={"Country"} labelWidth={'20%'} inputWidth={'70%'} />
                        </div> 
                        </div>
        </div>
        </div>
    </div>
  )
}

export default BondGuaranteeParties