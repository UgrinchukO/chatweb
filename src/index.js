import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import store from "./store";
import {Provider} from "react-redux";




const firebaseConfig = {
    apiKey: "AIzaSyDbm0B45wgCMGIRyDIwPPahpnCvU9SrmjU",
    authDomain: "web-chat-44730.firebaseapp.com",
    projectId: "web-chat-44730",
    storageBucket: "web-chat-44730.appspot.com",
    messagingSenderId: "500840312652",
    appId: "1:500840312652:web:5874d1b2337046655869e9",
    measurementId: "G-F4PN7L0ZLC"
};


firebase.initializeApp(firebaseConfig)


window.store = store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
            <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
