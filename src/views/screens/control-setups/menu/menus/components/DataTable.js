import React from "react";
import MUIDataTable from "mui-datatables";

function DataTable({ title, data, dataProcessingInfo, columns, rowsPerPage }) {
  const options = { selectableRows: "none", rowsPerPage: 5, textLabels: {
    body: { noMatch: dataProcessingInfo } } };

  return (
    <div style={{ zoom: "0.85" }}>
      <MUIDataTable
        title={title}
        data={data}
        columns={[
          "#",
          "Menu Name",
          // "Menu Groupings",
          "Menu Permission",
          "Bank Permitted",
          "Action",
        ]}
        options={options}
      />
    </div>
  );
}

export default DataTable;
