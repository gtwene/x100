import React, { useState } from "react";
import InputField from "../../../../../../components/others/Fields/InputField";
import SelectField from "../../../../../../components/others/Fields/SelectField";
import Label from "../../../../../../components/others/Label/Label";
import ListOfValue from "../../../../../../components/others/Fields/ListOfValue";
import DataTable from "../datatable-annex";
import { Button } from "react-bootstrap";
import PreviewModalAddress from "./preview-modal-adress";
import PreviewModalEmployment from "./preview-modal-employment";
import PreviewModalContact from "./preview-modal-contact";
import PreviewModalOther from "./preview-modal-other";
import PreviewModalHobby from "./preview-modal-hobby";

const Hobby = () => {
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
      name: "Hobby Description",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Delete",
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
      <div
        className={`border p-2 font-extrabold`}
        style={{ background: bgColor }}
      ></div>
      <div>
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}

          <div className="w-full max-w-2xl">
            <div
              className="text-center font-bold p-2 border"
              style={{ background: bgColor }}
            >
              Other Bank Information
            </div>
            {/* Hobby */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Hobby" />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="90%" />
                </div>
              </div>
            </div>
          </div>
          {/* **************************************** */}
        </div>
        <div className="flex justify-end">
          <Button className="bg-blue-500 md:mt-5">New</Button>

          <Button className="bg-blue-500 md:mt-5">Save</Button>
        </div>
        <div>
          <DataTable columns={columns} data={arr} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="md:ml-2">
          <Button className="bg-blue-500 md:mt-5" onClick={toggleModal}>
            Preview Changes
          </Button>
          {showModal && (
            <PreviewModalHobby
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </div>
            
      </div>
    </div>
  );
};

export default Hobby;
