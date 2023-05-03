import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Container, Form, Modal} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { MDBIcon } from 'mdb-react-ui-kit';

const FormNotFound = () => {

  function capitalizeFirstCharacter(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    // Directly return the joined string
    return splitStr.join(' '); 
  }


  const customTheme = JSON.parse(localStorage.getItem('theme'));

  const [getTheme, setTheme] = useState(customTheme); 


  useEffect(()  => {

    // console.log(getTheme.theme.navBarColor);

  }, [getTheme]);

  const swal = require('sweetalert');

     function closeModal(formName){

      // let userInfo = JSON.parse(localStorage.getItem('userInfo'));

      // var closedModalName = t((formName.toLowerCase()).replace(/\s/g, ""));
      var closedModalName = capitalizeFirstCharacter(formName);

      // if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "en"){

      swal({
        title: "Are you sure?",
        text: "You're about to close the '" + closedModalName + "' form",
        icon: "warning",
        confirmButtonColor: '#8CD4F5',
        buttons: [ "Cancel", "Yes, Close Form" ],
        dangerMode: true,
        }).then((result) => {
        if (result) {
        var minimizedModals = [];
        var formName = localStorage.getItem('formName');
        if(localStorage.getItem("namesOfMinimizedModals")){
        minimizedModals = JSON.parse(localStorage.getItem("namesOfMinimizedModals"));
        minimizedModals = minimizedModals.filter(e => e !== formName);
        localStorage.setItem("namesOfMinimizedModals", JSON.stringify(minimizedModals));
        }
        document.getElementById('globalModalCloseBtn').click();
        // alert(localStorage.getItem("namesOfMinimizedModals"));
        }
       });
    
    // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "fr"){

    //   swal({
    //       title: "Es-tu Sûr?",
    //       text: "Vous êtes sur le point de fermer le '" + closedModalName + "' formulaire",
    //       icon: "warning",
    //       buttons: [ "Annuler", "Oui, Fermer Le Formulaire" ],
    //       dangerMode: true,
    //       }).then((result) => {
    //       if (result) {
    //       var minimizedModals = [];
    //       var formName = localStorage.getItem('formName');
    //       if(localStorage.getItem("namesOfMinimizedModals")){
    //       minimizedModals = JSON.parse(localStorage.getItem("namesOfMinimizedModals"));
    //       minimizedModals = minimizedModals.filter(e => e !== formName);
    //       localStorage.setItem("namesOfMinimizedModals", JSON.stringify(minimizedModals));
    //       }
    //       document.getElementById('globalModalCloseBtn').click();
    //       // alert(localStorage.getItem("namesOfMinimizedModals"));
    //       }
    //      });

    // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "sp"){

    //   swal({
    //       title: "Estas Seguro?",
    //       text: "Estas a punto de cerrar el '" + closedModalName + "' forma",
    //       icon: "warning",
    //       buttons: [ "Cancelar", "Sí, Cerrar Formulario" ],
    //       dangerMode: true,
    //       }).then((result) => {
    //       if (result) {
    //       var minimizedModals = [];
    //       var formName = localStorage.getItem('formName');
    //       if(localStorage.getItem("namesOfMinimizedModals")){
    //       minimizedModals = JSON.parse(localStorage.getItem("namesOfMinimizedModals"));
    //       minimizedModals = minimizedModals.filter(e => e !== formName);
    //       localStorage.setItem("namesOfMinimizedModals", JSON.stringify(minimizedModals));
    //       }
    //       document.getElementById('globalModalCloseBtn').click();
    //       // alert(localStorage.getItem("namesOfMinimizedModals"));
    //       }
    //      });

    // }

  }

  const { t } = useTranslation();

  return (
    <div style={{ zoom: 0.95 }}>

        <div style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }}>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
        <button className='btn btn-light' onClick={function (e) { e.preventDefault(); setMyApprovalLimit(!showMyApprovalLimit); }} style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="file-alt" /><br />New</button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
        <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="sync" /><br />Fetch</button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
        <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="sync" /><br />Refresh</button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
        <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="times" /><br />Cancel</button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
        <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="question-circle" /><br />Help</button>
        </span>

        <span style={{ paddingLeft: 5, paddingRight: 5 }}>
        <button className='btn btn-primary' onClick={() => document.getElementById("closeModalBTN").click()} style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + getTheme.theme.headerImage + `)` }}><MDBIcon style={{ color: "white", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="sign-out-alt" /><br />Exit</button>
        </span>

        </div> 


        <hr style={{ marginTop: "0px" }} />

        <p className="blinkText" style={{ fontSize: "16px", textAlign: "center", marginBottom: "65px", marginTop: "65px" }}>Sorry we are having trouble locating the form '<b>{ capitalizeFirstCharacter(localStorage.getItem('formName')) }</b>'. Kindly contact your system's administrator.</p>


         {/* <hr style={{ marginBottom: '10px', marginTop: "25px" }} />

        <div className="float-right -mr-2 -mb-0 pr-2">

        <button
          type="button"
          onClick={()=> document.getElementById("minimizeModal").click() }
          style={{ paddingLeft: "20px", paddingRight: "20px", color: "white" }}
          className="bg-gray-400 text-white text-sm font-medium rounded-sm px-3 py-2"
        >
          Minimize Modal
        </button>

        &nbsp;&nbsp;&nbsp;&nbsp;

        <button
            type="submit"
            onClick={()=> closeModal(localStorage.getItem('formName')) }
            className="bg-red-500 text-white text-sm font-medium rounded-sm px-3 py-2"
        >
          Close Modal
        </button>
        </div> */}
        
    </div>
  );
};

export default FormNotFound;