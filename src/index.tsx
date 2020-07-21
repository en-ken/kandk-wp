import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Setlist from "./Setlist";
import { Switch, Route } from "wouter";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Switch>
      <Route path="/setlist" component={Setlist} />
      <Route path=":rest*" component={App} />
    </Switch>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
