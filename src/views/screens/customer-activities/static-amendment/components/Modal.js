import {useState} from 'react'
import { Modal, Button, Col, Nav, Row, Tab } from "react-bootstrap";
import IndividualStaticAmendmentAccounts from './individual-static-amendment-accounts'
import IndividualStaticAmendmentCustomer from './individual-static-amendment-customer';
import IndividualStaticAmendmentRelation from './individual-static-amendment-relation';

const StaticAmendmentModal = ({showModal, setShowModal}) => {
    const customTheme = JSON.parse(localStorage.getItem("theme"));

  const bgColor =
    `url(` +
    window.location.origin +
    `/assets/images/background/` +
    customTheme.theme.backgroundImage +
    `)`;

  return (
    <Modal show={showModal} fullscreen>
    <Modal.Header style={{ background: bgColor }} closeButton>
        <Modal.Title className="text-blue-500">Individual Relation Amendment</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
            <Col sm={1}>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                    <Nav.Link eventKey="first">CUSTOMER</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">RELATION</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">ACCOUNT</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
            <Col sm={10}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <IndividualStaticAmendmentCustomer />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <IndividualStaticAmendmentRelation />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <IndividualStaticAmendmentAccounts />
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
        </Tab.Container>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={() => setShowModal(false)}>Close Modal</Button>
    </Modal.Footer>
    </Modal>
  )
}

export default StaticAmendmentModal