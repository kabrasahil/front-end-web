import React from 'react';
import logo from './49128595.jpeg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <img src={logo} alt="Indian Game Theory Society" width="40"/>
          <h1 className="logo-heading"> The Indian Game Theory Society</h1>
        </div>
        <h2 className="articles-heading">Articles</h2> {/* add this heading */}
        <div className="search-box">
          <input type="text" placeholder="Search"/>
          <button className="search-btn"><span className="sr-only">Search..</span><FontAwesomeIcon icon={faSearch} /></button>
        </div>
      </nav>
    </div>
  );
}

export default App;
