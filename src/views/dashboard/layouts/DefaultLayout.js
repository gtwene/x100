import { SimpleGrid  } from '@mantine/core';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import DataTable from '../components/DataTable';
import axios from 'axios';
import { API_SERVER } from '../../../config/constant';
import { MDBIcon } from "mdb-react-ui-kit";

const DefaultMainLayout = () => {

    const customTheme = JSON.parse(localStorage.getItem("theme"));
    const textColor = customTheme.theme.textColor;

    useEffect(()  => {

        const storeSystemAuditLog = async () => {
            await axios
            .post(API_SERVER + '/store-system-audit-logs', {
                user_id: JSON.parse(localStorage.getItem("userInfo")).id,
                page_accessed: "Dashboard",
                page_url: "/"
            })
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        
        storeSystemAuditLog();

    }, []);

    const [dataProcessingInfo, setDataProcessingInfo] = useState('Processing data, please wait...');
    const [systemAuditLogs, setSystemAuditLogs] = useState([]);


    useEffect(()  => {
    let isMounted = true; // Add a flag to check if the component is mounted
    
    const getSystemAuditLogs = async () => {
        try {
            const response = await axios.get(API_SERVER + "/get-system-audit-logs");

            const sysAuditLogs = response.data;

            if (isMounted) { // Only update state if the component is still mounted
                if(sysAuditLogs.length > 0){
                    // console.log(sysAuditLogs, "sysAuditLogs");
                    setSystemAuditLogs(response.data);
                } else {
                    setSystemAuditLogs([]);
                    setDataProcessingInfo("Sorry, there are no system audit logs at this moment...");
                }
            }

        } catch (err) {
            console.error(err);
        }
    };

    getSystemAuditLogs();

    return () => { isMounted = false; }; // Add a cleanup function to cancel the request if the component unmounts
   }, [dataProcessingInfo]);


    return (
      <>
        {/* <SimpleGrid
          // cols={4}
          spacing="lg"
          className="mozMainContentsDefault"
          // style={{ zoom: 1, marginLeft: "11.3rem", marginRight: "1.7rem"}}
          style={{ zoom: 0.9, marginLeft: "12.5rem", marginRight: "29px" }}
          columns={[1, 2, 3, 4]}
          // breakpoints={[
          //   { maxWidth: 980, cols: 3, spacing: "md" },
          //   { maxWidth: 755, cols: 2, spacing: "sm" },
          //   { maxWidth: 600, cols: 1, spacing: "sm" },
          // ]}
        > */}

    <div style={{ zoom: 1, marginLeft: "11.3rem", marginRight: "1.7rem"}} className="flex justify-center mozMainContentsDefault">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
       
          <div className="ccard ccardDefault">
            <Card
              title="Pending Approvals"
              description="You currently have 232 pending approvals"
              iconName="file-alt"
              iconColor=""
              btnName="Preview Details"
              cardBGColor="#e7f5ff"
            />
          </div>
          <div className="ccard ccardDefault">
            <Card
              title="My Last Activity"
              description="In your previous activity you performend 15 transactions"
              iconName="image"
              iconColor="red"
              btnName="Preview Last Activity"
              cardBGColor="#fff5f5"
            />
          </div>
          <div className="ccard ccardDefault">
            <Card
              title="My Postings"
              description="You have made 103 postings so far"
              iconName="envelope"
              iconColor="green"
              btnName="Preview Details of Postings"
              cardBGColor="#ebfbee"
            />
          </div>
          <div className="ccard ccardDefault">
            <Card
              title="Central Approvals"
              description="You currently have transactions pending approvals"
              iconName="sms"
              iconColor="pink"
              btnName="Preview Central Approval"
              cardBGColor="#fff0f6"
            />
          </div>

          </div>
        </div>
        {/* </SimpleGrid> */}

        <SimpleGrid
          cols={1}
          className="mozMainContentsDefault"
          spacing="lg"
          // style={{ zoom: 1, marginLeft: "11.3rem", marginRight: "1.7rem"}}
          style={{ zoom: 0.9, marginLeft: "12.5rem", marginRight: "29px" }}
          // breakpoints={[
          //   { maxWidth: 980, cols: 1, spacing: "md" },
          //   { maxWidth: 755, cols: 1, spacing: "sm" },
          //   { maxWidth: 600, cols: 1, spacing: "sm" },
          // ]}
        >
          <p
            style={{
              background: JSON.parse(localStorage.getItem("theme")).theme
                .breadcrumbBGColor,
              paddingLeft: "15px",
              paddingRight: "10px",
              paddingTop: "13.5px",
              paddingBottom: "13.5px",
              color: textColor,
              fontSize: "15.7px",
              marginTop: "20px",
              marginBottom: "-3px",
            }}
          >
            <MDBIcon
              style={{
                color: textColor,
                marginRight: "2px",
                paddingBottom: 5,
                fontSize: 16,
              }}
              fas
              icon="file-medical"
            />{" "}
            System Audit Logs
          </p>

          <DataTable
            id="systemAuditLogsDefault"
            name="systemAuditLogsDefault"
            tile=""
            style={{ marginRight: "29px" }}
            data={systemAuditLogs}
            dataProcessingInfo="Processing data, please wait..."
            rowsPerPage={2}
            tableCellFontSize={14}
          />
        </SimpleGrid>
      </>
    );
}

export default DefaultMainLayout;