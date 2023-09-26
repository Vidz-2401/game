import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Person from './components/Person';
import React from 'react';
// import Demo from './components/demo';

const App = () =>{
  return <React.Fragment>
     <Navbar></Navbar>
     <h1>Welcome to imaginary world {3+3}</h1> 
     <p>Hello mickey</p>
     </React.Fragment>;
  // return React.createElement("h1",{},"Hello Imaginary");
     

  

     
}

export default App;
