import React from "react";
import DataTable from "./../../../../components/others/Datatable/DataTable";

export default function ChequeBookRequisitionApproval() {
  return (
    <div>
      <DataTable
        selectableRowsHeader={false}
        title={"Cheque Book Requisition Approval"}
        columns={[
          "Requisition No",
          "Account Number",
          "Account Name",
          "Leaves No",
          "Requisition Date",
          "Posted By",
          "Start No",
          "End Page",
        ]}
      />
    </div>
  );
}
