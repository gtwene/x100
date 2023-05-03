import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes, { renderRoutes } from './routes';
import { BASENAME } from './config/constant';
import NetworkStatusAlert from "./components/NetworkStatusAlert";
const App = () => {

    const [getRoutes, setRoutes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()  => {
        routes.then(function(result) {
            setRoutes(result);
            // localStorage.setItem("routes", JSON.stringify(result));
        });
    }, []); 

    return (
        <>
        <NetworkStatusAlert/>
        <React.Fragment>
            <Router basename={BASENAME}>{renderRoutes(getRoutes)}</Router>
        </React.Fragment>
        </>
    );
};

export default App;
