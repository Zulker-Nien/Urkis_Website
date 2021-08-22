import ReactDOM from "react-dom";
import React from "react";
import Main from "./Main"
import "./styles.scss";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Main />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
