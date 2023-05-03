import React, {useState} from 'react'
import DataTable from '../../../../components/others/Datatable/DataTable'
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import  {Modal} from 'react-bootstrap';
import LcAcceptancePage from './components/lc-acceptance-page';
function ImportLCAcceptance() {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {setShow(false)
  console.log(show);
  };
  
  return (
    <div style={{zoom:0.85}}>
       <div className="w-full">
          <div
            style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }}
            centered
          >
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
                  icon="file-alt"
                />
                <br />
                New
              </button>
            </span>

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
                View
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
              // onClick={handleShow}
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
        </div>
        <hr style={{margin:'10px 0'}} />
      <DataTable  title={"Import LC Acceptance "} rowsPerPage={'5'} columns={["Contract Ref Number","LC Type","Customer Number","Applicant Name","Currency","Contract Amount","Issue Date","Posted By","Action" ]}
           data={[["IMLC190620000007","Documentary Credit","037421","Abu Augustine","SLE","105,000.00","20-JUN-2022","UNIONADMIN",
           <button
          //  className="btn btn-secondary"
           onClick={handleShow}
           style={{
             background:
               `url(` +
               window.location.origin +
               `/assets/images/headerBackground/` +
               getTheme.theme.headerImage +
               `)`,
               height:'25px',
               width:'25px',
               alignItems:'center',
               borderRadius:'3px'
           }}
         >
           <MDBIcon
             style={{ color: "white", fontSize: 15 }}
             fas icon="angle-double-right"
           />
           </button>]]}/>
            {show && <Modal show={show} size='xl'>
            <Modal.Body style={{padding:'0px'}}>
              <LcAcceptancePage exit={handleClose} />
            </Modal.Body>
           </Modal> }
    </div>
  )
}

export default ImportLCAcceptance