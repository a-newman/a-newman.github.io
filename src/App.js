import React from "react";

import Home from "./components/Home.js";
import Layout from "./components/Layout.js";

import "./global-styles.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
