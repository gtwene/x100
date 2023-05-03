import React, { useState } from "react";
import InputField from "../../../../../../components/others/Fields/InputField";
import SelectField from "../../../../../../components/others/Fields/SelectField";
import Label from "../../../../../../components/others/Label/Label";
import ListOfValue from "../../../../../../components/others/Fields/ListOfValue";
import DataTable from "../datatable-annex";
import { Button } from "react-bootstrap";
import PreviewModalRelation from "./preview-modal-relation";

const RelationInfo = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

    const customTheme = JSON.parse(localStorage.getItem("theme"));

    const bgColor =
      `url(` +
      window.location.origin +
      `/assets/images/background/` +
      customTheme.theme.backgroundImage +
    `)`;

     const columns = [
       {
         name: "#",
         options: {
           setCellHeaderProps: () => ({
             style: { background: bgColor, color: "black" },
           }),
         },
       },
       {
         name: "Relation No",
         options: {
           setCellHeaderProps: () => ({
             style: { background: bgColor, color: "black" },
           }),
         },
       },
       {
         name: "First Name",
         options: {
           setCellHeaderProps: () => ({
             style: { background: bgColor, color: "black" },
           }),
         },
       },
       {
         name: "Surname",
         options: {
           setCellHeaderProps: () => ({
             style: { background: bgColor, color: "black" },
           }),
         },
       },
       {
         name: "Gender",
         options: {
           setCellHeaderProps: () => ({
             style: { background: bgColor, color: "black" },
           }),
         },
       },
       {
         name: "Date Of Birth",
         options: {
           setCellHeaderProps: () => ({
             style: { background: bgColor, color: "black" },
           }),
         },
       },
     ];

     const arr = [];

    return (
      <div>
        <div>
          <DataTable columns={columns} data={arr} />
        </div>
        <div
          className={`border p-2 font-extrabold`}
          style={{ background: bgColor }}
        >
          Relation Details
        </div>
        <div>
          <div className="md:flex justify-center w-full">
            {/* **************************************** */}
            <div className="w-full max-w-2xl">
              {/* First Name */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="First Name" required={true} />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input className="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Surname */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Surname" required={true} />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input className="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Gender */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Gender" required={true} />
                  </div>
                  <div class="md:w-2/3 md:ml-1">
                    <SelectField
                      first_option="Male"
                      className="bg-white"
                      second_option="Female"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Number*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Mobile Number" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Place of Birth */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Place of Birth " />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Email" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Domicile Country */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Domicile Country" required={true} />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="70%" />
                  </div>
                </div>
              </div>

              {/*Country Of Resident */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Country Of Resident " required={true} />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="70%" />
                  </div>
                </div>
              </div>

              {/* Nationality */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Nationality" required={true} />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="70%" />
                  </div>
                </div>
              </div>

              {/* Consolidated Statement*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Consolidated Statement" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Staff Category */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Staff Category" required={true} />
                  </div>
                  <div class="md:w-2/3 md:ml-1">
                    <SelectField
                      first_option="Male"
                      className="bg-white"
                      second_option="Female"
                    />
                  </div>
                </div>
              </div>

              {/* Constitutional Code */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Constitutional Code" />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="70%" />
                  </div>
                </div>
              </div>

              {/* Residential Address */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Residential Address" />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input class="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Marital Status */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Marital Status" required={true} />
                  </div>
                  <div class="md:w-2/3 md:ml-1">
                    <SelectField
                      first_option="Male"
                      className="bg-white"
                      second_option="Female"
                    />
                  </div>
                </div>
              </div>

              {/* Number of Dependants*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Number of Dependants" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Mother's First Name*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Mother's First Name" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/*Mother's Middle Name*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Mother's Middle Name" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Mother's Maiden Name*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Mother's Maiden Name" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Qualification */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Qualification" />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="70%" />
                  </div>
                </div>
              </div>

              {/* Type Of Work */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Type Of Work" />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="70%" />
                  </div>
                </div>
              </div>
            </div>
            {/* **************************************** */}

            {/* Second Side */}
            {/* Second Side */}
            {/* Second Side */}
            <div className="w-full max-w-2xl">
              {/* Middle Name */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Middle Name" required={true} />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input className="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/* Alias Name */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Alias Name" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Title" />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="30%" />
                  </div>
                </div>
              </div>

              {/* Suffix */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Suffix" />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="30%" />
                  </div>
                </div>
              </div>

              {/* Date of Birth */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Date of Birth" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    {/* <input className="risk_label" type="date" /> */}
                    <InputField type={"date"} />
                  </div>
                </div>
              </div>

              {/* Residential Status */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Residential Status" required={true} />
                  </div>
                  <div class="md:w-2/3 md:ml-1">
                    <SelectField
                      first_option="Resident"
                      second_option="Non-Resident"
                      className="bg-white"
                    />
                  </div>
                </div>
              </div>

              {/*National ID No*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="National ID No" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* ID Expiry Date */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Date of Birth" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    {/* <input className="risk_label" type="date" /> */}
                    <InputField type={"date"} />
                  </div>
                </div>
              </div>

              {/* Other ID Type */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Other ID Type" />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="30%" />
                  </div>
                </div>
              </div>

              {/*ID Number*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="ID Number" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* ID Expiry Date */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Date of Birth" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    {/* <input className="risk_label" type="date" /> */}
                    <InputField type={"date"} />
                  </div>
                </div>
              </div>

              {/* ID Issue Date */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Date of Birth" required={true} />
                  </div>
                  <div class="md:w-2/3 ">
                    {/* <input className="risk_label" type="date" /> */}
                    <InputField type={"date"} />
                  </div>
                </div>
              </div>

              {/*ID Issued At*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="ID Issued At" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/*ID Issued Authority*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="ID Issued Authority" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/*Tax Number*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Tax Number" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/*Next Of Kin*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Next Of Kin" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Next Of Kin Address */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Next Of Kin Address" required={true} />
                  </div>
                  <div className="md:w-2/3 md:mr-2">
                    <input className="my_inputs" type="text" />
                  </div>
                </div>
              </div>

              {/*Next Of Kin Phone*/}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Next Of Kin Phone" />
                  </div>
                  <div class="md:w-2/3 ">
                    <input className="risk_label" type="text" />
                  </div>
                </div>
              </div>

              {/* Prefered ATM Language */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Preferred ATM Language" />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="70%" />
                  </div>
                </div>
              </div>

              {/* Prefered Phone Language */}
              <div class="w-full max-w-xl mt-2">
                <div class="md:flex md:items-center mb-2 ml-2">
                  <div class="md:w-1/3">
                    <Label label="Prefered Phone Language" />
                  </div>
                  <div className="md:w-2/3 ">
                    <ListOfValue inputWidth="70%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button onClick={toggleModal}>Preview Changes</Button>
        {showModal && (
          <PreviewModalRelation
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </div>
    );
}

export default RelationInfo;