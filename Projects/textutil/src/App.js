//import './App.css';


import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light has been enabled', 'success');
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container">
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
       
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter some text" mode={mode} />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
