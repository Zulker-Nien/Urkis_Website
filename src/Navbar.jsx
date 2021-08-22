import React from "react";
import "./styles.scss";
import { useMediaQuery } from "react-responsive";
import NavLogo from "./Zulker_Logo_W.png";
const Navbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

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
                <div className="menu">
                    <h2>Menu</h2>
                </div>
                
            </div>
            {/* <li>About Me</li>
            <li>Education & Training</li>
            <li>
              <img src={NavLogo} />
            </li>
            <li>Projects & Experience</li>
            <li>Connect</li> */}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
