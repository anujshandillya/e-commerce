import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Signin from './Signin';

function App() {
  return (
    // BEM
      
      <Router>
        <div className="app">
        
          <Routes>
          
            <Route exact path="/login" element={<Signin />} />
              
            <Route exact path="/checkout" element={<><Header /><Checkout /></>} />
            
            <Route exact path="/" element={<><Header/><Home/></>} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;