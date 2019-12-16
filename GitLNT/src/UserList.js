import React, { Component } from 'react';
import './Userlist.css';
import * as firebase from 'firebase';
import AddUserForm from './AddUserForm';
import Modal from 'react-modal';

let newState = [];
let childKey ;
let secondxyz;
let word;
let useridword;

var demoarray = [];
// var base64Img = require('base64-img');

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class UserList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            secondxyz : [] ,
            newState: [],
            demoarray: [],
            userList:[],
            modalIsOpen: false,
            confirm:false,
            currentObj:{},
            
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount () { 
        let tableName = firebase.database().ref('/');
        tableName.on('value', async (_snapshot) => {
            if(_snapshot.val()){
                let secondxyz=_snapshot.val();
                let UserArray=[];
                
                for (let key in secondxyz){
                    secondxyz[key].userkey=key;
                    UserArray.push(secondxyz[key]);
                    // console.log("userListttt :: ", UserArray);
                }
                await this.setState({
                    secondxyz: UserArray
                }); 
            }
        });

        // this.loadUserList();
        // const xyz = firebase.database().ref('/'); 
        // xyz.once('value', function(snapshot) {
        //     snapshot.forEach(function(childSnapshot) {
        //     childKey = childSnapshot.key;
        //     console.log("CHILD KEY :: " ,childKey);

        //     demoarray.push ({
        //         "mykeyy":childKey
        //     });
             
        //     });
        //     console.log("demoarray :: " , demoarray);
        // });
        // xyz.on('value',(snapshot)  => {
        //     secondxyz = snapshot.val();
        //     console.log("secondxyz :: ", secondxyz);
            
        //     for (word in secondxyz){
                
        //         newState.push({
        //             email : secondxyz[word].email,
        //             mobileno : secondxyz[word].mobileno,
        //             name : secondxyz[word].name,
        //             password : secondxyz[word].password
        //         });

        //     }
        //     this.setState({
        //         secondxyz: newState
        //     });  
        // })
        

    }
    // async loadUserList(){
    //     let tableName = firebase.database().ref('/');
    //     tableName.on('value', async (_snapshot) => {
    //         if(_snapshot.val()){
    //             let userList=_snapshot.val();
    //             let UserArray=[];
                
    //             for (let key in userList){
    //                 userList[key].userkey=key;
    //                 UserArray.push(userList[key]);
    //                 console.log("userListttt :: ", UserArray    );
    //             }
    //             await this.setState({
    //                 userList: UserArray
    //             }); 
    //         }
    //     });
    // }
    

    

    handleDelete =  (e,user) => {
        // alert("We r On Delete");
        // console.log("mydemoarray :: " , demoarray);
        // let mykey = demoarray[0].mykeyy;
        // console.log("MY FINAL KEYYY :: ", mykey);

        let deleteUser = firebase.database().ref('/'+ user.userkey);
        deleteUser.remove();
    }

    handleEdit =  (e,user) => {
       
        console.log("We r Here On Edit");
        this.setState({
            modalIsOpen: true,
            currentObj:user
        })
      
    }


    handleUserUpdate(){
        
        const { email, mobileno, name, userkey} = this.state.currentObj ;
        let edit ={
          name:name,
          email:email,
          mobileno:mobileno
        }
        let ref = firebase.database().ref('/'+ userkey);
        ref.update(edit);
        this.setState({
            modalIsOpen: false,
            currentObj:{}
        })
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            currentObj:{}
        })
    }

    handleInputChange(field,value){
        let currentObj= this.state.currentObj;
        currentObj[field] = value;
        this.setState({
            currentObj:currentObj
        })
    }
    

    renderTableData() {

        return this.state.secondxyz.map((word,index) => {
        // return this.state.userList.map((word,index) => {
            const { email, mobileno, name, password} = word 
            return (
                <tr >
                <td>{email}</td>
                <td>{mobileno}</td>
                <td>{name}</td>
                <td>{password}</td>
                <td><button onClick={(e)=>this.handleEdit(e,word)}>Edit</button></td>
                <td><button onClick={(e)=>this.handleDelete(e,word)}>Delete</button></td>
                </tr>
            )
        });
     }

    // renderTableHeader() {
    //     let header = Object.keys(this.state.secondxyz[0])
    //     return header.map((key, index) => {
    //        return <th key={index}>{key.toUpperCase()}</th>
    //     })
    // }

    

    handleAdduser = () => {

        this.setState({
            redirect: true
        })

    }
    openModal() {
        this.setState({modalIsOpen: true});
    }

    confirmModel(){

    }

    renderEditModel(){
        const { currentObj } = this.state
        return(<Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={()=>this.closeModal()}
          style={customStyles}>
 
            <h2 >Update User</h2>
            <form className="projects fbca fbca--dircol fbca--flst">
                <div className="inputrow fbca">
                    <label className="inputrow__description" htmlFor="name">Name</label>
                    <input
                        id="name" type="text" className="inputrow__field" name="name"
                        value={currentObj.name}  
                        onChange={(e)=>this.handleInputChange('name',e.target.value)}
                    />
                </div>
                <div className="inputrow fbca">
                    <label className="inputrow__description" htmlFor="email">Email</label>
                    <input
                        id="email" type="text" className="inputrow__field" name="email" 
                        value={currentObj.email} 
                        onChange={(e)=>this.handleInputChange('email',e.target.value)} 
                    />
                </div>
                <div className="inputrow fbca">
                    <label className="inputrow__description" htmlFor="password">Password</label>
                    <input
                        id="password"
                        // value={password}
                        // onChange={this.handleInputChange} 
                        // type="password" 
                        className="inputrow__field" 
                        name="password" 
                        value={currentObj.password}
                        onChange={(e)=>this.handleInputChange('password',e.target.value)}
                        />
                </div>
                
                <div className="inputrow fbca">
                    <label className="inputrow__description" htmlFor="mobileno">Mobile No</label>
                    <input
                        id="mobileno" type="number" className="inputrow__field" name="mobileno"
                        value={currentObj.mobileno}
                        onChange={(e)=>this.handleInputChange('mobileno',e.target.value)}
                    />
                </div>
                <div className="btn-group-submit">
                    <div >
                        <button className="button" onClick={(e)=>this.handleUserUpdate()}> Save </button>
                        <button className="button" onClick={(e)=>this.closeModal()}> Cancel </button>
                    </div>
                </div>                
            </form>
        </Modal>);
    }

    render () {

    const { redirect,modalIsOpen } = this.state;
    if (redirect) {
    
        // return <Lntframe />;
        return <AddUserForm />;
    
    }
      
    return (
        
    <div>
        {/* <div>
        <button className="button" onClick={this.handleAdduser}>Add User</button>
        </div> */}

        { modalIsOpen ? this.renderEditModel() :null}
        <table id='students'>
            <tbody>
                <tr>
                    <th>EMAIL</th>
                    <th>Mobile NO</th>
                    <th>NAME</th>
                    <th>PASSWORD</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                    {/* <th>DATE</th> */}
                </tr>
                
                {this.renderTableData()}
            </tbody>
        </table>
        </div>
    
    );
    }
    }
    
export default UserList;