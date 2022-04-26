import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./Screen/Home";
import Navbar from "./Screen/Navbar";
import { Main } from "./Screen/Main";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import contact from './Screen/Contact'

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/Navbar" component={Navbar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/app" component={App} />
      <Route exact path="/contact" component={contact} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
