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

const Contact = () => {
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
      name: "Contact ID",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "contact Type",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Classification",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Description",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },  
    {
        name: "Contact",
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
          <div className="text-center font-bold p-2 border" style={{background:bgColor}}>Contact Information</div>
           
            {/* contact Type  */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Contact Type" required={true} />
                </div>
                <div className="md:w-2/3 ">
                  <SelectField inputWidth="50%" />
                </div>
              </div>
            </div>

            {/* Classification */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Classification" required={true} />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/*Name*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Name" required={true}/>
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Contact Number */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Contact Number"  />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Reference */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Reference" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            

            

            
          </div>
          {/* **************************************** */}

          
        </div>
      </div>
      <div className="flex justify-between">
          <div className="md:ml-2">
            <Button className="bg-blue-500 md:mt-5" onClick={toggleModal}>
              Preview Changes
            </Button>
            {showModal && (
              <PreviewModalContact
                showModal={showModal}
                setShowModal={setShowModal}
              />
            )}
          </div>

          <div>
            <Button className="bg-blue-500 md:mt-5">
              New
            </Button>

            <Button className="bg-blue-500 md:mt-5">
              Save
            </Button>
          </div>
        </div>
    </div>
  );
};

export default Contact;
