import React from 'react'
import InputField from '../../../../../components/others/Fields/InputField';
import ButtonType from '../../../../../components/others/Button/ButtonType';
import ListOfValue from '../../../../../components/others/Fields/ListOfValue';
import SelectField from '../../../../../components/others/Fields/SelectField';

function Acknowledgement() {
  return (
    <div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.54}}>
                        <div style={{padding:'10px'}}>
        <div style={{display:'flex',flex:1}}>
           <div style={{flex:0.5,fontSize:'85%'}}>
            <SelectField label={"Type of Transaction"} labelWidth={'30%'} inputWidth={'50%'} />
           </div>
           <div style={{flex:0.5}}>
            <InputField label={"Date of Message Acknowledgement.30"} labelWidth={'40%'} inputWidth={'40%'} type={'date'} />
           </div>
        </div>
        <div style={{display:'flex',flex:1,margin:'15px 0'}}>
           <div style={{flex:0.5}}>
            <InputField label={"Sender's Reference 20"} labelWidth={'30%'} inputWidth={'40%'} required={true} disabled={true} />
           </div>
           <div style={{flex:0.5}}>
            <InputField label={"Receiver's Reference 21"} labelWidth={'40%'} inputWidth={'40%'} required={true} disabled={true} />
           </div>
        </div>
        <div style={{display:'flex',flex:1,margin:'15px 0'}}>
           <div style={{flex:0.5}}>
            <ListOfValue label={"Sending Institution"} labelWidth={'30%'} inputWidth={'60%'} required={true} disabled={true} />
           </div>
           <div style={{flex:0.5}}>
            <ListOfValue label={"Receiving Institution"} labelWidth={'40%'} inputWidth={'55%'} required={true} disabled={true} />
           </div>
        </div>
        <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
        <div style={{display:'flex',flex:1}}>
           <div style={{flex:0.5, fontSize:'85%'}}>
            <SelectField label={"Charges Code 71B"} labelWidth={'30%'} inputWidth={'40%'} required={true} disabled={true} />
           </div>
           <div style={{flex:0.5}}>
            <div style={{display:'flex',alignItems:'center'}}>
                <div style={{flex:0.6 ,fontSize:'85%'}}>
            <SelectField label={"Charges 71B"} labelWidth={'67%'} inputWidth={'30%'} required={true} disabled={true} />
                </div>
                <div style={{flex:0.4}}>
            <InputField inputWidth={"80%"} />
                </div>
            </div>
           </div>
        </div>
        <div style={{display:"flex",margin:'15px 0',alignItems:'center'}}>
            
        <div style={{flex:0.25 ,fontSize:'85%'}}>
            <SelectField label={"Amount of Charges 32a"} labelWidth={'60%'} inputWidth={'35%'} />
                </div>
                <div style={{flex:0.3}}>
            <InputField inputWidth={"40%"} />
                </div>
           </div>
           <div style={{display:'flex',flex:1,margin:'15px 0'}}>
           <div style={{flex:0.5}}>
            <InputField label={"Charges Information 71B"} labelWidth={'30%'} inputWidth={'60%'}  />
           </div>
           <div style={{flex:0.5}}>
            <InputField label={"Sender to Rec. Information 72"} labelWidth={'40%'} inputWidth={'55%'} />
           </div>
        </div>
           <div style={{display:'flex',flex:1,margin:'15px 0'}}>
           <div style={{flex:0.5}}>
            <InputField label={"Charges Information2 71B"} labelWidth={'30%'} inputWidth={'60%'}  />
           </div>
           <div style={{flex:0.5}}>
            <InputField label={"Sender to Rec. Information2 72"} labelWidth={'40%'} inputWidth={'55%'} />
           </div>
        </div>
           <div style={{display:'flex',flex:1,margin:'15px 0'}}>
           <div style={{flex:0.5}}>
            <InputField label={"Charges Information3 71B"} labelWidth={'30%'} inputWidth={'60%'}  />
           </div>
           <div style={{flex:0.5}}>
            <InputField label={"Sender to Rec. Information3 72"} labelWidth={'40%'} inputWidth={'55%'} />
           </div>
        </div>
           <div style={{display:'flex',flex:1,margin:'15px 0'}}>
           <div style={{flex:0.5}}>
            <InputField label={"Charges Information3 71B"} labelWidth={'30%'} inputWidth={'60%'}  />
           </div>
           <div style={{flex:0.5}}>
            <InputField label={"Sender to Rec. Information3 72"} labelWidth={'40%'} inputWidth={'55%'} />
           </div>
        </div>
        <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
        <div style={{display:'flex',flex:1}}>
           <div style={{flex:0.5}}>
            <InputField label={"Account Clearing Code 57a"} labelWidth={'30%'} inputWidth={'60%'}  />
           </div>
           <div style={{flex:0.5}}>
            <ListOfValue label={"Account with Bank 57a"} labelWidth={'40%'} inputWidth={'55%'} />
           </div>
        </div>
        <div style={{display:'flex',flex:1,margin:'15px 0'}}>
           <div style={{flex:0.5}}>
            <InputField label={"Account with Inst. A/C5"} labelWidth={'30%'} inputWidth={'60%'}  />
           </div>
           <div style={{flex:0.5}}>
            <InputField label={"Account with Inst. Address 57D"} labelWidth={'40%'} inputWidth={'55%'} />
           </div>
        </div>
        <div style={{display:'flex',flex:1,margin:'15px 0'}}>
           <div style={{flex:0.5}}>
            <InputField label={"Address 2. 57D"} labelWidth={'30%'} inputWidth={'60%'}  />
           </div>
           <div style={{flex:0.5}}>
            <InputField label={"Address 3. 57D"} labelWidth={'40%'} inputWidth={'55%'} />
           </div>
        </div>
        <div style={{margin:'15px 0'}}>
            <InputField label={"Address 4. 57D"} labelWidth={'15%'} inputWidth={'30%'} />
           </div>

                        </div>
                        </div>
    </div>
  )
}

export default Acknowledgement