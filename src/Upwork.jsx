import React from "react";
import "./Fiverr.scss";
const Upwork = () => {
  return (
    <>
      {/* https://www.upwork.com/o/profiles/users/~0130cad0881a233037/ */}
      <div className="FiverrContainer">
        <div className="topC">
          <h2>Upwork</h2>
        </div>
        <div className="middleC"></div>
        <div className="bottomC">
          <div className="TopRow">
            <div className="stars"></div>
          </div>
          <h4>Rising Star with $300+ earnings.</h4>
          <a
            href="https://www.upwork.com/o/profiles/users/~0130cad0881a233037/"
            style={{ textDecoration: "none" }}
          >
            <div className="FreeButton">
              <h2>Take me there</h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Upwork;
