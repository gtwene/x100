import Modal from "react-bootstrap/Modal";
import { useState } from "react";
// import CashWithdrawal from "../cash-withdrawal";
// import CashDeposit from "../cash-deposit";
// import ChequeDeposit from "../cheque-deposit";
// import ChequeWithdrawal from "../cheque-withdrawal";

// import MultiCurrencyCashWithdrawal from "../multi-currency-cash-withdrawal";
// import MultiCurrencyCashDeposit from "../multi-currency-cash-deposit";
// import GlobalModalHeader from "../../../../../components/Headers/GlobalModalHeader";
import DataTable from "../../../../../components/others/Datatable/DataTable";
import { API_SERVER } from "../../../../../config/constant";
import InputField from "./inputField";
import swal from "sweetalert";
import axios from "axios";
const GlobalModal = ({ showModal, setShowModal, body }) => {
  const [filter, setFilter] = useState([]);
  const handleClose = () => {
    swal({
      title: "Are you sure?",
      text: 'You\'re about to close the " Search by Name or by ID " form',
      icon: "warning",
      buttons: ["Cancel", "Yes, Close Form"],
      dangerMode: true,
    }).then((result) => {
      if (result) {
        setShowModal(false);
        setFilter([]);
      }
    });
  };
  const handleShow = () => setShowModal(true);
  const [fullScreen, setFullscreen] = useState(false);
  const [modalSize, setModalSize] = useState("lg");

  const [getTheme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  async function handleChange(e) {
    try {
      const response = await axios.post(
        API_SERVER + "/find-by-name",
        {
          accountName: e.target.value,
        }
      );
      const arr = [];

      response.data.map((i) => {
        arr.push(Object.values(i));
      });
      setFilter(arr);
    } catch (error) {
      console.log(error);
    }
  }
  console.log({ filter });
  // if (body === "Cash Withdrawal") {
  //   modalBody = <CashWithdrawal handleClose={handleClose} />;
  // } else if (body === "Multi-currency Cash Deposit") {
  //   modalBody = <MultiCurrencyCashDeposit />;
  // } else if (body === "Multi-currency Cash Withdrawal") {
  //   modalBody = <MultiCurrencyCashWithdrawal />;
  // } else if (body === "Cash Deposit") {
  //   modalBody = <CashDeposit />;
  // } else if (body === "Cheque Deposit") {
  //   modalBody = <ChequeDeposit />;
  // } else if (body === "Cheque Withdrawal") {
  //   modalBody = <ChequeWithdrawal handleClose={handleClose} />;
  // }
  return (
    <Modal
      id="globalModal"
      key="globalModal"
      backdrop="static"
      size={modalSize}
      fullscreen={"xl"}
      show={showModal}
      onHide={handleClose}
      // centered
    >
      <Modal.Header>
        <div
          style={{
            background:
              `url(` +
              window.location.origin +
              `/assets/images/headerBackground/` +
              getTheme.theme.headerImage +
              `)`,
          }}
          className="flex justify-between items-center w-full h-[60px] bg-no-repeat"
        >
          <div
            className="font-semibold uppercase px-2"
            style={{ fontSize: "16px", color: "whitesmoke" }}
          >
            Search Customer by Name
          </div>
          <button onClick={handleClose} className="mr-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 stroke-white rounded-sm border border-white p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr style={{ marginTop: "-10%" }} />
      </Modal.Header>
      <Modal.Body style={{ background: "whitesmoke", marginTop: "-15px" }}>
        <div className="bg-gray-200 px-2 py-1">
          <div>
            <p>Find a partial value to limit the list , %% to see all values</p>
            <p>
              Warning : Entering % to see all values may take a very long time
              Entering criteria that can be used to reduce the list may be
              significantly faster
            </p>
          </div>
          <div>
            <div>
              <InputField
                label={"Find"}
                labelWidth={"15%"}
                inputWidth={"85%"}
                onChange={handleChange}
              />
            </div>
            <div className="scale-y-[0.9] -mt-2">
              <DataTable
                data={filter}
                rowsPerPage={10}
                columns={["Account Name", "Account Number", "ISO code"]}
              />
            </div>
          </div>
        </div>

        <br />
      </Modal.Body>
      <Modal.Footer style={{ display: "none" }}>
        {/* <Button id="globalModalCloseBtn" style={{ background: "#0047AB", color: "white", paddingLeft: "20px", paddingRight: "20px" }} variant='dark' onClick={props.onHide}>Close Form</Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default GlobalModal;
