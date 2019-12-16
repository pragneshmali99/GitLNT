import React, { Component } from 'react';
import './Lntframe.css';
import Iframe from 'react-iframe';

class Lntframe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        src: 'https://melzo-nosplash.firebaseapp.com/dekho/5dc63fbbe4bd8e0010994f40',
        // isOpen: true ,
    };
  }
  render () {
    
    return (
        
      <div >
        <iframe 
            width="100%"
            height="100%"
            id="myId"
            styles={{height: "25px"}}
            className="myClassname"
            className="iframe"
            allow="microphone"
            src={this.state.src}  
            allowFullScreen
            position="absolute"></iframe>
      </div>
      
    );
  }
  }
  
  export default Lntframe;