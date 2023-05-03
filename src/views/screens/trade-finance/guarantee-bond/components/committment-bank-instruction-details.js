import React, {useState} from 'react'
import InputField from '../../../../../components/others/Fields/InputField';
import ButtonType from '../../../../../components/others/Button/ButtonType';
import ListOfValue from '../../../../../components/others/Fields/ListOfValue';
import Label from '../../../../../components/others/Label/Label';
import TextAreaField from '../../../../../components/others/Fields/TextArea';
import SelectField from '../../../../../components/others/Fields/SelectField';
import ButtonComponent from '../../../../../components/others/Button/ButtonComponent';

function CommitmentDetails() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div>
        <div style={{display:'flex'}}>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.49}}>
        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Commitment Details</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div>
                                <InputField label={'Applicant Contract Reference Number'} labelWidth={'40%'} inputWidth={"50%"}  />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Beneficiary Contract Reference Number'} labelWidth={'40%'} inputWidth={"50%"}  />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Amount Not Exceeding'} labelWidth={'40%'} inputWidth={"50%"}  />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Effective Date'} type={'date'} labelWidth={'40%'} inputWidth={"50%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Tenor (In Days)'} labelWidth={'40%'} inputWidth={"50%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Expiry Date'} labelWidth={'40%'} inputWidth={"50%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Closure Date'} labelWidth={'40%'} inputWidth={"50%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Place of Expiry'} labelWidth={'40%'} inputWidth={"50%"}  />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Contract / Bid Date'} labelWidth={'40%'} inputWidth={"50%"}  />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Seal Date'} labelWidth={'40%'} inputWidth={"50%"}  />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Bid Validity Time (In Days)'} labelWidth={'40%'} inputWidth={"50%"}  />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <Label label={"Contract Narrative / Name and / or Goods Description"} fontSize={'85%'} required={true} />
                                <TextAreaField cols={100} />
                                {/* <InputField label={'Bid Validity Time (In Days)'} labelWidth={'40%'} inputWidth={"50%"}  /> */}
                        </div>
                        </div>
        </div>
        <div style={{flex:0.01}}></div>
        <div style={{flex:0.5}}>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff'}}>
        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Collateral</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div>
                                <ListOfValue label={"Collateral Type"} labelWidth={"20%"} inputWidth={"70%"} required={true} />
                        </div>
                        <div style={{display:'flex',margin:'15px 0',alignItems:"center"}}>
                        <div style={{flex:0.6}}>
                                <ListOfValue label={"Currency"} labelWidth={"33.5%"} inputWidth={"60%"} />
                        </div>
                        <div style={{flex:0.4}}>
                                <ButtonType type={"checkbox"} label={'Manual Reversal of Cash Margin'} id={"Manual Reverse"} />
                        </div>
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Percent'} labelWidth={'20%'} inputWidth={"25%"} />
                        </div>
                        <div style={{display:'flex',margin:'15px 0',alignItems:"center"}}>
                        <div style={{flex:0.5}}>
                                <InputField label={"Exchange Rate"} labelWidth={"40%"} inputWidth={"55%"}  />
                        </div>
                        <div style={{flex:0.4}}>
                               <ButtonComponent
                                label={"Pick Rate"}
                                background={
                                `url(` +
                                window.location.origin +
                                `/assets/images/headerBackground/` +
                                getTheme.theme.headerImage +
                                `)`
                                 }
                                 buttonHeight={"30px"}
                                 buttonWidth={"100px"}
                                 buttonColor={"white"}
                />
                        </div>
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Collateral Amount'} labelWidth={'20%'} inputWidth={"30%"} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Description'} labelWidth={'20%'} inputWidth={"70%"} required={true} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Other Collaterals'} labelWidth={'20%'} inputWidth={"70%"} />
                        </div>
                        </div>
        </div>
        <br />
        <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
                        <div style={{margin:'15px 0',fontSize:'85%'}}>
                                <SelectField label={'Applicable Rules'} labelWidth={'20%'} inputWidth={"50%"} />
                        </div>
                        <div style={{margin:'15px 0'}}>
                                <InputField label={'Rule Narrative'} labelWidth={'20%'} inputWidth={"50%"} />
                        </div>
        <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff'}}>
        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Bank Instructions</span>
                        </div>
                        <div style={{padding:'10px'}}>
                            <TextAreaField cols={101} rows={3} />
                        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default CommitmentDetails