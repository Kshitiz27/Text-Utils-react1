import React, { useState } from 'react'
export default function Textform(props) {
  const handleUpClick = ()=>{
    //console.log('Button was clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }

  const reSet = ()=>{
    let newText = "";
    setText(newText);
  }

  const handleOnChange = (event)=>{
   // console.log('Onchange was used');
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter text here:');
  return (
    <>
    <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
<div className="mb-3 my-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" 
  style={{backgroundColor: props.mode==="dark"?"#34282C":"white",
   color: props.mode==="dark"?"white":"black"}}></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
<button className='btn btn-primary mx-2' onClick={reSet}>Reset</button>
</div>

<div className='container my-3' style={{color: props.mode==="dark"?"white":"black"}}>
    <h2>Text Details:</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes will be taken to read the text</p>
    <h2>Result:</h2>
    <p>{text.length>0?text:"Enter some text in the above textbox to preview it here"}</p>
</div>
</>
  )
}
