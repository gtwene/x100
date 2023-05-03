import React from "react";
import ScreenBase2 from "./components/ScreenBase2";
import InputField from "../../../../components/others/Fields/InputField";
import ButtonComponent from "../../../../components/others/Button/ButtonComponent";
import DataTable from "../../../../components/others/Datatable/DataTable";

function DormantAccountReactivation() {
  return (
    <div>
      <ScreenBase2
        header_title={"Dormant Account Form"}
        card_title={"Balance"}
        card_div1a={
          <div style={{ width: "100%", placeItems: "center" }}>
            <div
              style={{
                display: "flex",
                width: "100%",
                marginTop: "3px",
                marginBottom: "15px",
              }}
            >
              <div style={{ width: "50%", flex: "0.5" }}>
                <InputField
                  style={{}}
                  label="Account Number  : "
                  labelWidth={"40%"}
                  inputWidth={"58%"}
                />
              </div>

              <div style={{ width: "50%", flex: "0.5" }}>
                <InputField
                  disabled={true}
                  labelWidth={"40"}
                  inputWidth={"80%"}
                />
              </div>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <InputField
                label="Currency  : "
                labelWidth={"20%"}
                required={false}
                inputWidth="40%"
                disabled={true}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <InputField
                label="Product Group   : "
                labelWidth={"20%"}
                required={false}
                inputWidth="60%"
                disabled={true}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <InputField
                label="Branch  : "
                labelWidth={"20%"}
                required={false}
                inputWidth="40%"
                disabled={true}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <InputField
                label=" A/c Status: "
                placeeholder={"you"}
                labelWidth={"20%"}
                type="number"
                required={false}
                inputWidth="60%"
                disabled={true}
              />
            </div>

            <hr style={{ paddingRight: "5px" }} />
            <div
              style={{ display: "flex", width: "100%", marginBottom: "10px" }}
            >
              <div style={{ width: "50%",flex:"0.4"  }}>
                <InputField
                  style={{}}
                  label="Date Opened : "
                  labelWidth={"50%"}
                  inputWidth={"45%"}
                  disabled={true}
                />
              </div>

               <div style={{ width: "50%", flex:"0.4" }}>
                <InputField
                  disabled={true}
                  label="Date Of Last Activity: "
                  labelWidth={"43%"}
                  inputWidth={"45%"}
                />
              </div>
              <br />

              <div style={{ width: "50%",flex:"0.2" }}>
                <InputField
                label="Level Id: "
                  disabled={true}
                  labelWidth={"40%"}
                  inputWidth={"50%"}
                />
              </div>
            </div>

            <hr />
            <div style={{ marginBottom: "15px" }}>
              <InputField
                label="Blockage Reason: "
                labelWidth={"20%"}
                required={false}
                type="textarea"
                inputWidth="70%"
                id={"otherreason_id"}

                // disabled={ reason === "999"? false: true}
              />
            </div>


           <div style={{display:"flex"}}>
            <div style={{ marginBottom: "15px", flex:"0.6" }}>
              <InputField
                label="Branch  : "
                labelWidth={"33.5%"}
                required={false}
                inputWidth="60%"
              />
            </div>
            <div style={{flex:"0.3"}}>
                <ButtonComponent
                label={"View Document"}
                buttonBackgroundColor={"rgb(21 163 183)"}
                buttonColor={"white"}
                buttonHeight={"27px"}
                
                />
          

            </div>

            

            </div>



          </div>
        }
        card_div2a={
          <div style={{ marginLeft: "2%" }}>
            <div style={{ marginBottom: "15px" }}>
              <InputField
                label={"Customer Status"}
                disabled={"true"}
                labelWidth={"45%"}
                inputWidth={"50%"}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <InputField
                label={"Accrued Interest"}
                disabled={"true"}
                labelWidth={"45%"}
                inputWidth={"50%"}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <InputField
                label={"Accrued OverDraft Amount "}
                disabled={"true"}
                labelWidth={"45%"}
                inputWidth={"50%"}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <InputField
                label={"Commision on TurnOver"}
                disabled={"true"}
                labelWidth={"45%"}
                inputWidth={"50%"}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <InputField
                label={"Accrued Fees"}
                disabled={"true"}
                labelWidth={"45%"}
                inputWidth={"50%"}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <InputField
                label={"Current Balance"}
                disabled={"true"}
                labelWidth={"45%"}
                inputWidth={"50%"}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <InputField
                label={"Net Balance"}
                disabled={"true"}
                labelWidth={"45%"}
                inputWidth={"50%"}
              />
            </div>
          </div>
        }
        card_div3a={
          <div>
            <DataTable
              title={"UNNAPROVED ACCOUNT BLOCKAGE"}
              columns={[
                "Change Code",
                "Fee Amount",
                "Fee Account Description",
                "Fees Description",
                "Fees Amount Per Book",
                "Currency",
                
              ]}
             
            />
          </div>
        }
      />
    </div>
  );
}

export default DormantAccountReactivation;
