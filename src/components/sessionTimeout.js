import React, { useRef, useState, useEffect } from "react";
import IdleTimer from "react-idle-timer";
import SessionTimeoutDialog from "./sessionTimeoutDialog";
import $ from 'jquery';
import swal from 'sweetalert';
import axios from 'axios';
import { LOGOUT } from '../store/actions';
import { useDispatch } from 'react-redux';
import { API_SERVER } from '../config/constant';

let countdownInterval;
let timeout;
const SessionTimeout = ({isAuthenticated, logOut}) => {
const [showLoginModal, setLoginModal] = React.useState(false);
const [timeoutModalOpen, setTimeoutModalOpen] = useState(false);
const [timeoutCountdown, setTimeoutCountdown] = useState(0);

const idleTimer = useRef(null);
const clearSessionTimeout = () => {
clearTimeout(timeout);
};

const [timeoutModalOpened, setTimeoutModalOpened] = useState(false);

const [timeOutValue, setTimeOutValue] = useState(1800000);
// const [timeOutValue, setTimeOutValue] = useState(1000);

const clearSessionInterval = () => {
clearInterval(countdownInterval);
};setLoginModal
const handleLogout = async (isTimedOut = false) => {
try {
setTimeoutModalOpen(false);
clearSessionInterval();
clearSessionTimeout();
logoutFunc();
} catch (err) {
console.error(err);
}
};
const handleContinue = () => {
// alert('continue has been clicked');
setTimeOutValue(1800000);
// setTimeOutValue(1000);
setTimeoutModalOpened(false);
window.scrollTo(0, 0);
setTimeoutModalOpen(false);
clearSessionInterval();
clearSessionTimeout();
setLoginModal(true);
localStorage.setItem("timeOut", "false")
localStorage.setItem("loginModalOpened", "true");
// return null;
};

const onActive = () => {
if (!timeoutModalOpen) {
clearSessionInterval();
clearSessionTimeout();
}
};

const onIdle = () => {

if(localStorage.getItem("loginModalOpened") === "true"){

// alert('yessa massa');

} else {

localStorage.setItem("timeOut", "true");

const delay = 1000 * 1;

if (isAuthenticated && !timeoutModalOpen) {
    timeout = setTimeout(() => {
    let countDown = 3600;
    setTimeoutModalOpen(true);
    setTimeoutCountdown(countDown);
    countdownInterval = setInterval(() => {
    if (countDown > 0) {
    setTimeoutCountdown(--countDown);
    } else {
    handleLogout(true);
    }
    }, 1000);
    }, delay);
} 

}

};

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

$(window).on("load", function () {
    if(localStorage.getItem("timeOut") === "true"){

        let userInfo = JSON.parse(localStorage.getItem('userInfo'));

        // if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "en"){

            swal({
                title: "Session Expired",
                text: "Your current action will log you out of the system",
                icon: "warning",
                buttons: [ "Restore Session", "Ok, Logout" ],
                allowOutsideClick: false,
                closeOnClickOutside: false,
                dangerMode: true,
                }).then((result) => {
                if (result) {
                    logoutFunc();
                } else {
                    localStorage.setItem("loginModalOpened", "true");
                    localStorage.setItem("timeOut", "false");
                    setTimeOutValue(100);
                }
            });

        // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "fr"){

        //     swal({
        //         title: "La Session a Expiré",
        //         text: "Votre action en cours vous déconnectera du système",
        //         icon: "warning",
        //         buttons: [ "Restaurer la Session", "OK, Déconnectez-Vous" ],
        //         allowOutsideClick: false,
        //         closeOnClickOutside: false,
        //         dangerMode: true,
        //         }).then((result) => {
        //         if (result) {
        //             logoutFunc();
        //         } else {
        //             localStorage.setItem("loginModalOpened", "true");
        //             localStorage.setItem("timeOut", "false");
        //             setTimeOutValue(100);
        //         }
        //     });

        // } else if((((userInfo.lang).toLowerCase()).slice(0, 2)) === "sp"){

        //     swal({
        //         title: "Sesión Expirada",
        //         text: "Su acción actual lo desconectará del sistema",
        //         icon: "warning",
        //         buttons: [ "Restaurar Sesion", "Bien, Cerrar Sesión" ],
        //         allowOutsideClick: false,
        //         closeOnClickOutside: false,
        //         dangerMode: true,
        //         }).then((result) => {
        //         if (result) {
        //             logoutFunc();
        //         } else {
        //             localStorage.setItem("loginModalOpened", "true");
        //             localStorage.setItem("timeOut", "false");
        //             setTimeOutValue(100);
        //         }
        //     });

        // }
    }
  });

return (
<>
<IdleTimer
ref={idleTimer}
onActive={onActive}
onIdle={onIdle}
debounce={250}
timeout={timeOutValue} // 30 minutes session timeout
// timeout={1800000} // 30 minutes session timeout
/>

<SessionTimeoutDialog
loginModalStatus={timeoutModalOpened}
countdown={timeoutCountdown}
onContinue={handleContinue}
onLogout={() => handleLogout(false)}
open={timeoutModalOpen}
/>
</>
);
}
export default SessionTimeout;