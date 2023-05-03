import React, { useState } from "react";
import ButtonComponent from "../../../../components/others/Button/ButtonComponent";
import InputField from "../../../../components/others/Fields/InputField";
import SelectField from "../../../../components/others/Fields/SelectField";
import ListOfValue from "../../../../components/others/Fields/ListOfValue";
import DataTable from "../../../../components/others/Datatable/DataTable";
import TextAreaField from "../../../../components/others/Fields/TextArea";
import { MDBIcon } from "mdb-react-ui-kit";

function PlaceBorrowEntryInternal() {
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
              onClick={() => document.getElementById("closeModalBTN").click()}
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
      <hr className="py-2" />
      {/*Main Stoff*/}
      <div style={{ display: "flex", flex: 1 }}>
        {/**right side */}
        <div style={{ flex: 0.7, marginRight: "10px" }}>
          {/*Customer */}
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
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "5px",
              borderRadius: "4px",
            }}
          >
            <ListOfValue
              label={"Quotation Number"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
              required
            />

            <ListOfValue
              label={"Beneficiary Customer"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
            />
          </div>

          <br />

          {/*Product*/}
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
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "4px",
              padding: "5px",
            }}
          >
            <SelectField
              label={"Deal Type"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
              required
            />
            <ListOfValue
              label={"Currency"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
              required
            />
            <ListOfValue
              label={"Product Code"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
              required
            />
            <InputField
              type={"date"}
              label={"Duration/Maturity"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
              disabled
              required
            />
            margin={"10px"}
            <ListOfValue label={""} labelWidth={"30%"} inputWidth={"50%"} />
            <InputField
              label={"Interest Account"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
              disabled
              required
            />
            <InputField
              label={"Liquidation Account"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
              disabled
              required
            />
          </div>

          <br />

          {/*Deal*/}
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
            Deal
          </div>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "4px",
              padding: "5px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <InputField
                label={"Currency Amount"}
                labelWidth={"50%"}
                margin={"10px"}
                inputWidth={"50%"}
                required
              />
              <InputField
                label={"Interest Rate"}
                labelWidth={"50%"}
                margin={"10px"}
                inputWidth={"50%"}
                disabled
              />
              <InputField
                label={"Agreed Rate"}
                labelWidth={"50%"}
                margin={"10px"}
                inputWidth={"50%"}
                required
              />
            </div>
            <ListOfValue
              label={"Deal Source"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
              required
            />
            <ListOfValue
              label={"Counter Dealer"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
            />

            <div
              style={{
                display: "flex",
                borderRadius: "4px",
                // justifyContent: "space-between",
              }}
            >
              <ListOfValue
                label={"Interest Base"}
                labelWidth={"50%"}
                margin={"10px"}
                inputWidth={"50%"}
                disabled
              />
              <InputField
                label={"Attach Doc"}
                margin={"10px"}
                inputWidth={"50%"}
                labelWidth={"50%"}
                disabled
              />
              <ButtonComponent
                label={"View Doc."}
                buttonBackgroundColor={"#4CA1AF"}
                buttonWidth="120px"
                buttonColor="white"
              />
            </div>
            <TextAreaField
              label={"Deal Note"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
              required
            />
          </div>
        </div>

        {/**Left side */}
        <div style={{ flex: 0.3 }}>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              borderRadius: "4px",
              padding: "5px",
            }}
          >
            <InputField
              label={"Quotation Number"}
              labelWidth={"50%"}
              margin={"10px"}
              required
              disabled
            />

            <InputField
              label={"Effective Date"}
              type={"date"}
              labelWidth={"50%"}
              margin={"10px"}
              required
            />
            <InputField
              type={"date"}
              label={"Quotation Date"}
              labelWidth={"50%"}
              margin={"10px"}
              disabled
            />
            <InputField
              label={"Total Interest"}
              labelWidth={"50%"}
              margin={"10px"}
              disabled
            />
            <InputField
              label={"Rate Tolerance"}
              labelWidth={"50%"}
              margin={"10px"}
              disabled
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      {/**Data Table */}
      <DataTable
        columns={[
          "PVS",
          "Trade Summary",
          "Single Sale Limit",
          "Single Purchase Limit",
          "Total Sale Limit",
          "Total Purchase Limit",
          "Daily Limit",
          "Limit Balance",
        ]}
      />
    </div>
  );
}

export default PlaceBorrowEntryInternal;
