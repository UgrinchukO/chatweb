import React, {useState} from 'react'
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import "./styled.css"
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {signin} from "../../actions"


/**
 * @author
 * @function LoginPage
 **/

const LoginPage = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const userLogin = (e) => {
        e.preventDefault();

        if (email === "") {
            alert("Email is required");
            return;
        }
        if (password === "") {
            alert("Password is required");
            return;
        }

        dispatch(signin({email, password}));


    }


    if(auth.authenticated){
        return <Navigate to="/" />
    }


    return (
        <Layout>
            <div className="loginContainer">
                <Card>
                    <form className= 'form' onSubmit={userLogin}>
                        <input
                            name='email'
                            type='text'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="your email"
                        />

                        <input
                            name='password'
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="your password"
                        />

                        <button className="login">Login</button>
                    </form>
                </Card>
            </div>
        </Layout>
    )
}

export default LoginPage