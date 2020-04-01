import React from 'react';
import './App.css';
import Nav from './Components/Nav.js';
import { Routes } from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <>
    
      <Router>
        <Nav />
        <Routes />
      </Router>

      <header className="App-header">
             </header>
    </>
  );
}

export default App;
