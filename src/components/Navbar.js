import React from 'react'

export default function Navbar(props){
   const colorTheme = props.mode === "white" ? "light" : "dark";
    return (
        <nav className={`navbar navbar-expand-lg navbar-${colorTheme} bg-${colorTheme}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? "Enable" : "Disable"} Dark Mode</label>
          </div> */}
           <button className = "mx-1" onClick={color => props.toogleMode('white')} style={{height:"25px" , width:"25px" , border:"1px solid black" , borderRadius:"50%" , backgroundColor:"white"}}></button>            
           <button className = "mx-1" onClick={color => props.toogleMode('#042743')} style={{height:"25px" , width:"25px" , border:"1px solid black" , borderRadius:"50%" , backgroundColor:"#042743"}}></button>            
           <button className = "mx-1" onClick={color => props.toogleMode('#8d9db6')} style={{height:"25px" , width:"25px" , border:"1px solid black" , borderRadius:"50%" , backgroundColor:"#8d9db6"}}></button>            
           <button className = "mx-1" onClick={color => props.toogleMode('#484f4f')} style={{height:"25px" , width:"25px" , border:"1px solid black" , borderRadius:"50%" , backgroundColor:"#484f4f"}}></button>            

        </div>
      </div>
    </nav>
    );
}