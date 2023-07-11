import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About1 from "./components/About1";
function App(){
  const[mode,setMode]=useState('light');  
  const togglemode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
  }
   else{
    setMode('light')
    document.body.style.backgroundColor='white';
  }
}
  return(
     <>
 <Navbar title="TEXTIFY" aboutText="About TEXTIFY" mode={mode} togglemode={togglemode}/>
  <div className="container">
  <TextForm heading="Enter the text to analyze" mode={mode}/>
  </div>
  <About1/>
  </>
  );
}
export default App;
