import React, { useEffect, Suspense, useState } from 'react';
import loadable from '@loadable/component';
import { API_SERVER } from '../../../config/constant';
import axios from 'axios';
import { MDBIcon } from 'mdb-react-ui-kit';
// import RestLogin from './RestLogin';

const RestLogin = loadable(() => import('./RestLogin'));

// import ImageLight from '../../../assets/images/test2.jpg'
// import ImageLight from '../../../assets/images/login-office.jpeg'
// import clientLogo from '../../../assets/images/rokel.png'
// import ImageDark from '../../../assets/images/login-office-dark.jpeg'
import bgImage from '../../../assets/images/wallpaper1.jpg'
import useWindowSize from '../../../hooks/useWindowSize';
import { useTranslation } from 'react-i18next';

const SignIn = () => {

  const windowSize = useWindowSize();

  const { t } = useTranslation();

  // Set the default theme if no theme has been set yet
  if(!(localStorage.getItem('theme'))){
    localStorage.setItem('theme', '{"theme": {"headerImage":"headerBGUSGDefault.jpg", "backgroundImage":"bgUSGDefault.jpg", "navBarColor":"#eaeff5", "breadcrumbBGColor": "#047fc0", "textColor":"white", "buttonBGColor":"black", "buttonTextColor":"white", "cardBGColor":"", "fontFamily":null}}');
  } 

  if(!(localStorage.getItem("layoutType"))){
    localStorage.setItem('layoutType', 0);
  }


  // localStorage.setItem('theme', '{"theme": {"headerImage":"headerBGUSGDefault.jpg", "backgroundImage":"bgUSGDefault.jpg", "navBarColor":"#eaeff5", "breadcrumbBGColor": "#047fc0", "textColor":"white", "buttonBGColor":"black", "buttonTextColor":"white", "cardBGColor":"", "fontFamily":null}}');

  //   localStorage.setItem('theme', '{"theme": {"headerImage":"headerBGOrange.jpg", "backgroundImage":"bgOrange.jpg", "navBarColor":"#ffffea", "breadcrumbBGColor": "#95ddee4f", "textColor":"black", "buttonBGColor": "black", "buttonTextColor": "white", "cardBGColor":"", "fontFamily":null}}');

  // localStorage.setItem(
  //   "theme",
  //   '{"theme": {"headerImage":"headerBGGreen.jpg", "backgroundImage":"bgGreen.jpg", "navBarColor":"#d7f4e2", "breadcrumbBGColor": "#95ddee4f", "textColor":"black", "buttonBGColor":"black", "buttonTextColor":"white", "cardBGColor":"", "fontFamily":null}}'
  // );


  // if(!(localStorage.getItem("layoutType"))){
  //   localStorage.setItem('layoutType', 0);
  // }

  localStorage.setItem("selectedParentMenuItem", '/');
  localStorage.setItem("selectedChildMenuItem", 'dash');

  const customTheme = JSON.parse(localStorage.getItem('theme'));

    const [getTheme, setTheme] = useState(customTheme);

    function setCustomTheme(theme){

        localStorage.setItem('theme', JSON.stringify(JSON.parse(theme)));
        // location.reload();

        setTheme(JSON.parse(localStorage.getItem('theme')));
    
    }

  // Galaxy Fold
  if (windowSize.width === 280) {

    // document.getElementById("loginExtraText").style.display = "none";
    // document.getElementById("showExtraTextMobile").style.display = "block";
    // document.getElementById("branchText1").style.display = "none";
    // document.getElementById("branchText2").style.display = "none";
    // document.getElementById("branchText3").style.display = "none";

  }

  // iPhone 5/SE
  if (windowSize.width === 320) {

    // document.getElementById("loginExtraText").style.display = "none";
    // document.getElementById("showExtraTextMobile").style.display = "block";
    // document.getElementById("branchText1").style.display = "none";
    // document.getElementById("branchText2").style.display = "none";
    // document.getElementById("branchText3").style.display = "none";

  }

  // Samsung Galaxy S8+
  if (windowSize.width === 360) {

    // document.getElementById("loginExtraText").style.display = "none";
    // document.getElementById("showExtraTextMobile").style.display = "block";
    // document.getElementById("branchText1").style.display = "none";
    // document.getElementById("branchText2").style.display = "none";
    // document.getElementById("branchText3").style.display = "none";

  }

  // iPhone SE &&& iPhone 6/7/8/X
  if (windowSize.width === 375) {

    // document.getElementById("loginExtraText").style.display = "none";
    // document.getElementById("showExtraTextMobile").style.display = "block";
    // document.getElementById("branchText1").style.display = "none";
    // document.getElementById("branchText2").style.display = "none";
    // document.getElementById("branchText3").style.display = "none";

  }

  // iPhone 12 Pro
  if (windowSize.width === 390) {

    // document.getElementById("loginExtraText").style.display = "none";
    // document.getElementById("showExtraTextMobile").style.display = "block";
    // document.getElementById("branchText1").style.display = "none";
    // document.getElementById("branchText2").style.display = "none";
    // document.getElementById("branchText3").style.display = "none";

  }

  // iPhone XR
  if (windowSize.width === 393) {

    // document.getElementById("loginExtraText").style.display = "none";
    // document.getElementById("showExtraTextMobile").style.display = "block";
    // document.getElementById("branchText1").style.display = "none";
    // document.getElementById("branchText2").style.display = "none";
    // document.getElementById("branchText3").style.display = "none";

  }

  // Pixel 2
  if (windowSize.width === 411) {

    // document.getElementById("loginExtraText").style.display = "none";
    // document.getElementById("showExtraTextMobile").style.display = "block";
    // document.getElementById("branchText1").style.display = "none";
    // document.getElementById("branchText2").style.display = "none";
    // document.getElementById("branchText3").style.display = "none";

  }

  // Samsung S20 Ultra  &&&& Samsung Galaxy A51 / A71
  if (windowSize.width === 412) {

    // document.getElementById("loginExtraText").style.display = "none";
    // document.getElementById("showExtraTextMobile").style.display = "block";
    // document.getElementById("branchText1").style.display = "none";
    // document.getElementById("branchText2").style.display = "none";
    // document.getElementById("branchText3").style.display = "none";

  }

  // Pixel 5 &&& iPhone 6/7/8 Plus
  if (windowSize.width === 414) {

    // document.getElementById("loginExtraText").style.display = "none";
    // document.getElementById("showExtraTextMobile").style.display = "block";
    // document.getElementById("branchText1").style.display = "none";
    // document.getElementById("branchText2").style.display = "none";
    // document.getElementById("branchText3").style.display = "none";

  }

  // Surface Duo
  if (windowSize.width === 540) {

    // document.getElementById("loginExtraText").style.display = "none";
    // document.getElementById("showExtraTextMobile").style.display = "block";
    // document.getElementById("branchText1").style.display = "none";
    // document.getElementById("branchText2").style.display = "none";
    // document.getElementById("branchText3").style.display = "none";

  }

  if (windowSize.width === 670) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  // iPad Mini &&& iPad
  if (windowSize.width === 768) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  // iPad Air
  if (windowSize.width === 820) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  // Surface Pro 7
  if (windowSize.width === 912) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  // Next Hub
  if (windowSize.width === 1024) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  if (windowSize.width === 1245.60) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  // Next Hub Max
  if (windowSize.width === 1280) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  // 13-inch Laptop - Opera
  if (windowSize.width === 1400) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  // 13-inch Microsoft Edge
  if (windowSize.width === 1439) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  // 13-inch Laptop
  if (windowSize.width === 1440) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  // Opera
  if (windowSize.width === 1496) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

  // Microsoft Edge &&& Chrome
  if (windowSize.width === 1536) {

    // document.getElementById("loginExtraText").style.display = "block";
    // document.getElementById("showExtraTextMobile").style.display = "none";
    // document.getElementById("branchText1").style.display = "block";
    // document.getElementById("branchText2").style.display = "block";
    // document.getElementById("branchText3").style.display = "block";

  }

    useEffect(() => {
        document.title = "Login | X100"
      }, [])

      var sectionStyle = {
        backgroundImage: `url(` + window.location.origin + `/assets/images/testBG1.jpg)`,
        // background: "#0047AB",
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        zoom: "1.11",
     }

     var clientStyle = {
      // backgroundImage: `url(${bgImage})`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      color: "black",
      backgroundImage: `url(` + window.location.origin + `/assets/images/logo/cooptech.png)`,
      backgroundColor: getTheme.theme.navBarColor,
      zoom: "1.11",
   }

    return (
    
    <React.Fragment>
    
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900" style={sectionStyle}>
      <div className="flex-1 zoomPage h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="d-flex align-items-center justify-content-center h-32 md:h-auto md:w-1/2" style={clientStyle}>
            {/* <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              style={{ backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            /> */}

            <div className='l' style={{ display: "none" }} id='loginExtraText'>
            {/* <h1 style={{ color: '#0047AB', fontWeight: "bold", fontSize: "60px" }} className="b-title d-flex align-items-center justify-content-center h-32 md:h-auto">X100 <span><small style={{ fontSize: "20px" }}> &nbsp;{t('bankingmadeeasy')}</small></span></h1>  */}
            {/* <div style={{ marginLeft: "-17px" }}>
            <span className="b-title d-flex align-items-center justify-content-center h-32 md:h-auto" style={{ fontWeight: "bolder", fontSize: "43px" }}>X100 <small style={{ fontSize: "16px", fontWeight: "normal" }}> &nbsp;&nbsp;Banking Made Easy</small></span>
            </div> */}
           
            {/* <div style={{ paddingLeft: "60px", paddingRight: "60px" }}>
            <hr style={{ marginTop: "5px" }}/>
            <p style={{ textAlign: "center", fontSize: "14px", fontWeight: "0.1em", lineHeight: "2.2" }}>Welcome to the Branch Version of the X100. Kindly provide your login credentials to access World Class Banking Services.</p>
            </div> */}

            {/* <small style={{ color: 'white' }}> &nbsp;&nbsp;{t('bankingmadeeasy')}</small> */}
            {/* <hr style={{ width: "100%", background: "white", marginTop: "-5px", MarginLeft: "10px", MarginRight: "10px" }} /> */}

            {/* <img style={{ backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}} src={clientLogo}></img> */}
            </div>

            {/* <div className='l' id='showExtraTextMobile'>
            <span className="b-title d-flex align-items-center justify-content-center h-32 md:h-auto" style={{ fontWeight: "bolder", fontSize: "40px" }}>X100 <small style={{ fontSize: "16px", fontWeight: "normal" }}> &nbsp;&nbsp; Banking Made Easy</small></span>
            </div> */}


          </div>
          <main style={{ background: `url('https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg')` }} className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full text-center">
            
            <div id="branchText1" className="mb-4">
            <i style={{ fontSize: "30px" }} className="feather icon-unlock auth-icon" />
            </div>
            <hr style={{ visibility: "hidden", marginTop: "-13px" }} />

            <h4 className="mb-4" id='branchText2' style={{fontWeight: "bolder"}}>CO-OP TECH</h4>
            <hr className='text-center' id='branchText3' style={{ width: "100%", marginTop: "-5px", marginBottom: "25px" }}/>

            <RestLogin />

             <br />

            <p className="mb-0 text-muted">
                &copy;{' '}
                <a style={{ fontSize: "14px" }} target="_blank" href="#" rel="noreferrer">
                    { new Date().getFullYear() }
                </a>
                , {' '}
                <a style={{ fontSize: "14px" }} target="_blank" href="https://unionsg.com/" rel="noreferrer">
                Powered By Cooptech
                </a>
                .
            </p>

            </div>
          </main>
        </div>
      </div>
    </div>

    <div className='' style={{ position: "absolute", bottom: 0, background: getTheme.theme.navBarColor, backgroundPosition: `center`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, width: "100%" }}>
        <br />

        <p style={{ textAlign: "center", fontSize: "13px", fontWeight: "bold", marginTop: "-12px" }}><span className=''><MDBIcon style={{ fontSize: "16px", color: "red" }} icon="road" /> St. Mark's Church &nbsp;&nbsp;&nbsp;&nbsp;Divine Apartments Suite D1-1 &nbsp;&nbsp;&nbsp;&nbsp;Walyakj Way, Westlands</span><span style={{ marginLeft: "60px" }}><MDBIcon icon="university" style={{ fontSize: "16px", color: "red" }} /> Office No: +254 787 198 981</span><span style={{ marginLeft: "60px" }}><i className="fas fa-phone" style={{ fontSize: "16px", color: "red" }}></i> Personal No : +254 722 856 019</span><span style={{ marginLeft: "60px" }}><MDBIcon icon="envelope" style={{ fontSize: "16px", color: "red" }} /> info@3qs.co.ke</span></p>
        
        <hr style={{ marginTop: "-7px", marginBottom: "10px", paddingRight: "150px", paddingLeft: "150px" }} />

        <p style={{ textAlign: "center", fontSize: "13px", fontWeight: "bold", marginBottom: "8px", marginTop: "-3px" }}><span style={{ marginRight: "50px" }}><MDBIcon style={{ fontSize: "16px", color: "red" }} icon="blog" /> www.3qs.co.ke</span><span style={{ marginRight: "50px" }}><i style={{ fontSize: "16px", color: "blue" }} className="fab fa-facebook"></i> Three-Quality-Services</span><span style={{ marginRight: "50px" }}><i className="fab fa-twitter-square" style={{ fontSize: "16px", color: "blue" }}></i> Three-Quality-Services</span></p>
    </div>

  </React.Fragment>
  
    );
};

export default SignIn;
