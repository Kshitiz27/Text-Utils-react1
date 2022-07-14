import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/about';
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode , setMode] = useState("light") ;
  let toggleMode = ()=>{
    if (mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor = "#123456";
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar Title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <div className='container my-3'>
    {/* <Routes>
          <Route path="/about" element={<About />} >
          </Route>
          <Route path="/" element={<Textform heading ="Enter the text to analyze" mode = {mode}/>} >
          </Route>
        </Routes> */}
        <Textform heading ="Enter the text to analyze" mode = {mode}/>
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;