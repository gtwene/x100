import React,{useState} from "react";
import InputField from "./../../../../../components/others/Fields/InputField";
import DataTable from "./../../../../../components/others/Datatable/DataTable";;
import { MDBIcon } from "mdb-react-ui-kit";

function SameDayReversal() {
  
  const [getHeaderButtons3, setHeaderButtons3] = useState(JSON.parse(localStorage.getItem("theme")));
  
  return (
    <div>
      {/* buttons */}
      <div style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }} centered>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-secondary' style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + getHeaderButtons3.theme.headerImage + `)` }}><MDBIcon style={{ color: "white", paddingBottom: 5, fontSize: 15 }} fas icon="file-alt" /><br />New</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", paddingBottom: 5, fontSize: 15 }} fas icon="sync" /><br />Refresh</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", paddingBottom: 5, fontSize: 15 }} fas icon="calendar-times" /><br />Delete</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", paddingBottom: 5, fontSize: 15 }} fas icon="thumbs-up" /><br />Authorise</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", paddingBottom: 5, fontSize: 15 }} fas icon="eye" /><br />View</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-secondary' style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + getHeaderButtons3.theme.headerImage + `)` }}><MDBIcon style={{ color: "white", paddingBottom: 5, fontSize: 15 }} fas icon="check" /><br />Ok</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", paddingBottom: 5, fontSize: 15 }} fas icon="ban" /><br />Cancel</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", paddingBottom: 5, fontSize: 15 }} fas icon="thumbs-down" /><br />Reject</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", paddingBottom: 5, fontSize: 15 }} fas icon="question-circle" /><br />Help</button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-secondary' style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + getHeaderButtons3.theme.headerImage + `)` }}><MDBIcon style={{ color: "white", paddingBottom: 5, fontSize: 15 }} fas icon="sign-out-alt" /><br />Exit</button>
          </span>

      </div>
      <hr/>
      

      {/* transaction number */}
      <div style={{ display: "flex", flex: 1, alignItems: "center", marginTop:"15px"}}>
        <div style={{ flex: 0.0125, background: "" }}></div>

        <div style={{ flex: 0.975, background: "" }} className="my-card">
          <div style={{ flex: 1, background: "", padding:"20px 0px",paddingLeft:"60px"}}>
            <InputField
              label={"Transaction No"}
              labelWidth={"11.5%"}
              inputWidth={"25%"}
              // onKeyDown={handleKeyDown}
              name={"transaction-no"}
              disabled={false}
              required={true}
              // onChange={handleChange}
              // value={accountNumber}
            />
          </div>
        </div>
        <div style={{ flex: 0.0125, background: "" }}></div>
      </div>

  
      {/* main container for left and right  */}
      <div
        style={{
          display: "flex",
          flex: 1,
          background: "",
          padding: "20px 0px",
        }}
      >
        <div style={{ flex: 0.0125 }}></div>
        <div style={{ flex: 0.975, background: "" }}>
          {/* left and right here */}
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            {/* left container */}
            <div
              style={{
                flex: 0.81,
                backgroundColor: "",
                padding: "20px 0px 0px 15px",
              }}
              className="my-card"
            >
              {/* account number */}
              <div style={{ flex: 1 }}>
                <InputField
                  label={"Account Number"}
                  labelWidth={"24%"}
                  inputWidth={"45%"}
                  // onKeyDown={handleKeyDown}
                  name={"account-no"}
                  disabled={true}
                  // onChange={handleChange}
                  // value={accountNumber}
                />
              </div>

              {/* account name */}
              <div style={{ flex: 1, backgroundColor: "" , marginTop:"10px"}}>
                <InputField
                  label={"Account Name"}
                  labelWidth={"24%"}
                  inputWidth={"45%"}
                  // onKeyDown={handleKeyDown}
                  name={"account-name"}
                  disabled={true}
                  // onChange={handleChange}
                  // value={accountNumber}
                />
              </div>

              {/* doc ref and transaction type */}
              <div style={{ display: "flex", flex: 1, backgroundColor: ""  , marginTop:"10px"}}>
                <div style={{ display: "", flex: 0.52, backgroundColor: "" }}>
                  <InputField
                    label={"Document Ref"}
                    labelWidth={"46.1%"}
                    inputWidth={"52.5%"}
                    disabled={true}
                    // value={date}
                  />
                </div>
                <div style={{ flex: 0.05, background: "" }}></div>
                <div style={{ display: "", flex: 0.43, backgroundColor: "" }}>
                  <InputField
                    label={"Transaction Type"}
                    labelWidth={"48%"}
                    inputWidth={"43%"}
                    disabled={true}
                    // value={date}
                  />
                </div>
              </div>

              {/* amount */}
              <div style={{ flex: 1  , marginTop:"10px"}}>
                <InputField
                  label={"Amount"}
                  labelWidth={"24%"}
                  inputWidth={"27.1%"}
                  // onKeyDown={handleKeyDown}
                  name={"account-no"}
                  disabled={true}
                  // onChange={handleChange}
                  // value={accountNumber}
                />
              </div>

              {/* posting date and value date */}
              <div style={{ display: "flex", flex: 1, backgroundColor: ""  , marginTop:"10px"}}>
                <div style={{ display: "", flex: 0.55, backgroundColor: "" }}>
                  <InputField
                    label={"Posting Date"}
                    labelWidth={"43.5%"}
                    inputWidth={"49.5%"}
                    disabled={true}
                    // value={date}
                  />
                </div>
                <div style={{ flex: 0.05, background: "" }}></div>
                <div style={{ display: "", flex: 0.4, backgroundColor: "" }}>
                  <InputField
                    label={"Value Date"}
                    labelWidth={"33%"}
                    inputWidth={"57%"}
                    disabled={true}
                    // value={date}
                  />
                </div>
              </div>

              {/* transaction details 1 */}
              <div style={{ flex: 1, backgroundColor: ""  , marginTop:"10px"}}>
                <InputField
                  label={"Transaction Details 1"}
                  labelWidth={"24%"}
                  inputWidth={"72%"}
                  // onKeyDown={handleKeyDown}
                  name={"account-no"}
                  disabled={true}
                  // onChange={handleChange}
                  // value={accountNumber}
                />
              </div>

              {/* transaction details 2 */}
              <div style={{ flex: 1  , marginTop:"10px" , marginBottom:"20px"}}>
                <InputField
                  label={"Transaction Details 2"}
                  labelWidth={"24%"}
                  inputWidth={"72%"}
                  // onKeyDown={handleKeyDown}
                  name={"account-no"}
                  disabled={true}
                  // onChange={handleChange}
                  // value={accountNumber}
                />
              </div>
            </div>
            {/* right container */}
            <div
              style={{
                flex: 0.17,
                display: "flex",
                justifyContent: "center",
                background: "whitesmoke",
                alignItems: "center",
                padding: "0px 15px",
              }}
              className="my-card"
            >
              {/* DATATABLE */}
              <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
                <DataTable columns={["#", "Denomination", "Amount"]} />
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 0.0125 }}></div>
      </div>
    </div>
  );
}

export default SameDayReversal;
