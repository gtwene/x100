import React, { useEffect, useState, useCallback } from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DragNDrop from "../../components/DragNDrop";
import DraggableModalDialog from "../../components/DraggableModalDialog";
import Draggable from "react-draggable";
import Tooltip from "@mui/material/Tooltip";
import useWindowSize from "../../hooks/useWindowSize";
import { useIsMounted } from "../../hooks/useIsMounted";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../store/actions";
import { array } from "yup";
import { ListGroup, Dropdown } from "react-bootstrap";
import styled, { css } from "styled-components";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Spinner from "../../components/Spinner";
import { FiInfo, FiList, FiMaximize, FiMinimize } from "react-icons/fi";
import { AiFillCloseSquare } from "react-icons/ai";
import axios from "axios";
import { APP_URL } from "../../config/constant";
import { API_SERVER } from "../../config/constant";
import $ from "jquery";
import { TableCell } from "@material-ui/core";
import {
  MDBBtn,
  MDBInput,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import DefaultBreadcrumb from "../../components/Breadcrumbs/DefaultBreadcrumb";
import ModernBreadcrumb from "../../components/Breadcrumbs/ModernBreadcrumb";
import StylishBreadcrumb from "../../components/Breadcrumbs/StylishBreadcrumb";

import GlobalModalHeader from "../../components/Headers/GlobalModalHeader";
import DefaultHeader from "../../components/Headers/DefaultHeader";
import ModernHeader from "../../components/Headers/ModernHeader";
import StylishHeader from "../../components/Headers/StylishHeader";

import DefaultNavBar from "../../components/NavBars/DefaultNavBar";
import ModernNavBar from "../../components/NavBars/ModernNavBar";
import StylishNavBar from "../../components/NavBars/StylishNavBar";
import Modal from "react-bootstrap/Modal";

// import 'bootstrap/dist/css/bootstrap.min.css';

import KnowledgeDatabase from "../../components/KnowledgeDB";

// Cases
import Cases from "./cases";

// import useWindowSize from '../../src/hooks/useWindowSize';

const Screens = () => {
  const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
  const [modalSize, setModalSize] = useState("xl");
  const [fullScreen, setFullscreen] = useState(false);

  const [showGlobalModal, setGlobalModal] = useState(false);

  const isMounted = useIsMounted();

  const [getCustomLayoutType, setCustomLayoutType] = useState(
    JSON.parse(localStorage.getItem("layoutType"))
  );

  const handle = useFullScreenHandle();

  const windowSize = useWindowSize();

  // Set the default theme if no theme has been sent yet
  if (!localStorage.getItem("theme")) {
    localStorage.setItem(
      "theme",
      '{"theme": {"headerImage":"headerBGDefault.jpg", "backgroundImage":"bgDefault.jpg", "navBarColor":"#f1ffff", "breadcrumbBGColor": "#dbdbdb47", "textColor":"black", "cardBGColor":"", "fontFamily":null}}'
    );
  }

  if (!localStorage.getItem("layoutType")) {
    localStorage.setItem("layoutType", 0);
  }

  // useEffect(()  => {

  //   if(JSON.parse(localStorage.getItem("counter")) === 1){
  //     localStorage.setItem('counter', JSON.parse(localStorage.getItem("counter")) + 1);
  //   }

  // }, []);

  useEffect(() => {
    const storeSystemAuditLog = async () => {
      await axios
        .post(API_SERVER + "/store-system-audit-logs", {
          user_id: JSON.parse(localStorage.getItem("userInfo")).id,
          page_accessed: capitalizeFirstCharacter(
            capitalizeFirstCharacter(
              document.location.pathname.split("/").slice(2, 4) + ""
            ).replace(/-/g, " ")
          ),
          page_url: document.location.pathname,
        })
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    storeSystemAuditLog();
  }, []);

  function capitalizeFirstCharacter(str) {
    if (str) {
      var splitStr = str.toLowerCase().split(" ");
      for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(" ");
    }
  }

  // if(!(localStorage.getItem("selectedParentMenuItem"))){
  //     localStorage.setItem('selectedParentMenuItem', []);
  // }

  // if(!(localStorage.getItem("selectedChildMenuItem"))){
  //     localStorage.setItem('selectedChildMenuItem', []);
  // }

  if (windowSize.width < 4200) {
    document.getElementById("minModal").style.width = "1250px";
  }

  // if (windowSize.width < 1440) {
  //   document.getElementById("minModal").style.width = "900px";
  // }

  const dispatcher = useDispatch();

  const { t } = useTranslation();

  //  function lang(lang) {
  //   i18next.changeLanguage(lang)
  //  }

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      //Do whatever when esc is pressed
    }
  }, []);

  const customTheme = JSON.parse(localStorage.getItem("theme"));

  const navBarColor = customTheme.theme.navBarColor;

  // console.log(customTheme);

  const [getTheme, setTheme] = useState(customTheme);

  function setCustomTheme(theme) {
    localStorage.setItem("theme", JSON.stringify(JSON.parse(theme)));
    // location.reload();

    setTheme(JSON.parse(localStorage.getItem("theme")));
  }

  // return alert(JSON.stringify(getTheme.theme.headerImage));

  function capitalizeFirstCharacter(str) {
    if (str) {
      var splitStr = str.toLowerCase().split(" ");
      for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      // Directly return the joined string
      return splitStr.join(" ");
    }
  }

  const ScreenName = capitalizeFirstCharacter(
    (document.location.pathname.split("/").slice(2, 4) + "")
      .replace(/,/g, "")
      .replace(/-/g, " ")
  )
    .replace(/,/g, "")
    .replace(/-/g, " ")
    .replace(/ /g, "" + " ");

  useEffect(() => {
    // console.log(modalSize);
    setModalSize(modalSize);
  }, [modalSize]);

  useEffect(() => {
    // Page Title
    document.title = ScreenName + " | X100";

    // console.log(customTheme);

    // Set properties of page body (main container) here
    document.body.style.backgroundImage =
      `url(` +
      window.location.origin +
      `/assets/images/background/` +
      getTheme.theme.backgroundImage +
      `)`;

    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    if (document.getElementById("defaultNavBar")) {
      // Set Default NavBar Color
      document.getElementById("defaultNavBar").style.backgroundColor =
        getTheme.theme.navBarColor;
    }

    if (document.getElementById("stylishNavBar")) {
      // Set Stylish NavBar Color
      document.getElementById("stylishNavBar").style.backgroundColor =
        getTheme.theme.navBarColor;
    }
  }, [getTheme]);

  const [maximize, setMaximize] = useState(false);

  useEffect(() => {
    // console.log(maximize);

    if (maximize === true) {
      const maximizeBTN = document.getElementById("maximizeBTN");
      maximizeBTN.click();
    }

    if (document.getElementById("minimizeBTN")) {
      if (maximize === false) {
        const minimizeBTN = document.getElementById("minimizeBTN");
        minimizeBTN.click();
      }
    }
  }, [maximize]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  // var menuIconsC = [];
  var menu_items = [];
  var menuItems = [];
  var menuIcons = [];

  function minimizeModal() {
    var namesOfMinimizedModals = [];
    namesOfMinimizedModals = localStorage.getItem("namesOfMinimizedModals");
    var nameOfForm = localStorage.getItem("formName");

    if (namesOfMinimizedModals !== null) {
      if (!namesOfMinimizedModals.includes(nameOfForm)) {
        var minimizedModals = [];

        minimizedModals.push(namesOfMinimizedModals);
        minimizedModals.push(nameOfForm);

        localStorage.setItem(
          "namesOfMinimizedModals",
          JSON.stringify(minimizedModals.filter((e) => e !== "[]"))
        );
      }
    } else {
      localStorage.setItem(
        "namesOfMinimizedModals",
        JSON.stringify(nameOfForm)
      );
    }

    if (localStorage.getItem("namesOfMinimizedModals")) {
      var minModal = localStorage
        .getItem("namesOfMinimizedModals")
        .replace(/\\/g, "")
        .replace(/"/g, "")
        .replace(/[\[\]']+/g, "");

      minModal = minModal.split(",");

      localStorage.setItem("namesOfMinimizedModals", JSON.stringify(minModal));
    }

    document.getElementById("globalModalCloseBtn").click();
  }

  function closeModal(formName) {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    var closedModalName = t(formName.toLowerCase().replace(/\s/g, ""));

    //   if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "en"){

    swal({
      title: "Are you sure?",
      text: "You're about to close the '<b>" + closedModalName + "</b>' form",
      icon: "warning",
      buttons: ["Cancel", "Yes, Close Form"],
      dangerMode: true,
    }).then((result) => {
      if (result) {
        var minimizedModals = [];
        var formName = localStorage.getItem("formName");
        if (localStorage.getItem("namesOfMinimizedModals")) {
          minimizedModals = JSON.parse(
            localStorage.getItem("namesOfMinimizedModals")
          );
          minimizedModals = minimizedModals.filter((e) => e !== formName);
          localStorage.setItem(
            "namesOfMinimizedModals",
            JSON.stringify(minimizedModals)
          );
        }
        document.getElementById("globalModalCloseBtn").click();
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

  function closeMinimizedModal(closedForm) {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    var modalName = t(closedForm.toLowerCase().replace(/\s/g, ""));

    // if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "en"){

    swal({
      title: "Are you sure?",
      text: "You're about to close the '" + modalName + "' form",
      icon: "warning",
      buttons: ["Cancel", "Yes, Close Form"],
      dangerMode: true,
    }).then((result) => {
      if (result) {
        var minimizedModals = [];
        if (localStorage.getItem("namesOfMinimizedModals")) {
          minimizedModals = JSON.parse(
            localStorage.getItem("namesOfMinimizedModals")
          );
          minimizedModals = minimizedModals.filter((e) => e !== closedForm);
          localStorage.setItem(
            "namesOfMinimizedModals",
            JSON.stringify(minimizedModals)
          );
        }
        document
          .getElementById(closedForm.toLowerCase().replace(/\s/g, ""))
          .click();
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

  var current_menu_item_url = document.location.pathname;

  const [menuIconsC, setMenuIconsC] = useState([
    localStorage.getItem("menuIcons"),
  ]);

  useEffect(() => {
    const MIcons = JSON.parse(menuIconsC);

    // console.log(MIcons, "menuItems");

    for (let i = 0; i < MIcons.length; i++) {
      if (MIcons[i] !== null) {
        menuItems = MIcons[i]["children"];

        // console.log(menuItems);
        // console.log(menuIconsC[i]);

        if (menuItems[0] !== null) {
          for (let j = 0; j < menuItems.length; j++) {
            var menus = menuItems[j];
            var menu_item_url = menuItems[j]["url"];

            if (current_menu_item_url === menu_item_url) {
              var menu_items = menus["children"];

              for (let orderID = 0; orderID < menu_items.length; orderID++) {
                var menuItem = menu_items[orderID];

                // console.log(menuItem);
                // console.log('aaaaaa');

                var id = menuItem["id"];
                var title = menuItem["title"];
                var url = menuItem["url"];
                var icon = menuItem["icon"];
                var menu_grouping_id = menuItem["menu_grouping_id"];

                menuIcons.push({
                  id: title,
                  menu_grouping_id: menu_grouping_id,
                  url:
                    APP_URL +
                    "/assets/menu-icons/" +
                    title.replace(/\s+/g, "-").toLowerCase() +
                    ".png",
                  order: orderID,
                });
              }

              // console.log(menuIcons);
              // console.log('bbbbb');
            }
          }
        }
      }
    }
  }, [menuIconsC]);

  // alert(JSON.stringify(menuIcons));

  // console.log(menuIcons);

  let dropdownRightAlign = false;

  const buttonStyling = `font-semibold border-2 
    rounded-lg ring-grey-200 p-15 shadow-xl hover:bg-gray-50 
    transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300
    `;

  const textStyle = `pt-4 text-gray-500 font-xl cursor-pointer`;

  const [dragId, setDragId] = useState();
  const [backdrop, setBackdrop] = useState(false);

  if (localStorage.getItem("CurrentBoxState")) {
    var currentBoxStates = JSON.parse(localStorage.getItem("CurrentBoxState"));

    var menuIconsNEW = [];

    for (let i = 0; i < currentBoxStates.length; i++) {
      const cBS = currentBoxStates[i];

      const currentURL = document.location.pathname;

      const pathName = JSON.stringify(cBS.split("|").slice(0, 1))
        .replace(/[\[\]']+/g, "")
        .replace(/\s/g, "")
        .replace(/['"]+/g, "");

      if (currentURL === pathName) {
        menuIconsNEW = JSON.parse(cBS.split("|")[1].trim());
      }
    }

    if (menuIconsNEW === undefined || menuIconsNEW.length == 0) {
      menuIconsNEW = menuIcons;
    }
  } else {
    menuIconsNEW = menuIcons;
  }

  const [boxes, setBoxes] = useState(menuIconsNEW);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const backdropHandeler = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(!loading);
      setShow(!show);
    }, 1000);
  };

  const GlobalModal = ({ showModal, setShowModal }) => {
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
      <Modal
        id="globalModal"
        key="globalModal"
        backdrop="static"
        size={modalSize}
        fullscreen={fullScreen}
        show={showModal}
        onHide={handleClose}
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
                  <span id="parentLoc">
                    {capitalizeFirstCharacter(
                      (document.location.pathname.split("/").slice(0, 2) + "")
                        .replace(/,/g, "")
                        .replace(/-/g, " ")
                    )}{" "}
                  </span>
                  &nbsp; / &nbsp;
                  {capitalizeFirstCharacter(
                    capitalizeFirstCharacter(
                      document.location.pathname.split("/").slice(2, 4) + ""
                    ).replace(/-/g, " ")
                  )}
                  &nbsp; / &nbsp;
                  <span style={{ color: "whitesmoke" }}>
                    {capitalizeFirstCharacter(localStorage.getItem("formName"))}
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
        <Modal.Body style={{ background: "whitesmoke", marginTop: "-15px" }}>
          <Cases
            setModalSize={setModalSize}
            // setFullScreen={setFullScreen}
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
  };

  function handleIconClickEvent(formName) {
    const storeSystemAuditLog = async () => {
      await axios
        .post(API_SERVER + "/store-system-audit-logs", {
          user_id: JSON.parse(localStorage.getItem("userInfo")).id,
          page_accessed: formName,
          page_url:
            document.location.pathname +
            "/" +
            formName.replace(/\s+/g, "-").toLowerCase(),
        })
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    storeSystemAuditLog();

    // alert(formName);
    if (document.getElementById("minimizeContainer")) {
      document.getElementById("minimizeContainer").click();
    }
    localStorage.setItem("formName", formName);

    setLoading(!loading);
    setTimeout(() => {
      setGlobalModal(true);
      setLoading(loading);
    }, 0);
  }

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    // console.log(boxes);

    const dragBox = boxes.find((box) => box.id === dragId);
    const dropBox = boxes.find((box) => box.id === ev.currentTarget.id);

    if (dragBox) {
      const dragBoxOrder = dragBox.order;
      const dropBoxOrder = dropBox.order;

      const newBoxState = boxes.map((box) => {
        if (box.id === dragId) {
          box.order = dropBoxOrder;
        }
        if (box.id === ev.currentTarget.id) {
          box.order = dragBoxOrder;

          // console.log(dragBox.menu_grouping_id + " : " + dragId);
          // console.log(box.menu_grouping_id + " : " + ev.currentTarget.id);
        }

        return box;
      });

      ///////////////////////////////////////////////////////////////////

      var nBS = [];

      const currentURL = document.location.pathname;

      nBS.push(currentURL + " | " + JSON.stringify(newBoxState));

      ///////////////////////////////////////////////////////////////////
      // Store Custom Icon Positions in the DB
      /////////////////////////////////////////////////////////////////

      // var user_id = (JSON.parse(localStorage.getItem('userInfo'))).id;
      var icon_path = currentURL;
      var icon_positions = JSON.stringify(
        currentURL + " | " + JSON.stringify(newBoxState)
      )
        .replace(/^\[([\s\S]*)]$/, "$1")
        .replace(/^"(.+(?="$))"$/, "$1");

      try {
        axios
          .post(API_SERVER + "/store-custom-icon-positions", {
            user_id: 1,
            icon_path: icon_path,
            icon_positions: icon_positions,
          })
          .then(function (response) {
            // console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (err) {
        console.error(err);
      }

      /////////////////////////////////////////////////////////////////

      if (localStorage.getItem("CurrentBoxState")) {
        const previouslyStoredBoxStates = JSON.parse(
          localStorage.getItem("CurrentBoxState")
        );

        for (let i = 0; i < previouslyStoredBoxStates.length; i++) {
          const exisitingURLs = JSON.stringify(
            previouslyStoredBoxStates[i].split("|").slice(0, 1)
          )
            .replace(/[\[\]']+/g, "")
            .replace(/\s/g, "")
            .replace(/['"]+/g, "");

          if (currentURL !== exisitingURLs) {
            nBS.push(previouslyStoredBoxStates[i]);

            ///////////////////////////////////////////////////////////////////
            // Store Custom Icon Positions in the DB
            /////////////////////////////////////////////////////////////////

            // var user_id = (JSON.parse(localStorage.getItem('userInfo'))).id;
            var icon_path = exisitingURLs;
            var icon_positions = JSON.stringify(previouslyStoredBoxStates[i])
              .replace(/^\[([\s\S]*)]$/, "$1")
              .replace(/^"(.+(?="$))"$/, "$1");

            try {
              axios
                .post(API_SERVER + "/store-custom-icon-positions", {
                  user_id: 1,
                  icon_path: icon_path,
                  icon_positions: icon_positions,
                })
                .then(function (response) {
                  // console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            } catch (err) {
              console.error(err);
            }
          } else {
            ///////////////////////////////////////////////////////////////////
            // Store Custom Icon Positions in the DB
            /////////////////////////////////////////////////////////////////

            // var user_id = (JSON.parse(localStorage.getItem('userInfo'))).id;
            var icon_path = exisitingURLs;
            var icon_positions = JSON.stringify(previouslyStoredBoxStates[i])
              .replace(/^\[([\s\S]*)]$/, "$1")
              .replace(/^"(.+(?="$))"$/, "$1");

            try {
              axios
                .post(API_SERVER + "/store-custom-icon-positions", {
                  user_id: 1,
                  icon_path: icon_path,
                  icon_positions: icon_positions,
                })
                .then(function (response) {
                  // console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            } catch (err) {
              console.error(err);
            }
          }
        }

        localStorage.setItem("CurrentBoxState", JSON.stringify(nBS));
      } else {
        localStorage.setItem("CurrentBoxState", JSON.stringify(nBS));
      }

      setBoxes(newBoxState);
    }
  };

  const CardStyling = `font-semibold mt-2 rounded-lg ring-grey-200 p-15 shadow-2xl bg-[]`;

  return (
    <React.Fragment>
      {(() => {
        if (loading) return <Spinner />;

        if (showGlobalModal)
          return (
            <GlobalModal
              showModal={showGlobalModal}
              setShowModal={setGlobalModal}
            />
          );
      })()}

      <>
        <button
          id="maximizeBTN"
          style={{ display: "none" }}
          onClick={handle.enter}
        >
          Max
        </button>

        {handle.active && (
          <button
            id="minimizeBTN"
            style={{ display: "none" }}
            onClick={handle.exit}
          />
        )}

        <FullScreen handle={handle}>
          <div
            style={{ marginLeft: "5%" }}
            className="mainComponent mb-10 mr-4"
          >
            {(() => {
              const PageName = capitalizeFirstCharacter(
                (document.location.pathname.split("/").slice(0, 2) + "")
                  .replace(/,/g, "")
                  .replace(/-/g, " ")
              );

              // Default Layout
              if (getCustomLayoutType === 0) {
                return (
                  <>
                    <DefaultHeader
                      setLoading={setLoading}
                      setGlobalModal={setGlobalModal}
                      className=""
                      maximized={maximize}
                      setCustomLayoutType={setCustomLayoutType}
                      setMaximize={setMaximize}
                      setCustomTheme={setCustomTheme}
                      headerImage={getTheme.theme.headerImage}
                    />

                    <DefaultBreadcrumb
                      breadcrumbTitle={ScreenName}
                      breadcrumbTitleOptional={capitalizeFirstCharacter(
                        (document.location.pathname.split("/").slice(0, 2) + "")
                          .replace(/,/g, "")
                          .replace(/-/g, " ")
                      )}
                      className=""
                      breadcrumbBGColor={getTheme.theme.breadcrumbBGColor}
                    />

                    <DefaultNavBar className="" />

                    {/* Show Icons Here */}

                    <Row
                      className="defaultScreen"
                      style={{
                        marginLeft: "-7px",
                        marginRight: "-2px",
                        marginTop: "14px",
                      }}
                    >
                      <Col sm={12} md={9} xl={9} style={{ marginTop: "-6px" }}>
                        {(() => {
                          if (loading) return <Spinner />;
                        })()}

                        <div className="flex-row-container-default">
                          {boxes
                            .sort((a, b) => a.order - b.order)
                            .map((box) => (
                              <Tooltip
                                key={box.id}
                                title={capitalizeFirstCharacter(box.id)}
                              >
                                <div
                                  key={box.id}
                                  className="flex-row-item-default"
                                  onClick={function () {
                                    handleIconClickEvent(box.id);
                                  }}
                                >
                                  <DragNDrop
                                    key={box.id}
                                    boxColor={box.url}
                                    boxNumber={capitalizeFirstCharacter(box.id)}
                                    handleDrag={handleDrag}
                                    handleDrop={handleDrop}
                                  />
                                </div>
                              </Tooltip>
                            ))}
                        </div>
                      </Col>

                      <Col
                        sm={12}
                        md={3}
                        xl={3}
                        id="ltur"
                        style={{
                          marginTop: "1px",
                          marginLeft: "-18px",
                          marginTop: "-9px",
                        }}
                      >
                        <div
                          className={CardStyling}
                          style={{ backgroundColor: navBarColor }}
                        >
                          <p style={{ fontSize: "16px", color: "black" }}>
                            Your Last Accessed Screens
                          </p>

                          <hr
                            style={{ marginTop: "1px", marginBottom: "3px" }}
                          />

                          <div style={{ paddingLeft: "12px" }}>
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              1. Account Enquiry Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              2. Cash Deposit Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              3. Cheque Deposit Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              4. Cash Withdrawal Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              5. Account Re-activation Screen
                            </a>
                            <br />
                            <br />
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <KnowledgeDatabase bgImage={getTheme.theme.headerImage} />

                    <div
                      id="minModal"
                      className="space-x-2 defaultMinModal flex"
                      style={{ width: "1250px" }}
                    >
                      {(() => {
                        var temp = [];
                        var minimizedModals = [];
                        minimizedModals = JSON.parse(
                          localStorage.getItem("namesOfMinimizedModals")
                        );

                        if (minimizedModals) {
                          for (let i = 0; i < minimizedModals.length; i++) {
                            const minimizedModal = minimizedModals[i];

                            temp.push(
                              <Link
                                to="#"
                                key={JSON.stringify(i)}
                                id={minimizedModal
                                  .toLowerCase()
                                  .replace(/\s/g, "")}
                                style={{
                                  color: "grey",
                                  marginLeft: "266px",
                                  marginRight: "-257px",
                                }}
                              >
                                <div className="mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                                  <div
                                    style={{ overflow: "scroll" }}
                                    className="flex -mb-2.5"
                                  >
                                    {/* <FiMinimize onClick={function () { swal({ title: t((minimizedModal.toLowerCase()).replace(/\s/g, "")) }) }}
                            className="h-6 w-6 mt-3 bg-gray-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mr-2.5 duration-300"
                        /> */}
                                    <FiMaximize
                                      onClick={function () {
                                        handleIconClickEvent(minimizedModal);
                                      }}
                                      className="maximizeBTN h-6 w-6 mt-3 mr-2.5 bg-blue-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    />
                                    <AiFillCloseSquare
                                      onClick={function () {
                                        closeMinimizedModal(minimizedModal);
                                      }}
                                      className="closeBTN h-6 w-6 mt-3 bg-red-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    />
                                  </div>
                                  <div
                                    style={{
                                      whiteSpace: "nowrap",
                                      background: getTheme.theme.navBarColor,
                                      color: "black",
                                      paddingTop: "13px",
                                      paddingBottom: "7px",
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
                                    }}
                                    className="mr-1 rounded-t-md border border-gray-200 shadow-xl"
                                  >
                                    {minimizedModal}
                                  </div>
                                </div>
                              </Link>
                            );
                          }

                          return temp;
                        }
                      })()}
                    </div>
                  </>
                );
              }

              // Modern Layout
              if (getCustomLayoutType === 1) {
                return (
                  <>
                    <ModernHeader
                      setLoading={setLoading}
                      setGlobalModal={setGlobalModal}
                      className=""
                      maximized={maximize}
                      setCustomLayoutType={setCustomLayoutType}
                      setMaximize={setMaximize}
                      setCustomTheme={setCustomTheme}
                      headerImage={getTheme.theme.headerImage}
                    />

                    <ModernBreadcrumb
                      breadcrumbTitle={ScreenName}
                      breadcrumbTitleOptional={capitalizeFirstCharacter(
                        (document.location.pathname.split("/").slice(0, 2) + "")
                          .replace(/,/g, "")
                          .replace(/-/g, " ")
                      )}
                      className=""
                      breadcrumbBGColor={getTheme.theme.breadcrumbBGColor}
                    />

                    <ModernNavBar className="" />

                    {/* Show Icons Here */}

                    <Row
                      className="modernScreen"
                      style={{
                        marginLeft: "-15px",
                        marginTop: "20px",
                        marginRight: "3px",
                      }}
                    >
                      <Col sm={12} md={9} xl={9}>
                        {(() => {
                          if (loading) return <Spinner />;
                        })()}

                        <div className="flex-row-container-stylish">
                          {boxes
                            .sort((a, b) => a.order - b.order)
                            .map((box) => (
                              <Tooltip
                                key={box.id}
                                title={capitalizeFirstCharacter(box.id)}
                              >
                                <div
                                  key={box.id}
                                  className="flex-row-item-stylish"
                                  onClick={function () {
                                    handleIconClickEvent(box.id);
                                  }}
                                >
                                  <DragNDrop
                                    key={box.id}
                                    boxColor={box.url}
                                    boxNumber={capitalizeFirstCharacter(box.id)}
                                    handleDrag={handleDrag}
                                    handleDrop={handleDrop}
                                  />
                                </div>
                              </Tooltip>
                            ))}
                        </div>
                      </Col>

                      <Col
                        sm={12}
                        md={3}
                        xl={3}
                        id="ltur"
                        style={{ marginTop: "-12px", marginLeft: "-12px" }}
                      >
                        <div
                          className={CardStyling}
                          style={{ backgroundColor: navBarColor }}
                        >
                          <p style={{ fontSize: "16px", color: "black" }}>
                            Your Last Accessed Screens
                          </p>

                          <hr
                            style={{ marginTop: "1px", marginBottom: "3px" }}
                          />

                          <div style={{ paddingLeft: "12px" }}>
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              1. Account Enquiry Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              2. Cash Deposit Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              3. Cheque Deposit Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              4. Cash Withdrawal Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              5. Account Re-activation Screen
                            </a>
                            <br />
                            <br />
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <KnowledgeDatabase bgImage={getTheme.theme.headerImage} />

                    <div
                      id="minModal"
                      className="space-x-2 modernMinModal flex"
                      style={{ width: "1250px" }}
                    >
                      {(() => {
                        var temp = [];
                        var minimizedModals = [];
                        minimizedModals = JSON.parse(
                          localStorage.getItem("namesOfMinimizedModals")
                        );

                        if (minimizedModals) {
                          for (let i = 0; i < minimizedModals.length; i++) {
                            const minimizedModal = minimizedModals[i];

                            temp.push(
                              <Link
                                to="#"
                                key={JSON.stringify(i)}
                                id={minimizedModal
                                  .toLowerCase()
                                  .replace(/\s/g, "")}
                                style={{
                                  color: "grey",
                                  marginLeft: "109px",
                                  marginRight: "-102px",
                                }}
                              >
                                <div className="mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                                  <div
                                    style={{ overflow: "scroll" }}
                                    className="flex -mb-2.5"
                                  >
                                    {/* <FiMinimize onClick={function () { swal({ title: t((minimizedModal.toLowerCase()).replace(/\s/g, "")) }) }}
                            className="h-6 w-6 mt-3 bg-gray-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mr-2.5 duration-300"
                        /> */}
                                    <FiMaximize
                                      onClick={function () {
                                        handleIconClickEvent(minimizedModal);
                                      }}
                                      className="maximizeBTN h-6 w-6 mt-3 mr-2.5 bg-blue-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    />
                                    <AiFillCloseSquare
                                      onClick={function () {
                                        closeMinimizedModal(minimizedModal);
                                      }}
                                      className="closeBTN h-6 w-6 mt-3 bg-red-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    />
                                  </div>
                                  <div
                                    style={{
                                      whiteSpace: "nowrap",
                                      background: getTheme.theme.navBarColor,
                                      color: "black",
                                      paddingTop: "13px",
                                      paddingBottom: "7px",
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
                                    }}
                                    className="mr-1 rounded-t-md border border-gray-200 shadow-xl"
                                  >
                                    {minimizedModal}
                                  </div>
                                </div>
                              </Link>
                            );
                          }

                          return temp;
                        }
                      })()}
                    </div>
                  </>
                );
              }

              // Stylish Layout
              if (getCustomLayoutType === 2) {
                return (
                  <>
                    <StylishHeader
                      setLoading={setLoading}
                      setGlobalModal={setGlobalModal}
                      className=""
                      maximized={maximize}
                      setCustomLayoutType={setCustomLayoutType}
                      setMaximize={setMaximize}
                      setCustomTheme={setCustomTheme}
                      headerImage={getTheme.theme.headerImage}
                    />

                    <StylishBreadcrumb
                      breadcrumbTitle={ScreenName}
                      breadcrumbTitleOptional={capitalizeFirstCharacter(
                        (document.location.pathname.split("/").slice(0, 2) + "")
                          .replace(/,/g, "")
                          .replace(/-/g, " ")
                      )}
                      className=""
                      breadcrumbBGColor={getTheme.theme.breadcrumbBGColor}
                    />

                    <StylishNavBar className="" />

                    {/* Show Icons Here */}

                    <Row
                      className="stylishScreen"
                      style={{
                        marginLeft: "-7px",
                        marginTop: "14px",
                        marginRight: "-3px",
                      }}
                    >
                      <Col
                        sm={12}
                        md={9}
                        xl={9}
                        style={{ marginLeft: "-9px", marginTop: "1px" }}
                      >
                        {(() => {
                          if (loading) return <Spinner />;
                        })()}

                        <div className="flex-row-container-stylish">
                          {boxes
                            .sort((a, b) => a.order - b.order)
                            .map((box) => (
                              <Tooltip
                                key={box.id}
                                title={capitalizeFirstCharacter(box.id)}
                              >
                                <div
                                  key={box.id}
                                  className="flex-row-item-stylish"
                                  onClick={function () {
                                    handleIconClickEvent(box.id);
                                  }}
                                >
                                  <DragNDrop
                                    key={box.id}
                                    boxColor={box.url}
                                    boxNumber={capitalizeFirstCharacter(box.id)}
                                    handleDrag={handleDrag}
                                    handleDrop={handleDrop}
                                  />
                                </div>
                              </Tooltip>
                            ))}
                        </div>
                      </Col>

                      <Col
                        sm={12}
                        md={3}
                        xl={3}
                        id="ltur"
                        style={{ marginTop: "-10px", marginLeft: "-4px" }}
                      >
                        <div
                          className={CardStyling}
                          style={{ backgroundColor: navBarColor }}
                        >
                          <p style={{ fontSize: "16px", color: "black" }}>
                            Your Last Accessed Screens
                          </p>

                          <hr
                            style={{ marginTop: "1px", marginBottom: "3px" }}
                          />

                          <div style={{ paddingLeft: "12px" }}>
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              1. Account Enquiry Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              2. Cash Deposit Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              3. Cheque Deposit Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              4. Cash Withdrawal Screen
                            </a>
                            <br />
                            <a
                              href="#"
                              style={{
                                lineHeight: "3.1",
                                fontSize: "13px",
                                color: "#0047ab",
                                marginBottom: "10px",
                              }}
                            >
                              5. Account Re-activation Screen
                            </a>
                            <br />
                            <br />
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <KnowledgeDatabase bgImage={getTheme.theme.headerImage} />

                    <div
                      id="minModal"
                      className="space-x-2 stylishMinModal flex"
                      style={{ width: "1250px", marginLeft: "-10px" }}
                    >
                      {(() => {
                        var temp = [];
                        var minimizedModals = [];
                        minimizedModals = JSON.parse(
                          localStorage.getItem("namesOfMinimizedModals")
                        );

                        if (minimizedModals) {
                          for (let i = 0; i < minimizedModals.length; i++) {
                            const minimizedModal = minimizedModals[i];

                            temp.push(
                              <Link
                                to="#"
                                key={JSON.stringify(i)}
                                id={minimizedModal
                                  .toLowerCase()
                                  .replace(/\s/g, "")}
                                style={{
                                  color: "grey",
                                  marginLeft: "109px",
                                  marginRight: "-102px",
                                }}
                              >
                                <div className="mr-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
                                  <div
                                    style={{ overflow: "scroll" }}
                                    className="flex -mb-2.5"
                                  >
                                    {/* <FiMinimize onClick={function () { swal({ title: t((minimizedModal.toLowerCase()).replace(/\s/g, "")) }) }}
                        className="h-6 w-6 mt-3 bg-gray-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mr-2.5 duration-300"
                    /> */}
                                    <FiMaximize
                                      onClick={function () {
                                        handleIconClickEvent(minimizedModal);
                                      }}
                                      className="maximizeBTN h-6 w-6 mt-3 mr-2.5 bg-blue-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    />
                                    <AiFillCloseSquare
                                      onClick={function () {
                                        closeMinimizedModal(minimizedModal);
                                      }}
                                      className="closeBTN h-6 w-6 mt-3 bg-red-500 rounded text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                                    />
                                  </div>
                                  <div
                                    style={{
                                      whiteSpace: "nowrap",
                                      background: getTheme.theme.navBarColor,
                                      color: "black",
                                      paddingTop: "13px",
                                      paddingBottom: "7px",
                                      paddingLeft: "10px",
                                      paddingRight: "10px",
                                    }}
                                    className="mr-1 rounded-t-md border border-gray-200 shadow-xl"
                                  >
                                    {minimizedModal}
                                  </div>
                                </div>
                              </Link>
                            );
                          }

                          return temp;
                        }
                      })()}
                    </div>
                  </>
                );
              }
            })()}
          </div>
        </FullScreen>
      </>
    </React.Fragment>
  );
};

export default Screens;
