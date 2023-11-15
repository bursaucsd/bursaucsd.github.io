import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Home from './components/Home/Home'
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import Archives from './components/Archives/Archives'
import Team from './components/Team/Team'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div>
    <Router>
      <ScrollToTop/>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/archives" element={<Archives/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
