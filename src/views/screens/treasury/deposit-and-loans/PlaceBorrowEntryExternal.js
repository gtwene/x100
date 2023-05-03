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

function PlaceBorrowEntryExternal() {
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
      {/**Main Stoff */}
      <div style={{ display: "flex", flex: 1 }}>
        {/**Left side */}
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
            }}
          >
            <ListOfValue
              label={"Customer Number"}
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

          {/*Interest*/}
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
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "5px",
            }}
          >
            <div style={{ display: "flex" }}>
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

            <div style={{ display: "flex" }}>
              <InputField
                label={"Total Interest"}
                labelWidth={"65%"}
                margin={"10px"}
                inputWidth={"50%"}
                required
              />
              <InputField
                type={"date"}
                label={"Effective Date"}
                labelWidth={"65%"}
                margin={"10px"}
                inputWidth={"50%"}
                disabled
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
              required
            />

            <div style={{ display: "flex" }}>
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
            <ListOfValue
              label={"Account with Instant. 57s"}
              labelWidth={"30%"}
              margin={"10px"}
              inputWidth={"50%"}
              required
            />

            <div style={{ display: "flex" }}>
              <InputField
                label={"With Institution A/C 57s"}
                margin={"10px"}
                inputWidth={"50%"}
                labelWidth={"50%"}
              />
              <InputField
                label={"Beneficiary Inst. A/C58s"}
                margin={"10px"}
                inputWidth={"50%"}
                labelWidth={"50%"}
              />
            </div>
          </div>
        </div>

        {/**Right side */}
        <div style={{ flex: 0.3 }}>
          <div
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              padding: "5px",
            }}
          >
            <InputField
              label={"Quotation Number"}
              labelWidth={"50%"}
              required
              disabled
            />

            <div style={{ display: "flex", alignItems: "center" }}>
              <Label label={"Gen Swift Messages"} labelWidth={"50%"} required />
              <div style={{ marginRight: "10px" }}>
                <ButtonType type={"checkbox"} label={"Gen 320"} id={"gen"} />
              </div>
              <ButtonType label={"Gen 202"} type={"checkbox"} id={"gen"} />
            </div>
            <InputField
              label={"Rate Tolerance"}
              margin={"10px"}
              inputWidth={"50%"}
              labelWidth={"50%"}
              disabled
            />

            <br />

            <InputField
              label={"Ordering Insti. A/C52D"}
              margin={"10px"}
              inputWidth={"50%"}
              labelWidth={"50%"}
              required
            />
            <InputField
              label={"Ordering Insti. Addr52D"}
              margin={"10px"}
              inputWidth={"50%"}
              labelWidth={"50%"}
            />
            <InputField
              label={"Address2. 52D"}
              margin={"10px"}
              inputWidth={"50%"}
              labelWidth={"50%"}
            />
            <InputField
              label={"Address3. 52D"}
              margin={"10px"}
              inputWidth={"50%"}
              labelWidth={"50%"}
            />

            <InputField
              label={"Address4. 52D"}
              margin={"10px"}
              inputWidth={"50%"}
              labelWidth={"50%"}
            />

            <br />

            <div>
              <InputField
                label={"Beneficiary Insti. A/C52D"}
                margin={"10px"}
                inputWidth={"50%"}
                labelWidth={"50%"}
                required
              />
              <InputField
                label={"Beneficiary Insti. Addr52D"}
                margin={"10px"}
                inputWidth={"50%"}
                required
                labelWidth={"50%"}
              />
              <InputField
                label={"Address2. 52D"}
                margin={"10px"}
                inputWidth={"50%"}
                labelWidth={"50%"}
              />
              <InputField
                label={"Address3. 52D"}
                margin={"10px"}
                inputWidth={"50%"}
                labelWidth={"50%"}
              />

              <InputField
                label={"Address4. 52D"}
                margin={"10px"}
                inputWidth={"50%"}
                labelWidth={"50%"}
              />
            </div>
          </div>
        </div>
      </div>

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

export default PlaceBorrowEntryExternal;
