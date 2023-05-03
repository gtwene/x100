import React from "react";
import InputField from "../../../../../../components/others/Fields/InputField";
import DataTable from "../../../../../../components/others/Datatable/DataTable";

function SearchModal({ header, description1, description2 }) {
  return (
    <div className="my-card" style={{ padding: "10px 10px" }}>
      {/* header */}
      <div
        style={{
          display: "flex",
          fontWeight: "bold",
          backgroundColor: "#ffffea",
          justifyContent: "flex-start",
          paddingLeft: "10px",
          fontSize: "90%",
          color: "black",
        }}
      >
        {header}
      </div>

      {/* first description */}
      <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
        {description1}
      </div>

      {/* second description */}
      <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
        {description2}
      </div>

      {/* inputfield */}
      <div style={{ paddingLeft: "10px", margin: "20px 0px" }}>
        <InputField
          label={"Find"}
          labelWidth={"5%"}
          inputWidth={"60%"}
          type={"text"}
        />
      </div>

      {/* datatable */}
      <div style={{ marginBottom: "20px", padding: "0px 5px" }}>
        <DataTable />
      </div>
    </div>
  );
}

export default SearchModal;
