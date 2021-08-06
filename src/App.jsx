import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
// import companyLogo from "./Zulker_Logo.png";
import "./styles.css"
const App = () => {
  return (
    <>
      {/* <div className="ZulkerLogo"> */}
      {/* <img src={companyLogo} alt="BigCo Inc. logo" /></div> */}
      <Header />
      <About />
    </>
  );
};

export default App;
