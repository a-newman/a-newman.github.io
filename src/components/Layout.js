import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Layout.css";
import "../global-styles.css";

const SidebarLink = props => (
  <div className="sidebar-link">
    <Link to={props.to}>
      <h3>{props.name}</h3>
    </Link>
  </div>
);

const Sidebar = props => (
  <div className="sidebar">
    <h1 className="sidebar-name">Anelise Newman</h1>
    <SidebarLink name="About Me" to="/" />
    <SidebarLink name="Research" to="/research" />
    <SidebarLink name="Personal" to="/personal" />
  </div>
);

const Layout = ({ children }) => {
  return (
    <div className="background">
      <Sidebar />
      {children}
    </div>
  );
};

export default withRouter(Layout);
