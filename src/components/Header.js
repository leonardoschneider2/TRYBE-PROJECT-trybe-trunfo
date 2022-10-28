import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="playstation-header">
        <div>
          <h2 className="playstation-header-subtitle">TRYBE PROJECT</h2>
          <h1 className="playstation-header-title">Trunfo Cards Creator</h1>
        </div>
        <div>
          <div className="play2logo" />
        </div>
      </header>
    );
  }
}

export default Header;
