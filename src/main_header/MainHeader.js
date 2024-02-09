// MainHeader.js
import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import Logo from './logo.png'; 
import './MainHeader.css'; 
import { IconContext } from "@react-icons/all-files/";

import { AiOutlineDown } from "@react-icons/all-files/ai/AiOutlineDown";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";


function MainHeader() {
  const [hoveredLink, setHoveredLink] = useState('');

  const handleMouseEnter = (linkName) => {
    setHoveredLink(linkName);
  };

  const handleMouseLeave = () => {
    setHoveredLink('');
  };

  const links = [
    { to: "o-mnie", text: "O mnie" },
    { to: "galeria", text: "Galeria" },
    { to: "kontakt", text: "Kontakt" },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const mainHeaderFlexDirection = windowWidth < 1100 ? "column" : "row";
  const mainHeaderMarginTop = windowWidth < 1100 ? "5vh" : "10vh";
  const mainHeaderHeight = windowWidth < 1100 ? "100vh" : "100vh";
  const logoSizeMainHeader = windowWidth < 1100 ? "150%" : "60%";
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <header className="main-header" style={{height: mainHeaderHeight}}>
      <div className='mainHeaderSocialIcons'>
      <IconContext.Provider value={{ color: "#915eff", className: "contactIcon" }}>
  <a href="https://www.facebook.com" className='mainHeaderFacebookIcon'>
    <AiFillFacebook size="3rem" color="white"/>
  </a></IconContext.Provider>
  <IconContext.Provider value={{ color: "#915eff", className: "contactIcon" }}>
  <a href='https://www.instagram.com/_gn_photography/' target="_blank" className='mainHeaderInstagramIcon'>
    <AiFillInstagram size="3rem" color="white"/>
  </a></IconContext.Provider>
</div>
      <div className='mainHeaderBox' style={{flexDirection: mainHeaderFlexDirection, marginTop: mainHeaderMarginTop}}>
      <div className="logo" style={{width: logoSizeMainHeader}}>
        <img src={Logo} alt="Logo"/>
      </div>
      {windowWidth > 1100 && (
      <nav className="menu" >
      <ul>
    {links.map(({ to, text }) => (
      <li key={to} 
          onMouseEnter={() => handleMouseEnter(to)} 
          onMouseLeave={handleMouseLeave}
          // Tutaj dynamicznie dodajemy klasę do <li>, a nie do <a>
          className={hoveredLink && hoveredLink !== to ? 'glitch-effect' : ''}>
        <Link to={to} smooth duration={1000}>
          {text}
        </Link>
      </li>
    ))}
  </ul>
      </nav>
      )} {windowWidth < 1100 && (
        <Link to="o-mnie" smooth duration={1000}>
        <AiOutlineDown size="6rem" color="white" /></Link>
        )}
      </div>
    </header>
  );
}

export default MainHeader;
