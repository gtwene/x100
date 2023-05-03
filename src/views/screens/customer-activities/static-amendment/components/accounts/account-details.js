import React, { useState } from "react";
import InputField from "../../../../../../components/others/Fields/InputField";
import SelectField from "../../../../../../components/others/Fields/SelectField";
import Label from "../../../../../../components/others/Label/Label";
import ListOfValue from "../../../../../../components/others/Fields/ListOfValue";
import DataTable from "../datatable-annex";
import { Button } from "react-bootstrap";
import PreviewModalAccountDetails from "./preview-modal-account-details";

const AccountDetails = () => {
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

  
  const arr = [];

  return (
    <div>
      <div
        className={`border p-2 font-extrabold`}
        style={{ background: bgColor }}
      ></div>
      <div>
        <div
          className="text-center font-bold p-2 border"
          style={{ background: bgColor }}
        >
          {/*  */}
        </div>
        {/* **************************************** */}
        {/* **************************************** */}
        {/* **************************************** */}
        {/* **************************************** */}
        {/* **************************************** */}
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}

          <div className="w-full max-w-2xl">
            {/* Enter Account Number */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Enter Account Number " required={true} />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" className="bg-white" />
                </div>
              </div>
            </div>

            {/*Product*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Product" required={true} />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Currency Code */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Currency Code" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/*Source Branch*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Source Branch" required={true} />
                </div>
                <div className="md:w-2/3 md:mr-2">
                  <input class="my_inputs" type="text" />
                </div>
              </div>
            </div>

            {/* Account Name */}
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

            {/* Short Name */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Short Name" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* View Flag */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="View Flag" />
                </div>
                <div className="md:w-2/3 ">
                  <SelectField inputWidth="40%" className="bg-white" />
                </div>
              </div>
            </div>
          </div>

          {/* **************************************** */}
          {/* **************************************** */}
          <div className="w-full max-w-2xl">
            {/* Date Opened */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Date Opened" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="date" />
                </div>
              </div>
            </div>

            {/* Date Of Last Activity */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Date Of Last Activity " />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Transaction Count */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Transaction Count" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Fx Category */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Fx Category" />
                </div>
                <div className="md:w-2/3 ">
                  <SelectField inputWidth="40%" className="bg-white" />
                </div>
              </div>
            </div>

            {/* Account Status */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Account Status" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>
          </div>

          {/* **************************************** */}
          {/* **************************************** */}
        </div>
      </div>

      <div>
        <div
          className="text-center font-bold p-2 border"
          style={{ background: bgColor }}
        >
          {/*  */}
        </div>
        {/* **************************************** */}
        {/* **************************************** */}
        {/* **************************************** */}
        {/* **************************************** */}
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}

          <div className="w-full max-w-2xl">
            {/* Credit Rate */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Credit Rate" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Debit Rate */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Debit Rate" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>
          </div>

          {/* **************************************** */}
          {/* **************************************** */}
          <div className="w-full max-w-2xl">
            {/* Credit Interest A/C */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Credit Interest A/C" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Debit Interest A/C */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Debit Interest A/C" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>
          </div>

          {/* **************************************** */}
          {/* **************************************** */}

          <div className="w-full max-w-2xl">
            {/* Credit Interest P Code */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Credit Interest Code" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Debit Interest P Code */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Debit Interest P Code" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>
          </div>
          {/* **************************************** */}
          {/* **************************************** */}
        </div>
      </div>

      {/* ******************Third&************************** */}
      <div>
        <div
          className="text-center font-bold p-2 border"
          style={{ background: bgColor }}
        >
          {/*  */}
        </div>
        {/* **************************************** */}
        {/* **************************************** */}
        {/* **************************************** */}
        {/* **************************************** */}
        <div className="md:flex justify-center w-full">
          {/* **************************************** */}

          <div className="w-full max-w-2xl">
            {/* Sector */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Sector " required={true} />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" className="bg-white" />
                </div>
              </div>
            </div>

            {/* Sub Sector */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Sub Sector " required={true} />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" className="bg-white" />
                </div>
              </div>
            </div>

            {/* Delivery Method */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Delivery Method" required={true} />
                </div>
                <div className="md:w-2/3 ">
                  <ListOfValue inputWidth="70%" className="bg-white" />
                </div>
              </div>
            </div>

            {/* Institute Class*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Institute Class" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Isic*/}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Isic" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>

            {/* Last Statement Date */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Last Statement Date" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="date" />
                </div>
              </div>
            </div>

            {/* Next Statement Date */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Next Statement Date" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="date" />
                </div>
              </div>
            </div>

            {/* Statement Frequency */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Statement Frequency" />
                </div>
                <div className="md:w-2/3 ">
                  <SelectField inputWidth="40%" className="bg-white" />
                </div>
              </div>
            </div>
          </div>

          {/* **************************************** */}
          {/* **************************************** */}
          <div className="w-full max-w-2xl">
            {/* Cash Allowed */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Cash Allowed" />
                </div>
                <div className="md:w-2/3 ">
                  <SelectField inputWidth="40%" className="bg-white" />
                </div>
              </div>
            </div>

            {/* Cheque Allowed */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Cheque Allowed" />
                </div>
                <div className="md:w-2/3 ">
                  <SelectField inputWidth="40%" className="bg-white" />
                </div>
              </div>
            </div>

            {/* Int. Statement Freq */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Cash Allowed" />
                </div>
                <div className="md:w-2/3 ">
                  <SelectField inputWidth="40%" className="bg-white" />
                </div>
              </div>
            </div>

            {/* Next Int. Statement Freq */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Next Statement Date" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="date" />
                </div>
              </div>
            </div>

            {/* No of Statement Required */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="No of Statement Required" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="number" />
                </div>
              </div>
            </div>

            {/* Statement Copies to be Printed */}
            <div class="w-full max-w-xl mt-2">
              <div class="md:flex md:items-center mb-2 ml-2">
                <div class="md:w-1/3">
                  <Label label="Statement Copies to be Printed" />
                </div>
                <div class="md:w-2/3 ">
                  <input className="risk_label" type="text" />
                </div>
              </div>
            </div>
          </div>

          {/* **************************************** */}
          {/* **************************************** */}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="md:ml-2">
          <Button className="bg-blue-500 md:mt-5" onClick={toggleModal}>
            Preview Changes
          </Button>
          {showModal && (
            <PreviewModalAccountDetails
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </div>

        <div>
          <Button className="bg-blue-500 md:mt-5">New</Button>

          <Button className="bg-blue-500 md:mt-5">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
