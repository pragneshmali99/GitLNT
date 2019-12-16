import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Register from './Register';
import UserList from './UserList';
import * as serviceWorker from './serviceWorker';
import './App.css';
import './Register.css';
import * as firebase from 'firebase';
import AddUserForm from './AddUserForm';
import SidebarLNT from './SidebarLNT';

//------------Firebase Keyy-------------
var firebaseConfig = {
    apiKey: "AIzaSyAj1J8l2rdA4dqqYE8AFtLZcvSGkyTENog",
    authDomain: "lntdemo-efc3e.firebaseapp.com",
    databaseURL: "https://lntdemo-efc3e.firebaseio.com",
    projectId: "lntdemo-efc3e",
    storageBucket: "lntdemo-efc3e.appspot.com",
    messagingSenderId: "972332878642",
    appId: "1:972332878642:web:0f213c72c08ebd912ae52b",
    measurementId: "G-HD2JL3DTN7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Register />, document.getElementById('root'));
// ReactDOM.render(<AddUserForm />, document.getElementById('root'));
// ReactDOM.render(<UserList />, document.getElementById('root'));
// ReactDOM.render(<SidebarLNT />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
