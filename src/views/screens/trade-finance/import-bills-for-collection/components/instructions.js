import React, {useState} from 'react'
import ButtonComponent from '../../../../../components/others/Button/ButtonComponent';
import ButtonType from '../../../../../components/others/Button/ButtonType';
import InputField from '../../../../../components/others/Fields/InputField';
import SelectField from '../../../../../components/others/Fields/SelectField';
import TextAreaField from '../../../../../components/others/Fields/TextArea';

function Instruction() {
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
                        <span>Charges</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div style={{display:'flex',alignItems:'center'}}>
                        <div style={{flex:0.5}}>
                        <ButtonType type={"checkbox"} label={"Our Bank Charges are for the account of"} id={"bank charges"} labelWidth={'63%'} />
                        </div>
                        <div style={{flex:0.5}}>
                        <SelectField inputWidth={"55%"}  />
                        </div>
                        </div>
                        <div style={{display:'flex',alignItems:'center',margin:'15px 0'}}>
                        <div style={{flex:0.5}}>
                        <ButtonType type={"checkbox"} label={"If Charges/Interest are refunded the collecting bank can either"} id={"interest charges"} labelWidth={'63%'}   />
                        </div>
                        <div style={{flex:0.5}}>
                        <SelectField inputWidth={"55%"} />
                        </div>
                        </div>
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
                        <span>Interest Instructions</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div style={{display:'flex',alignItems:'center',margin:'15px 0'}}>
                        <div style={{flex:0.03}}></div>
                        <div style={{flex:0.17}}>
                        <ButtonType type={"checkbox"} label={"Collect Interest at"} id={"collect interest"} labelWidth={'63%'}   />
                        </div>
                        <div style={{flex:0.1}}>
                        <InputField inputWidth={"90%"} />
                        </div>
                        <div style={{flex:0.1}}>
                        <span style={{fontSize:'85%'}}>% from</span>
                        </div>
                        <div style={{flex:0.3}}>
                        <InputField inputWidth={"80%"} type={'date'}  />
                        </div>
                        <div style={{flex:0.15}}>
                        <span style={{fontSize:'85%'}}>Until date of payment</span>
                        </div>
                        <div style={{flex:0.05}}></div>
                        </div>
                        <div style={{display:'flex',alignItems:'center',margin:'15px 0'}}>
                        <div style={{flex:0.03}}></div>
                        <div style={{flex:0.17}}>
                        <ButtonType type={"checkbox"} label={"Collect Interest at"} id={"collect interest2"} labelWidth={'63%'}   />
                        </div>
                        <div style={{flex:0.1}}>
                        <InputField inputWidth={"90%"} />
                        </div>
                        <div style={{flex:0.7}}>
                        <span style={{fontSize:'85%'}}>from date of first presentation until date of acceptance and from due date until date of payment</span>
                        </div>
                        {/* <div style={{flex:0.05}}></div> */}
                        </div>
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
                        <span>If Documents are Dishonest</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <div style={{flex:0.15}}></div>
                        <div style={{flex:0.35}}>
                        <ButtonType type={"checkbox"} label={"Protest for Non Payment"} id={"non-payment"} labelWidth={'63%'} name={'dishonest documents'}   />
                        </div>
                        <div style={{flex:0.35}}>
                        <ButtonType type={"checkbox"} label={"Protest of Non Acceptance"} id={"non-acceptance"} labelWidth={'63%'} name={"dishonest documents"}   />
                        </div>
                        <div style={{flex:0.15}}></div>
                        </div>
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
                        <span>Other Instructions</span>
                        </div>
                        <div style={{padding:'10px'}}>
                            <div>
                                <TextAreaField cols={150} rows={3} />
                            </div>
                            <div style={{margin:'10px 0'}}>
                        <ButtonType type={"checkbox"} label={"This collection and any relevant advice are subject to ICC Uniform Rules for collection (1995 Revision) URC 522"} id={"non-acceptance"} labelWidth={'63%'} name={"dishonest documents"}   />
                        </div>

                        </div>
                        </div>
                        <div>
                        <ButtonComponent
                                label={"Attached Documents"}
                                background={
                                `url(` +
                                window.location.origin +
                                `/assets/images/headerBackground/` +
                                getTheme.theme.headerImage +
                                `)`
                                 }
                                 buttonHeight={"40px"}
                                 buttonWidth={"185px"}
                                 buttonColor={"white"}
                />
                        </div>
                        
    </div>
  )
}

export default Instruction