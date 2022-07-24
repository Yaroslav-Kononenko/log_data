import React from "react";
import './Header.scss';
import signuplogo from "./signup_logo.jpg";
import triangle from "./triangle_pointer-grey.svg";

export const Header: React.FC = () => {
  return (
    <div className="Header">
      <div className="schoolSelector">
        <div className="schoolSelector__pointer">
          <img 
            src={triangle} 
            alt="triangle" 
            className="triangle-grey" 
          />
        </div>

        <span className="schoolSelector__text">school&nbsp;1</span>
      </div>

      <div className="Header__flex_container">
        <nav className="Nav">
          <a href="/" className="Nav__link">Analytics</a>
          <a href="/" className="Nav__link">Gradebooks</a>
          <a href="/" className="Nav__link">Tests</a>
          <a href="#students" className="Nav__link is-active">Students</a>
          <a href="/" className="Nav__link">Teachers</a>
          <a href="/" className="Nav__link">Archive</a>
        </nav>
      </div>

      <div className="Header__signup signup">
        <div className="signup__photo">
          <img 
            src={signuplogo} 
            alt="triangle"  
          />
        </div>

        <div className="signup__pointer_container">
          <img 
            src={triangle} 
            alt="triangle" 
            className="triangle-grey" 
          />
        </div>
      </div>
    </div>
  );
};
