import React, {useState} from "react";
import InputField from "./../../../../components/others/Fields/InputField";
import DataTable from "./../../../../components/others/Datatable/DataTable";
import ListOfValue from "./../../../../components/others/Fields/ListOfValue";
import { Input } from "@mui/material";
import ButtonComponent from "./../../../../components/others/Button/ButtonComponent";
import SelectField from "./components/SelectField";
import "../stopped-cheques/stopped-cheque.css";
import {MDBIcon} from "mdb-react-ui-kit"


export default function StoppedCheque() {
  const [getTheme, setGetTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  return (
    <div>
      <div style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }} centered>

<span style={{ paddingLeft: 5, paddingRight: 5 }}>
<button className='btn btn-secondary' style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + getTheme.theme.headerImage + `)` }}><MDBIcon style={{ color: "white", paddingBottom: 5, fontSize: 15 }} fas icon="file-alt" /><br />New</button>
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
<button className='btn btn-secondary' style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + getTheme.theme.headerImage + `)` }}><MDBIcon style={{ color: "white", paddingBottom: 5, fontSize: 15 }} fas icon="check" /><br />Ok</button>
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
<button className='btn btn-secondary' style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + getTheme.theme.headerImage + `)` }}><MDBIcon style={{ color: "white", paddingBottom: 5, fontSize: 15 }} fas icon="sign-out-alt" /><br />Exit</button>
</span>

</div>

      <form className="stopped mb-3">
        <div className="inner__stopped">
          <div className="inner__div">
            <div className="first__inner">
              <InputField
                label={"Account Number"}
                required={true}
                labelWidth={"37%"}
                inputWidth={"60%"}
                marginBottom="20px"
                type={"number"}
                name="accountNumber"
              />
            </div>
            <div className="space2"></div>
            <div className="first__inner">
              <InputField
                disabled={true}
                inputWidth="100%"
                marginBottom="20px"
              />
            </div>
          </div>
          <div className="inner__div">
            <div className="first__inner">
              <InputField
                label={"Cheque No"}
                required={true}
                labelWidth={"37%"}
                inputWidth={"50%"}
                marginBottom="20px"
                type={"number"}
                name="accountNumber"
              />
            </div>
            <div className="space2"></div>
            <div className="first__inner">
              <InputField
                label={"Cheque No End"}
                labelWidth={"25%"}
                inputWidth={"30%"}
                marginBottom="20px"
              />
            </div>
          </div>
          {/* <div className="inner__div" style={{background:"pink"}}>
            <div className="first__inner"style={{background:"blue"}}>
              <InputField
                label={"Cheque Amount"}
                labelWidth={"37%"}
                inputWidth={"60%"}
                marginBottom="20px"
                type={"number"}
                name="accountNumber"
              />
            </div>
            <div className="first__inner"style={{background:"blue"}}>
              <InputField
                label={"Cheque Amount"}
                labelWidth={"37%"}
                inputWidth={"60%"}
                marginBottom="20px"
                type={"number"}
                name="accountNumber"
              />
            </div>
          </div> */}

          <div className="inner__div">
            <div className="first__inner">
              <InputField
                label={"Cheque Amount"}
                required={true}
                labelWidth={"37%"}
                inputWidth={"60%"}
                marginBottom="20px"
                type={"number"}
                name="accountNumber"
              />
            </div>
            <div className="space2"></div>
            <div className="first__inner" style={{ visibility: "hidden" }}>
              <InputField
                disabled={true}
                inputWidth="100%"
                marginBottom="20px"
              />
            </div>
          </div>

          <div className="inner__div">
            <div className="seconds__inner">
              <InputField
                label={"Date on Cheque"}
                labelWidth={"49.5%"}
                inputWidth={"50%"}
                marginBottom="20px"
                type={"date"}
                name="accountNumber"
              />
            </div>
            {/* <div className="space"></div> */}
            <div className="times">
              <div className="inner__div">
                <div className="column">
                  <InputField
                    label={"Time Reported"}
                    disabled
                    labelWidth={"40%"}
                    inputWidth={"50%"}
                    marginBottom="20px"
                    type={"number"}
                    name="accountNumber"
                  />
                </div>
                {/* <div className="space1" ></div> */}
                <div className="column">
                  <InputField
                    label={"Stop Date"}
                    labelWidth={"25%"}
                    inputWidth={"50%"}
                    marginBottom="20px"
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="inner__div ">
            <div className="second__inner">
              <InputField
                label={"Payee Information"}
                labelWidth={"20%"}
                inputWidth={"100%"}
                marginBottom="20px"
                type={"number"}
                name="accountNumber"
              />
            </div>
          </div>
          <div className="inner__div">
            <div className="second__inner">
              <ListOfValue
                label={"Stop Reason"}
                labelWidth={"16.5%"}
                inputWidth={"27.5%"}
                marginBottom="20px"
              />
            </div>
          </div>
          <div className="inner__div">
            <div className="second__inner">
              <ListOfValue
                label={"Mode of Communication"}
                labelWidth={"16.5%"}
                inputWidth={"27.5%"}
                // marginBottom="20px"
              />
            </div>
          </div>

          <hr />
          <br />
          <div className="inner__div">
            <div className="first__inner">
              <InputField
                label={"Charge Account"}
                labelWidth={"37.5%"}
                inputWidth={"60%"}
                marginBottom="20px"
                type={"number"}
                name="accountNumber"
              />
            </div>
            <div className="space2"></div>
            <div className="first__inner">
              <InputField
                disabled={true}
                inputWidth="100%"
                marginBottom="20px"
              />
            </div>
          </div>
        </div>
      </form>
      <DataTable
        headerColor={"rgb(21 163 183)"}
        headerText="white"
        columns={[
          "#",
          "Chg.Code",
          "Fee Account",
          "Fee Acount Description",
          "Fees Description",
          "Fee Amount Per Book",
          "Currency",
        ]}
      />
    </div>
  );
}
