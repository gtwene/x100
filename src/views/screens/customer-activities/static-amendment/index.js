import {useState, useEffect} from 'react'
import ListOfValue from '../../../../components/others/Fields/ListOfValue'
import Label from '../../../../components/others/Label/Label'
// import DataTableAnnex from './components/datatable-annex';
import DataTable from './components/datatable-annex'
import { Button } from "react-bootstrap";
import StaticAmendmentModal from './components/Modal';
import { MDBIcon } from 'mdb-react-ui-kit';

const StaticAmendment = () => {
    const [showModal, setShowModal] = useState(false);
    const [response, setResponse] = useState([]);
    const [children, setChildren] = useState("");

    const [dataProcessingInfo, setDataProcessingInfo] = useState(
      "Processing data, please wait..."
    );
     const customTheme = JSON.parse(localStorage.getItem("theme"));

     // console.log(customTheme);

     const [getTheme, setTheme] = useState(customTheme);

    const toggleModal = () => {
        setShowModal(!showModal);
      };

      // const customTheme = JSON.parse(localStorage.getItem("theme"));

      const bgColor =
        `url(` +
        window.location.origin +
        `/assets/images/background/` +
        customTheme.theme.backgroundImage +
      `)`;

      const columns = [
        {
          name: "#",
          options:{
            setCellHeaderProps: () => ({
              style: { background: bgColor, color: "black" },
            }),
          },
        },
        {
          name: "Customer ID",
          options: {
            setCellHeaderProps: () => ({
              style: { background: bgColor, color: "black" },
            }),
          },
        },
        {
          name: "Customer Description",
          options: {
            setCellHeaderProps: () => ({
              style: { background: bgColor, color: "black" },
            }),
          },
        },
        {
          name: "Posting Date",
          options: {
            setCellHeaderProps: () => ({
              style: { background: bgColor, color: "black" },
            }),
          },
        },
        {
          name: "Date Of Incorp",
          options: {
            setCellHeaderProps: () => ({
              style: { background: bgColor, color: "black" },
            }),
          },
        },
        {
          name: "Created By",
          options: {
            setCellHeaderProps: () => ({
              style: { background: bgColor, color: "black" },
            }),
          },
        },
        {
          name: "Relationship Type",
          options: {
            setCellHeaderProps: () => ({
              style: { background: bgColor, color: "black" },
            }),
          },
        },  
      ];


    
      const arr = ["man","woman","girl"];
      
  return (
    <div>
      <div>
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
      <form style={{ zoom: "0.75" }}>
        <div className="md:flex justify-center md:space-x-10">
          <div></div>
          <div class="w-full max-w-4xl mt-2">
            {/* Customer ID */}
            <div class="md:flex md:items-center mb-2 ml-2">
              <div class="md:w-1/3">
                <Label label="Customer ID" />
              </div>
              <div className="md:w-2/3 md:ml-6">
                <input class="my_inputs" type="text" />
              </div>
            </div>

            <div class="md:flex md:items-center mb-2 ml-2">
              <div class="md:w-[30%]">
                <Label label="Customer Name" />
              </div>
              <div className="md:w-[100%]">
                <input class="my_inputs" type="text" />
              </div>
            </div>
          </div>

          {/* Date Of Incorp/Birth */}
          <div class="w-full max-w-4xl mt-2">
            <div class="md:flex md:items-center mb-2 ml-2">
              <div class="md:w-1/3">
                <Label label="Date Of Incorp" />
              </div>
              <div className="md:w-2/3 md:ml-6">
                <input class="my_inputs" type="date" />
              </div>
            </div>
          </div>

          {/*  */}
          <div class="w-full max-w-sm mt-2">
            <div class="md:flex md:items-center mb-2 ml-2">
              <div class="md:w-1/3">
                <Label label="To" />
              </div>
              <div class="md:w-2/3 md:mr-10">
                <input className="my_inputs" type="date" />
              </div>
            </div>

            <div class="md:flex md:items-center mb-2 ml-2">
              <div class="md:w-1/2">
                <Label label="Branch" />
              </div>
              <div class="inline-block relative w-60">
                <ListOfValue />
              </div>
            </div>
          </div>
        </div>
      </form>

      <hr />

      {/*  */}
      <div
        className="border p-2 rounded font-bold text-black mt-2"
        style={{ background: bgColor }}
      >
        Customer Information
      </div>
      <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50" 
          style={{background:
              `url(` +
              window.location.origin +
              `/assets/images/headerBackground/` +
              getTheme.theme.headerImage +
              `)`,}}
              >
              <tr>
                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  >
                  #
                  </th>
                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  >
                  Customer ID
                  </th>
                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  >
                  Customer Description
                  </th>

                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  >
                  Posting Date
                  </th>
                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  >
                  Date Of Incorp
                  </th>

                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  >
                  Created By
                  </th>

                  <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs text-white font-bold uppercase tracking-wider"
                  >
                  Relationship Type
                  </th>


                  {/* <th className="px-4 py-2">Actions</th> */}
              </tr> 
          </thead>
        <tbody>
          {/* {userData?.map((data, index) => ( */}
            <tr >
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              {/* <td>{data.email}</td> */}
              {/* <td className="px-4 py-2">
                <button 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td> */}
            </tr>
          {/* ))} */}
        </tbody>
      </table>
      {/* <div>
        <DataTable rows={arr} columns={columns} />
      </div> */}

      <Button className="bg-blue-300 md:mt-5" onClick={toggleModal}>
        Show Modal
      </Button>
      {showModal && (
        <StaticAmendmentModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default StaticAmendment