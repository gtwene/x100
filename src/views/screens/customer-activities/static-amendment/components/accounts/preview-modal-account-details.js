import { useState } from "react";
import { Modal, Button, Col, Nav, Row, Tab } from "react-bootstrap";

const PreviewModalAccountDetails = ({ showModal, setShowModal }) => {
  const customTheme = JSON.parse(localStorage.getItem("theme"));

  const bgColor =
    `url(` +
    window.location.origin +
    `/assets/images/background/` +
    customTheme.theme.backgroundImage +
    `)`;
  return (
    <Modal show={showModal} size="xl">
      <Modal.Header style={{ background: bgColor }} closeButton>
        <Modal.Title className="ml-5">
          Preview Modal Account Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Preview Modal Account Details</Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => setShowModal(false)}
          style={{ backgroundColor: "blueviolet" }}
        >
          Close Modal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreviewModalAccountDetails;
