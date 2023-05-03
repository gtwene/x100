import React, {useState} from 'react'
import ButtonComponent from '../../../../../components/others/Button/ButtonComponent';
import InputField from '../../../../../components/others/Fields/InputField';

function Charges() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div>
        <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
         <div style={{display:'flex',margin:'15px 0',alignItems:"center"}}>
                        <div style={{flex:0.3}}>
                                <InputField label={"Total Charges"} labelWidth={"40%"} inputWidth={"55%"} disabled={true} />
                        </div>
                        <div style={{flex:0.2}}>
                               <ButtonComponent
                                label={"View Fees and Commission"}
                                background={
                                `url(` +
                                window.location.origin +
                                `/assets/images/headerBackground/` +
                                getTheme.theme.headerImage +
                                `)`
                                 }
                                 buttonHeight={"30px"}
                                 buttonWidth={"200px"}
                                 buttonColor={"white"}
                />
                        </div>
                        </div>
        <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
        
    </div>
  )
}

export default Charges