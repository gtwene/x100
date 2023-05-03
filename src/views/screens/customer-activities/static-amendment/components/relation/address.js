import React, { useState } from "react";
import InputField from "../../../../../../components/others/Fields/InputField";
import SelectField from "../../../../../../components/others/Fields/SelectField";
import Label from "../../../../../../components/others/Label/Label";
import ListOfValue from "../../../../../../components/others/Fields/ListOfValue";
import DataTable from "../datatable-annex";
import { Button } from "react-bootstrap";
import PreviewModalAddress from "./preview-modal-adress";

const Address = () => {
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
      name: "PO Address 1",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "PO City",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "House Type",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Ph Address 1",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Ph Address 2",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Location",
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
        
      </div>
      <div>
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}
          <div className="w-full max-w-2xl">
            <div className="border font-bold pl-2 bg-red-500 text-white">
              Physical Address Information
            </div>
            {/* Region */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Region" />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* House Type */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="House Type " />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* Flat/Villa/House No */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Flat/Villa/House No" required={true} />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/*Building Name */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Building Name" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/*Street Name */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Street Name" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Location */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Location" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/*City */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="City" />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* Nearest Landmark */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Nearest Landmark" />
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

            {/*Phone 1*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Phone 1" required={true} />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/*Phone 2*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Phone 2" required={true} />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Nature Of Ownership */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Nature Of Ownership" />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/*Stayed Since*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Stayed Since" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="date" />
                </div>
              </div>
            </div>

            {/*Cost Of Accom*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Cost Of Accom" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/*Current Value*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Current Value" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/*Balance Mortgage*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Balance Mortgage" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/*Fax*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Fax" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Attention Party*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Attention Party" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>
          </div>
          {/* **************************************** */}

          {/* Second Side */}
          {/* Second Side */}
          {/* Second Side */}
          <div className="w-full max-w-2xl">
            <div className="border font-bold pl-2 bg-red-500 text-white">
              Postal Address
            </div>
            {/* Postal Address Number */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Postal Address Number" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Address */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Address" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input className="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/*Postal City */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Postal City" />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* Postal Zip Code */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Postal Zip Code" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/*Country Code*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Country Code" />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* Attention Party */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Attention Party" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input className="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Neareat Landmark */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Neareat Landmark" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input className="my_inputs" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={toggleModal}>Preview Changes</Button>
      {showModal && (
        <PreviewModalAddress
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Address;
