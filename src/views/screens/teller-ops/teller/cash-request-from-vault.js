import { useState } from "react";
import { MDBIcon, MDBRadio } from "mdb-react-ui-kit";
import ListOfValue from "./components/ListOfValue";
import InputField from "./components/inputField";
import DataTable from "../../../../components/others/Datatable/DataTable";

export default function CashRequestFromVault() {
  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  return (
    <>
      <div className="rounded h-auto pb-2 pt-4  px-2 bg-gray-200">
        <div className="w-full ">
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
        </div>
        <hr />
        <div className="flex mt-2 space-x-2">
          <div className="w-[65%]">
            <header
              className="text-white text-base py-1 rounded-t font-semibold px-2 uppercase"
              style={{
                background:
                  `url(` +
                  window.location.origin +
                  `/assets/images/headerBackground/` +
                  getTheme.theme.headerImage +
                  `)`,
              }}
            >
              Request Cash
            </header>
            <div className="mb-3  py-2">
              <hr className="my-[2px]" />
              <div className="bg-white p-1 rounded-sm">
                <div className="flex items-center  px-4 mb-2 mt-3">
                  <label className="w-[20%]">Currency</label>
                  <ListOfValue inputWidth={"60%"} />
                </div>
                <div className="flex items-center  px-4 mb-3">
                  <label className="w-[20%]">Amount</label>
                  <InputField type={"number"} inputWidth={"30%"} />
                </div>
              </div>
              <hr className="my-[2px]" />
            </div>

            <div className="transform scale-y-[0.8] -mt-10  w-full">
              <DataTable
                title={
                  <p className="mb-1  uppercase text-gray-600 font-semibold">
                    Ungranted Cash Request
                  </p>
                }
                columns={[
                  {
                    name: "Batch Number",
                    options: {
                      setCellHeaderProps: () => ({
                        style: {
                          background: getTheme.theme.navBarColor,
                          color: "black",
                        },
                      }),
                    },
                  },
                  {
                    name: "Transaction Amount",
                    options: {
                      setCellHeaderProps: () => ({
                        style: {
                          background: getTheme.theme.navBarColor,
                          color: "black",
                        },
                      }),
                    },
                  },
                  {
                    name: "Transaction To",
                    options: {
                      setCellHeaderProps: () => ({
                        style: {
                          background: getTheme.theme.navBarColor,
                          color: "black",
                        },
                      }),
                    },
                  },
                ]}
              />
            </div>

            <div className="transform  scale-y-[0.8] -mt-10 -mb-6 ">
              <DataTable
                title={
                  <p className="mb-1  text-gray-600 uppercase font-semibold">
                    Rejected Cash Request
                  </p>
                }
                columns={[
                  {
                    name: "Batch Number",
                    options: {
                      setCellHeaderProps: () => ({
                        style: {
                          background: getTheme.theme.navBarColor,
                          color: "black",
                        },
                      }),
                    },
                  },
                  {
                    name: "Transaction Amount",
                    options: {
                      setCellHeaderProps: () => ({
                        style: {
                          background: getTheme.theme.navBarColor,
                          color: "black",
                        },
                      }),
                    },
                  },
                  {
                    name: "Transaction To",
                    options: {
                      setCellHeaderProps: () => ({
                        style: {
                          background: getTheme.theme.navBarColor,
                          color: "black",
                        },
                      }),
                    },
                  },
                ]}
              />
            </div>
          </div>
          <div className="w-[35%] rounded p-1 shadow bg-white">
            <div className="py-4 px-2">
              <div className="mb-2">
                <InputField
                  label="Cash Officer"
                  type={"number"}
                  disabled={true}
                  inputWidth={"60%"}
                  labelWidth="40%"
                />
              </div>

              <div className="mb-2">
                <InputField
                  label="Till"
                  type={"number"}
                  disabled={true}
                  inputWidth={"60%"}
                  labelWidth="40%"
                />
              </div>
              <div className="mb-2">
                <InputField
                  label="Branch"
                  type={"number"}
                  disabled={true}
                  inputWidth={"60%"}
                  labelWidth="40%"
                />
              </div>
              <div className="mb-2">
                <InputField
                  label="Request Date"
                  type={"date"}
                  disabled={true}
                  inputWidth={"60%"}
                  labelWidth="40%"
                />
              </div>
            </div>
            <div>
              <p className="mb-1 uppercase font-semibold">Balance Before</p>

              <div className="transform scale-y-[0.8] -mt-4 ">
                <DataTable
                  columns={[
                    {
                      name: "Currency",
                      options: {
                        setCellHeaderProps: () => ({
                          style: {
                            background: getTheme.theme.navBarColor,
                            color: "black",
                          },
                        }),
                      },
                    },
                    {
                      name: "Balance",
                      options: {
                        setCellHeaderProps: () => ({
                          style: {
                            background: getTheme.theme.navBarColor,
                            color: "black",
                          },
                        }),
                      },
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
