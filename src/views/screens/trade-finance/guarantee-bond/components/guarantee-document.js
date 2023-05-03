import React, {useState} from 'react'
import ButtonComponent from '../../../../../components/others/Button/ButtonComponent'
import DataTable from '../../../../../components/others/Datatable/DataTable'

function GuaranteeDocument() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div>
        <div>
        <DataTable title={"Bonds / Guarantees Application Document"} 
        columns={["Document ID", "Document Description", "Document Number"]}
        />
        </div>
        <br />
        <div style={{width:'80%',marginRight:'auto',marginLeft:'auto'}}>
        <DataTable
        // title={"Bank / Guarantee Document Details(Fields 72C)(MT760)"} 
        columns={["Bank / Guarantee Document Details(Fields 72C)(MT760)"]}
        // data={["kkkkffffffffffffffffffffffffffffff"]}
        />
        <div style={{marginTop:'10px',display:'flex'}}>
            <div style={{flex:0.18}}>
        <ButtonComponent
                                label={"Attach Other Documents"}
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
            <div style={{flex:0.15}}>
        <ButtonComponent
                                label={"Scan Document"}
                                background={
                                `url(` +
                                window.location.origin +
                                `/assets/images/headerBackground/` +
                                getTheme.theme.headerImage +
                                `)`
                                 }
                                 buttonHeight={"40px"}
                                 buttonWidth={"140px"}
                                 buttonColor={"white"}
                />
            </div>
 
        </div>
        </div>
    </div>
  )
}

export default GuaranteeDocument