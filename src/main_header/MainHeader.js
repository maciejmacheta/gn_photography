import React from 'react';
import Logo from './logo.png'; // Import pliku logo
import './MainHeader.css'; // Import pliku z stylami

function MainHeader() {
  return (
    <header className="main-header">
      <div className="logo">
        {/* Tutaj wstaw swój obrazek/logo */}
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="#o-mnie">O mnie</a>
          </li>
          <li>
            <a href="#galeria">Galeria</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
