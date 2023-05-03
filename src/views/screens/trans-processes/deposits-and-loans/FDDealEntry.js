import React from "react";
import ButtonComponent from "../../../../components/others/Button/ButtonComponent";
import InputField from "../../../../components/others/Fields/InputField";
import ListOfValue from "../../../../components/others/Fields/ListOfValue";
// import TextAreaField from "../../../../../components/others/Fields/TextArea";
import TextAreaField from "../../../../components/others/Fields/TextArea";

function FDDealEntry() {
  return (
    <div>
      {/**Customer */}
      <div>
        <div style={{ margin: "10px" }}>Customer</div>
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
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Customer No."}
              required
            />
            <InputField
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Benificiary Customer"}
              required
            />
            <ListOfValue
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Source Amount"}
              required
            />
            <InputField
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Interest Account"}
              required
            />
            <InputField
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Liquidation Account"}
              required
            />
          </div>
          <div style={{ flex: 0.3 }}>
            <InputField inputWidth={"100%"} disabled />
            <InputField inputWidth={"100%"} disabled />
            <div style={{ display: "flex" }}>
              <InputField inputWidth={"100%"} disabled />
              <ButtonComponent
                label={"SigVer"}
                buttonBackgroundColor={"#4CA1AF"}
                buttonWidth="120px"
                buttonColor="white"
              />
            </div>
            <InputField inputWidth={"100%"} disabled />
            <InputField inputWidth={"100%"} disabled />
          </div>
        </div>
      </div>

      {/**Product */}
      <div>
        <div
          style={{
            margin: "10px",
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
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Currency"}
            />
            <ListOfValue
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Product Code"}
              required
            />
            <InputField
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Duration/Maturity"}
            />
          </div>
          <div style={{ flex: 0.3 }}>
            <InputField inputWidth={"100%"} disabled />
            <InputField inputWidth={"100%"} disabled />
            <div style={{ display: "flex" }}>
              <InputField inputWidth={"100%"} disabled />
              <InputField
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
      <div>
        <div style={{ margin: "10px" }}>Interest</div>
        <div
          style={{
            display: "flex",
            flex: 1,
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <div style={{ flex: 0.5 }}>
            <InputField
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Currency Amount"}
              required
            />
            <InputField
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Agreed Rate"}
              required
            />
            <ListOfValue
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Total Interest"}
              disabled
            />
            <InputField
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Deal Source"}
            />
            <ListOfValue
              labelWidth={"30%"}
              inputWidth={"50%"}
              label={"Trader"}
              disabled
            />
          </div>

          <div style={{ flex: 0.3 }}>
            <InputField
              label={"Interest Rate"}
              labelWidth={"30%"}
              inputWidth={"50%"}
              disabled
            />
            <div style={{ display: "flex" }}>
              <InputField
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
            <InputField inputWidth={"100%"} disabled />
            <InputField inputWidth={"100%"} disabled />
          </div>
        </div>
      </div>

      {/**Deal note */}
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
              label={"Quotation Date"}
              inputWidth={"50%"}
              labelWidth={"50%"}
              disabled
              value={"01-MAR-2023"}
            />
            <InputField
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

export default FDDealEntry;
