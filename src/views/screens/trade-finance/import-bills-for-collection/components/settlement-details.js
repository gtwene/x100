import React, { useState } from 'react'
import InputField from '../../../../../components/others/Fields/InputField';
import ListOfValue from '../../../../../components/others/Fields/ListOfValue';

function SettlementDetails() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',width:'70%',margin:'0 auto'}}>
                        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Settlement Instruction</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <ListOfValue label={"Customer Account Number"} labelWidth={'25%'} inputWidth={"55%"} required={true} />
                        </div>
                        </div>
                        <br />
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',width:'70%',margin:'0 auto'}}>
                        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Acknowledgement (410)</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div>
                                <InputField label={'Related Reference 21'} labelWidth={'25%'} inputWidth={"30%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Sender to Receiver Info 1'} labelWidth={'25%'} inputWidth={"60%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Sender to Receiver 2'} labelWidth={'25%'} inputWidth={"60%"} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Sender to Receiver 3'} labelWidth={'25%'} inputWidth={"60%"} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Sender to Receiver 4'} labelWidth={'25%'} inputWidth={"60%"} />
                        </div>
                        </div>
                        </div>
    </div>
  )
}

export default SettlementDetails