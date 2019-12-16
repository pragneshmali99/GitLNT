import React, { Component } from 'react';
// import './Lntframe.css';
import './index.css';
import './Register.css';
import * as firebase from 'firebase';
import Lntframe from './Lntframe';
import UserList from './UserList';

let dbmydata;
let database;
let username;
let useremail;
let userpassword;
let usermobileno;


class AddUserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // name: '',
            // email: '',
            // password: '',
            // mobileno: '',
            redirect: false,
        }
       
        this.onSubmit = this.onSubmit.bind(this);
    }

    // handleInputChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    // };

    
    onSubmit = (e) => {
        e.preventDefault();
        // this.setState({
        //     redirect: true
        // })

        // const { name, email, password, mobileno } = this.state;
        // const { email, password } = this.state;
        // firebase
        // .auth()
        // // .signInWithEmailAndPassword(name, email, password, mobileno)
        // .createUserWithEmailAndPassword( email, password)
        // .then((user) => {
        //     // window.location.href = "/Lntframe";
        //     // alert("yes welcome")
    
        //     this.props.history.push('/');
          
        // })
        // .catch((error) => {

        //     this.setState({ error: error });
        //     // var errorCode = error.code;
        //     // var errorMessage = error.message;
        //     // console.log("CATCH :: " , errorCode);
        //     // console.log("CATCH SECOND :: " , errorMessage);
            
        // });
       
        
        username = document.getElementById('name').value;
        useremail = document.getElementById('email').value;
        userpassword = document.getElementById('password').value;
        usermobileno = document.getElementById('mobileno').value;
       

        var complainData={
            name:username,
            email:useremail,
            password:userpassword, 
            mobileno:usermobileno 

        }

        database = firebase.database();
        dbmydata = database.ref("/");
        console.log("MY DB Data :: " , dbmydata);
        dbmydata.push(complainData).then((val) => {
            console.log("val",val);
            console.log("Sccess data");
            this.setState({
                redirect: true
            })
        });
    
        // alert(username + " Comeon  " + userpassword);
    
    }

    userlist = () => {

        this.setState({
            redirect: true
        })

    }

  render () {
    // const { name, email, password, mobileno } = this.state;
    // const { email, password } = this.state;
    const { redirect } = this.state;
    if (redirect) {
    
        // return <Lntframe />;
        return <UserList />;
    
    }
    
    return (
        
    <div>
        <div>
            <h2 className="App">Add User</h2>

            <form 
                onSubmit={this.onSubmit} 
                className="projects fbca fbca--dircol fbca--flst">
                <div className="inputrow fbca">
                    <label className="inputrow__description" htmlFor="name">Name</label>
                    <input
                        id="name"
                        // value={name}  
                        // onChange={this.handleInputChange}
                        type="text" 
                        className="inputrow__field" 
                        name="name" />
                </div>
                <div className="inputrow fbca">
                    <label className="inputrow__description" htmlFor="email">Email</label>
                    <input
                        id="email"
                        // value={email} 
                        // onChange={this.handleInputChange}
                        type="text" 
                        className="inputrow__field" 
                        name="email" />
                </div>

                <div className="inputrow fbca">
                    <label className="inputrow__description" htmlFor="password">Password</label>
                    <input
                        id="password"
                        // value={password}
                        // onChange={this.handleInputChange} 
                        type="password" 
                        className="inputrow__field" 
                        name="password" />
                </div>
                <div className="inputrow fbca">
                    <label className="inputrow__description" htmlFor="mobileno">Mobile No</label>
                    <input
                        id="mobileno"
                        // value={mobileno} 
                        // onChange={this.handleInputChange}
                        type="number" 
                        className="inputrow__field" 
                        name="mobileno" />
                </div>

                <div className="btn-group-submit">
                    <div >
                        
                        <button className="button"> Add </button>
                        {/* <button onClick={this.userlist} className="button"> User List </button> */}
                    
                    </div>
                </div>
 
            </form>
        </div>
    </div>
      
    );
  }
  }
  
  export default AddUserForm;