import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home"
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
