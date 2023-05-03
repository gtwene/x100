import React, { useState, useEffect }  from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MDBIcon } from 'mdb-react-ui-kit';

function GroupAccessMaintenance({ title, dataProcessingInfo, rowsPerPage, tableCellFontSize }) {
  const options = { selectableRows: "none", rowsPerPage: 5, textLabels: {
    body: { noMatch: dataProcessingInfo } } };

    const customTheme = JSON.parse(localStorage.getItem('theme'));

    const headerImage = customTheme.theme.headerImage;

    const bgColor =`url(` + window.location.origin + `/assets/images/background/` + customTheme.theme.backgroundImage + `)`;

    const getMuiTheme = () => createTheme({
        components: {
          MUIDataTableBodyCell: {
            styleOverrides:{
              root: {
                  fontSize: "16.5px",
              },
              
            }
          },
          MuiTableCell: {
            head: {
                backgroundColor: "red !important"
            }
        }, 
        }
      });


      let data = [ 
        [1, "Code 1", "Desciption Here"], 
        [2, "Code 2", "Desciption Here"], 
        [3, "Code 3", "Desciption Here"], 
        [4, "Code 4", "Desciption Here"], 
        [5, "Code 5", "Desciption Here"], 
        [6, "Code 6", "Desciption Here"],
        [7, "Code 7", "Desciption Here"],
        [8, "Code 8", "Desciption Here"],
        [9, "Code 9", "Desciption Here"],
        [10, "Code 10", "Desciption Here"],
        [11, "Code 11", "Desciption Here"],
        [12, "Code 12", "Desciption Here"],
      ];


      const columns = [
          {
            name: '#',
            options: {
              setCellHeaderProps: () => ({
                style: { background: bgColor, color: 'black' },
              }),
            },
          },
          {
            name: 'Code',
            options: {
              setCellHeaderProps: () => ({
                style: { background: bgColor, color: 'black' },
              }),
            },
          },
          {
            name: 'Description',
            options: {
              setCellHeaderProps: () => ({
                style: { background: bgColor, color: 'black' },
              }),
            },
          },
        ]

  return (
    <div style={{ zoom: "0.78", marginBottom: "-17px" }}>

      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
            title={<b style={{ fontSize: "18px", fontFamily: "calibri", textTransform: "uppercase" }}>Group Access Maintenance</b>}
            data={data}
            columns={columns}
            options={options}
        />
      </ThemeProvider>
    </div>
  );
}

export default GroupAccessMaintenance;
