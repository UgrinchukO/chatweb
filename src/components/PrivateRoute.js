// import React, {useAuth} from 'react'
// import {Route} from "react-router-dom";
// import HomePage from "./../containers/HomePage"
// import {Navigate, Outlet} from "react-router-dom";
// import firebase from 'firebase/compat/app'
// import 'firebase/auth';
//
// /**
//  * @author
//  * @function PrivateRoute
//  **/
//
// const PrivateOutlet = () => {
//     const auth = useAuth();
//     return auth ? <Outlet /> : <Navigate to="/login"/>;
// }
//
// export default PrivateOutlet;

import {Navigate} from "react-router-dom";


export default function PrivateRoute({ component: Component, ...rest }) {

    const isLogged = false;

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLogged ? <Component/> : <Navigate to="/login"/>;
}