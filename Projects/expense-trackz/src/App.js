import React from 'react';
import Home from "./components/screens/home";
import About from "./components/screens/about";
import Contact from './components/screens/contact';
import Expensetracker from './components/screens/expensetracker';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
 

  return (  
    <BrowserRouter>

    <Route exact path="/">
     <Home />  
    </ Route>
     
    <Route exact path="/about">
     <About />  
    </Route>
    
    <Route exact path="/contact">
     <Contact />  
    </Route>

    <Route exact path="/expensetracker">
     <Expensetracker />  
    </Route>
    
    </BrowserRouter>
  
  );
  
}

export default App;
