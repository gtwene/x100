import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function DataTable({ title, data, dataProcessingInfo, rowsPerPage, tableCellFontSize }) {
  const options = { selectableRows: "none", rowsPerPage: rowsPerPage, textLabels: {
    body: { noMatch: dataProcessingInfo } } };

    const getMuiTheme = () =>
      createTheme({
        components: {
          MUIDataTableBodyCell: {
            styleOverrides: {
              root: {
                //   background: bgColor,
                fontSize: tableCellFontSize,
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


      const customTheme = JSON.parse(localStorage.getItem('theme'));

      const bgColor =`url(` + window.location.origin + `/assets/images/background/` + customTheme.theme.backgroundImage + `)`;


      // const columns = ['#', 'User ID', 'Last Login', 'IP Address', 'Mac Address', 'Login Location', 'Page Accessed', 'Page URL'
      //   ];

      const columns = ['#', 'User ID', 'Last Login', 'IP Address', 'Page Accessed', 'Page URL'
        ];

  return (
    <div>
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
            title={title}
            data={data}
            columns={columns}
            options={options}
        />
      </ThemeProvider>
    </div>
  );
}

export default DataTable;
