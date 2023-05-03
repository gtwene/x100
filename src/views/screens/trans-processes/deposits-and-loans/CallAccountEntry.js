import React, { useState } from "react";
import ButtonComponent from "../../../../components/others/Button/ButtonComponent";
import InputField from "../../../../components/others/Fields/InputField";
import ListOfValue from "../../../../components/others/Fields/ListOfValue";
import TextAreaField from "../../../../components/others/Fields/TextArea";
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";

function CallAccountEntry() {
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

      {/**Customer */}
      <div>
        <div
          style={{
            background:
              `url(` +
              window.location.origin +
              `/assets/images/headerBackground/` +
              getTheme.theme.headerImage +
              `)`,
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
            color: "white",
            padding: "3px",
          }}
        >
          Customer
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <div style={{ flex: 0.5 }}>
            <InputField
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Customer No."}
              required
            />
            <InputField
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Benificiary Customer"}
              required
            />
            <ListOfValue
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Source Amount"}
              required
            />
            <InputField
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Interest Account"}
              required
            />
            <InputField
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Liquidation Account"}
              required
            />
          </div>
          <div style={{ flex: 0.3 }}>
            <InputField margin={"10px"} inputWidth={"100%"} disabled />
            <InputField margin={"10px"} inputWidth={"100%"} disabled />
            <div style={{ display: "flex" }}>
              <InputField margin={"10px"} inputWidth={"100%"} disabled />
              <ButtonComponent
                label={"SigVer"}
                buttonWidth="120px"
                buttonColor="white"
              />
            </div>
            <InputField margin={"10px"} inputWidth={"100%"} disabled />
            <InputField margin={"10px"} inputWidth={"100%"} disabled />
          </div>
        </div>
      </div>

      <br />
      {/**Product */}
      <div>
        <div
          style={{
            background:
              `url(` +
              window.location.origin +
              `/assets/images/headerBackground/` +
              getTheme.theme.headerImage +
              `)`,
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
            color: "white",
            padding: "3px",
          }}
        >
          Product
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <div style={{ flex: 0.5 }}>
            <ListOfValue
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Currency"}
            />
            <ListOfValue
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Product Code"}
              required
            />
            <InputField
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Duration/Maturity"}
            />
          </div>
          <div style={{ flex: 0.3 }}>
            <InputField margin={"10px"} inputWidth={"100%"} disabled />
            <InputField margin={"10px"} inputWidth={"100%"} disabled />
            <div style={{ display: "flex" }}>
              <InputField margin={"10px"} inputWidth={"100%"} disabled />
              <InputField
                margin={"10px"}
                type={"date"}
                label={"Effective date"}
                labelWidth={"80%"}
                inputWidth={"100%"}
                required
              />
            </div>
          </div>
        </div>
      </div>

      {/**Interest*/}
      <br />
      <div>
        <div
          style={{
            background:
              `url(` +
              window.location.origin +
              `/assets/images/headerBackground/` +
              getTheme.theme.headerImage +
              `)`,
            borderTopLeftRadius: "3px",
            borderTopRightRadius: "3px",
            color: "white",
            padding: "3px",
          }}
        >
          Interest
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <div style={{ flex: 0.5 }}>
            <InputField
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Currency Amount"}
              required
            />
            <InputField
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Agreed Rate"}
              required
            />
            <ListOfValue
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Total Interest"}
              disabled
            />
            <InputField
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Deal Source"}
            />
            <ListOfValue
              margin={"10px"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Trader"}
              disabled
            />
          </div>

          <div style={{ flex: 0.3 }}>
            <InputField
              margin={"10px"}
              label={"Interest Rate"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              disabled
            />
            <div style={{ display: "flex" }}>
              <InputField
                margin={"10px"}
                label={"Attach Doc"}
                inputWidth={"50%"}
                labelWidth={"60%"}
                disabled
              />
              <ButtonComponent
                label={"View Doc."}
                buttonBackgroundColor={"#4CA1AF"}
                buttonWidth="120px"
                buttonColor="white"
              />
            </div>
            <br />
            <InputField margin={"10px"} inputWidth={"100%"} disabled />
            <InputField margin={"10px"} inputWidth={"100%"} disabled />
          </div>
        </div>
      </div>

      {/**Deal note */}
      <br />
      <br />
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 0.5 }}>
            <TextAreaField
              label={"Deal Note"}
              labelWidth={"30%"}
              inputWidth={"50%"}
            />
          </div>
          <div style={{ flex: 0.3 }}>
            <InputField
              margin={"10px"}
              label={"Quotation Date"}
              inputWidth={"50%"}
              labelWidth={"50%"}
              disabled
              value={"01-MAR-2023"}
            />
            <InputField
              margin={"10px"}
              label={"Quotation Number"}
              inputWidth={"50%"}
              labelWidth={"50%"}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallAccountEntry;
