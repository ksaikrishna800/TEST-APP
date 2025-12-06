import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import LinkedIn from './LinkedIn/LinkedIn';
import LinkedInClone from './LinkedInClone/LinkedInClone';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ background: '#333', padding: '15px' }}>
          <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</Link>
          <Link to="/linkedin" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>LinkedIn</Link>
          <Link to="/linkedin-clone" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>LinkedIn Clone</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/linkedin" element={<LinkedIn />} />
          <Route path="/linkedin-clone" element={<LinkedInClone />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
