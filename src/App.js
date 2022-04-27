import React, {useEffect} from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./containers/HomePage"
import RegisterPage from "./containers/RegisterPage";
import LoginPage from "./containers/LoginPage";
import PrivateRoute from "./components/PrivateRoute"
import {useDispatch, useSelector} from 'react-redux';
import {isLoggedInUser} from './actions';



function App() {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch()


    useEffect(() => {
        if (!auth.authenticated) {
            dispatch(isLoggedInUser())
        }
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<HomePage component={<PrivateRoute/>}/>}/>

                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/signup" element={<RegisterPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
