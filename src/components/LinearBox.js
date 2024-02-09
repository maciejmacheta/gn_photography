import React, { useState, useEffect } from "react";
import "./LinearBox.css";
import { Link } from "react-scroll";
import Logo from "./logo.png";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineLeft } from "@react-icons/all-files/ai/AiOutlineLeft";
import { AiOutlineRight } from "@react-icons/all-files/ai/AiOutlineRight";
function LinearBox() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [scrollY, setScrollY] = useState(0);  
  const [isVisible, setIsVisible] = useState(false); // Dodaj nowy stan isVisible


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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


  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const handleScroll = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const menuLogoLinear = windowWidth < 1100 ? "180px" : "125px";
  const menuLinearHeight = windowWidth < 1100 ? "100%" : "10%";
  const menuLinearWidth = windowWidth < 1100 ? "60%" : "20%";
  const menuTransform = isMenuVisible
    ? windowWidth < 1100
      ? "translateX(10%)"
      : "translateX(-10%)"
    : "translateX(700%)";
  const menuDisplay = windowWidth < 1100 ? "block" : "flex";
  const menuBackground = windowWidth < 1100 ? "#1c1c1c" : "transparent";
  const navButtonTransform = isMenuVisible
    ? windowWidth < 1100
      ? "translateX(-80%)"
      : "translateX(-28%)"
    : "translateX(-2%)";

  const menuFontSize = windowWidth < 1100 ? "5vh" : "2.5vh";
  const menuMarginBottom = windowWidth < 1100 ? "5vh" : "0vh";

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLinkClick = () => {
    if (windowWidth < 1100) { // Zamykaj menu tylko na urządzeniach mobilnych
      setIsMenuVisible(false);
    }
  }
  
  return (
   
    <div className={`linearGradientBox ${isVisible ? "visible" : ""}`}>
      <div className="navContainer">
        {windowWidth > 1100 && (
        <div className="logoLinear">
          <img src={Logo} alt="Logo" style={{width: menuLogoLinear}}/>
        </div>)}
        <div
          className={`navButton ${isMenuVisible ? "navButtonVisible" : ""}`}
          style={{ transform: navButtonTransform }}
        >
          {!isMenuVisible && (
            <AiOutlineLeft size="1.5rem" onClick={toggleMenu} color="white" />
          )}
          <AiOutlineMenu size="2.5rem" onClick={toggleMenu} color="white" />
          {isMenuVisible && (
            <AiOutlineRight size="1.5rem" onClick={toggleMenu} color="white" />
          )}
        </div>
      </div>
      <nav
        className={`menuLinear ${isMenuVisible ? "menuVisible" : ""}`}
        style={{
          height: menuLinearHeight,
          width: menuLinearWidth,
          transform: menuTransform,
          backgroundColor: menuBackground,
        }}
      >
        <ul style={{ display: menuDisplay }}>
          
        {links.map(({ to, text }) => (
      <li style={{ fontSize: menuFontSize, marginBottom: menuMarginBottom }} key={to} 
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
    </div>
  );
}

export default LinearBox;
