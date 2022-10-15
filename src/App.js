import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout.js";
import Home from "./components/Home.js";
import Research from "./components/Research.js";
import Personal from "./components/Personal.js";

import "./global-styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/research" component={Research} />
            <Route exact path="/personal" component={Personal} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
