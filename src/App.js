import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Home from "./components/Home.js";
import Layout from "./components/Layout.js";
import Personal from "./components/Personal.js";
import Research from "./components/Research.js";

import "./global-styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/personal" element={<Personal />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
