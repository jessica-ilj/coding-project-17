import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

function App() {
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
