// import { padding } from "@mui/system";
import React from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Form,

  Card,
} from "react-bootstrap";

import "../index.css"
import { useTranslation } from 'react-i18next';
import InputField from "../../../../../components/others/Fields/InputField";
import ListOfValue from "../../../../../components/others/Fields/ListOfValue";
import SelectField from "../../../../../components/others/Fields/SelectField";
import ButtonComponent from "../../../../../components/others/Button/ButtonComponent";

function ACHCORIGINATION() {
  //const { t } = useTranslation();

  // const swal = require('sweetalert');

  // function closeModal(formName) {
  //     let userInfo = JSON.parse(localStorage.getItem('userInfo'));

  //     var closedModalName = t(formName.toLowerCase().replace(/\s/g, ''));

  //     if (userInfo.lang.toLowerCase().slice(0, 2) === 'en') {
  //         swal({
  //             title: 'Are you sure?',
  //             text: "You're about to close the '" + closedModalName + "' form",
  //             icon: 'warning',
  //             buttons: ['Cancel', 'Yes, Close Form'],
  //             dangerMode: true
  //         }).then((result) => {
  //             if (result) {
  //                 var minimizedModals = [];
  //                 var formName = localStorage.getItem('formName');
  //                 if (localStorage.getItem('namesOfMinimizedModals')) {
  //                     minimizedModals = JSON.parse(localStorage.getItem('namesOfMinimizedModals'));
  //                     minimizedModals = minimizedModals.filter((e) => e !== formName);
  //                     localStorage.setItem('namesOfMinimizedModals', JSON.stringify(minimizedModals));
  //                 }
  //                 document.getElementById('globalModalCloseBtn').click();
  //                 // alert(localStorage.getItem("namesOfMinimizedModals"));
  //             }
  //         });
  //     } else if (userInfo.lang.toLowerCase().slice(0, 2) === 'fr') {
  //         swal({
  //             title: 'Es-tu Sûr?',
  //             text: "Vous êtes sur le point de fermer le '" + closedModalName + "' formulaire",
  //             icon: 'warning',
  //             buttons: ['Annuler', 'Oui, Fermer Le Formulaire'],
  //             dangerMode: true
  //         }).then((result) => {
  //             if (result) {
  //                 var minimizedModals = [];
  //                 var formName = localStorage.getItem('formName');
  //                 if (localStorage.getItem('namesOfMinimizedModals')) {
  //                     minimizedModals = JSON.parse(localStorage.getItem('namesOfMinimizedModals'));
  //                     minimizedModals = minimizedModals.filter((e) => e !== formName);
  //                     localStorage.setItem('namesOfMinimizedModals', JSON.stringify(minimizedModals));
  //                 }
  //                 document.getElementById('globalModalCloseBtn').click();
  //                 // alert(localStorage.getItem("namesOfMinimizedModals"));
  //             }
  //         });
  //     } else if (userInfo.lang.toLowerCase().slice(0, 2) === 'sp') {
  //         swal({
  //             title: 'Estas Seguro?',
  //             text: "Estás a punto de cerrar '" + closedModalName + "' forma",
  //             icon: 'warning',
  //             buttons: ['Cancelar', 'Sí, Cerrar Formulario'],
  //             dangerMode: true
  //         }).then((result) => {
  //             if (result) {
  //                 var minimizedModals = [];
  //                 var formName = localStorage.getItem('formName');
  //                 if (localStorage.getItem('namesOfMinimizedModals')) {
  //                     minimizedModals = JSON.parse(localStorage.getItem('namesOfMinimizedModals'));
  //                     minimizedModals = minimizedModals.filter((e) => e !== formName);
  //                     localStorage.setItem('namesOfMinimizedModals', JSON.stringify(minimizedModals));
  //                 }
  //                 document.getElementById('globalModalCloseBtn').click();
  //                 // alert(localStorage.getItem("namesOfMinimizedModals"));
  //             }
  //         });
  //     }
  // }
  return (
    <div>
      <div className="zoom3">
        {/* <div
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
          </div> */}
        <hr />
        <header
                className="text-white text-base py-1 rounded-t font-semibold px-2 uppercase"
                style={{
                 background: "rgb(21 163 183)",
                 
                textAlign: "center"
                }}
              >
                ACH Credit Entry
              </header>
              
        <Row className="g-2">
          <Row>
            <Col md={8}>
              <br />
              <Card
                className="bg-light"
                border="light"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                }}
              >
                <Card.Body >
                  <div style={{width:"",background: "" }}>
                    <div className="d-flex align-items center justify-content-end" >
                      <InputField
                        label={"Deal No (Except Rate)"}
                        type="number"
                        labelWidth={"40%"}
                        inputWidth={"30%"}
                      />
                    </div>
                    <br />
                    <div className="achc--payers" style={{background: ""}}>
                      <div className="payer--fields" style={{background: ""}}>
                        <div className="flex--1">
                          <div style={{flex: 0.8}}>
                          <InputField
                          label={"Payer Account"}
                          labelWidth={"35%"}
                          inputWidth={"60%"}
                          type="number"
                          required={true}
                        />
                          </div>
                       
                        {/* &nbsp; */}
                        <div style={{flex: 0.2}}>
                        <InputField disabled={true} inputWidth={"100%"} />
                        </div>
                        
                        </div>
                       
                      </div>
                      
                      <div className="payer--btn" style={{background: ""}}>
                        <ButtonComponent
                          label="Sign Ver"
                          buttonBackgroundColor= "rgb(21 163 183)"
                          buttonWidth="50%"
                          buttonHeight="25px"
                          buttonColor="white"
                        />
                      </div>
                    </div>
                    <br />

                    <div className="achc--payer"style={{background: ""}}>
                      <div className="account-name" style={{background: ""}}>
                        <InputField
                          label={"Account Name"}
                          labelWidth={"28%"}
                          inputWidth={"72%"}
                          type="text"
                        />
                      </div>
                    
                    </div>
                    <br />
                    <div className="achc--payer">
                      <div className="account-name">
                        <InputField
                          label={"Product"}
                          labelWidth={"28%"}
                          inputWidth={"48%"}
                          type="text"
                          disabled={true}
                        />
                      </div>
                      
                    </div>
                    <br />
                    <div className="achc--payer" >
                      <div className="account-name">
                        <ListOfValue
                          label={"Receiving Bank"}
                          labelWidth={"28%"}
                          inputWidth={"48%"}
                          required={true}
                        />
                      </div>
                     
                    </div>
                    <br />
                    <div className="achc--payer" style={{background: ""}}>
                      <div className="beneficiary-account" style={{background: ""}}>
                        <InputField
                          label={"Beneficiary Account"}
                          labelWidth={"35%"}
                          inputWidth={"61.3%"}
                          type="number"
                          required={true}
                        />
                      </div>
                      <div className="space"></div>
                      <div className="date--flex" style={{background: ""}}>
                        <InputField
                          label={"Value Date"}
                          type="date"
                          required={true}
                          labelWidth={"35%"}
                          inputWidth={"65%"}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="achc--payer">
                      <div className="account-name">
                        <InputField
                          label={"Beneficiary Name"}
                          labelWidth={"28%"}
                          inputWidth={"72%"}
                          type="text"
                          required={true}
                        />
                      </div>
                      
                    </div>
                    <br />
                    <div className="achc--payer" style={{background: ""}}>
                      <div className="currency" style={{background: ""}}>
                      <SelectField
                          label={"Currency"}
                          labelWidth={"48%"}
                          inputWidth={"52%"}
                        />
                      </div>
                      <div className="space"></div>
                      <div className="amount" style={{background: ""}}>
                        <div className="achc--payer">
                        <div className="account-name">
                        <InputField
                            label={"Amount"}
                            labelWidth={"30%"}
                            inputWidth={"70%"}
                            type="number"
                            required={true}
                          />
                        </div>
                        <div className="space"></div>
                        <div className="amount-disabled">
                        <InputField disabled={true} inputWidth={"100%"} />
                        </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="achc--payer" style={{background: ""}}>
                      <div className="beneficiary-account" style={{background: ""}}>
                        <InputField
                          label={"Rate"}
                          labelWidth={"36.3%"}
                          inputWidth={"61.3%"}
                          type="text"
                          required={true}
                        />
                      </div>
                      <div className="space"></div>
                      <div className="date--flex" style={{background: ""}}>
                        <InputField
                          label={"Debit Amount"}
                          type="number"
                          required={true}
                          labelWidth={"40%"}
                          inputWidth={"60%"}
                          disabled={true}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="achc--payer">
                      <div className="account-name">
                        <InputField
                          label={"Purpose of Transfer"}
                          labelWidth={"29%"}
                          inputWidth={"68%"}
                          type="text"
                          required={true}
                        />
                      </div>
                      
                    </div>
                    
                   <br />
                    <div className="achc--payer" style={{background: ""}}>
                    <div className="account-name" style={{background: ""}}>
                        <div className="achc--payer" style={{background: ""}}>
                        <div className="account-name"style={{background: ""}}>
                        <InputField
                            label={"Scan Document Number"}
                            labelWidth={"40%"}
                            inputWidth={"60%"}
                            type="number"
                            required={true}
                          />
                        </div>
                        <div className="small-space"></div>
                        <div className="amount-disabled" style={{background: ""}}>
                        <ButtonComponent
                          label="View Doc"
                          buttonBackgroundColor="rgb(21 163 183)"
                          buttonWidth="100%"
                          buttonHeight="25px"
                          buttonColor="white"
                        />
                        </div>
                        </div>
                      </div>
                      
                    
                      <div className="doc-number" style={{background: ""}}>
                      <InputField
                          label={"Document Reference"}
                          labelWidth={"58%"}
                          inputWidth={"42%"}
                          type="number"
                        />
                      </div>
                    </div>
                    
                  </div>
                </Card.Body>
              </Card>
            </Col>
            {/* Right Card */}
            <Col md={4}>
              <br />
              <Card
                className="bg-light"
                border="light"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                }}
              >
                <Card.Body>
                  <div
                    className="read-only-section"

                    // style={{ flex: 0.3 }}
                  >
                    <header
                className="text-white text-base py-1 rounded-t font-semibold px-2 uppercase"
                style={{
                  background: "rgb(21 163 183)",
                 textAlign: "center",
                 marginLeft: '-18px',
                 marginRight: '-18px',
                 marginTop: '-18px'
                }}
              >
                Account Balance
              </header> 
                    <br />
                    <InputField
                      label={"Avaialable Balance"}
                      type="number"
                      labelWidth={"70%"}
                      inputWidth={"70%"}
                      disabled={true}
                    />
                    <br />
                    <InputField
                      label={"Ledger Balance"}
                      type="number"
                      labelWidth={"70%"}
                      inputWidth={"70%"}
                      disabled={true}
                    />
                    <br />
                    <header
                className="text-white text-base py-1 rounded-t font-semibold px-2 uppercase"
                style={{
                background: "rgb(21 163 183)",
                textAlign: "center",
                 marginLeft: '-18px',
                 marginRight: '-18px',
                }}
              >
                ACH Maximum Limit
              </header> 
              <br />
                    <div className="d-flex justify-content-end">
                      <InputField
                        type="number"
                        disabled={true}
                        inputWidth={"100%"}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </div>
    </div>
  );
}
export default ACHCORIGINATION;
