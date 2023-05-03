import React, { useState } from "react";
import ButtonComponent from "../../../../components/others/Button/ButtonComponent";
import ButtonType from "../../../../components/others/Button/ButtonType";
import InputField from "../../../../components/others/Fields/InputField";
import SelectField from "../../../../components/others/Fields/SelectField";
import Label from "../../../../components/others/Label/Label";
import ListOfValue from "../../../../components/others/Fields/ListOfValue";
import DataTable from "../../../../components/others/Datatable/DataTable";
import TextAreaField from "../../../../components/others/Fields/TextArea";
import { MDBIcon } from "mdb-react-ui-kit";

function DealPrematureLiquidation() {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  return (
    <div>
      {/**Button section */}
      <div className="w-full ">
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
              onClick={() => document.getElementById("closeModalBTN").click()}
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
      <hr className="py-2" />
      {/**main stoff*/}
      <div style={{ flex: 1 }}>
        <div>
          {/**Left Side */}
          <div style={{ display: "flex", width: "100%" }}>
            <InputField
              label={"Customer Number and Name"}
              labelWidth={"80%"}
              inputWidth={"90%"}
              required
            />
            <div style={{ width: "100%" }}>
              <InputField label={""} inputWidth={"100%"} disabled />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ListOfValue
              label={"Search by Deal No. "}
              labelWidth={"50%"}
              inputWidth={"50%"}
              required
            />
            <InputField
              label={"Quotation Number"}
              labelWidth={"50%"}
              inputWidth={"50%"}
              disabled
            />
          </div>
        </div>

        {/**Right side */}
        <div></div>
      </div>
    </div>
  );
}

export default DealPrematureLiquidation;
