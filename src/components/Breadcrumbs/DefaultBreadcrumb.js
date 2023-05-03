import React from 'react';
import { MDBBreadcrumb, MDBBreadcrumbItem, MDBIcon } from 'mdb-react-ui-kit';

export default function DefaultBreadcrumb({ breadcrumbBGColor, breadcrumbTitle, breadcrumbTitleOptional }) {

  const customTheme = JSON.parse(localStorage.getItem("theme"));
  const textColor = customTheme.theme.textColor;

  function capitalizeFirstCharacter(str) {
        if(str){
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        return splitStr.join(' '); 
        }
     }

  return (
    <>
      <div
        style={{ marginLeft: "179.5px", marginRight: "28px", paddingTop: "9.5%" }}
        className="mr-4 -mt-1 customBreadcrumbDefault"
      >
        <div className="float-left pull-left flex-start">
          <MDBBreadcrumb
            style={{
              background: breadcrumbBGColor,
              color: textColor,
              paddingLeft: "17px",
              paddingRight: "10px",
              paddingTop: "13.5px",
              paddingBottom: "13.5px",
            }}
          >
            <MDBBreadcrumbItem active>
              <MDBIcon
                style={{ fontSize: "14px", color: textColor }}
                icon="home"
              />
              <span style={{ color: textColor }}> &nbsp;/&nbsp; </span>
              {(() => {
                if (breadcrumbTitleOptional) {
                  return (
                    <>
                      <span style={{ color: textColor }}>
                        {breadcrumbTitleOptional}
                      </span>
                      <span style={{ color: textColor }}> &nbsp;/&nbsp; </span>
                    </>
                  );
                }
              })()}
              <span style={{ fontWeight: "bold", color: textColor }}>
                {breadcrumbTitle}
              </span>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </div>

        <div className="float-right pull-right flex-end">
          <MDBBreadcrumb
            style={{
              background: breadcrumbBGColor,
              paddingLeft: "17px",
              paddingRight: "10px",
              paddingTop: "13.5px",
              paddingBottom: "13.5px",
            }}
          >
            {/* <MDBBreadcrumbItem><MDBIcon style={{ fontSize: "16px" }} icon="home" /></MDBBreadcrumbItem> */}
            <MDBBreadcrumbItem active style={{ color: textColor }}>
              Branch Name:{" "}
              <b>
                {capitalizeFirstCharacter(
                  JSON.parse(localStorage.getItem("userInfo")).branch
                )}
              </b>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active style={{ color: textColor }}>
              Business Date:{" "}
              <b>
                {new Date(
                  JSON.parse(
                    localStorage.getItem("userInfo")
                  ).postingDate.substring(0, 10)
                ).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </b>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </div>

        <MDBBreadcrumb
          style={{
            background: breadcrumbBGColor,
            paddingLeft: "17px",
            paddingRight: "10px",
            paddingTop: "13.5px",
            paddingBottom: "13.5px",
          }}
        >
          <MDBBreadcrumbItem>&nbsp;</MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </div>
    </>
  );
}