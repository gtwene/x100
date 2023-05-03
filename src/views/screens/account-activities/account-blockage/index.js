import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import ListOfValue from "../../../../components/others/Fields/ListOfValue";
import React from "react";
// import HeaderComponent from "../components updated/HeaderComponent";
import { FaUserTimes } from "react-icons/fa/index.esm";
import InputField from "../../../../components/others/Fields/InputField";
// import { height } from "@mui/system";
import ButtonComponent from "../../../../components/others/Button/ButtonComponent";
import ScreenBase from "./components/ScreenBase";

import axios from "axios";

function Account_Blockage() {
  // const [statusCodeLOV, setStatusCodeLOV] = useState([]);
  // const [reasonLOV, setReasonLOV] = useState([]);
  // const [reason, setSelectedReason] = useState("");
  // const [stat, setStat] = useState("");

  // const handleDisabledField = (value) => {
  //   console.log(value);
  //   setSelectedReason(value);
  // };

  // const handleDisabledField2 = (value) => {
  //   console.log(value);
  //   setStat(value);
  // };

  // console.log(reason, "reason");
  // let arr1 = [];
  // let arr2 = [];
  // // let Bank;
  // useEffect(() => {
  //   const getStatusCode = () => {
  //     return axios.get("http://localhost:7891/get-status-code", {});
  //   };

  //   const getReason = () => {
  //     return axios.get("http://localhost:7891/get-reason", {});
  //   };

  //   Promise.all([getStatusCode(), getReason()]).then((results) => {
  //     // console.log(results,">>>resutlts");

  //     const statusCode = results[0].data;
  //     console.log(statusCode);
  //     const reasons = results[1].data;
  //     localStorage.setItem("getStatusCode", JSON.stringify(statusCode));
  //     localStorage.setItem("getReason", JSON.stringify(reasons));

  //     //  var Bank1 = JSON.parse(localStorage.getItem("getIssuingBC"));
  //     //   console.log(Bank1);
  //   });
  //   // console.log(chequeCat, ">>>> i am here")
  //   // console.log(chequeCat, ">>>> i am here")

  //   {
  //     (() => {
  //       var statusCode = JSON.parse(localStorage.getItem("getStatusCode"));
  //       // console.log(Bank, ">>>bank is here");
  //       console.log(statusCode, "status hereeeeeeeeeeee");

  //       for (var i = 0; i < statusCode.length; i++) {
  //         const actual_code = statusCode[i]["actual_code"];
  //         const description = statusCode[i]["description"];
  //         // the above are two different ways of  storing actual code and description

  //         console.log(actual_code, description, ">>>>>");

  //         arr1.push({
  //           value: actual_code,
  //           label: `${actual_code}-${description}`,
  //         });
  //       }
  //       setStatusCodeLOV(arr1);
  //     })();
  //   }

  //   // next function for LOV
  //   {
  //     // first off it starts off with an anonymous code
  //     (() => {
  //       var reasons1 = JSON.parse(localStorage.getItem("getReason"));
  //       // console.log(Bank, ">>>bank is here");
  //       console.log(reasons1, "status code here");

  //       for (var i = 0; i < reasons1.length; i++) {
  //         console.log(reasons1[i], "reasons1 is here");

  //         const reject_code = reasons1[i]["rejectCode"];
  //          const rejectDescription = reasons1[i]["rejectDescription"];
  //         // the above are two different ways of  storing actual code and description

  //         arr2.push({
  //           value: reject_code,
  //           label: `${reject_code}-${rejectDescription}`,
  //         });
  //       }
  //       console.log(arr2, "this is array 2");
  //       setReasonLOV(arr2);
  //       // console.log(reasonLOV,"here")
  //     })();
  //   }

  //   // console.log(arr2, "array2");
  // }, []);

  // console.log(reasonLOV, "lov is here");

  return (
    <ScreenBase
      // header_title={"ACCOUNT BLOCKAGE"}
      // header_icon={<FaUserTimes />}
      card_div1a={
        <div style={{ display: "flex", flex: 1 }}>
          <div style={{ flex: 0.53 }}>
            <InputField
              label="Account Number  : "
              labelWidth={"41%"}
              required={true}
              inputWidth="57%"
            />
          </div>
          <div style={{ flex: 0.45 }}>
            <InputField type="text" inputWidth="98%" disabled={true} />
          </div>
          <div style={{ flex: 0.02 }}>
            <ButtonComponent
              label={"Sig. Ver"}
              buttonColor={"white"}
              buttonBackgroundColor="rgb(21 163 183)"
              buttonHeight={"25px"}
              // onClick={handleClick}
            />
          </div>
        </div>
      }
      card_div2a={
        <div style={{ marginBottom: "10px" }}>
          <div style={{ marginBottom: "15px" }}>
            <InputField
              label="Product Group   : "
              labelWidth={"20%"}
              required={false}
              inputWidth="60%"
              disabled={true}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <InputField
              label=" Product Sub Group  : "
              placeeholder={"you"}
              labelWidth={"20%"}
              type="number"
              required={false}
              inputWidth="70%"
              disabled={true}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <InputField
              label="Currency  : "
              labelWidth={"20%"}
              required={false}
              inputWidth="40%"
              disabled={true}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <InputField
              label=" Status : "
              placeeholder={"you"}
              labelWidth={"20%"}
              type="number"
              required={false}
              inputWidth="60%"
              disabled={true}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <ListOfValue
              label="Change Status : "
              labelWidth={"20%"}
              required={true}
              maxLength={"10px"}
              //  key={statusCodeLOV}
              // lovData={statusCodeLOV}
              inputWidth="60%"
              id={"status_id"}
              disabled={true}
              // onChange={handleDisabledField2}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <ListOfValue
              label=" Reasons  : "
              labelWidth={"20%"}
              // lovData={reasonLOV}
              // key={reasonLOV}
              required={true}
              type="text"
              inputWidth="80%"
              disabled={true}
              id={"reason_id"}
              // value={reason}
              // onChange={handleDisabledField}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <InputField
              label="Other Reasons: "
              labelWidth={"20%"}
              required={true}
              type="textarea"
              inputWidth="80%"
              id={"otherreason_id"}
              // disabled={reason === "999" ? false : true}
            />
          </div>

          <div>
            <InputField
              label=" Authoriser : "
              placeeholder={"you"}
              labelWidth={"20%"}
              type="number"
              required={true}
              inputWidth="50%"
              // disabled={stat === "VL" ? false : true}
            />
          </div>
        </div>
      }

      //   card_div2a={
      //     <div className="form-container">
      //     <form>
      //       <label htmlFor="account-number">Account Number:</label>
      //       <input type="text" id="account-number" name="account-number" disabled />
      //       <button type="button" id="sig-gif">Sig Gif</button>

      //       <label htmlFor="product-group">Product Group:</label>
      //       <input type="text" id="product-group" name="product-group" disabled />

      //       <label htmlFor="currency">Currency:</label>
      //       <input type="text" id="currency" name="currency" disabled />

      //       <label htmlFor="change-status">Change Status:</label>
      //       <div className="select-wrapper">
      //         <select id="change-status" name="change-status">
      //           <option value="" selected disabled hidden>Choose an option</option>
      //           <option value="status-1">Status 1</option>
      //           <option value="status-2">Status 2</option>
      //           <option value="status-3">Status 3</option>
      //         </select>
      //         <span className="icon-magnify"></span>
      //       </div>

      //       <label htmlFor="other-reasons">Other Reasons<span className="required">*</span>:</label>
      //       <input type="text" id="other-reasons" name="other-reasons" disabled />

      //       <label htmlFor="product-sub-group">Product Sub Group:</label>
      //       <input type="text" id="product-sub-group" name="product-sub-group" disabled />

      //       <label htmlFor="status">Status:</label>
      //       <input type="text" id="status" name="status" disabled />

      //       <label htmlFor="reasons">Reasons:</label>
      //       <div className="select-wrapper">
      //         <select id="reasons" name="reasons">
      //           <option value="" selected disabled hidden>Choose an option</option>
      //           <option value="reason-1">Reason 1</option>
      //           <option value="reason-2">Reason 2</option>
      //           <option value="reason-3">Reason 3</option>
      //         </select>
      //         <span className="icon-magnify"></span>
      //       </div>

      //       <label htmlFor="authoriser">Authoriser:</label>
      //       <input type="text" id="authoriser" name="authoriser" disabled />
      //     </form>
      //   </div>

      //   }
    />
  );
}

export default Account_Blockage;
