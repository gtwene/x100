import { MDBIcon } from 'mdb-react-ui-kit';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../store/actions';
import { API_SERVER } from '../../config/constant';
import loadable from '@loadable/component';
import { Redirect } from 'react-router-dom';
import SessionTimeout from '../../components/sessionTimeout';

const Spinner = loadable(() => import('../../components/Spinner'));

const DefaultNavBar = ( ) => {

  const history = useHistory();
  
  // submenu keys of first level
  const rootSubmenuKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [getMenusC, setMenus] = useState(null);

  const customTheme = JSON.parse(localStorage.getItem('theme'));

  const [loading, setLoading] = useState(false);

  const [isAuthenticated, setAuth] = useState(true);

  const [getTheme, setTheme] = useState(customTheme);   

  const [selectedParentMenuItem, setSelectedParentMenuItem]= useState(localStorage.getItem("selectedParentMenuItem"));
  const [selectedChildMenuItem, setSelectedChildMenuItem]= useState(localStorage.getItem("selectedChildMenuItem"));

  const swal = require('sweetalert');

  const dispatcher = useDispatch();

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



  useEffect(() => {
    setTheme(customTheme);
    if(document.getElementById("defaultNavBar")){
      // Set NavBar Color
      document.getElementById("defaultNavBar").style.backgroundColor = getTheme.theme.navBarColor;
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
                // console.log(localStorage.getItem("menuIcons"));
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

  const onOpenChange = (keys) => {
    // console.log(keys);
    // const keyss = localStorage.getItem("selectedParentMenuItem");
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    // console.log(latestOpenKey);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  
  const[current, setCurrent] = useState(null);

  const onClick = (e) => {
    // console.log("click ", e);
    userselectedParentMenuItem(e.key);
    const url = e.key;
    if(url === '/logout'){
      
      if(document.getElementById("logout")){
        document.getElementById("logout").click();
      }

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


  // useEffect(()  => {

  // getMenusC.map((el) => {
   
  //   console.log(el);

  // });


  // }, []); 


  const coolThings = [];
  const arr0 = [];
  const arr1 = [];
  const arr2 = [];
  const arr3 = [];
  let data = [];

  if(getMenusC){
   
    if(!getMenusC.code){

    // console.log(response)
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
    let dataSum = "";
    //   let dataSub = [];
    let counter = 1;
    let mainCounter = 0;

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
              }  else {
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


    // console.log(data);
  }


  return (
    <>

    {(() => {

    if (loading) return  <Spinner />;

    })()}

    <SessionTimeout bgColor={getTheme.theme.navBarColor} isAuthenticated={isAuthenticated} logOut={handleLogout} />

    <div className="defaultNavBar fixed flex flex-col left-0 h-screen h-full justify-center top-0">
      <Menu
        className="defaultMenu defaultNavBarMenu"
        id='defaultNavBar'
        style={{
          width: 230,
          height: "100%",
          boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.2)",
          paddingTop: "86px",
          paddingBottom: "5px",
          marginTop: "55px",
          paddingLeft: "5px",
          paddingRight: "5px",
          animationDuration: "1s",
          overflowY: "scroll"
        }}
        selectedKeys={[selectedParentMenuItem, selectedChildMenuItem]}
        defaultOpenKeys={[selectedParentMenuItem]}
        onClick={onClick}
        mode="inline"
        // openKeys={[selectedParentMenuItem]}
        onOpenChange={(e) => onOpenChange(e)}
        items={ data }
      />
      </div>
      </>
  );
};
export default DefaultNavBar;