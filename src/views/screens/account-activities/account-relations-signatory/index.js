import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form} from 'react-bootstrap';

// import Card from '../../../components/Card/MainCard';
// import InfoCard from '../../../components/Card/InfoCard';
// import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../../../assets/icons'
// import RoundIcon from '../../../components/RoundIcon'

// import ModuleNotification from '../../../components/Widgets/Statistic/Notification';
import Tooltip from "@mui/material/Tooltip";

const Main = () => {

    // useEffect(() => {
    //     document.title = "X100 | Imprest Status"
    //   }, [])

    return (
        <React.Fragment>
            <Col sm={12}>
            <ModuleNotification
                style= {{ background: "white" }}
                message="Account Activities &nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp; Imprest Request"
            />
            </Col>
            <Row>
            <Col md={12} style={{ marginBottom: "-10px", marginTop: "5px" }}>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <Link to='#'><InfoCard title="Imprest Origination">
                <RoundIcon
                    icon={PeopleIcon}
                    iconColorclassName="text-teal-500 dark:text-teal-100"
                    bgColorclassName="bg-teal-100 dark:bg-teal-500"
                    className="mr-4"
                />
                </InfoCard>
                </Link>

                <Link to='#'><InfoCard title="Imprest Request">
                <RoundIcon
                    icon={MoneyIcon}
                    iconColorclassName="text-blue-500 dark:text-blue-100"
                    bgColorclassName="bg-blue-100 dark:bg-blue-500"
                    className="mr-4"
                />
                </InfoCard>
                </Link>

                <Link to='#'><InfoCard title="Imprest Request Approval">
                <RoundIcon
                    icon={ChatIcon}
                    iconColorclassName="text-orange-500 dark:text-orange-100"
                    bgColorclassName="bg-orange-100 dark:bg-orange-500"
                    className="mr-4"
                />
                </InfoCard>
                </Link>
            </div>
            </Col>
            
            </Row>
        </React.Fragment>
    );
};

export default Main;
