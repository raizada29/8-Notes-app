import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [whichMode, setWhich] = useState(' Dark')
  const [alert, setAlert] = useState('We are in light mode');
  const showAlert = (msg)=>
  {
    (setAlert(msg));
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      setWhich(' Light');
      showAlert("We are in dark mode now");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = '#5f9ea057';
      document.body.style.color = 'black';
      setWhich(' Dark');
      showAlert("We are in light mode now");
    }
  }
  return (
    <>
    <Router>
<Navbar title="TextUtils" about="About text utils" mode={mode} toggleMode={toggleMode} whichMode={whichMode}/>
<Alert alert={alert}/>
<div className="container my-3">
  <Routes>
  <Route path="/about" element={<About />} />
    <Route path="/"
    element={<TextForm heading = "Enter the text to analyse" mode={mode} showAlert={showAlert}/>} />
  </Routes>
</div>
</Router>
</>
  );
}

export default App;
