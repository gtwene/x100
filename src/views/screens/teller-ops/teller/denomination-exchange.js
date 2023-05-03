import { useState } from "react";
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import ListOfValue from "./components/ListOfValue";
import InputField from "./components/inputField";
import DataTable from "../../../../components/others/Datatable/DataTable";

export default function DenominationExchange() {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  return (
    <>
      <div className="rounded h-auto pb-2 pt-4 px-2 bg-gray-200">
        <div
          style={{ marginTop: "-15px", textAlign: "center", zoom: "0.85" }}
          centered
        >
          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button
              className="btn btn-secondary"
              style={{
                background:
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`,
              }}
            >
              <MDBIcon
                style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="file-alt"
              />
              <br />
              New
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="sync"
              />
              <br />
              Refresh
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="calendar-times"
              />
              <br />
              Delete
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="thumbs-up"
              />
              <br />
              Authorise
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="eye"
              />
              <br />
              View
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button
              className="btn btn-secondary"
              style={{
                background:
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`,
              }}
            >
              <MDBIcon
                style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="check"
              />
              <br />
              Ok
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="ban"
              />
              <br />
              Cancel
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="thumbs-down"
              />
              <br />
              Reject
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button className="btn btn-light" style={{ background: "white" }}>
              <MDBIcon
                style={{ color: "grey", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="question-circle"
              />
              <br />
              Help
            </button>
          </span>

          <span style={{ paddingLeft: 5, paddingRight: 5 }}>
            <button
              className="btn btn-secondary"
              style={{
                background:
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`,
              }}
            >
              <MDBIcon
                style={{ color: "white", paddingBottom: 5, fontSize: 15 }}
                fas
                icon="sign-out-alt"
              />
              <br />
              Exit
            </button>
          </span>
        </div>
        <hr />
        <div>
          <div
            // style={{ background: getTheme.theme.navBarColor }}
            className="mb-2 mt-2 py-2 bg-white"
          >
            <div className="px-2">
              <ListOfValue
                inputWidth={"30%"}
                label={"Choose Currency"}
                labelWidth={"15%"}
              />
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex space-x-2">
            <div className="w-[65%]">
              <div className="transform scale-y-[0.8] -mt-7  w-full">
                <DataTable
                  title={
                    <p className=" px-2 uppercase text-gray-600 font-semibold">
                      denomination to change into - Outgoing
                    </p>
                  }
                  columns={["Denomination", "Amount", "Quantity"]}
                />
              </div>

              <div className="transform scale-y-[0.8] -mt-10 -mb-5  w-full">
                <DataTable
                  title={
                    <p className=" px-2 uppercase text-gray-600 font-semibold">
                      denomination being changed - Receiving
                    </p>
                  }
                  columns={["Denomination", "Amount", "Quantity"]}
                />
              </div>
            </div>
            <div className="w-[35%] bg-white rounded-sm shadow p-2 ">
              <div className="flex justify-end mb-2 ">
                <div className="w-1/2">
                  <InputField
                    label={"Batch No"}
                    labelWidth={"40%"}
                    inputWidth={"60%"}
                  />
                </div>
              </div>
              <div className="mb-3">
                <InputField
                  label={"Till ID"}
                  labelWidth={"20%"}
                  inputWidth="80%"
                />
              </div>

              <div className="transform scale-y-[0.8] -mt-7  w-full">
                <DataTable
                  title={
                    <p className="uppercase text-gray-600 font-semibold">
                      Till position
                    </p>
                  }
                  columns={["Denomination", "Amount", "Quantity"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
