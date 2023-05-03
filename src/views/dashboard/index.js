import React, { useState, useEffect, Suspense } from 'react';
import loadable from '@loadable/component';
import useWindowSize from '../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

import DefaultBreadcrumb from '../../components/Breadcrumbs/DefaultBreadcrumb';
import ModernBreadcrumb from '../../components/Breadcrumbs/ModernBreadcrumb';
import StylishBreadcrumb from '../../components/Breadcrumbs/StylishBreadcrumb';

import DefaultHeader from '../../components/Headers/DefaultHeader';
import ModernHeader from '../../components/Headers/ModernHeader';
import StylishHeader from '../../components/Headers/StylishHeader';

import { Link } from 'react-router-dom';
import { AiFillCloseSquare } from 'react-icons/ai';

import { FiInfo, FiList, FiMaximize, FiMinimize } from 'react-icons/fi';

import DefaultMainLayout from './layouts/DefaultLayout';
import ModernMainLayout from './layouts/ModernLayout';
import StylishMainLayout from './layouts/StylishLayout';

import DefaultNavBar from '../../components/NavBars/DefaultNavBar';
import ModernNavBar from '../../components/NavBars/ModernNavBar';
import StylishNavBar from '../../components/NavBars/StylishNavBar';

import GlobalModalHeader from '../../components/Headers/GlobalModalHeader';

import Spinner from "../../components/Spinner";
import Modal from 'react-bootstrap/Modal';

import KnowledgeDatabase from '../../components/KnowledgeDB';
// import Modal from './components/Modal';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import axios from "axios";
import { API_SERVER } from '../../config/constant';

import Cases from '../screens/cases';


import {
    MDBIcon
  } from 'mdb-react-ui-kit';

const Dashboard = () => {

    const { t } = useTranslation();
    
    const [modalSize, setModalSize] = useState("xl");
    const [fullScreen, setFullscreen] = useState(false);

    const [opened, setOpened] = useState(false);

    const handle = useFullScreenHandle();

    const windowSize = useWindowSize();

    // Set the default theme if no theme has been sent yet
    if(!(localStorage.getItem('theme'))){
        localStorage.setItem('theme', '{"theme": {"headerImage":"headerBGDefault.jpg", "backgroundImage":"bgDefault.jpg", "navBarColor":"#f1ffff", "breadcrumbBGColor": "#dbdbdb47", "textColor":"black", "cardBGColor":"", "fontFamily":null}}');
    } 

    if(!(localStorage.getItem("layoutType"))){
        localStorage.setItem('layoutType', 0);
    }

    localStorage.setItem("selectedParentMenuItem", '/');
    localStorage.setItem("selectedChildMenuItem", 'dash');

    // if(!localStorage.getItem('counter')){
    // localStorage.setItem('counter', 1);
    // }
    
    const customTheme = JSON.parse(localStorage.getItem('theme'));

    // console.log(customTheme);

    const [getTheme, setTheme] = useState(customTheme);

    const [getCustomLayoutType, setCustomLayoutType] = useState(JSON.parse(localStorage.getItem("layoutType")));

    const [loading, setLoading] = useState(false);

    const [showGlobalModal, setGlobalModal] = useState(false);

    const backdropHandeler = () => {
      setLoading(!loading);
      setTimeout(() => {
        setLoading(!loading);
        setShow(!show);
      }, 1000);
    };


      function closeMinimizedModal(closedForm){
    
          let userInfo = JSON.parse(localStorage.getItem('userInfo'));

          var modalName = t((closedForm.toLowerCase()).replace(/\s/g, ""));

          // if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "en"){

          swal({
            title: "Are you sure?",
            text: "You're about to close the '" + modalName + "' form",
            icon: "warning",
            buttons: [ "Cancel", "Yes, Close Form" ],
            dangerMode: true,
            }).then((result) => {
            if (result) {
            var minimizedModals = [];
            if(localStorage.getItem("namesOfMinimizedModals")){
            minimizedModals = JSON.parse(localStorage.getItem("namesOfMinimizedModals"));
            minimizedModals = minimizedModals.filter(e => e !== closedForm);
            localStorage.setItem("namesOfMinimizedModals", JSON.stringify(minimizedModals));
            }
            document.getElementById((closedForm.toLowerCase()).replace(/\s/g, "")).click();
            // alert(localStorage.getItem("namesOfMinimizedModals"));
            } 
          });
        
      //   } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "fr"){

      //     swal({
      //         title: "Es-tu Sûr?",
      //         text: "Vous êtes sur le point de fermer le '" + modalName + "' formulaire",
      //         icon: "warning",
      //         buttons: [ "Annuler", "Oui, Fermer Le Formulaire" ],
      //         dangerMode: true,
      //         }).then((result) => {
      //         if (result) {
      //         var minimizedModals = [];
      //         if(localStorage.getItem("namesOfMinimizedModals")){
      //         minimizedModals = JSON.parse(localStorage.getItem("namesOfMinimizedModals"));
      //         minimizedModals = minimizedModals.filter(e => e !== closedForm);
      //         localStorage.setItem("namesOfMinimizedModals", JSON.stringify(minimizedModals));
      //         }
      //         document.getElementById((closedForm.toLowerCase()).replace(/\s/g, "")).click();
      //         // alert(localStorage.getItem("namesOfMinimizedModals"));
      //         }
      //        });

      //   } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "sp"){

      //     swal({
      //         title: "Estas Seguro?",
      //         text: "Estas a punto de cerrar el '" + modalName + "' forma",
      //         icon: "warning",
      //         buttons: [ "Cancelar", "Sí, Cerrar Formulario" ],
      //         dangerMode: true,
      //         }).then((result) => {
      //         if (result) {
      //         var minimizedModals = [];
      //         if(localStorage.getItem("namesOfMinimizedModals")){
      //         minimizedModals = JSON.parse(localStorage.getItem("namesOfMinimizedModals"));
      //         minimizedModals = minimizedModals.filter(e => e !== closedForm);
      //         localStorage.setItem("namesOfMinimizedModals", JSON.stringify(minimizedModals));
      //         }
      //         document.getElementById((closedForm.toLowerCase()).replace(/\s/g, "")).click();
      //         // alert(localStorage.getItem("namesOfMinimizedModals"));
      //         }
      //        });

      //   }

      }



      function handleIconClickEvent(formName){

            const storeSystemAuditLog = async () => {
                await axios
                .post(API_SERVER + '/store-system-audit-logs', {
                    user_id: JSON.parse(localStorage.getItem("userInfo")).id,
                    page_accessed: formName,
                    page_url: document.location.pathname + "/" + formName.replace(/\s+/g, '-').toLowerCase()
                })
                .then(function (response) {
                    // console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            
            storeSystemAuditLog();

            // alert(formName);
            if(document.getElementById("minimizeContainer")){
            document.getElementById("minimizeContainer").click();
            }
            localStorage.setItem('formName', formName);
            
            setLoading(!loading);
            setTimeout(() => {
              setGlobalModal(true);
              setLoading(loading);
            }, 0);
          }

    function capitalizeFirstCharacter(str) {
        if(str){
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        return splitStr.join(' '); 
        }
     }

    function setCustomTheme(theme){

        localStorage.setItem('theme', JSON.stringify(JSON.parse(theme)));
        // location.reload();

        setTheme(JSON.parse(localStorage.getItem('theme')));
    
      }


      const GlobalModal = ({ showModal, setShowModal }) => {

      const handleClose = () => setShowModal(false);
      const handleShow = () => setShowModal(true);

        return (
          <Modal
            id="globalModal111"
            key="globalModal"
            backdrop="static"
            size={modalSize}
            fullscreen={fullScreen}
            show={showModal}
            onHide={handleClose}
            className=""
            // centered
          >
            <Modal.Header>
              <GlobalModalHeader
                className=""
                fullScreen={fullScreen}
                setFullscreen={setFullscreen}
                modalSize={modalSize}
                setModalSize={setModalSize}
                breadCrumbDetails={
                  <>
                    <br />
                    <b className="text-white" style={{ fontSize: "16px" }}>
                      {/* <span id="parentLoc">{ capitalizeFirstCharacter( (((document.location.pathname.split('/').slice(0,2) + ""))).replace(/,/g, '').replace(/-/g, ' ')) } </span>
            &nbsp; / &nbsp;  */}
                      {/* { capitalizeFirstCharacter(capitalizeFirstCharacter(document.location.pathname.split('/').slice(2,4) + "").replace(/-/g, ' ')) }  */}
                      Dashboard &nbsp; / &nbsp;
                      <span style={{ color: "whitesmoke" }}>
                        {capitalizeFirstCharacter(
                          localStorage.getItem("formName")
                        )}
                      </span>
                    </b>
                    <br />
                    <br />
                  </>
                }
                maximized={maximize}
                setMaximize={setMaximize}
                setCustomTheme={setCustomTheme}
                headerImage={getTheme.theme.headerImage}
              />

              <hr style={{ marginTop: "-10%" }} />
            </Modal.Header>
            <Modal.Body
              style={{ background: "whitesmoke", marginTop: "-10px" }}
            >
              <Cases
                setModalSize={setModalSize}
                // setFullscreen={setFullscreen}
              />

              <br />
            </Modal.Body>
            <Modal.Footer style={{ display: "none" }}>
              {/* <Button id="globalModalCloseBtn" style={{ background: "#0047AB", color: "white", paddingLeft: "20px", paddingRight: "20px" }} variant='dark' onClick={props.onHide}>Close Form</Button> */}

              <button
                type="button"
                id="globalModalCloseBtn"
                style={{
                  background: "#0047AB",
                  color: "white",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                }}
                onClick={handleClose}
                className="text-white text-sm font-medium rounded-sm px-2 py-1"
              >
                Close Modal
              </button>
            </Modal.Footer>
          </Modal>
        );
      }


    // return alert(JSON.stringify(getTheme.theme.headerImage));


    useEffect(()  => {

      setModalSize(modalSize);

    }, [modalSize]); 

    useEffect(()  => {

        // Page Title
        document.title = "Dashboard | X100";

        // console.log(customTheme);

        // Set properties of page body (main container) here
        document.body.style.backgroundImage = `url(` + window.location.origin + `/assets/images/background/` + getTheme.theme.backgroundImage + `)`;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";

        if(document.getElementById("defaultNavBar")){
        // Set Default NavBar Color
        document.getElementById("defaultNavBar").style.backgroundColor = getTheme.theme.navBarColor;
        }

        if(document.getElementById("stylishNavBar")){
        // Set Stylish NavBar Color
        document.getElementById("stylishNavBar").style.backgroundColor = getTheme.theme.navBarColor;
        }
    
    }, [getTheme]);  

    // return alert(JSON.stringify(getTheme.theme));

    const [maximize, setMaximize] = useState(false);

    useEffect(()  => {

        // console.log(maximize);

        if(maximize === true){
            const maximizeBTN = document.getElementById("maximizeBTN");
            maximizeBTN.click();
        } 

        if(document.getElementById("minimizeBTN")){

        if(maximize === false){
            const minimizeBTN = document.getElementById("minimizeBTN");
            minimizeBTN.click();
        } 

        }

    }, [maximize]);  

    return (
    
        <>

        {(() => {

          if (loading) return <Spinner />;

          if(showGlobalModal) return <GlobalModal showModal={showGlobalModal} setShowModal={setGlobalModal} />;
          
         })()}

        <button id="maximizeBTN" style={{ display: "none" }} onClick={handle.enter} >Max</button>

        {handle.active && ( <button id="minimizeBTN" style={{ display: "none" }} onClick={handle.exit} /> )}

        <FullScreen handle={handle}>

        <div style={{ marginLeft: "5%" }} className='mainComponent mb-10 mr-4'>

        {/* <Modal onClick={() => setOpened(true)} /> */}


        {(() => {

        // Default Layout
        if(JSON.parse(localStorage.getItem("layoutType")) === 0) { return (

            <>
            
            <DefaultHeader setLoading={setLoading} setGlobalModal={setGlobalModal} className='' maximized={maximize} setMaximize={setMaximize} setCustomTheme={setCustomTheme} headerImage={getTheme.theme.headerImage} setCustomLayoutType={setCustomLayoutType} />
            
            <DefaultBreadcrumb breadcrumbTitle="Dashboard" className='' breadcrumbBGColor={ getTheme.theme.breadcrumbBGColor } />

            <DefaultNavBar className='' />

            <DefaultMainLayout className='' />

            <KnowledgeDatabase bgImage={ getTheme.theme.navBarColor } />

            </>
        
        ); }

        // Modern Layout
        if(JSON.parse(localStorage.getItem("layoutType")) === 1) { return (

            <>

            <ModernHeader setLoading={setLoading} setGlobalModal={setGlobalModal} className='' maximized={maximize} setMaximize={setMaximize} setCustomTheme={setCustomTheme} headerImage={getTheme.theme.headerImage} setCustomLayoutType={setCustomLayoutType} />
            
            <ModernBreadcrumb breadcrumbTitle="Dashboard" className='' breadcrumbBGColor={ getTheme.theme.breadcrumbBGColor } />

            <ModernNavBar className='' />

            <ModernMainLayout className='' />

            <KnowledgeDatabase bgImage={ getTheme.theme.navBarColor } />

            </>
        
        ); }

        // Stylish Layout
        if(JSON.parse(localStorage.getItem("layoutType")) === 2) { return (

            <>

            <StylishHeader setLoading={setLoading} setGlobalModal={setGlobalModal} className='' maximized={maximize} setMaximize={setMaximize} setCustomTheme={setCustomTheme} headerImage={getTheme.theme.headerImage} setCustomLayoutType={setCustomLayoutType} />

            <StylishBreadcrumb breadcrumbTitle="Dashboard" breadcrumbTitleOptional="" className='' breadcrumbBGColor={ getTheme.theme.breadcrumbBGColor } />

            <StylishNavBar className='' />

            <StylishMainLayout className='' />

            <KnowledgeDatabase bgImage={ getTheme.theme.navBarColor } />

            </>
        
        ); }

        })()}
                

        </div>


        {(() => {
        
         const PageName = capitalizeFirstCharacter( (((document.location.pathname.split('/').slice(0,2) + ""))).replace(/,/g, '').replace(/-/g, ' '));        

        // Default Layout
        if(getCustomLayoutType === 0) {
          
          return (

            <>

            <div id="minModal" className="space-x-2 defaultMinModal flex" style={{ width: "1250px", marginLeft: "-3px" }}>

            {(() => {
        
            var temp = [];
            var minimizedModals = [];
            minimizedModals = JSON.parse(localStorage.getItem("namesOfMinimizedModals"));

            if(minimizedModals){

            for (let i = 0; i < minimizedModals.length; i++) {
              const minimizedModal = minimizedModals[i];

              temp.push(
                <Link to="#" key={JSON.stringify(i)} id={(minimizedModal.toLowerCase()).replace(/\s/g, "")} style={{ color: "grey", marginLeft: "266px", marginRight: "-257px" }}><div className="mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                    <div style={{ overflow: "scroll" }} className="flex -mb-2.5">
                        {/* <FiMinimize onClick={function () { swal({ title: t((minimizedModal.toLowerCase()).replace(/\s/g, "")) }) }}
                            className="h-6 w-6 mt-3 bg-gray-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mr-2.5 duration-300"
                        /> */}
                        <FiMaximize onClick={function () { handleIconClickEvent(minimizedModal); }}
                            className="maximizeBTN h-6 w-6 mt-3 mr-2.5 bg-blue-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        />
                        <AiFillCloseSquare onClick={function () { closeMinimizedModal(minimizedModal); }}
                        className="closeBTN h-6 w-6 mt-3 bg-red-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                    </div>
                    <div style={{ whiteSpace: "nowrap", background: getTheme.theme.navBarColor, color: "black", paddingTop: "13px", paddingBottom: "7px", paddingLeft: "10px", paddingRight: "10px" }} className="mr-1 rounded-t-md border border-gray-200 shadow-xl">
                        { minimizedModal }
                    </div>
                </div></Link>
              );
            }

        return temp;

        }
       
        })()}

            </div>

            </>
        
        ); }



        // Modern Layout
        if(getCustomLayoutType === 1) { 
          
          return (

            <>

            <div id="minModal" className="space-x-2 modernMinModal flex" style={{ width: "1250px", marginLeft: "-10px" }}>

            {(() => {
        
            var temp = [];
            var minimizedModals = [];
            minimizedModals = JSON.parse(localStorage.getItem("namesOfMinimizedModals"));

            if(minimizedModals){

            for (let i = 0; i < minimizedModals.length; i++) {
              const minimizedModal = minimizedModals[i];

              temp.push(
                <Link to="#" key={JSON.stringify(i)} id={(minimizedModal.toLowerCase()).replace(/\s/g, "")} style={{ color: "grey", marginLeft: "109px", marginRight: "-102px" }}><div className="mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                    <div style={{ overflow: "scroll" }} className="flex -mb-2.5">
                        {/* <FiMinimize onClick={function () { swal({ title: t((minimizedModal.toLowerCase()).replace(/\s/g, "")) }) }}
                            className="h-6 w-6 mt-3 bg-gray-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mr-2.5 duration-300"
                        /> */}
                        <FiMaximize onClick={function () { handleIconClickEvent(minimizedModal); }}
                            className="maximizeBTN h-6 w-6 mt-3 mr-2.5 bg-blue-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                        />
                        <AiFillCloseSquare onClick={function () { closeMinimizedModal(minimizedModal); }}
                        className="closeBTN h-6 w-6 mt-3 bg-red-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                    </div>
                    <div style={{ whiteSpace: "nowrap", background: getTheme.theme.navBarColor, color: "black", paddingTop: "13px", paddingBottom: "7px", paddingLeft: "10px", paddingRight: "10px" }} className="mr-1 rounded-t-md border border-gray-200 shadow-xl">
                        { minimizedModal }
                    </div>
                </div></Link>
              );
            }

        return temp;

        }
       
        })()}

            </div>

            </>
        
        ); }

        // Stylish Layout
        if(getCustomLayoutType === 2) { 
          
          return (

            <>

        <div id="minModal" className="space-x-2 stylishMinModal flex" style={{ width: "1250px", marginLeft: "-10px" }}>
         
        {(() => {
        
        var temp = [];
        var minimizedModals = [];
        minimizedModals = JSON.parse(localStorage.getItem("namesOfMinimizedModals"));

        if(minimizedModals){

        for (let i = 0; i < minimizedModals.length; i++) {
          const minimizedModal = minimizedModals[i];

          temp.push(
            <Link to="#" key={JSON.stringify(i)} id={(minimizedModal.toLowerCase()).replace(/\s/g, "")} style={{ color: "grey", marginLeft: "109px", marginRight: "-102px" }}><div className="mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                <div style={{ overflow: "scroll" }} className="flex -mb-2.5">
                    {/* <FiMinimize onClick={function () { swal({ title: t((minimizedModal.toLowerCase()).replace(/\s/g, "")) }) }}
                        className="h-6 w-6 mt-3 bg-gray-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mr-2.5 duration-300"
                    /> */}
                    <FiMaximize onClick={function () { handleIconClickEvent(minimizedModal); }}
                        className="maximizeBTN h-6 w-6 mt-3 mr-2.5 bg-blue-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                    />
                    <AiFillCloseSquare onClick={function () { closeMinimizedModal(minimizedModal); }}
                    className="closeBTN h-6 w-6 mt-3 bg-red-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                </div>
                <div style={{ whiteSpace: "nowrap", background: getTheme.theme.navBarColor, color: "black", paddingTop: "13px", paddingBottom: "7px", paddingLeft: "10px", paddingRight: "10px" }} className="mr-1 rounded-t-md border border-gray-200 shadow-xl">
                    { minimizedModal }
                </div>
            </div></Link>
          );

                }

        return temp;

        }
       
        })()}

        </div>

        </>

        
        ); }

        })()}

        </FullScreen>

        </>

    );

};

export default Dashboard;