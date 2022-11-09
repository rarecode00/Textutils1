import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import Textform from './components/Textform';
import { useState } from 'react'
import Alerts from './components/Alerts';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode , setMode] = useState('white');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) =>{
      setAlert({
         message:message,
         type: type
      })
      setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toogleMode = color =>{
      console.log(color)
      setMode(color);
      document.body.style.backgroundColor = color;
      showAlert("Theme has been changed" , "success");
  }



  return (
     <>
     <Navbar mode = {mode} toogleMode = {toogleMode}/>
     <Alerts alert = {alert}/>
     <Textform  showAlert = {showAlert} mode = {mode}  heading = "Enter the text to analyze below"/>
    </>
  );
}

export default App;
