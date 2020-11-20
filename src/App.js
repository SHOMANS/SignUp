import React from "react";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <SignUp />
          </Route>
          <Route exact path="/LogIn">
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
