import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../store/actions';
import { useEffect } from 'react';

const Logout = () => {

    const dispatcher = useDispatch();

    const handleLogout = () => {

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
        window.location.reload();
    };

    return ( handleLogout() );
  }

  export default Logout;