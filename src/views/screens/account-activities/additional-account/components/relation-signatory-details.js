import React from 'react'
import InputField from "../../../../../components/others/Fields/InputField";
import Label from "../../../../../components/others/Label/Label";
import SelectField from "../../../../../components/others/Fields/SelectField";
import ButtonComponent from "../../../../../components/others/Button/ButtonComponent";
import TextAreaField from "../../../../../components/others/Fields/TextArea";
import ListOfValue from "../../../../../components/others/Fields/ListOfValue";
import ButtonType from "../../../../../components/others/Button/ButtonType";
import DataTable from './datatable-annex';

const RelationSignatoryDetails = ({data, onChange , accountTypes , setAccountTypes, customerSegment, customerSubSegment, sector, subSector}) => {
    console.log(data.introductorysource, "data.customer_segment")
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
        options:{
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Customer ID",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Customer Description",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Posting Date",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Date Of Incorp",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Created By",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },
      {
        name: "Relationship Type",
        options: {
          setCellHeaderProps: () => ({
            style: { background: bgColor, color: "black" },
          }),
        },
      },  
    ];

      const rows = [];
  return (
    <div>
      <div className="border rounded">
        <DataTable rows={rows} columns={columns} />
      </div>
    </div>
  )
}

export default RelationSignatoryDetails;