import React, { useState, useEffect } from "react";
import Swal from "sweetalert";

function NetworkStatusAlert() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleNetworkChange() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  useEffect(() => {
    if (!isOnline) {
      Swal({
        allowOutsideClick: false,
        icon: "error",
        title: "Oops...",
        text: "Network connection lost!",
        footer: "Please check your internet connection and try again.",
      });
    }
  }, [isOnline]);

  return null;
}

export default NetworkStatusAlert;
