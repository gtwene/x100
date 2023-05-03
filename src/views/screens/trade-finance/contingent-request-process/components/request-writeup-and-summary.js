import React, {useState} from 'react'
import DataTable from '../../../../../components/others/Datatable/DataTable';
import TextAreaField from '../../../../../components/others/Fields/TextArea'

function RequestWriteup() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:"#ffffff"}}>
        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Request Notice</span>
                        </div>
            <div style={{padding:'10px'}}>
            <div style={{width:'100%'}}>
            <TextAreaField rows={10} cols={220}  />
            </div>
            </div>
        </div>
        <br />
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:"#ffffff"}}>
        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                        <span>Contingent Product Summary</span>
                        </div>
            <div style={{padding:'10px'}}>
            <div>
            <DataTable title={"Existing Contingent Facility"} rowsPerPage={'5'} columns={["Facility Type","Account Number","Account Number","Currency","Contingent Amount","Guarantee Amount","Security","Expiry Date"]} />

            </div>
            </div>
        </div>
    </div>
  )
}

export default RequestWriteup