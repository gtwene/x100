import React, { useState, useEffect, Suspense } from 'react';
import loadable from '@loadable/component';
import useWindowSize from '../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

import DefaultBreadcrumb from '../components/Breadcrumbs/DefaultBreadcrumb';
import ModernBreadcrumb from '../components/Breadcrumbs/ModernBreadcrumb';
import StylishBreadcrumb from '../components/Breadcrumbs/StylishBreadcrumb';

import DefaultHeader from '../components/Headers/DefaultHeader';
import ModernHeader from '../components/Headers/ModernHeader';
import StylishHeader from '../components/Headers/StylishHeader';


import DefaultMainLayout from './dashboard/layouts/DefaultLayout';
import ModernMainLayout from './dashboard/layouts/ModernLayout';
import StylishMainLayout from './dashboard/layouts/StylishLayout';

import DefaultNavBar from '../components/NavBars/DefaultNavBar';
import ModernNavBar from '../components/NavBars/ModernNavBar';
import StylishNavBar from '../components/NavBars/StylishNavBar';

import KnowledgeDatabase from '../components/KnowledgeDB';
// import Modal from './components/Modal';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {
    MDBIcon
  } from 'mdb-react-ui-kit';

const Main = () => {

    const windowSize = useWindowSize();

    const { t } = useTranslation();

    const [opened, setOpened] = useState(false);

    const handle = useFullScreenHandle();

    // Set the default theme if no theme has been sent yet
    if(!(localStorage.getItem('theme'))){
        localStorage.setItem('theme', '{"theme": {"headerImage":"headerBGDefault.jpg", "backgroundImage":"bgDefault.jpg", "breadcrumbBGColor": "#dbdbdb47", "textColor":"black", "cardBGColor":"", "fontFamily":null}}');
    } 

    if(!(localStorage.getItem("layoutType"))){
        localStorage.setItem('layoutType', 0);
    } 

    const customTheme = JSON.parse(localStorage.getItem('theme'));

    // console.log(customTheme);

    const [getTheme, setTheme] = useState(customTheme);

    const [getCustomLayoutType, setCustomLayoutType] = useState(JSON.parse(localStorage.getItem("layoutType")));

    function setCustomTheme(theme){

        localStorage.setItem('theme', JSON.stringify(JSON.parse(theme)));
        // location.reload();

        setTheme(JSON.parse(localStorage.getItem('theme')));
    
      }

    // return alert(JSON.stringify(getTheme.theme.headerImage));

    useEffect(()  => {

        // Page Title
        document.title = "Dashboard | X100";

        // console.log(customTheme);

        // Set properties of page body (main container) here
        document.body.style.backgroundImage = `url(` + window.location.origin + `/assets/images/background/` + getTheme.theme.backgroundImage + `)`;

        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    
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

        <button id="maximizeBTN" style={{ display: "none" }} onClick={handle.enter} >Max</button>

        {handle.active && ( <button id="minimizeBTN" style={{ display: "none" }} onClick={handle.exit} /> )}

        <FullScreen handle={handle}>

        <div style={{ marginLeft: "5%" }} className='mainComponent mb-10 mr-4'>

        {/* <Modal onClick={() => setOpened(true)} /> */}


        {(() => {

        // Default Layout
        if(JSON.parse(localStorage.getItem("layoutType")) === 0) { return (

            <>
            
            <DefaultHeader className='' maximized={maximize} setMaximize={setMaximize} setCustomTheme={setCustomTheme} headerImage={getTheme.theme.headerImage} setCustomLayoutType={setCustomLayoutType} />
            
            <DefaultBreadcrumb breadcrumbTitle={ ScreenName } className='' breadcrumbBGColor={ getTheme.theme.breadcrumbBGColor } />

            <DefaultNavBar className='' />

            <DefaultMainLayout className='' />

            <KnowledgeDatabase bgImage={ getTheme.theme.navBarColor } />

            </>
        
        ); }

        // Modern Layout
        if(JSON.parse(localStorage.getItem("layoutType")) === 1) { return (

            <>

            <ModernHeader className='' maximized={maximize} setMaximize={setMaximize} setCustomTheme={setCustomTheme} headerImage={getTheme.theme.headerImage} setCustomLayoutType={setCustomLayoutType} />

            <ModernBreadcrumb breadcrumbTitle={ ScreenName } className='' breadcrumbBGColor={ getTheme.theme.breadcrumbBGColor } />

            <ModernNavBar className='' />

            <ModernMainLayout className='' />

            <KnowledgeDatabase bgImage={ getTheme.theme.navBarColor } />

            </>
        
        ); }

        // Stylish Layout
        if(JSON.parse(localStorage.getItem("layoutType")) === 2) { return (

            <>

            <StylishHeader className='' maximized={maximize} setMaximize={setMaximize} setCustomTheme={setCustomTheme} headerImage={getTheme.theme.headerImage} setCustomLayoutType={setCustomLayoutType} />

            <StylishBreadcrumb breadcrumbTitle={ ScreenName } className='' breadcrumbBGColor={ getTheme.theme.breadcrumbBGColor } />

            <StylishNavBar className='' />

            <StylishMainLayout className='' />

            <KnowledgeDatabase bgImage={ getTheme.theme.navBarColor } />

            </>
        
        ); }

        })()}
                

        </div>

        </FullScreen>

        </>

    );

};

export default Main;