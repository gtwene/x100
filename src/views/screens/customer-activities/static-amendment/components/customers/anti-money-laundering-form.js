import React, { useState } from "react";
import Label from "../../../../../../components/others/Label/Label";
import ListOfValue from "../../../../../../components/others/Fields/ListOfValue";
import PreviewModalAntiMoneyLaundering from "./preview-modal-anti-money";
import { Button } from "react-bootstrap";
import DataTable from "../datatable-annex";

const AntiMoneyLaundering = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClick = (index) => {
    setActiveStep(index);
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
      name: "Code",
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
      name: "Check",
      options: {
        setCellHeaderProps: () => ({
          style: { background: bgColor, color: "black" },
        }),
      },
    },
  ];

  const rows = [];

  const custom =
    `url(` +
    window.location.origin +
    `/assets/images/headerBackground/` +
    customTheme.theme.headerImage +
    `)`;

  return (
    <div>
      <div className="border rounded">
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}
          <div className="w-full max-w-2xl">
            {/*No of Withdrawal per Month*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="No of Withdrawal per Month" required={true} />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/*Amount of Withdrawal per Month*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Amount Withdrawals per Month" required={true} />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/*No of Deposits per Month*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="No of Deposits per Month" required={true} />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/*Amount Deposits per Month*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Amount Deposits per Month" required={true} />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/*Annual Income*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3 font-extrabold">
                  <Label label="Annual Income" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* <div className="border md:ml-5 md:p-2 bg-[#15A3B7] text-white md:mt-1">
              Risk Analysis / PEP Evaluation
            </div> */}

            <div className="">
              <div
                className="border md:p-2 text-white md:mt-1"
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    customTheme.theme.headerImage +
                    `)`,
                }}
              >
                Risk Analysis / PEP Evaluation
              </div>
              <DataTable columns={columns} data={rows} rowsPerPage={2} />
              {/* <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">
                  Senior Officials of the other state agencies and bodies and
                  high ranking civil servant
                </label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">
                  Senior members of religious group
                </label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">
                  Ambassadors, Consuls, high commissioners
                </label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">
                  Senior Management and board of directors of State-owned
                  Businesses
                </label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">
                  Mayors and members of local, county, city and district
                  assemblies
                </label>
              </div> */}
            </div>
          </div>
          {/* **************************************** */}

          {/* Second Side */}
          {/* Second Side */}
          {/* Second Side */}
          <div className="w-full max-w-2xl">
            {/* <div className="border md:ml-5 md:p-2 bg-[#15A3B7] text-white md:mt-1">
              Source of Fund
            </div> */}
            <div className="ml-5">
              <div
                className="border md:p-2 text-white md:mt-1"
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    customTheme.theme.headerImage +
                    `)`,
                }}
              >
                Source of Fund
              </div>
              <DataTable columns={columns} data={rows} rowsPerPage={2} />
            </div>

            {/* <div className="border md:ml-5 md:p-2">
              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">
                  Business Sales
                </label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">
                  Proceeds from Estate
                </label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">Salary</label>
              </div>

              <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input type="checkbox" className="my_inputs_Source_of_fund" />
                <label className="my_labels_Source_of_fund">Commissions</label>
              </div>
            </div> */}

            <div className="ml-5">
              <div
                className="border md:p-2 text-white md:mt-1"
                style={{
                  background:
                    `url(` +
                    window.location.origin +
                    `/assets/images/headerBackground/` +
                    customTheme.theme.headerImage +
                    `)`,
                }}
              >
                Transaction Type
              </div>
              <DataTable columns={columns} data={rows} rowsPerPage={2} />
            </div>
          </div>
        </div>
      </div>
      <div className="md:ml-2">
        <Button className="bg-blue-500 md:mt-5" onClick={toggleModal}>
          Preview Changes
        </Button>
        {showModal && (
          <PreviewModalAntiMoneyLaundering
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
};

export default AntiMoneyLaundering;
