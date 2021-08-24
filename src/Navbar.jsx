import React, { useState } from "react";
import "./styles.scss";
import { useMediaQuery } from "react-responsive";
import NavLogo from "./Zulker_Logo_W.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [showNav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!showNav);
  };

  return (
    <>
      {!isTabletOrMobile ? (
        <div>
          <ul className="NavListUL">
            <li>About Me</li>
            <li>Education & Training</li>
            <li>
              <img src={NavLogo} />
            </li>
            <li>Projects & Experience</li>
            <li>Connect</li>
          </ul>
        </div>
      ) : (
        <div>
          <ul className="NavListULM">
            <div className="lineContainer">
              <div className="menu" onClick={handleNav}>
                {showNav ? (
                  <div className="openNav">
                    <ul>
                      <li>About Me</li>
                      <li>Education & Training</li>
                      <li>
                        <NavLink to="/" style={{textDecoration:"none"}}>
                          <img src={NavLogo} />
                        </NavLink>
                      </li>
                      <li>Projects & Experience</li>
                      <li>
                        <NavLink to="/connect" style={{textDecoration:"none", color:"#d4d4d4"}}>Connect</NavLink>
                      </li>{" "}
                    </ul>
                  </div>
                ) : (
                  <h2>Menu</h2>
                )}
              </div>
            </div>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
