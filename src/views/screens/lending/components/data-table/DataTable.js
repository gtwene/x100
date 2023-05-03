import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function DataTable({
  title,
  data,
  dataProcessingInfo,
  rowsPerPage,
  tableCellFontSize,
  columns,
}) {
  const options = {
    selectableRows: false,
    rowsPerPage: rowsPerPage,
    textLabels: {
      body: { noMatch: dataProcessingInfo },
    },
  };
  //   const options = {
  //     filterType: "checkbox",
  //     rowsPerPage: rowsPerPage, // rows to display per page
  //   };
  //

  const getMuiTheme = () =>
    createTheme({
      components: {
        MUIDataTableBodyCell: {
          styleOverrides: {
            root: {
              // background: bgColor,
              fontSize: tableCellFontSize,
              color: "black",
            },
          },
        },
        MUIDataTableHeadCell: {
          styleOverrides: {
            root: {
              background: bgColor,
              fontSize: tableCellFontSize,
            },
          },
        },
      },
    });

  const customTheme = JSON.parse(localStorage.getItem("theme"));

  const bgColor =
    `url(` +
    window.location.origin +
    `/assets/images/background/` +
    customTheme.theme.backgroundImage +
    `)`;

  return (
    <div>
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={title}
          data={data} //should in an array
          columns={columns}
          options={options}
        />
      </ThemeProvider>
    </div>
  );
}

export default DataTable;

// import React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// const DataTableChris = () => {
//   return (
//     <div>
//       <Box
//         sx={{
//           height: "180px",
//           width: "auto",
//           borderRadius: "5px",

//           // marginLeft: "20px",

//           "& .super-app-theme--header": {
//             backgroundColor: "black",
//             color: "white",
//             fontWeight: "",
//             fontSize: "16px",
//           },
//         }}
//       >
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </div>
//   );
// };

// export default DataTableChris;
