// AboutMe.js

import React, { useState, useEffect, useRef } from "react";
import './AboutMe.css';  // Pamiętaj o dodaniu odpowiedniego arkusza stylów
import aboutMe from './aboutMe.png'

function AboutMe() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const aboutMeFontSizeH2 = windowWidth < 1100 ? "5vh" : "8vh";
  const aboutMeFontSizeP = windowWidth < 1100 ? "2.5vh" : "3vh";
  const aboutMeTextAlignH2 = windowWidth < 1100 ? "center" : "left";

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const aboutMeRef = useRef(null);

  return (
    <section ref={aboutMeRef} id='o-mnie'>
      <div className="about-me-container">
        <div className="about-me-content">
          <h2 style={{fontSize: aboutMeFontSizeH2, textAlign: aboutMeTextAlignH2}}>O MNIE </h2>
          <p style={{fontSize: aboutMeFontSizeP}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum diam. Proin condimentum ex vel luctus cursus. Vestibulum rhoncus ex non turpis ultrices, ut tincidunt dolor convallis. Nulla facilisi. Sed nec justo id elit pellentesque tristique non eu ligula. Sed eu malesuada lacus. Ut hendrerit orci et erat facilisis, eget fermentum ex tincidunt. Proin id sapien vel magna aliquam facilisis. Quisque nec bibendum lacus.
          </p>
        </div>
        {windowWidth > 1100 && (
        <div className="about-me-image">
          <img src={aboutMe} alt="Person" />
        </div>)}
      </div>
    </section>
  );
}

export default AboutMe;
