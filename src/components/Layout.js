import React from "react";

import "../global-styles.css";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="background">
      <div className="main">{children}</div>
    </div>
  );
};

export default Layout;
