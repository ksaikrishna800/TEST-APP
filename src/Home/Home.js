import React from 'react';
import logo from '../fulllogo.jpg';
import '../App.css';

function Home() {
  return (
    <div>
      <div className="imageApp">
        <img src={logo} alt="Logo" />
        <div className="QuoteStyles">Make Peoples life Better</div>
      </div>
      <div style={{ display: 'grid', backgroundColor: '#fff9ee' }}>
      </div>
    </div>
  );
}

export default Home;
