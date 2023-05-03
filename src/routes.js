import React, { Suspense, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import axios from 'axios';
import { API_SERVER } from './config/constant';

import Loader from './components/Spinner';
import loadable from '@loadable/component';

const authLayout = loadable(() => import('./layouts/auth'));

const GuestGuard = loadable(() => import('./middleware/GuestGuard'));
const AuthGuard = loadable(() => import('./middleware/AuthGuard'));

import { BASE_URL } from './config/constant';

let routes = [];

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<Loader />}>
        <Switch>
            {routes.map((route, i) => {
                const Guard = route.guard || Fragment;
                const Layout = route.layout || Fragment;
                const Component = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <Guard>
                                <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
                            </Guard>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
);


routes = axios.get(API_SERVER + "/get-menu-urls").then((res) => {

    if(res){
    // console.log(res.data);
    var arr = [];
    var arr1 = [];

    for (let i = 0; i < res.data.length; i++) {
    if (res.data[i].file_name === "dashboard") {
        arr.push({
            exact: true,
            path: res.data[i].menu_url,
            component: loadable(() => import("./views/dashboard")),
        });
    } else if(res.data[i].file_name === "logout"){
        // do nothing here..
    } else {
        arr.push({
            exact: true,
            path: res.data[i].menu_url,
            component: loadable(() => import("./views/screens")),
        });
    }

    if(res.data[i].file_name === "logout"){
        arr.push({
            exact: true,
            path: res.data[i].menu_url,
            component: loadable(() => import("./views/auth/signout")),
        });
    }
    }

    arr.push({
    path: '*',
    exact: true,
    component: () => <Redirect to={BASE_URL} />
    });

    arr1.push({
        exact: true,
        guard: GuestGuard,
        path: '/auth/signin',
        component: loadable(() => import('./views/auth/signin'))
    });

    arr1.push({
    path: "*",
    guard: AuthGuard,
    routes: arr,
    });

    return arr1;

    } 

});
        

export default routes;

