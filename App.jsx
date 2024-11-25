import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';  //to import and render the Gallery component.
import './App.css';

function App() { //Manages global states or context providers if needed.
  return (
    <Router>
      <div className="app-container">
        <h2>Tour Comparison App</h2>
        <Routes>
          <Route path="/" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
