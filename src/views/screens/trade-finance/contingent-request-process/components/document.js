import React, {useState} from 'react'
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import DataTable from '../../../../../components/others/Datatable/DataTable';

function Document() {
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
                        <span>Contingent Product Request Document</span>
                        </div>
            <div style={{padding:'10px'}}>
            <div>
            <DataTable title={"Contingent Product Request Document "} rowsPerPage={'5'} columns={["Serial Number","Description","Document Number","Document Date","Document Expiry Date","Mandatory","Received Date"]}/>
            <br />
            <div style={{display:'flex'}}>
            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button
                className="btn btn-secondary"
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`,
                }}
              >
                Comments
              </button>
            </span>
            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button
                className="btn btn-secondary"
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`,
                }}
              >
                Other Documents
              </button>
            </span>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Document