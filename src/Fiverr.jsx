import React from "react";
import "./Fiverr.scss";
const Fiverr = () => {
  return (
    <>
      {/*  */}
      <div className="FiverrContainer">
        <div className="topC">
          <h2>Fiverr</h2>
        </div>
        <div className="middleC"></div>
        <div className="bottomC">
          <div className="TopRow">
            <div className="stars"></div>
          </div>
          <h4>5 Star Rated Seller with $100+ earnings.</h4>
          <a
            href="https://www.fiverr.com/zulkerb9b?up_rollout=true"
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

export default Fiverr;
