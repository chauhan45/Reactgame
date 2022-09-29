import React from "react";
import TicTacToe from "./tiktak/tictactoe-v2";
import TicTacToeAI from "./tiktak//tictactoe-v3";
import { Auth0Provider } from "@auth0/auth0-react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import "./App.css";

function Menu() {
  return (
    <div className="menu">
      <Link exact to="/">
        Easy
      </Link>
      <Link to="/impossible/">Impossible</Link>
      {/* <Link to="/2playyers/">2 Players</Link> */}
    </div>
  );
}

function App() {
  return (
  
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container">
        <Menu />
        <Switch>
          <Route
            path="/impossible/"
            exact
            render={() => <TicTacToeAI difficulty="impossible" />}
          />
          <Route path="/2players/" exact component={TicTacToe} />
          <Route path="/" render={() => <TicTacToeAI key="default" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
