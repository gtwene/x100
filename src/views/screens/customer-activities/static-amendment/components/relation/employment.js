import React, { useState } from "react";
import InputField from "../../../../../../components/others/Fields/InputField";
import SelectField from "../../../../../../components/others/Fields/SelectField";
import Label from "../../../../../../components/others/Label/Label";
import ListOfValue from "../../../../../../components/others/Fields/ListOfValue";
import DataTable from "../datatable-annex";
import { Button } from "react-bootstrap";
import PreviewModalAddress from "./preview-modal-adress";
import PreviewModalEmployment from "./preview-modal-employment";

const Employment = () => {
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
      name: "Employment Category",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Employer",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Position Held",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
    {
      name: "Department",
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
           
            {/* Employment Category */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Employment Category" required={true} />
                </div>
                <div className="md:w-2/3 ">
                  <SelectField inputWidth="50%" />
                </div>
              </div>
            </div>

            {/* Employment Type */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Employment Type" required={true} />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* Employer */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Employer"/>
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/*Others*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Others" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/*Address 1*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Address 1" required={true} />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Address 2 */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Address 2" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Land Mark */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Land Mark" />
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

            {/* Position Held */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Employer"/>
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* City */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="City"/>
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* Phone 1 */}
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

            

            
          </div>
          {/* **************************************** */}

          {/* Second Side */}
          {/* Second Side */}
          {/* Second Side */}
          <div className="w-full max-w-2xl">
            
            {/* Phone 2 */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Phone 2" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* fixed Term Contract */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Fixed Term Contract" />
                </div>
                <div className="md:w-2/3 ">
                  <SelectField inputWidth="30%" />
                </div>
              </div>
            </div>

            {/* Fax Number */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Fax Number" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Employment Number */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Employment Number" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Department */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Department" />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input className="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Salary Day */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Salary Day" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

             {/* Payment of Salary frequency */}
             <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Payment of Salary frequency"/>
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" />
                </div>
              </div>
            </div>

            {/* Salary Amount */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Salary Amount" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Employed Since */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Employed Since" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="date" />
                </div>
              </div>
            </div>

            {/* Date Exited */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Date Exited" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="date" />
                </div>
              </div>
            </div>

            {/* Date of Commencement */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Date of Commencement" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="date" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="flex justify-between">
          <div className="md:ml-2">
            <Button className="bg-blue-500 md:mt-5" onClick={toggleModal}>
              Preview Changes
            </Button>
            {showModal && (
              <PreviewModalEmployment
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

export default Employment;
