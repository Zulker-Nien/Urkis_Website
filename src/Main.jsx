import React from "react";
import App from "./App";
import "./styles.scss";
import { Route, Switch } from "react-router-dom";
import Connect from "./Connect/Connect";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/connect" component={Connect} />
      </Switch>
    </div>
  );
};

export default Main;
