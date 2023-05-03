import React, {useState} from 'react'
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import InputField from '../../../../components/others/Fields/InputField';
import ListOfValue from '../../../../components/others/Fields/ListOfValue'
import DataTable from "../../../../components/others/Datatable/DataTable";

function CancelGuaranteeBond() {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div style={{zoom:'0.85'}}>
        <div
            style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }}
            centered
          >
            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="sync"
                />
                <br />
                Refresh
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="calendar-times"
                />
                <br />
                Delete
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="thumbs-up"
                />
                <br />
                Authorise
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="eye"
                />
                <br />
                Fetch
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
                <MDBIcon
                  style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="check"
                />
                <br />
                Ok
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="ban"
                />
                <br />
                Cancel
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="thumbs-down"
                />
                <br />
                Reject
              </button>
            </span>

            <span style={{ paddingLeft: 5, paddingRight: 5 }}>
              <button className="btn btn-light" style={{ background: "white" }}>
                <MDBIcon
                  style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="question-circle"
                />
                <br />
                Help
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
                <MDBIcon
                  style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                  fas
                  icon="sign-out-alt"
                />
                <br />
                Exit
              </button>
            </span>
          </div>
          <hr style={{margin:'10px 0'}} />
        
          <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",padding:'10px',backgroundColor:'#ffffff'}}>
            <div style={{display:'flex',flex:1,marginBottom:'15px'}}>
                <div style={{flex:0.3}}>
                <InputField label={"Guarantee Number"} labelWidth={'40%'} inputWidth={'50%'}  />
                </div>
                <div style={{flex:0.3}}>
                <InputField label={"Customer Number"} labelWidth={'40%'} inputWidth={'50%'} />
                </div>
                <div style={{flex:0.4}}>
                <ListOfValue label={"Guarantee Type"} labelWidth={'25%'} inputWidth={'70%'} />
                </div>
            </div>
            <div style={{display:'flex',flex:1}}>
                <div style={{flex:0.3}}>
                <InputField label={"Guarantee Amount"} labelWidth={'40%'} inputWidth={'50%'}  />
                </div>
                <div style={{flex:0.3}}>
                <InputField label={"and"} labelWidth={'40%'} inputWidth={'50%'} />
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <DataTable title={"Guarantee Cancellation"} rowsPerPage={'10'} columns={["Guarantee Number","Customer Number","Applicant Name","Guarantee Type","Stage","Currency","Guarantee Amount","Created Date","Branch","Posted by"]} />
            </div>
          </div>
    </div>
  )
}

export default CancelGuaranteeBond