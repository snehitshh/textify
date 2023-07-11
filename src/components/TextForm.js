import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpclick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleDownclick=()=>{
    let lowertext=text.toLowerCase();
    setText(lowertext);
  }
  const speak=()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleOnchange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  };
  const handleclearclick=()=>{
    let newtext='';
    setText(newtext)
  }
  /*const handlecopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }*/
  const [text, setText] = useState("Enter text here");
  return (
    <>
    <div className="container"style={{ color:props.mode==='dark'?'white':'#042743'}}>
           <h1>{props.heading}</h1>
      <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"
        style={{
          backgroundColor:props.mode==='dark'?'brown':'white',color:props.mode==='dark'?'white':"#042743"
        }}></textarea>
      </div>
      </div>
      <button className="btn btn-primary mx-2"  onClick={handleUpclick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2 " onClick={handleDownclick}>Conver to lowercase</button>
      <button className="btn btn-primary" onClick={handleclearclick}>Clear text</button>
     {/*} <button className="btn btn-primary" onClick={handlecopy}>Copy text</button>*/}
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      <div className="container my-3" style={{
          color:props.mode==='dark'?'white':'#042743'
        }}>
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words  and {text.length} characters</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
      </div>
    </>
  );
}

