

import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import TimePicker from 'react-time-picker';
import { MDBIcon } from 'mdb-react-ui-kit';
import swal from "sweetalert";
import { Form, Row, Col, Button, Modal } from 'react-bootstrap';
import { API_SERVER } from '../../../../../../config/constant';
import axios from "axios";
import UserInformation from './UserInformation';

const UserCreationForm = () => {

  const customTheme = JSON.parse(localStorage.getItem("theme"));

  const headerImage = customTheme.theme.headerImage;
  const textColor = customTheme.theme.textColor;

  const [staffID, setStaffID] = useState('');
  const [department, setDepartment] = useState('');
  const [staffName, setStaffName] = useState('');
  const [userID, setUserID] = useState('');
  const [userType, setUserType] = useState('');
  const [deviceID, setDeviceID] = useState('');
  const [branch, setBranch] = useState('');
  const [timeIn, setTimeIn] = useState('08:00');
  const [timeOut, setTimeOut] = useState('17:00');
  const [accessRight, setAccessRight] = useState('');
  const [authorityCode, setAuthorityCode] = useState('');
  const [approvalRight, setApprovalRight] = useState('');
  const [userApprovalLevel, setUserApprovalLevel] = useState('');

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleStaffNameChange = (event) => {
    setStaffName(event.target.value);
  };

  const handleUserIDChange = (event) => {
    setUserID(event.target.value);
  };

  const handleUserTypeChange = (selectedOption) => {
    setUserType(selectedOption);
  };

  const handleDeviceIDChange = (event) => {
    setDeviceID(event.target.value);
  };

  const handleBranchChange = (selectedOption) => {
    setBranch(selectedOption);
  };

  const handleTimeInChange = (time) => {
    setTimeIn(time);
  };

  const handleTimeOutChange = (time) => {
    setTimeOut(time);
  };

  const handleStaffIDChange = (selectedOption) => {
    setUserInformationModal(false);
    setStaffID(selectedOption);
    
    if(selectedOption !== '' || selectedOption !== null || selectedOption !== undefined){
      document.getElementById("department").disabled = false;
      document.getElementById("staffName").disabled = false;
    } else {
      document.getElementById("department").disabled = true;
      document.getElementById("staffName").disabled = true;
    }
  };

  const handleAccessRightChange = (selectedOption) => {
    setAccessRight(selectedOption);
  };

  const handleAuthorityCodeChange = (event) => {
    setAuthorityCode(event.target.value);
  };

  const handleApprovalRightChange = (event) => {
    setApprovalRight(event.target.value);
  };

  const handleUserApprovalLevelChange = (event) => {
    setUserApprovalLevel(event.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      staffID === "" ||
      userID === "" ||
      userType === "" ||
      deviceID === "" ||
      branch === "" ||
      accessRight === "" ||
      authorityCode === "" ||
      approvalRight === "" 
      // || userApprovalLevel === "" 
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
        const response = await axios.post(API_SERVER + "/create-user", {
          staffID : staffID,
          department : department,
          staffName : staffName,
          userID : userID,
          userType : userType,
          deviceID : deviceID,
          branch : branch,
          timeIn : timeIn,
          timeOut : timeOut,
          accessRight : accessRight,
          authorityCode : authorityCode,
          approvalRight : approvalRight,
          userApprovalLevel : userApprovalLevel,
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

  const staffIDOptions = [    
    { value: 'staff1', label: 'Staff 1' },    
    { value: 'staff2', label: 'Staff 2' },    
    { value: 'staff3', label: 'Staff 3' }  
  ];

  const userTypeOptions = [    
    { value: 'admin', label: 'Admin' },    
    { value: 'employee', label: 'Employee' },    
    { value: 'guest', label: 'Guest' }  
  ];

  const branchOptions = [    
    { value: 'branch1', label: 'Branch 1' },    
    { value: 'branch2', label: 'Branch 2' },    
    { value: 'branch3', label: 'Branch 3' }  
  ];

  const accessRightOptions = [    
    { value: 'full', label: 'Full' },    
    { value: 'limited', label: 'Limited' },    
    { value: 'none', label: 'None' }  
  ];

  const authorityCodeOptions = [    
    { value: 'code1', label: 'Code 1' },    
    { value: 'code2', label: 'Code 2' },    
    { value: 'code3', label: 'Code 3' }  
  ];

  const approvalRightOptions = [
    { value: 'approved', label: 'Approved' },
    { value: 'pending', label: 'Pending' },
    { value: 'rejected', label: 'Rejected' }
  ];

  const userApprovalLevelOptions = [
    { value: 'level1', label: 'Level 1' },
    { value: 'level2', label: 'Level 2' },
    { value: 'level3', label: 'Level 3' }
  ];


    const [showUserInformationModal, setUserInformationModal] = useState(false);

    const UserInformationModal = ({ showModal, setShowModal }) => {

      if(staffID){

      const handleClose = () => setShowModal(false);
      const handleShow = () => setShowModal(true);
     
       return (
         <>
           <Modal 
           size="md" 
           className="headModal modal" 
           show={showModal} 
           centered
           // onHide={handleClose}
           >
          <Modal.Header style={{ background: `url(` + window.location.origin + `/assets/images/headerBackground/` + headerImage + `)` }}>
          <div className="w-full -mb-4 flex justify-between ">
            <Modal.Title
              style={{
                fontSize: "14.5px",
                color: "white",
                padding: "10px"
              }}
            >
              <p><MDBIcon style={{ color: "white", fontSize: "15px" }} fas icon="user-alt" />&nbsp; User Information</p>
            </Modal.Title>
            <svg
              onClick={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              style={{ padding: "10px" }}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-11 h-11 cursor-pointer fill-cyan-500 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Modal.Header>

             <Modal.Body style={{ background: "white" }}>
                
                <UserInformation />
                
             </Modal.Body>
           </Modal>
         </>
       );
     } else {
        return null;
     }

    } 

  return (
    <>

    <UserInformationModal name="User Information" showModal={showUserInformationModal} setShowModal={setUserInformationModal} />

    <Form className='space-y-3 -mt-4 mb-2' style={{ zoom: "0.9" }}>
      <Form.Group as={Row}>
        <Form.Label style={{ color: textColor }} column sm="3">Staff ID:</Form.Label>
        <Col sm="9">
          <Select id="staffID" styles={{ 
        control: (provided) => ({ 
          ...provided, 
          minHeight: '1px', // Change the height value as needed
          maxHeight: "35px",
          fontSize: '13px', // Change the font size as needed
        }) 
      }}  options={staffIDOptions} value={staffID} onChange={handleStaffIDChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm="3">Department:</Form.Label>
        <Col sm="9">
          <Form.Control id="department" size="sm" disabled type="text" value={department} onChange={handleDepartmentChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm="3">Staff Name:</Form.Label>
        <Col sm="8">
          <Form.Control size="sm" id="staffName" disabled type="text" value={staffName} onChange={handleStaffNameChange} />
        </Col>
        <Col sm="1">
          <Button size="sm" onClick={function (e) { e.preventDefault(); setUserInformationModal(!showUserInformationModal); }} id="userInfoBTN" style={{ textAlign: "center", marginLeft: "-17px", maxHeight: "29px", background: `url(` + window.location.origin + `/assets/images/headerBackground/` + headerImage + `)` }} variant="variant"><MDBIcon style={{ color: "white", fontSize: "17px", marginRight: "-5px", marginLeft: "-6px", }} fas icon="info-circle" /></Button>
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label style={{ color: textColor }} column sm="3">User ID:</Form.Label>
        <Col sm="9">
          <Form.Control size="sm" id="userID" type="text" value={userID} onChange={handleUserIDChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label style={{ color: textColor }} column sm="3">User Type:</Form.Label>
        <Col sm="9">
          <Select id="userType" styles={{ 
        control: (provided) => ({ 
          ...provided, 
          minHeight: '1px', // Change the height value as needed
          maxHeight: "35px",
          fontSize: '13px', // Change the font size as needed
        }) 
      }}  options={userTypeOptions} value={userType} onChange={handleUserTypeChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label style={{ color: textColor }} column sm="3">Device ID:</Form.Label>
        <Col sm="9">
          <Form.Control size="sm" id="deviceID" type="text" value={deviceID} onChange={handleDeviceIDChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label style={{ color: textColor }} column sm="3">Branch:</Form.Label>
        <Col sm="9">
          <Select styles={{ 
        control: (provided) => ({ 
          ...provided, 
          minHeight: '1px', // Change the height value as needed
          maxHeight: "35px",
          fontSize: '13px', // Change the font size as needed
        }) 
      }}  options={branchOptions} id="branch" value={branch} onChange={handleBranchChange} />
        </Col>
      </Form.Group>

      <Form.Group style={{ paddingLeft: "0px", paddingRight: "0px", marginTop: "17px" }} as={Row}>
        <Form.Label column sm="3">Time In :</Form.Label>
        <Col sm="4">
          <TimePicker value={timeIn} id="timeIn" onChange={handleTimeInChange} />
        </Col>
        <Col sm="1" className="text-center">
          to
        </Col>
        <Col sm="4">
          <TimePicker value={timeOut} id="timeOut" onChange={handleTimeOutChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label style={{ color: textColor }} column sm="3">Access Right:</Form.Label>
        <Col sm="9">
          <Select styles={{ 
        control: (provided) => ({ 
          ...provided, 
          minHeight: '1px', // Change the height value as needed
          maxHeight: "35px",
          fontSize: '13px', // Change the font size as needed
        }) 
      }}  options={accessRightOptions} id="accessRight" value={accessRight} onChange={handleAccessRightChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label style={{ color: textColor }} column sm="3">Authority Code:</Form.Label>
          <Col sm="9">
          <Select id="authorityCode" styles={{ 
          control: (provided) => ({ 
            ...provided, 
            minHeight: '1px', // Change the height value as needed
            maxHeight: "35px",
            fontSize: '13px', // Change the font size as needed
          }) 
        }}  options={authorityCodeOptions} value={authorityCode} onChange={handleAuthorityCodeChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label style={{ color: textColor }} column sm="3">Approval Right:</Form.Label>
        <Col sm="9">
          <Select id="approvalRight" styles={{ 
        control: (provided) => ({ 
          ...provided, 
          minHeight: '1px', // Change the height value as needed
          maxHeight: "35px",
          fontSize: '13px', // Change the font size as needed
        }) 
      }}  options={approvalRightOptions} value={approvalRight} onChange={handleApprovalRightChange} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm="3">Approval Level:</Form.Label>
        <Col sm="9">
          <Select id="userApprovalLevel" styles={{ 
        control: (provided) => ({ 
          ...provided, 
          minHeight: '1px', // Change the height value as needed
          maxHeight: "35px",
          fontSize: '13px', // Change the font size as needed
        }) 
      }}  options={userApprovalLevelOptions} value={userApprovalLevel} onChange={handleUserApprovalLevelChange} />
        </Col>
      </Form.Group>

      <Button id="submitUserCreationForm" onClick={handleSubmit} type="button" style={{ display: "none" }}>Submit</Button>
    </Form>
    </>
  );
};

export default UserCreationForm;
