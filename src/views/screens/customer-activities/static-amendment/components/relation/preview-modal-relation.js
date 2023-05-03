import { useState } from "react";
import { Modal, Button, Col, Nav, Row, Tab } from "react-bootstrap";

const PreviewModalRelation = ({ showModal, setShowModal }) => {
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
        <Modal.Title className="ml-5">Preview Modal Relation</Modal.Title>
      </Modal.Header>
      <Modal.Body>Preview Modal Relation</Modal.Body>
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

export default PreviewModalRelation;
