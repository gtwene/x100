import React,{useState} from "react";
import { IoMdSearch } from "react-icons/io";
import ModalComponent from "./components/ModalComponent";
import InputField from './../../../../../components/others/Fields/InputField';
import ListOfValue from './../../../../../components/others/Fields/ListOfValue';
import TextAreaField from './../../../../../components/others/Fields/TextArea';
import ButtonComponent from './../../../../../components/others/Button/ButtonComponent';
import DataTable from "./../../../../../components/others/Datatable/DataTable";
import SearchModal from "./components/SearchModal";
import { MDBIcon } from "mdb-react-ui-kit";


function MultipleBatch() {
  const [getHeaderButtons, setHeaderButtons] = useState(JSON.parse(localStorage.getItem("theme")));

  return (
    <div>
      
       {/* buttons */}
      <div style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }} centered>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
          <button className='btn btn-secondary' style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + getHeaderButtons.theme.headerImage + `)` }}><MDBIcon style={{ color: "white", paddingBottom: 5, fontSize: 15 }} fas icon="file-alt" /><br />New</button>
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
          <button className='btn btn-secondary' style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + getHeaderButtons.theme.headerImage + `)` }}><MDBIcon style={{ color: "white", paddingBottom: 5, fontSize: 15 }} fas icon="check" /><br />Ok</button>
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
          <button className='btn btn-secondary' style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + getHeaderButtons.theme.headerImage + `)` }}><MDBIcon style={{ color: "white", paddingBottom: 5, fontSize: 15 }} fas icon="sign-out-alt" /><br />Exit</button>
          </span>

          </div>
      {/* MAIN BODY */}
      <div style={{ display: "flex", backgroundColor: "",marginTop:"15px" }}>
        {/* left space */}
        <div style={{ flex: 0.025, backgroundColor: "" }}></div>
        {/* middle container */}
        <div style={{ display: "", flex: 0.95, backgroundColor: "" }}>
          {/* container with terminal ID, branch and the others */}
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <div>
              <InputField
                label={"Terminal ID"}
                labelWidth={"33%"}
                inputWidth={"67%"}
                type={"text"}
                disabled={"disabled"}
              />
            </div>
            <div>
              <InputField
                label={"User ID"}
                labelWidth={"30%"}
                inputWidth={"65%"}
                type={"text"}
                disabled={"disabled"}
              />
            </div>
            <div>
              <InputField
                label={"Trans Branch"}
                labelWidth={"38%"}
                inputWidth={"60%"}
                type={"text"}
                buttonType={"button"}
                disabled={"disabled"}
              />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <InputField
                  label={"Select Batch No"}
                  labelWidth={"38%"}
                  inputWidth={"60%"}
                  type={"text"}
                  buttonType={"button"}
                  disabled={"disabled"}
                />
              </div>
              <div>
                <ModalComponent
                  textColor={"white"}
                  buttonBackgroundColor={"rgb(21 163 183)"}
                  buttonWidth={"80%"}
                  text={<IoMdSearch size={20} />}
                  modalBody={<SearchModal header={"Search Batch Number"} />}
                />
              </div>
            </div>
          </div>

          {/* left and right div  */}
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            {/* left container */}
            <div
              style={{ flex: 0.7, backgroundColor: "", padding: "15px 10px" }}
              className="my-card"
            >
              {/* trans type and effective date */}
              <div style={{ display: "flex", flex: 1, backgroundColor: "", marginTop:"10px" }}>
                <div style={{ display: "", flex: 0.46, background:"" }}>
                  <ListOfValue
                    label={"Trans Type"}
                    labelWidth={"26.5%"}
                    inputWidth={"71.5%"}
                    buttonType={"button"}
                    required={true}
                    // content={"yes"}
                    name={"transTypes"}
                    // lovData={transTypeArray}
                    lovData={[{ value: "hey", label: "Hey" }]}
                    // onChange={Hubert}
                    id={"transTypeID"}
                    // value={transTypeDescription}
                  />
                </div>
                <div style={{ flex: 0.2 }}></div>
                <div style={{ display: "", flex: 0.34, backgroundColor:"" }}>
                  <InputField
                    label={"Effective Date"}
                    labelWidth={"35%"}
                    inputWidth={"59%"}
                    // type={"date"}
                    disabled={true}
                    // value={date}
                  />
                </div>
              </div>

              {/* account no and disabled field          */}
              <div style={{ display: "flex", flex: 1, backgroundColor: "" , marginTop:"10px" }}>
                <div style={{ display: "", flex: 0.45 }}>
                  <InputField
                    label={"Account No"}
                    labelWidth={"27.3%"}
                    inputWidth={"73%"}
                    required={true}
                    name={"transTypes"}
                  />
                </div>
                <div style={{ flex: 0.025 }}></div>
                <div style={{ display: "", flex: 0.525, background: "" }}>
                  <InputField
                    inputWidth={"95.5%"}
                    // type={"date"}
                    disabled={true}
                    // value={date}
                  />
                </div>
              </div>

              {/* amount and trans type C/D */}
              <div style={{ display: "flex", flex: 1, backgroundColor: "", marginTop:"10px" }}>
                <div style={{ flex: 0.45, backgroundColor: "" }}>
                  <div style={{ flex: 1 }}>
                    <InputField
                      label={"Amount"}
                      labelWidth={"27.3%"}
                      inputWidth={"73%"}
                      // onKeyDown={handleKeyDown}
                      name={"doc-token-ref"}
                      disabled={false}
                      required={true}

                      // onChange={handleChange}
                      // value={accountNumber}
                    />
                  </div>
                </div>
                <div style={{ flex: 0.025 }}></div>
                {/* trans type C/D and disbaled field */}
                <div
                  style={{
                    display: "",
                    flex: 0.525,
                    justifyContent: "",
                    backgroundColor: "",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flex: 1,
                      justifyContent: "",
                      backgroundColor: "",
                    }}
                  >
                    <div
                      style={{ display: "flex", background: "", flex: 0.56 }}
                    >
                      <div style={{ flex: 1 }}>
                        <InputField
                          label={"Trans.Type (C/D)"}
                          labelWidth={"55%"}
                          inputWidth={"25%"}
                          // onKeyDown={handleKeyDown}
                          name={"trans-type"}
                          disabled={false}
                          required={true}
                          type={"text"}
                          // onChange={handleChange}
                          // value={accountNumber}
                        />
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", background: "", flex: 0.44 }}
                    >
                      <div style={{ flex: 1 }}>
                        <InputField
                          inputWidth={"90%"}
                          // onKeyDown={handleKeyDown}
                          name={"trans-type-disabled"}
                          disabled={true}
                          // onChange={handleChange}
                          // value={accountNumber}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doc Ref and Sign Ver button */}
              <div style={{ display: "flex", flex: 1, backgroundColor: "" ,marginTop:"10px" }}>
                <div style={{ flex: 0.45 }}>
                  <InputField
                    label={"Doc Ref"}
                    labelWidth={"27.3%"}
                    inputWidth={"72.5%"}
                    // onKeyDown={handleKeyDown}
                    name={"doc-token-ref"}
                    disabled={false}
                    // onChange={handleChange}
                    // value={accountNumber}
                  />
                </div>
                <div style={{ flex: 0.025 }}></div>
                {/* Sign Ver button */}
                <div
                  style={{
                    display: "flex",
                    flex: 0.2,
                    justifyContent: "",
                    backgroundColor: "",
                  }}
                >
                  <ButtonComponent
                    buttonColor={"white"}
                    label={"Sign. Ver"}
                    buttonWidth={"80%"}
                    // buttonBackgroundColor={"rgb(21 163 183)"}
                    buttonHeight={"25px"}
                  />
                </div>
              </div>

              {/* value date */}
              <div style={{ display: "flex", flex: 1, backgroundColor: "", marginTop:"10px" }}>
                <div style={{ display: "", flex: 0.5 }}>
                  <InputField
                    label={"Value Date"}
                    labelWidth={"24.5%"}
                    inputWidth={"40%"}
                    type={"date"}
                    disabled={false}
                    required={true}
                    // value={date}
                  />
                </div>
              </div>

              {/*  narration 1 */}
              <div style={{ display: "flex", flex: 1, backgroundColor: "", marginTop:"10px"  }}>
                <div style={{ flex: 1 }}>
                  <TextAreaField
                    label={"Narration 1"}
                    labelWidth={"12.3%"}
                    inputWidth={"85%"}
                    required={true}
                  />
                </div>
              </div>

              {/* narration 2 */}
              <div style={{ display: "flex", flex: 1, backgroundColor: "", marginTop:"10px"  }}>
                <div style={{ flex: 1 }}>
                  <TextAreaField
                    label={"Narration 2"}
                    labelWidth={"12.3%"}
                    inputWidth={"85%"}
                  />
                </div>
              </div>
            </div>

            {/* right div */}
            <div
              style={{
                display: "flex",
                flex: 0.29,
                justifyContent: "center",
                backgroundColor: "whitesmoke",
                //   padding:"15px 10px"
              }}
              className="my-card"
            >
              <div
                style={{
                  flex: 0.98,
                  padding: "15px 5px 0px 5px",
                  backgroundColor: "",
                }}
              >
                <InputField
                  label={"Available balance"}
                  labelWidth={"42%"}
                  inputWidth={"58%"}
                  type={"text"}
                  disabled={true}
                  textAlign={"right"}
                  paddingRight={"3px"}
                  labelColor={"blue"}
                  marginBottom={"10px"}

                />
                <InputField
                  label={"Ledger Balance"}
                  labelWidth={"42%"}
                  inputWidth={"58%"}
                  type={"text"}
                  disabled={true}
                  textAlign={"right"}
                  paddingRight={"3px"}
                  marginBottom={"10px"}

                />
                <InputField
                  label={"Outstanding Debit"}
                  labelWidth={"42%"}
                  inputWidth={"58%"}
                  type={"text"}
                  labelColor={"red"}
                  disabled={true}
                  textAlign={"right"}
                  paddingRight={"3px"}
                  marginBottom={"10px"}

                />
                <InputField
                  label={"Acct Src Branch"}
                  labelWidth={"42%"}
                  inputWidth={"58%"}
                  type={"text"}
                  disabled={true}
                  textAlign={"right"}
                  paddingRight={"3px"}
                  marginBottom={"10px"}

                />
                <InputField
                  label={"Acct Status"}
                  labelWidth={"42%"}
                  inputWidth={"58%"}
                  type={"text"}
                  disabled={true}
                  textAlign={"right"}
                  paddingRight={"3px"}
                  marginBottom={"10px"}

                />
              </div>
            </div>
          </div>

          {/* insert, remove all*/}
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-evenly",
              marginTop: "20px",
              backgroundColor: "",
            }}
          >
            <div>
              <ButtonComponent
                buttonColor={"white"}
                label={"Insert"}
                buttonWidth={"100%"}
                buttonHeight={"30px"}
              />
            </div>
            <div>
              <ButtonComponent
                  buttonColor={"white"}
                label={"Remove All"}
                buttonWidth={"100%"}
                buttonHeight={"30px"}
              />
            </div>
            {/* dummy div for space */}
            <div> </div>
          </div>
        </div>
        {/*  right space */}
        <div style={{ flex: 0.025, backgroundColor: "" }}></div>
      </div>

      {/* DATATABLE */}
      <div style={{ display: "flex", flex: 1, marginTop: "13px" }}>
        <div style={{ flex: 0.025 }}></div>
        <div style={{ flex: 0.95 }}>
          <div style={{ flex: 1 }}>
            <DataTable
              columns={[
                "#",
                "Account No",
                "Name",
                "Ref No",
                "Narration",
                "Amount Dr",
                "Amount Cr",
                "Branch",
                "Trn Number"
              ]}
            />
          </div>
        </div>
        <div style={{ flex: 0.025 }}></div>
      </div>
    </div>
  );
}

export default MultipleBatch;
