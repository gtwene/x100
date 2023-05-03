import { MDBIcon } from 'mdb-react-ui-kit';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_SERVER } from '../../config/constant';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../store/actions';
import loadable from '@loadable/component';
import SessionTimeout from '../../components/sessionTimeout';

const Spinner = loadable(() => import('../../components/Spinner'));

const StylishNavBar = ( ) => {

  const history = useHistory();
  
  // submenu keys of first level
  const rootSubmenuKeys = ['sub0', 'sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7', 'sub8' ];

  const [getMenusC, setMenus] = useState(null);

  const customTheme = JSON.parse(localStorage.getItem('theme'));

  const [loading, setLoading] = useState(false);

  const [getTheme, setTheme] = useState(customTheme);   

  const [isAuthenticated, setAuth] = useState(true);

  const handleLogout = async () => {

  const storeSystemAuditLog = () => {
    return axios.post(API_SERVER + '/store-system-audit-logs', {
        user_id: JSON.parse(localStorage.getItem("userInfo")).id,
        page_accessed: "Logout",
        page_url: "/logout"
      });
  };
      
  try {
    await storeSystemAuditLog();
    dispatcher({ type: LOGOUT });
  } catch (error) {
    console.log(error);
  }
};


  const [selectedParentMenuItem, setSelectedParentMenuItem]= useState(localStorage.getItem("selectedParentMenuItem"));
  const [selectedChildMenuItem, setSelectedChildMenuItem]= useState(localStorage.getItem("selectedChildMenuItem"));

  const swal = require('sweetalert');

  const dispatcher = useDispatch();


  useEffect(() => {
    setTheme(customTheme);
    if(document.getElementById("stylishNavBar")){
      // Set NavBar Color
      document.getElementById("stylishNavBar").style.backgroundColor = getTheme.theme.navBarColor;
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTheme(customTheme);

      try {
        const response = await axios.get(`${API_SERVER}/get-menus`);
        if (response.data.errorNum) {
          // Handle error case
          setMenus([]);
        } else {
          setMenus(response.data);
        }
      } catch (error) {
        console.error(error);
        // Handle error case
        setMenus([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  

  const [openKeys, setOpenKeys] = useState();

  useEffect(()  => {
      
    setOpenKeys(selectedParentMenuItem);
    // console.log(selectedChildMenuItem);
  
  }, [selectedParentMenuItem]);

  useEffect(()  => {

    try {

        const getMenus = async () => {

            const response = await axios.get(API_SERVER + "/get-menu-icons");

            if(response){
                localStorage.setItem("menuIcons", JSON.stringify(response.data));
            } else {
                console.log("no response found!");
            }
        }

        getMenus();

    } catch (e) {
        console.error(e);
    }

    }, [selectedParentMenuItem]); 


    function userselectedParentMenuItem(key){
      localStorage.setItem("selectedParentMenuItem", key.split("=").pop());
      setSelectedParentMenuItem(key.split("=").pop());
      
      localStorage.setItem("selectedChildMenuItem", key);
      setSelectedChildMenuItem(key);
    }
 
  const[current, setCurrent] = useState(null);

  const onClick = (e) => {
    // console.log("click ", e);
    userselectedParentMenuItem(e.key);
    const url = e.key;
    if(url === '/logout'){
      
      if(document.getElementById("logout")){
        document.getElementById("logout").click();
      }

    } else {
      // Route to the page
      // if(localStorage.getItem("counter")){
      //   if(JSON.parse(localStorage.getItem("counter")) === 1){
      //     window.location.href = url;
      //   } else {
          history.push(url);
      //   }
      // } else {
      //   window.location.href = url;
      // }
    }
    setCurrent(e.key);
    return false;
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

    const arr0 = [];
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    let data = [];
  
    if(getMenusC){

      if(!getMenusC.code){
   
      getMenusC.map((el) => {
            if (el.menu_level === "0") {
              arr0.push(el);
            } else if (el.menu_level === "1") {
              arr1.push(el);
            } else if (el.menu_level === "2") {
              arr2.push(el);
            } else {
          arr3.push(el);
        }
      });
  
      arr1.map((i, ku) => {
        const dataSub = [];
        if(i.menu_id === "dash"){
        data.push({
          key: '/',
          label: i.menu_name,
          url: i.menu_url,
          icon: <i className={ "FIcons " + i.icon } />,
        });
        } else if(i.menu_id === "lout") {
          data.push({
          key: '/logout',
          label: i.menu_name,
          url: i.menu_url,
          icon: <i className={ "FIcons " + i.icon } />
          });
        } else {
          data.push({
          key: i.menu_id,
          label: i.menu_name,
          url: i.menu_url,
          icon: <i className={ "FIcons " + i.icon } />
          });
        }
        arr2.map((e, key) => {
          if (i.menu_id === e.parent_menu_id) {
            data.map((a, k) => {
              if (ku === k) {
                dataSub.push({
                  key: e.menu_url + "?fm=" + e.parent_menu_id,
                  label: e.menu_name,
                  url: e.menu_url,
                  icon: <i className={ "subFIcons " + e.icon } />
                });
                a.children = [...dataSub];
              }
            });
          }
        });
      });

       }
  
    }

    // console.log(data);

  return (
    <>

    {(() => {

    if (loading) return  <Spinner />;

    })()}

    <SessionTimeout isAuthenticated={isAuthenticated} logOut={handleLogout} />

    <div className="stylishNavBar fixed flex flex-col left-0 h-screen justify-center inset-y-0 z-0">
      <Menu
        className="stylishMenu stylishNavBarMenu"
        id='stylishNavBar'
        style={{
          width: 54,
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
          boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.2)",
          paddingTop: "20px",
          paddingBottom: "20px",
          animationDuration: "1s",
          overflowY: "scroll"
        }}
        selectedKeys={[selectedParentMenuItem, selectedChildMenuItem]}
        defaultOpenKeys={[selectedParentMenuItem]}
        onClick={onClick}
        mode="inline"
        // openKeys={[selectedParentMenuItem]}
        // onOpenChange={(e) => onOpenChange(e.key)}
        // items={getMenusC}
        items={data}
      />
      </div>
      </>
  );
};
export default StylishNavBar;