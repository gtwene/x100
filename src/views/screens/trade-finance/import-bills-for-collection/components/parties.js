import React, { useState } from 'react'
import InputField from '../../../../../components/others/Fields/InputField';
import ListOfValue from '../../../../../components/others/Fields/ListOfValue';
import SelectField from '../../../../../components/others/Fields/SelectField';
import ButtonType from '../../../../../components/others/Button/ButtonType';
function Parties() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div>
                        <div style={{display:'flex',flex:1}}>
                            {/* <div style={{flex:0.49}}> */}
                        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.49}}>
                        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Customer Details</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div>
                                <ListOfValue label={'Customer Number'} labelWidth={'32%'} inputWidth={"60%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Customer Reference Number'} labelWidth={'32%'} inputWidth={"40%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0',fontSize:'85%'}}>
                                <SelectField label={'Product Type'} labelWidth={'32%'} inputWidth={"60%"} required={true} />
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
                        <span>Drawer Bank Details (Remiting Bank)</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div>
                                <ListOfValue label={'Swift'} labelWidth={'25%'} inputWidth={"50%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Bank Name'} labelWidth={'25%'} inputWidth={"60%"} disabled={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Bank Address 1'} labelWidth={'25%'} inputWidth={"60%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Bank Address 2'} labelWidth={'25%'} inputWidth={"60%"}  />
                        </div>
                        <div style={{display:'flex',alignItems:'center'}}>
                        <div style={{flex:0.4}}>
                        <InputField label={"Bank Country"} labelWidth={'63%'} inputWidth={'32%'} disabled={true} />
                        </div>
                        <div style={{flex:0.6}}>
                        <InputField inputWidth={"95%"} disabled={true} />
                        </div>
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
                        <span>Drawer</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div>
                                <InputField label={'Drawer Name'} labelWidth={'32%'} inputWidth={"60%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Drawer Address 1'} labelWidth={'32%'} inputWidth={"40%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Drawer Address 2'} labelWidth={'32%'} inputWidth={"40%"} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <ListOfValue label={'Drawer Country'} labelWidth={'32%'} inputWidth={"60%"} required={true} />
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
                        <span>Drawee</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div>
                                <InputField label={'Drawee Name'} labelWidth={'32%'} inputWidth={"60%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Drawee Address 1'} labelWidth={'32%'} inputWidth={"40%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Drawee Address 2'} labelWidth={'32%'} inputWidth={"40%"} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <ListOfValue label={'Drawee Country'} labelWidth={'32%'} inputWidth={"60%"} required={true} />
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
    </div>
  )
}

export default Parties