import React, {useState } from 'react'

export default function Textform(props) {
    const [text , setText] = useState("")
    // const [wordCount , setwordCount] = useState(0)
    // const [charCount , setcharCount] = useState(0)

    const handleUp = () =>{
        console.log("Clicked");
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Text has been converted into Uppercase" , "success")
    }

    const handleLow = () =>{
        console.log("Clicked");
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Text has been converted into Lowercase" , "success")
    }

    const handleSpaces = () =>{
        // setText(text.trim());
          let newText = text.replace(/\s+/g, ' ').trim();
          setText(newText);
    }

    const handleClear = () =>{
        setText("");
    }

    const handleText = (event) =>{
        setText(event.target.value);
    }   

    let colorTheme = "primary";
    // let 

    if(props.mode === '#484f4f'){
        colorTheme = "dark"
    }else if(props.mode === '#8d9db6'){
        colorTheme = "secondary"
    }else if(props.mode === "#042743"){
        colorTheme = "info"
    }

    return(
    <>
    <div className="container my-2">
        <h1 className={`text-${props.mode === "white" ? 'black' : 'white' }`}>{props.heading}</h1>
        <div className="mb-3">        
            <textarea className="form-control my-3" style={{backgroundColor: props.mode , color: props.mode === "light" ? 'black' : 'grey'}} placeholder='Start typing or copy and paste document here...........' value={text} onChange = {handleText} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className={`btn btn-${colorTheme} mx-1`} onClick={handleUp}>Convert to Uppercase</button>
        <button className={`btn btn-${colorTheme} mx-1`} onClick={handleLow}>Convert to Lowercase</button>
        <button className={`btn btn-${colorTheme} mx-1`} onClick={handleSpaces}>Remove extra spaces</button>
        <button className={`btn btn-${colorTheme} mx-1`} onClick={() => {navigator.clipboard.writeText(text)}}>Copy text</button>
        <button className={`btn btn-${colorTheme} mx-1`} onClick={handleClear}>Clear text</button>
    </div>
    <div className="container my-3" style={{color:props.mode === "white" ? 'black' : 'white'}}>
        <h1>Your Text Summary</h1>
        <p>words Count: {text.length === 0 ? 0 : text.replace(/\s+/g, ' ').trim().split(" ").length} and Characters : {text.length} </p>
        <p>{0.008 * (text.length === 0 ? 0 : text.replace(/\s+/g, ' ').trim().split(" ").length)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
