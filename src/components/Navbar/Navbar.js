import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/Subtract.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="Navbar">
      <div className="container">
        <div className="row">
          <div className="col left">
            <div className="logo">
              <img src={logo} />
              <h4>yoko</h4>
            </div>
          </div>
          <div className={isActive ? "col right active" : "col right"}>
            <ul className="menu">
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Pages</li>
              </a>
              <a href="">
                <li>Sections</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
              <a href="">Explore</a>
            </ul>
          </div>
          <div
            className={isActive ? "hamburger active" : "hamburger"}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
