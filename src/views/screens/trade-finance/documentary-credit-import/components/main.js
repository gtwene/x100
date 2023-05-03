import React,{useState} from 'react'
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import InputField from '../../../../../components/others/Fields/InputField';
import ButtonType from '../../../../../components/others/Button/ButtonType';
import ListOfValue from '../../../../../components/others/Fields/ListOfValue';
import SelectField from '../../../../../components/others/Fields/SelectField';
function Main() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div>
         <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.54}}>
            <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Terms</span>
                        </div>
                        <div style={{padding:'10px'}}>
                            <div style={{display:"flex"}}>
                                <div style={{flex:0.6}}>
                        <div style={{fontSize:'85%'}} >
                                <SelectField label={'Product Type'} labelWidth={'20%'} inputWidth={"70%"}  />
                        </div>
                        <div style={{margin:'15px 0',display:'flex',flex:1}}>
                            <div style={{flex:0.5}}>
                                <InputField label={'Currency'} labelWidth={'40%'} inputWidth={"40%"} disabled={true}  />
                            </div>
                            <div style={{flex:0.4}}>
                                <InputField label={'LC Language'} labelWidth={'50%'} inputWidth={"30%"} disabled={true}  />
                            </div>
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'LC Amount'} labelWidth={'20%'} inputWidth={"30%"} disabled={true} />
                            </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'O/S LC Amount'} labelWidth={'20%'} inputWidth={"30%"} disabled={true} />
                            </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Effective Date'} labelWidth={'20%'} inputWidth={"30%"} disabled={true} />
                            </div>
                            <div style={{display:'flex',width:'80%',justifyContent:'space-between'}}>
                                <ButtonType type={"checkbox"} label={"Transferable"} id={"Transferable"} />
                                <ButtonType type={"checkbox"} label={"Confirm"} id={"Confirm"} />
                                <ButtonType type={"checkbox"} label={"Auto Closure"} id={"Auto Closure"} />
                                <ButtonType type={"checkbox"} label={"Allow Prepayment"} id={"Allow Prepayment"} />
                            </div>
                        </div>


                                <div style={{flex:0.4}}>
                        <div >
                                <InputField label={'Issue Date'} labelWidth={'30%'} inputWidth={"45%"} disabled={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Expiry Date'} labelWidth={'30%'} inputWidth={"45%"} disabled={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Latest Shipment Date '} labelWidth={'30%'} inputWidth={"45%"} disabled={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Tenor (In Days)'} labelWidth={'30%'} inputWidth={"45%"} disabled={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Closure Date'} labelWidth={'30%'} inputWidth={"45%"} disabled={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Expiry Place'} labelWidth={'30%'} inputWidth={"60%"} disabled={true} />
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <br />
                        <div style={{display:'flex',flex:1}}>
                            <div style={{flex:0.49}}>
                        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.54}}>
                        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Tolerance</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div style={{fontSize:'85%'}} >
                                <SelectField label={'About Clause'} labelWidth={'25%'} inputWidth={"40%"}  />
                        </div>
                        <div style={{margin:'15px 0',display:'flex',flex:1}}>
                            <div style={{flex:0.5}}>
                                <InputField label={'Positive %'} labelWidth={'50%'} inputWidth={"40%"} disabled={true}  />
                            </div>
                            <div style={{flex:0.5}}>
                                <InputField label={'Negative %'} labelWidth={'30%'} inputWidth={"40%"} disabled={true}  />
                            </div>
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Max LC Amount'} labelWidth={'25%'} inputWidth={"45%"} disabled={true} />
                        </div>
                        </div>
                        </div>
                        </div>
                        <div style={{flex:0.01}}></div>
                            <div style={{flex:0.5}}>
                        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.54}}>
                        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Credit</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        {/* <div style={{fontSize:'85%'}} >
                                <SelectField label={'Type'} labelWidth={'25%'} inputWidth={"40%"}  />
                        </div>
                        <div style={{fontSize:'85%',margin:'15px 0'}} >
                                <SelectField label={'Mode'} labelWidth={'25%'} inputWidth={"40%"}  />
                        </div> */}
                        <div style={{display:'flex',flex:1,fontSize:'85%'}}>
                            <div style={{flex:0.5}}>
                            <SelectField label={'Type'} labelWidth={'40%'} inputWidth={"50%"}  />
                            </div>
                            <div style={{flex:0.5}}>
                            <SelectField label={'Mode'} labelWidth={'30%'} inputWidth={"60%"}  />
                            </div>
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Available With'} labelWidth={'20%'} inputWidth={"50%"} disabled={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Details'} labelWidth={'20%'} inputWidth={"75%"} disabled={true} />
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <br />
                        <div style={{display:'flex',flex:1}}>
                            {/* <div style={{flex:0.49}}> */}
                        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.49}}>
                        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Resolving Details</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div style={{display:'flex',flex:1}}>
                            <div style={{flex:0.7,fontSize:'85%'}}>
                            <SelectField label={'Resolves In'} labelWidth={'43%'} inputWidth={"50%"}  />
                            </div>
                            <div style={{flex:0.3}}>
                            <ButtonType type={"checkbox"} label={"Automatic Reinstatement"} id={"automatic reinstatement"} />
                            </div>
                        </div>
                        <div style={{display:'flex',flex:1, margin:'15px 0'}}>
                            <div style={{flex:0.7,fontSize:'85%'}}>
                            <SelectField label={'Unit'} labelWidth={'43%'} inputWidth={"50%"}  />
                            </div>
                            <div style={{flex:0.3}}>
                            <ButtonType type={"checkbox"} label={"Cumulative"} id={"cumulative"} />
                            </div>
                        </div>
                        
                            <div style={{ margin:'15px 0'}}>
                            <InputField label={'Frequency'} labelWidth={'30%'} inputWidth={"25%"} disabled={true} />
                            </div>
                            <div style={{ margin:'15px 0'}}>
                            <InputField label={'Next Reinstatement Date'} labelWidth={'30%'} inputWidth={"30%"} disabled={true} />
                            </div>
                        </div>
                        </div>
                        {/* </div> */}
                        <div style={{flex:0.01}}></div>
                            <div style={{flex:0.5}}>
                        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff'}}>
                        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Customer</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div style={{display:'flex',flex:1}}>
                            <div style={{flex:0.7}}>
                                <InputField label={'Customer Number'} labelWidth={'30%'} inputWidth={"50%"} disabled={true}  />
                            </div>
                            <div style={{flex:0.3}}>
                                <InputField label={'Party Type'} labelWidth={'40%'} inputWidth={"41%"} disabled={true}  />
                            </div>
                        </div>
                        <div style={{margin:'15px 0'}}>
                        <InputField label={'Name'} labelWidth={'21%'} inputWidth={"74%"} disabled={true}  />
                        </div>
                        <div style={{display:'flex',flex:1}}>
                            <div style={{flex:0.5}}>
                                <InputField label={'Customer Reference'} labelWidth={'42%'} inputWidth={"50%"} disabled={true}  />
                            </div>
                            <div style={{flex:0.5}}>
                                <InputField label={'License Expiry Date'} labelWidth={'40%'} inputWidth={"50%"} disabled={true}  />
                            </div>
                        </div>
                        <div style={{margin:'15px 0'}}>
                        <InputField label={'Dated'} labelWidth={'21%'} inputWidth={"30%"} disabled={true}  />
                        </div>
                        <div style={{display:'flex',flex:1}}>
                            <div style={{flex:0.58}}>
                                <InputField label={'Direct Debit A/C'} labelWidth={'37%'} inputWidth={"50%"} disabled={true}  />
                            </div>
                            <div style={{flex:0.42}}>
                                <InputField label={'Debit Account Currency'} labelWidth={'60%'} inputWidth={"29%"} disabled={true}  />
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        <br />
                        <div style={{display:"flex"}}>
                        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.49}}>
                        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Inco Term</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div style={{display:'flex',flex:1}}>
                            <div style={{flex:0.4}}>
                                <InputField label={'Inco Term'} labelWidth={'30%'} inputWidth={"50%"} disabled={true}  />
                            </div>
                            <div style={{flex:0.6}}>
                                <InputField label={'Memo'} labelWidth={'20%'} inputWidth={"60%"} disabled={true}  />
                            </div>
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <InputField inputWidth={"90%"} disabled={true} />
                        </div>
                        </div>
                        </div>
                        </div>
        {/* <hr style={{margin:'10px 0'}} /> */}
    </div>
  )
}

export default Main