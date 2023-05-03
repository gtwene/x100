import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  makeStyles,
  Slide
} from "@material-ui/core";
import clsx from "clsx";
import red from "@material-ui/core/colors/red";
import { Row, Col, Container, Form, Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { LOGOUT } from '../store/actions';
import { useDispatch } from 'react-redux';
import { API_SERVER } from '../config/constant';
import swal from 'sweetalert';
import axios from 'axios';
import $ from 'jquery'; 
import Spinner from "../components/Spinner";

const md5 = require("md5");

const useStyles = makeStyles(() => ({
  dialog: {
    borderRadius: 0
  },
  button: {
    borderRadius: 0,
    textTransform: "none",
    padding: 5
  },
  logout: {
    color: "#fff",
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700]
    }
  },
  countdown: {
    color: red[700]
  }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SessionTimeoutDialog = ({  open, countdown, loginModalStatus, onLogout, onContinue }) => {
  const classes = useStyles();

  const dispatcher = useDispatch();
  const logoutFunc = () => {
    
          const storeSystemAuditLog = async () => {
              await axios
              .post(API_SERVER + '/store-system-audit-logs', {
                  user_id: JSON.parse(localStorage.getItem("userInfo")).id,
                  page_accessed: "Logout",
                  page_url: "/logout"
              })
              .then(function (response) {
                  // console.log(response);
              })
              .catch(function (error) {
                  console.log(error);
              });
          }
          
          storeSystemAuditLog();

      dispatcher({ type: LOGOUT });
  };

  const [loginModalOpened, setLoginModalOpened] = useState(true);

  const [showLoginModal, setLoginModal] = React.useState(true);

  const customTheme = JSON.parse(localStorage.getItem('theme'));

  const headerImage = customTheme.theme.headerImage;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      document.getElementById("loginUser").click();
    }
  }

  function loginFunc() {

    let userInfo = JSON.parse(localStorage.getItem('userInfo'));

    var uname = userInfo.id;
    var passwd = document.getElementById("password").value;

    if(passwd === ""){

    let userInfo = JSON.parse(localStorage.getItem('userInfo'));

    // if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "en"){

      swal({title: "Password Field Is Required", text: "Please enter your Password"}).then((result) => {
        if(result){
          document.getElementById("password").focus();
        }
      });

    // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "fr"){

    //   swal({title: "Le champ Mot de passe est obligatoire", text: "S'il vous plait entrez votre mot de passe"}).then((result) => {
    //     if(result){
    //       document.getElementById("password").focus();
    //     }
    //   });

    // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "sp"){

    //   swal({title: "El campo de contraseña es obligatorio", text: "Por favor, introduzca su contraseña"}).then((result) => {
    //     if(result){
    //       document.getElementById("password").focus();
    //     }
    //   });

    // }

    } else {

    try {

        axios
        .post(API_SERVER + '/login', {
          password: passwd,
          username: uname
            })
            .then(function (response) {

                if (response.data.success) {
                    // console.log(JSON.stringify(response.data));

                    let userInfo = JSON.parse(localStorage.getItem('userInfo'));

                    // if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "en"){

                    swal({ title: "Session Restored", text: "Your session has been restored successfully!!", icon : "success" }).then((result) => {
                      if(result){
                      localStorage.setItem("loginModalOpened", "false");
                      setLoginModalOpened(false);
                      // window.location.reload();
                      setLoginModalOpened(true);
                      }
                    });

                    // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "fr"){

                    //   swal({ title: "Session Restaurée", text: "Votre session a été restaurée avec succès!!", icon : "success" }).then((result) => {
                    //     if(result){
                    //     localStorage.setItem("loginModalOpened", "false");
                    //     setLoginModalOpened(false);
                    //     // window.location.reload();
                    //     setLoginModalOpened(true);
                    //     }
                    //   });

                    // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "sp"){

                    //   swal({ title: "Sesión Restaurada", text: "Su sesión ha sido restaurada con éxito!!", icon : "success" }).then((result) => {
                    //     if(result){
                    //     localStorage.setItem("loginModalOpened", "false");
                    //     setLoginModalOpened(false);
                    //     // window.location.reload();
                    //     setLoginModalOpened(true);
                    //     }
                    //   });

                    // }

                } else {

                  let userInfo = JSON.parse(localStorage.getItem('userInfo'));

                  // if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "en"){

                    swal({title: "Something went wrong", text: "Login was unsuccessful", icon: "warning"}).then((result) => {
                      if(result){
                        document.getElementById("password").value = '';
                        document.getElementById("password").focus();
                      }
                    });

                  // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "fr"){

                  //   swal({title: "Credentails Inválidos", text: "Las credenciales que ingresó no coinciden con nuestros registros", icon: "warning"}).then((result) => {
                  //     if(result){
                  //       document.getElementById("password").value = '';
                  //       document.getElementById("password").focus();
                  //     }
                  //   });

                  // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "sp"){

                  //   swal({title: "Credentails inválidos", text: "Las credenciales que ingresó no coinciden con nuestros registros", icon: "warning"}).then((result) => {
                  //     if(result){
                  //       document.getElementById("password").value = '';
                  //       document.getElementById("password").focus();
                  //     }
                  //   });

                  // }

                }
            })
            .catch(function (error) {
                // console.log(error);
                // return swal(error.message, error.stack);
                let userInfo = JSON.parse(localStorage.getItem('userInfo'));

                // if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "en"){
                  return swal("Network Error", "No connection to database / web server.");
                // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "fr"){
                //   return swal("Erreur Réseau", "Le serveur est actuellement en panne. La connexion a échoué");
                // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "sp"){
                //   return swal("Error de Red", "El servidor está actualmente caído. No se pudo iniciar sesión");
                // }
            });
    } catch (err) {
        // console.error(err);
        // return swal(err.message, err.stack);
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));

        // if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "en"){
          return swal("Network Error", "No connection to database / web server.");
        // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "fr"){
        //   return swal("Erreur Réseau", "Le serveur est actuellement en panne. La connexion a échoué");
        // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "sp"){
        //   return swal("Error de Red", "El servidor está actualmente caído. No se pudo iniciar sesión");
        // }
    }

    }

  }


  function LoginModal(props) {
    return (
        <Modal
        {...props}
        size="sm"
        style={{ backdropFilter: "blur(5px)", backdrop: "static" }}
        className='zoomPage backdrop-opacity-10 backdrop-invert bg-black/50'
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + headerImage + `)` }}>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="flex flex-end -mr-3" style={{ padding: "11px", fontSize: "16px", color: "white" }}>
                &nbsp;&nbsp;&nbsp;&nbsp; Your Login Session Has Expired
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <span style={{ textAlign: "center" }}>
        <div id="branchText1" className="mb-4">
        <i style={{ fontSize: "30px", fontSize: "25px" }} className="feather icon-unlock auth-icon" />
        </div>
        <hr style={{ visibility: "hidden", marginTop: "-30px" }} />
        <h4 className="mb-4" id='branchText2' style={{ fontWeight: "lighter", fontSize: "17px", color: "grey" }}>COOPTECH PLUS</h4>
        <hr className='text-center' id='branchText3' style={{ width: "100%", marginTop: "-10px", marginBottom: "10px" }}/>
        </span>

          <p style={{ fontSize: "15px", textAlign: "center" }}>Please Login Below</p>
          <hr />
          <form onSubmit={function (e) { e.preventDefault() }}>
              {/* <div className="form-group mb-3">
                  <input
                      className="form-control"
                      label="User ID"
                      placeholder="User ID"
                      onKeyDown={handleKeyDown}
                      name="username"
                      id="username"
                      type="username"
                      required="required"
                  />
              </div> */}
              <div className="form-group mb-3">
                  <input
                      className="form-control"
                      label="Password"
                      placeholder="Password"
                      onKeyDown={handleKeyDown}
                      name="password"
                      id="password"
                      type="password"
                      required="required"
                  />
              </div>

              <Row>
                  <Col mt={2} style={{  }}>

                      <Button id="loginUser" onClick={function(){ loginFunc(); }} className="btn-block w-full" color="primary" size="large" style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + headerImage + `)`, color: "white", textTransform: "capitalize", fontSize: "14px" }} type="button">
                          Restore Session
                      </Button>

                      <Button onClick={function(){ logoutFunc(); }} className="btn-block w-full" color="primary" size="large" style={{ background: "red", color: "white", marginTop: "15px", textTransform: "capitalize", marginBottom: "-15px", fontSize: "14px" }} type="button">
                          End Session
                      </Button>
                  </Col>
              </Row>

              <br />
          </form>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button style={{ background: "#0047ab", color: "white" }} variant='dark' onClick={props.onHide}>Close</Button>
          <Button style={{ background: "#0047ab", color: "white" }} variant='dark'>Save</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }

  const { t } = useTranslation();

  return (

    <React.Fragment>

    <div style={{ background: "red" }}>
    <Dialog
      open={open}
      classes={{ paper: classes.dialog }}
      TransitionComponent={Transition}
      style={{ borderRadius: "30px", backdropFilter: "blur(5px)" }}
    >
      <DialogTitle>
      Session Timeout
      </DialogTitle>
      <hr style={{ marginTop: "-15px", marginBottom: "-2px" }} />
      <DialogContent>
        <Typography style={{ lineHeight: "1.9em" }} variant="body2">
        Your current session will expire in{" "}
          <span className={classes.countdown}>{countdown}</span> seconds.
        </Typography>
        <Typography style={{ lineHeight: "1.9em" }} variant="body2">Would you like to continue the session?</Typography>
      </DialogContent>
      <hr style={{ marginTop: "-2px", marginBottom: "5px" }} />
      <DialogActions style={{ marginBottom: "7px" }}>
        <Button
          onClick={onLogout}
          // variant="contained"
          className={clsx(classes.logout, classes.button)}
          style={{ borderRadius: "3px" }}
        >
          &nbsp;&nbsp;No, Logout&nbsp;&nbsp;
        </Button>
        &nbsp;
        <Button
          onClick={onContinue}
          id="continueTEAT"
          // variant="contained"
          className={classes.button}
          style={{ borderRadius: "3px", background: `url(` + window.location.origin + `/assets/images/headerBackground/` + headerImage + `)`, color: "white" }}
        >
          &nbsp;&nbsp;Continue&nbsp;Session&nbsp;&nbsp;
        </Button>
      </DialogActions>
    </Dialog>

    {(() => {

    // alert(loginModalOpened);

    if(localStorage.getItem("loginModalOpened") === "true") {
    return <LoginModal show={loginModalOpened} style={{ zIndex: "9999" }} />
    }

    })()}

    </div>

    </React.Fragment>
  );
}


export default SessionTimeoutDialog;