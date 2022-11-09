import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import Textform from './components/Textform';
import { useState } from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';


function App() {
  const [mode , setMode] = useState('white');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) =>{
      setAlert({
         message:message,
         type: type
      })
  }

  const toogleMode = color =>{
      console.log(color)
      setMode(color);
      document.body.style.backgroundColor = color;
      showAlert("Theme has been changed" , "success");
  }



  return (
     <>
     <Router>
     <Navbar mode = {mode} toogleMode = {toogleMode}/>
     <Alerts alert = {alert}/>
     <Routes>
        <Route path='/' element = {<Textform  showAlert = {showAlert} mode = {mode}  heading = "Enter the text to analyze below"/>}/>
        <Route path='/about' element = {<About/>} />
     </Routes>
     </Router>
    </>
  );
}

export default App;
