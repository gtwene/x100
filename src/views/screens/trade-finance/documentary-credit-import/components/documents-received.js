import React, {useState} from 'react'
import ButtonComponent from '../../../../../components/others/Button/ButtonComponent';
import DataTable from '../../../../../components/others/Datatable/DataTable';
import InputField from '../../../../../components/others/Fields/InputField';

function DocumentsReceived() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div>
            <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
            <div style={{display:'flex',flex:1,width:'80%',margin:'0 auto'}}>
                <div style={{flex:0.6}}>
                    <div style={{display:'flex'}}>
                    <InputField label={"Drawing Amount"} labelWidth={'45%'} inputWidth={'50%'} />
                    <InputField inputWidth={'20%'} disabled={true} />
                    </div>
                </div>
                <div style={{flex:0.4}}>
                <InputField label={"Maturity Date"} labelWidth={'35%'} inputWidth={'45%'} required={true} />
                </div>
            </div>
            <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
            <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:'#ffffff',flex:0.54}}>
            <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Documents</span>
                        </div>
                        <div style={{padding:'10px'}}>
                        <DataTable
                        columns={["Document ID","Document Description","Document Number","Original","Copy Number","Original","Copy Number","Received Date","Action"]}
                        />
                        <div style={{marginTop:'10px'}}>
                        <ButtonComponent
                  label={"Attached Other Documents"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"40px"}
                  buttonWidth={"200px"}
                  buttonColor={"white"}
                />
                        </div>
                        </div>
                        </div>
            
    </div>
  )
}

export default DocumentsReceived