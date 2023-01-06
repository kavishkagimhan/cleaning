import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header.js';
import Footer from './components/footer.js';
import Main from './components/pages/main';
import About from './components/pages/home/about';
import Contact from './components/pages/contact/contact';
import Services from './components/pages/home/services';
import Pricing from './components/pages/home/pricing';
import Conditions from './components/pages/conditions/conditions';
import Login from './components/pages/login/login';
import Signup from './components/pages/signup/signup';

function App() {
  return (
    <div className="App">
     <Router>
          <Header/>
          <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact"  element={<Contact/>}/>
          <Route path="/services" element={<Services/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/conditions" element={<Conditions/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
