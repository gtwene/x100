import React , {useState} from 'react'
import InputField from '../../../../../components/others/Fields/InputField';
import ListOfValue from '../../../../../components/others/Fields/ListOfValue';
import TextAreaField from '../../../../../components/others/Fields/TextArea';

function BillDetails() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.49}}>
                        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Bill Details</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <div style={{display:'flex',flex:1}}>
                            <div style={{flex:0.5}}>
                            <ListOfValue label={'Bill Currency'} labelWidth={'32%'} inputWidth={"50%"} required={true} />
                            </div>
                            <div style={{flex:0.5}}>
                            <div style={{display:'flex',alignItems:'center'}}>
                            <div style={{flex:0.7}}>
                            <InputField label={"Bill Amount"} labelWidth={'46%'} inputWidth={'52%'} required={true} />
                            </div>
                            <div style={{flex:0.3}}>
                            <InputField inputWidth={"50%"} disabled={true} />
                            </div>
                           </div>
                            </div>
                        </div>
                        <div style={{display:'flex',flex:1,margin:'15px 0'}}>
                            <div style={{flex:0.5}}>
                            <InputField label={'Effective Date'} labelWidth={'32%'} inputWidth={"30%"} required={true} />
                            </div>
                            <div style={{flex:0.5}}>
                            <InputField label={'Last Shipment Date'} labelWidth={'32%'} inputWidth={"30%"} required={true} />
                            </div>
                        </div>
                        <div style={{display:'flex',flex:1,margin:'15px 0'}}>
                            <div style={{flex:0.5}}>
                            <InputField label={'Tenor'} labelWidth={'32%'} inputWidth={"30%"} required={true} />
                            </div>
                            <div style={{flex:0.5}}>
                            <InputField label={'Maturity Date'} labelWidth={'32%'} inputWidth={"30%"} required={true} />
                            </div>
                        </div>
                        <div style={{display:'flex',flex:1,margin:'15px 0'}}>
                            <div style={{flex:0.5}}>
                            <InputField label={'Vessel Name / Air Cargo No'} labelWidth={'32%'} inputWidth={"50%"}  />
                            </div>
                            <div style={{flex:0.5}}>
                            <InputField label={'Port Loading'} labelWidth={'32%'} inputWidth={"60%"}  />
                            </div>
                        </div>
                        <div style={{display:'flex',flex:1,margin:'15px 0'}}>
                            <div style={{flex:0.5}}>
                            <InputField label={'Port Discharge'} labelWidth={'32%'} inputWidth={"50%"}  />
                            </div>
                            <div style={{flex:0.5}}>
                            <ListOfValue label={'Description Goods'} labelWidth={'32%'} inputWidth={"30%"}  />
                            </div>
                        </div>
                        <div style={{margin:'15px 0'}}>
                            <TextAreaField label={'Description Goods Details'} labelWidth={'16%'} rows={3} cols={46}  />
                        </div>
                            </div>
                        </div>
    </div>
  )
}

export default BillDetails