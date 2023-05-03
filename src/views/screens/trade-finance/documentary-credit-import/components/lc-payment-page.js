import React, {useState} from 'react'
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import ListOfValue from '../../../../../components/others/Fields/ListOfValue'
import InputField from '../../../../../components/others/Fields/InputField'
import ButtonComponent from '../../../../../components/others/Button/ButtonComponent';


function LCPaymentPage({exitbuttonclick}) {
    const [getTheme, setTheme] = useState(
        JSON.parse(localStorage.getItem("theme"))
      );
  return (
    <div style={{zoom:0.85}}>
         <div className="w-full">
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
              onClick={exitbuttonclick}
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
        </div>
        {/* <br /> */}
        <hr style={{margin:'10px 0'}} />
        {/* <br /> */}
        <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"3px",backgroundColor:"#ffffff"}}>
           <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
            <span>Data</span>
            </div>
            <div style={{padding:'10px'}}>
                <div style={{display:'flex',flex:1,marginBottom:'15px'}}>
                    <div style={{flex:0.5}}>
                        <ListOfValue label={'Trans Type'} labelWidth={'25%'} inputWidth={'70%'} required={true} />
                    </div>
                    <div style={{flex:0.2}}></div>
                    <div style={{flex:0.3}}>
                        <InputField label={"Batch Number"} labelWidth={'40%'} inputWidth={'55%'} />
                    </div>
                    <ButtonComponent
                  label={"Print Receipt"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"30px"}
                  buttonWidth={"100px"}
                  buttonColor={"white"}
                />
                    <span style={{ paddingLeft: 5, paddingRight: 5 }}>
                    <ButtonComponent
                  label={"Sign Ver"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"30px"}
                  buttonWidth={"100px"}
                  buttonColor={"white"}
                />
            </span>  
                </div>
            <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
            <div style={{display:'flex',flex:1,marginBottom:'15px'}}>
                <div style={{flex:0.38}}>
                    <InputField label={"LC Contract Reference Number"} labelWidth={'45%'} inputWidth={"50%"} disabled={true} required={true} />
                </div>
                <div style={{flex:0.02}}></div>
                <div style={{flex:0.35}}>
                    <ListOfValue label={"Drawing Reference Number"} labelWidth={'45%'} inputWidth={"50%"} required={true} />
                </div>
                <div style={{flex:0.25}}>
                    <InputField label={"Treasury Deal Number"} labelWidth={'50%'} inputWidth={"50%"} />
                </div>
            </div>
            <div style={{display:'flex',flex:1,marginBottom:'15px'}}>
                <div style={{flex:0.38}}>
                    <InputField label={"Credit Account"} labelWidth={'45%'} inputWidth={"50%"}  required={true} />
                </div>
                <div style={{flex:0.02}}></div>
                <div style={{flex:0.35}}>
                    <InputField label={"Debit Account"} labelWidth={'45%'} inputWidth={"50%"} required={true} />
                </div>
                <div style={{flex:0.25}}></div>
            </div>
            <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
            <div style={{display:'flex',flex:1}}>
                <div style={{flex:0.72}}>
                  <div style={{display:'flex',flex:1}}>
                    <div style={{flex:0.1}}></div>
                    <div style={{flex:0.4}}>
                        <div style={{marginBottom:'15px'}} >
                        <InputField labelWidth={"35%"} inputWidth={'60%'} disabled={true} label={'Account Name'} />
                        </div>
                        <div style={{marginBottom:'15px'}}>
                        <InputField labelWidth={"35%"} inputWidth={'60%'} disabled={true} label={"Product "} />
                        </div>
                    </div>
                    <div style={{flex:0.1}}></div>
                    <div style={{flex:0.4}}>
                        <div style={{marginBottom:'15px'}}>
                        <InputField labelWidth={"35%"} inputWidth={'60%'} disabled={true} label={'Account Name'} />
                        </div>
                        <div style={{marginBottom:'15px'}}>
                        <InputField labelWidth={"35%"} inputWidth={'60%'} disabled={true} label={"Product "} />
                        </div>
                    </div>
                  </div>
                  <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
                  <div style={{display:'flex',flex:1,marginBottom:'15px'}}>
                    {/* <div style={{flex:0.1}}></div> */}
                    <div style={{flex:0.5}}>
                        <InputField labelWidth={"48%"} inputWidth={'50%'} required={true} label={'Credit Amount'} />
                    </div>
                    <div style={{flex:0.1}}></div>
                    <div style={{flex:0.4}}>
                        <InputField  labelWidth={"35%"} inputWidth={'45%'} required={true} label={'Value Date'} />
                    </div>
                  </div>
                  <div style={{marginBottom:'15px'}}>
                    <InputField label={"Document Reference Number"} labelWidth={'24%'} inputWidth={"25%"}   />
                </div>
                  <div style={{marginBottom:'15px'}}>
                    <InputField label={"Credit Narration"} labelWidth={'24%'} inputWidth={"65%"}   />
                </div>
            <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
            <div style={{display:'flex',flex:1,marginBottom:'15px'}}>
            <div style={{flex:0.5}}>
                        <InputField labelWidth={"48%"} inputWidth={'15%'} required={true} disabled={true} label={'Acq Rate'} />
                    </div>
                    <div style={{flex:0.1}}></div>
                    <div style={{flex:0.4}}>
                        <div style={{display:'flex',flex:1,alignItems:'center'}}>
                       <div style={{flex:0.5}}>
                        <InputField  labelWidth={"70%"} inputWidth={'30%'} required={true} label={'Agreed Rate'} />
                        </div> 
                        <div style={{flex:0.5}}>
                        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
                        <ButtonComponent
                  label={"Pick Rate"}
                  background={
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`
                  }
                  buttonHeight={"30px"}
                  buttonWidth={"80px"}
                  buttonColor={"white"}
                />
            </span>
            </div>
                        </div>
                    </div>
                  </div>
            <hr style={{border:'2px solid blue',marginBottom:'15px'}} />
            <div style={{display:'flex',flex:1,marginBottom:'15px'}}>
                    {/* <div style={{flex:0.1}}></div> */}
                    <div style={{flex:0.5}}>
                        <InputField labelWidth={"48%"} inputWidth={'50%'} required={true} label={'Debit Amount'} />
                    </div>
                    <div style={{flex:0.1}}></div>
                    <div style={{flex:0.4}}>
                        <InputField  labelWidth={"55%"} inputWidth={'45%'} required={true} label={'Document Reference Number'} />
                    </div>
                  </div>
                  <div style={{marginBottom:'15px'}}>
                    <InputField label={"Debit Narration"} labelWidth={'24%'} inputWidth={"65%"} required={true}  />
                </div>
                </div>
                <div style={{flex:0.02}}></div>
                <div style={{flex:0.26}}>
        <div style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",borderRadius:"3px",backgroundColor:'whitesmoke'}}>
        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
            <span>Balance Before</span>
            </div>
            <div style={{padding:'10px'}}>
                <div style={{marginBottom:'15px'}}>
                <InputField disabled={true} labelWidth={'50%'} inputWidth={'45%'} label={"Customer Status"} />
                </div>
                <div style={{marginBottom:'15px'}}>
                <InputField disabled={true} labelWidth={'50%'} inputWidth={'45%'} label={"Available Balance"} />
                </div>
                <div style={{marginBottom:'15px'}}>
                <InputField disabled={true} labelWidth={'50%'} inputWidth={'45%'} label={"Book Balance"} />
                </div>
                <div style={{marginBottom:'15px'}}>
                <InputField disabled={true} labelWidth={'50%'} inputWidth={'45%'} label={"OD Limit"} />
                </div>
                <div style={{}}>
                <InputField disabled={true} labelWidth={'50%'} inputWidth={'45%'} label={"Account Source Branch"} />
                </div>
            </div>

            {/* <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white",height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
                    <span>Balance After</span>
                    </div>
                    <div style={{padding:'10px'}}>
                    <div style={{marginBottom:'15px'}}>
                    <InputField disabled={true} labelWidth={'45%'} inputWidth={'45%'} label={"Available"} />
                    </div>
                    <div style={{marginBottom:'15px'}}>
                    <InputField disabled={true} labelWidth={'45%'} inputWidth={'45%'} label={"Book Balance"} />
                    </div>
                </div> */}
           </div>
                <br />
                <div style={{boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius:"3px",backgroundColor:'whitesmoke'}}>
        <div style={{background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    getTheme.theme.headerImage +
                    `)`, color:"white", borderTopLeftRadius:'3px',borderTopRightRadius:'3px',height:'30px',fontSize:'1.3em',paddingLeft:'10px',alignItems:'center'}}>
            <span>Balance After</span>
            </div>
            <div style={{padding:'10px'}}>
                <div style={{marginBottom:'15px'}}>
                <InputField disabled={true} labelWidth={'50%'} inputWidth={'45%'} label={"Available Balance"} />
                </div>
                <div style={{marginBottom:'15px'}}>
                <InputField disabled={true} labelWidth={'50%'} inputWidth={'45%'} label={"Book Balance"} />
                </div>

            </div>
            </div>
                </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default LCPaymentPage