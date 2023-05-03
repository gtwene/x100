import React, {useState} from "react";
import InputField from "./../../../../components/others/Fields/InputField";
import DataTable from "./../../../../components/others/Datatable/DataTable";
import TextAreaField from "./../../../../components/others/Fields/TextArea";
import "../counter-cheque/counter.css";
import { MDBIcon } from "mdb-react-ui-kit";

export default function CounterCheque() {
  const [getTheme, setGetTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  return (
    <div>
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

      <form className="counter__form">
        <div className="inner__counter">
          <div style={{ width: "100%" }}>
            <div className="counter__div counter__divs">
              <div
                className="first__inner"
                style={{ visibility: "hidden" }}
              ></div>
              <div className="control__space"></div>

              <div className="first__inner">
                <InputField
                  disabled={true}
                  inputWidth={"70%"}
                  label={"Request ID"}
                  labelWidth={"30%"}
                />
              </div>
            </div>
            <hr />

            <div className="counter__div">
              <div className="first__inner">
                <InputField
                  label={"Account Number"}
                  required={true}
                  labelWidth={"40%"}
                  marginBottom={"20px"}
                  inputWidth={"50%"}
                />
              </div>
              <div className="control__space"></div>
              <div className="first__inner">
                <InputField
                  disabled={true}
                  inputWidth={"100%"}
                  marginBottom={"20px"}
                />
              </div>
            </div>
            <div className="counter__div">
              <div className="first__inner">
                <InputField
                  label={"Product"}
                  disabled
                  labelWidth={"40%"}
                  marginBottom={"20px"}
                  inputWidth={"60%"}
                />
              </div>
              <div className="control__space"></div>

              <div className="first__inner">
                <InputField
                  disabled={true}
                  inputWidth={"50%"}
                  labelWidth={"50%"}
                  label={"Date Opened"}
                  marginBottom={"20px"}
                />
              </div>
            </div>
            <div className="counter__div">
              <div className="first__inner">
                <InputField
                  label={"Currency"}
                  disabled
                  labelWidth={"40%"}
                  inputWidth={"60%"}
                  marginBottom={"20px"}
                />
              </div>
              <div className="control__space"></div>

              <div className="first__inner">
                <InputField
                  disabled={true}
                  inputWidth={"50%"}
                  labelWidth={"50%"}
                  marginBottom={"20px"}
                  label={"Date of Last Activity"}
                />
              </div>
            </div>
            <div className="counter__div">
              <div className="first__inner">
                <InputField
                  label={"Cheque Number"}
                  labelWidth={"40%"}
                  inputWidth={"50%"}
                  marginBottom={"20px"}
                  required
                />
              </div>
              <div className="control__space"></div>

              <div className="first__inner">
                <InputField
                  inputWidth={"50%"}
                  labelWidth={"50%"}
                  label={"Amount"}
                  required
                  marginBottom={"20px"}
                />
              </div>
            </div>
            <div className="counter__div">
              <div className="main__flex">
                <InputField
                  label={"Requested By"}
                  labelWidth={"16%"}
                  marginBottom={"20px"}
                  inputWidth={"24%"}
                  //  86
                  required
                />
              </div>
            </div>
            <div className="counter__div">
              <div className="main__flex">
                <TextAreaField
                  label={"Comments"}
                  labelWidth={"16%"}
                  inputWidth={"74%"}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <DataTable
        headerColor={"rgb(21 163 183)"}
        headerText="white"
        title={"CCCHQ - Charges Details"}
        columns={[
          "#",
          "Chg.Code",
          "Fee Account",
          "Fee Acount Description",
          "Fees Description",
          "Fee Amount Per Book",
          "Currency",
        ]}
        selectableRowsHeader={false}
      />
    </div>
  );
}
