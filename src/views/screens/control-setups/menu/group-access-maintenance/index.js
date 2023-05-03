import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Container, Form, Modal} from 'react-bootstrap';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { MDBIcon } from 'mdb-react-ui-kit';
import { ButtonGroup } from '@mui/material';
import swal from "sweetalert";
import { API_SERVER } from '../../../../../config/constant';
import axios from "axios";

import GroupAccessMaintenance from './components/GroupAccessMaintenance';

const GroupAccess = () => {

  const getTheme = JSON.parse(localStorage.getItem('theme'));

  const headerImage = getTheme.theme.headerImage;

  const textColor = getTheme.theme.textColor;

  const [groupID, setGroupID] = useState('');
  const [accessID, setAccessID] = useState('');

  const handleGroupIDChange = (event) => {
    setGroupID(event.target.value);
  };

  const handleAccessIDChange = (event) => {
    setAccessID(event.target.value);
  };

  const groupIDOptions = [    
    { value: 'staff1', label: 'Group 1' },    
    { value: 'staff2', label: 'Group 2' },    
    { value: 'staff3', label: 'Group 3' }  
  ];

  const accessIDOptions = [    
    { value: 'access1', label: 'Access ID 1' },    
    { value: 'access2', label: 'Access ID 2' },    
    { value: 'access3', label: 'Access ID 3' }  
  ];


    async function handleSubmit(e) {
    e.preventDefault();

    if (
      groupID === "" ||
      accessID === "" 
    ) {
      swal({
        title: "Active Fields Are Required",
        text: "Please fill all the active fields",
        icon: "warning",
        button: "Ok",
      }).then((result) => {
        // Do something here..
        document.getElementById("saveBTN").disabled = false;
      });
    } else {
      // handle form submit here...
      try {
        const response = await axios.post(API_SERVER + "/add-group-access", {
          staffID : staffID,
          department : department,
        });

        if (response) {
          if (response.data[0].responseCode === "000") {
            swal({
              title: "User Creation Successful",
              text: "The user you created has been sent for Approval",
              icon: "success",
              button: "Ok",
            }).then((result) => {
              if (result) {
                setStateChangeOfMenus(true);
                document.getElementById("saveBTN").disabled = false;
                document.getElementById("minimizeModal").click();
              }
            });
          }
        } else {
          alert("Something went wrong...");
        }
      } catch (e) {
        alert(e);
      }
    }

  };

  return (
    <div>

    <div style={{ marginTop: "-15px", textAlign: "center", zoom: "0.8" }}>

    <span style={{ paddingLeft: 5, paddingRight: 5 }}>
    <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="file-alt" /><br />New</button>
    </span>

    <span style={{ paddingLeft: 5, paddingRight: 5 }}>
    <button className='btn btn-light' onClick={handleSubmit} id="saveBTN" style={{ color: "white", background: `url(` + window.location.origin + `/assets/images/headerBackground/` + headerImage + `)` }}><MDBIcon style={{ color: "white", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="save" /><br />Save</button>
    </span>

    {/* <span style={{ paddingLeft: 5, paddingRight: 5 }}>
    <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="sync" /><br />Refresh</button>
    </span> */}

    <span style={{ paddingLeft: 5, paddingRight: 5 }}>
    <button className='btn btn-light' style={{ background: "white" }}><MDBIcon style={{ color: "grey", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="check" /><br />Ok</button>
    </span>

    <span style={{ paddingLeft: 5, paddingRight: 5 }}>
    <button className='btn btn-primary' onClick={() => document.getElementById("closeModalBTN").click()} style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + headerImage + `)` }}><MDBIcon style={{ color: "white", marginLeft: "10px", paddingBottom: 5, fontSize: 15 }} fas icon="sign-out-alt" /><br />Exit</button>
    </span>

    </div> 

    <hr style={{ marginTop: "0px" }} />

    <div className='col-12'>

      <Form className='space-y-3 -mt-1 mb-3' style={{ zoom : "0.8", paddingLeft: "60px", paddingRight: "60px" }}>
        <Form.Group as={Row}>
            <Form.Label style={{ color: textColor }} column sm="2">Group&nbsp;ID:</Form.Label>
            <Col sm="10">
            <Select id="staffID" styles={{ 
            control: (provided) => ({ 
            ...provided, 
            minHeight: '1px', // Change the height value as needed
            maxHeight: "35px",
            fontSize: '13px', // Change the font size as needed
            }) 
        }}  options={groupIDOptions} value={groupID} onChange={handleGroupIDChange} />
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
        <Form.Label style={{ color: textColor }} column sm="2">Access&nbsp;ID:</Form.Label>
            <Col sm="10">
            <Select id="staffID" styles={{ 
            control: (provided) => ({ 
            ...provided, 
            minHeight: '1px', // Change the height value as needed
            maxHeight: "35px",
            fontSize: '13px', // Change the font size as needed
            }) 
        }}  options={accessIDOptions} value={accessID} onChange={handleAccessIDChange} />
            </Col>
        </Form.Group>
       </Form>


        <GroupAccessMaintenance />
    </div>
        
    </div>
  );
};

export default GroupAccess;