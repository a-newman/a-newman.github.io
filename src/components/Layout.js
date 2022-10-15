import React from "react";
import { NavLink, withRouter } from "react-router-dom";

import "./Layout.css";
import "../global-styles.css";

const SidebarLink = props => (
  <div className="sidebar-link">
    <h3>
      <NavLink to={props.to} exact activeClassName="sidebar-link-active">
        {props.name}
      </NavLink>
    </h3>
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
      <div className="main">{children}</div>
    </div>
  );
};

export default withRouter(Layout);
