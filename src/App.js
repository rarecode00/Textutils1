import './App.css';
import Navbar from './components/Navbar';
import React from 'react'
import Textform from './components/Textform';
import { useState } from 'react'

function App() {
  const [mode , setMode] = useState('white');

  const toogleMode = color =>{
      console.log(color)
      setMode(color);
      document.body.style.backgroundColor = color;
  }

  return (
     <>
     <Navbar mode = {mode} toogleMode = {toogleMode}/>
     <div className="container">
       <Textform  mode = {mode} heading = "Enter the text to analyze below"/>
     </div>
    </>
  );
}

export default App;
