import { useState } from "react";
import { Modal, Button, Col, Nav, Row, Tab } from "react-bootstrap";

const PreviewModal = ({ showModal, setShowModal }) => {
    const customTheme = JSON.parse(localStorage.getItem("theme"));

    const bgColor =
      `url(` +
      window.location.origin +
      `/assets/images/background/` +
      customTheme.theme.backgroundImage +
      `)`;
  return (
    <Modal show={showModal} size="xl">
      <Modal.Header style={{ backgroundColor: bgColor }} closeButton>
        <Modal.Title className="ml-5">Preview Changes</Modal.Title>
      </Modal.Header>
      <Modal.Body>Preview Body</Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => setShowModal(false)}
          style={{ backgroundColor: 'blueviolet' }}
        >
          Close Modal
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PreviewModal;
