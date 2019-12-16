import React from 'react';
import logo from './logo.svg';
import * as firebase from 'firebase';
import './App.css';
import './Register.css';
import Lntframe from './Lntframe';
import AddUserForm from './AddUserForm';
import { Route } from "react-router-dom";
import UserList from './UserList';
import SidebarLNT from './SidebarLNT';

let dbmydata;
let database;
let usernamee;
let userpassword;

class Register extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        redirect: false,
    }
   
    this.onSubmit = this.onSubmit.bind(this);
}

handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
};
onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .then((user) => {
        // window.location.href = "/Lntframe";
        // alert("yes welcome")
           this.setState({
                redirect: true
            })
    })
     .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("CATCH :: " , errorCode);
        console.log("CATCH SECOND :: " , errorMessage);
        
    });

    // username = document.getElementById('user-name').value;
    // userpassword = document.getElementById('user-password').value;
    // var complainData={
    //     username:username,
    //     password:userpassword 
    // }
    // database = firebase.database();
    // dbmydata = database.ref("/");
    // console.log("MY DB Data :: " , dbmydata);
    // dbmydata.push(complainData).then((val) => {
    //     console.log("val",val);
    //     console.log("Sccess data");
    // });

    // alert(username + " Comeon  " + userpassword);

}

  render () {
    const { email, password } = this.state;

    const { redirect } = this.state;
    if (redirect) {
    
        return <SidebarLNT />;
        // return <Lntframe />;
        // return <AddUserForm />;
        // return <UserList />;
    
    }
    return (
        <div >
            <div>
                <h2 className="App">Log In</h2>

                <form 
                    onSubmit={this.onSubmit} 
                    className="projects fbca fbca--dircol fbca--flst">
                    <div className="inputrow fbca">
                        <label className="inputrow__description" htmlFor="username">Username</label>
                        <input 
                            value={email} 
                            onChange={this.handleInputChange}
                            
                            type="text" 
                            className="inputrow__field" 
                            name="email" />
                    </div>

                    <div className="inputrow fbca">
                        <label className="inputrow__description" htmlFor="password">Password</label>
                        <input 
                            value={password}
                            onChange={this.handleInputChange}
                            
                            type="password" 
                            className="inputrow__field" 
                            name="password" />
                    </div>
                    <div className="btn-group-submit">
                        <button 
                        className="button"> Login </button>
                        {/* <Link  className="btn btn-link">Register</Link> */}
                    </div>
                    
                    
                </form>
            </div>
        </div>
    );
  }
}

export default Register;