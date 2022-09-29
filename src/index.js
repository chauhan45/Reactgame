import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./Screen/Home";
import Navbar from "./Screen/Navbar";
import { Main } from "./Screen/Main";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import contact from './Screen/Contact';
import snake from '../src/Screen/snake-game/App'
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <Router>
   <Auth0Provider
    domain="dev-d69m5gfq.us.auth0.com"
    clientId="3KMjqsy9Y1d3GMjttntiEs7RmfktC0Xx"
    redirectUri={window.location.origin}
  >
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/Navbar" component={Navbar} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/app" component={App} />
      <Route exact path="/contact" component={contact} />
      <Route exact path="/snake" component={snake} />
    </Switch>
    </Auth0Provider>
  </Router>,
  document.getElementById("root")
);
