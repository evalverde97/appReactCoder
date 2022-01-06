import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC6QjDWqICWV_doT-tMIJtyxL0-nBET7zI",
  authDomain: "nofungiblestore.firebaseapp.com",
  projectId: "nofungiblestore",
  storageBucket: "nofungiblestore.appspot.com",
  messagingSenderId: "332594936226",
  appId: "1:332594936226:web:b017282b2c37452e2f5afb"
};

initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

