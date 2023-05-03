import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import useScriptRef from '../../../hooks/useScriptRef';
import { API_SERVER } from './../../../config/constant';
import { LOGIN } from './../../../store/actions';
import swal from 'sweetalert';
import i18next from 'i18next';
import loadable from '@loadable/component';

const Spinner = loadable(() => import('../../../components/Spinner'));


import $ from 'jquery'; 
var qs = require('qs');

const md5 = require("md5");


const RestLogin = ({ className, ...rest }) => {
    const dispatcher = useDispatch();
    const scriptedRef = useScriptRef();

    const [loading, setLoading] = useState(false);
    const [generalCodescs, setgeneralCodescs] = useState([]);

    const customTheme = JSON.parse(localStorage.getItem('theme'));

    const [getTheme, setTheme] = useState(customTheme);

    function setCustomTheme(theme){

    localStorage.setItem('theme', JSON.stringify(JSON.parse(theme)));
    // location.reload();

    setTheme(JSON.parse(localStorage.getItem('theme')));
    
    }

    return (
        <React.Fragment>

        {(() => {

        if (loading) return  <Spinner />;

        })()}

            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string().max(255).required('User ID is Required'),
                    password: Yup.string().max(255).required('Password is Required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {

                    setLoading(!loading);

                    // swal("Login Validation", password);

                    try {
                        axios
                            .post(API_SERVER + '/login', {
                                password: values.password,
                                username: values.username
                            })
                            .then(function (response) {
                                
                                // alert(JSON.stringify(response.data));

                                if (response.data.success) {

                                    // MASTER FUNCTION TO RUN ALL THE ASYNCED FUNCTIONS
                                    const masterFunc = async () => {

                                        ////////////////////////////////////////////////////////////////////////////////////////

                                            const resp1 = await axios.post(API_SERVER + "/get-user-device-info", {
                                                user_id: values.username
                                              });

                                            if(resp1){

                                                let deviceDetails = resp1.data;
                                    
                                                for (let i = 0; i < deviceDetails.length; i++) {
                                                  const ipAddress = deviceDetails[i].ip_address;
                                                  const lastLogin = deviceDetails[i].last_login;
                                                  const browser = deviceDetails[i].browser;
                                                  const macAddress = deviceDetails[i].mac_address;
                                                  const location = deviceDetails[i].location;
                                    
                                                  localStorage.setItem("ipAddress", ipAddress);
                                                  localStorage.setItem("lastLogin", lastLogin);
                                                  localStorage.setItem("browser", browser);
                                                //   localStorage.setItem("macAddress", macAddress);
                                                  localStorage.setItem("location", location);
                                                }
    
                                            }

                                            // Store User Device Details
                                            await axios.post(API_SERVER + "/store-user-device-info", { user_id: values.username });

                                            // Store User's Info in the Local Storage
                                            localStorage.setItem("userInfo", JSON.stringify(response.data.user));

                                                const storeSystemAuditLog = async () => {
                                                    await axios
                                                    .post(API_SERVER + '/store-system-audit-logs', {
                                                        user_id: JSON.parse(localStorage.getItem("userInfo")).id,
                                                        page_accessed: "Login",
                                                        page_url: "/auth/signin"
                                                    })
                                                    .then(function (response) {
                                                        // console.log(response);
                                                    })
                                                    .catch(function (error) {
                                                        console.log(error);
                                                    });
                                                }
                                                
                                                storeSystemAuditLog();

                                            dispatcher({
                                            type: LOGIN,
                                            payload: { isLoggedIn: true, user: response.data.user, token: response.data.token }
                                            });
                                            if (scriptedRef.current) {
                                                setStatus({ success: true });
                                                setSubmitting(false);
                                            }


                                        ////////////////////////////////////////////////////////////////////////////////////////

                                    }

                                    // Start loader
                                    setLoading(!loading);

                                    return masterFunc();

                                    // Stop the loader
                                    setLoading(loading);
                                    
                                } else {
                                    swal("Login Validation", response.data.responseMessage);
                                    setLoading(false);
                                    setStatus({ success: false });
                                    setErrors({ submit: response.data.responseMessage });
                                    setSubmitting(false);
                                }
                            })
                            .catch(function (error) {
                                console.log(error);
                                // return swal(error.message, error.stack);
                                setLoading(false);
                                if(error.message){
                                return swal(error.message, "No connection to database / web server.");
                                } else {
                                return swal("Network Error", "No connection to database / web server.");
                                }
                                window.location.reload();
                                setStatus({ success: false });
                                setErrors({ submit: error.message });
                                setSubmitting(false);
                            });
                    } catch (err) {
                        console.error(err);
                        // return swal(err.message, err.stack);
                        setLoading(false);
                        if(err.message){
                        return swal(err.message, "No connection to database / web server.");
                        } else {
                        return swal("Network Error", "No connection to database / web server.");
                        }
                        window.location.reload();
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} className={className} {...rest}>
                        <div className="form-group mb-3">
                            <input
                                className="form-control"
                                error={touched.username && errors.username}
                                label="User ID"
                                placeholder="User ID"
                                name="username"
                                // onBlur={handleBlur}
                                onChange={handleChange}
                                type="username"
                                value={values.username}
                            />
                            {touched.username && errors.username && <small className="text-danger form-text">{errors.username}</small>}
                        </div>
                        <div className="form-group mb-4">
                            <input
                                className="form-control"
                                error={touched.password && errors.password}
                                label="Password"
                                placeholder="Password"
                                name="password"
                                // onBlur={handleBlur}
                                onChange={handleChange}
                                type="password"
                                value={values.password}
                            />
                            {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
                        </div>

                        {errors.submit && (
                            <Col sm={12}>
                                <Alert variant="danger">{errors.submit}</Alert>
                            </Col>
                        )}

                        <Row>
                            <Col mt={2}>
                                <Button
                                    className="btn-block w-full"
                                    color="primary"
                                    disabled={isSubmitting}
                                    size="large"
                                    style={{ background: getTheme.theme.navBarColor, color: "black" }}
                                    type="submit"
                                    variant="dark"
                                >
                                    Login
                                </Button>
                            </Col>
                        </Row>
                    </form>
                )}
            </Formik>
            {/* <hr width="50%" style={{marginTop: "22px", marginBottom: "5px"}} /> */}
        </React.Fragment>
    );
};

export default RestLogin;
