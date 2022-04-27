import React from 'react'
import {Route, Routes} from "react-router-dom";
import HomePage from "./../containers/HomePage"
import {Navigate} from "react-router-dom";
// import firebase from 'firebase/compat/app'
import 'firebase/auth';

/**
 * @author
 * @function PrivateRoute
 **/


const PrivateRoute = ({component: HomePage, ...rest}) => {
    return (
        <Routes>
            <Route {...rest} component={(props) => {
                const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

                if (user) {
                    return <HomePage {...props} />
                } else {
                    return <Navigate to="/login"/>
                }

            }}/>
        </Routes>
    )

}

export default PrivateRoute