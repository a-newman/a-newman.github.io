import React from "react";
import { NavLink } from "react-router-dom";

import "../global-styles.css";
import "./Layout.css";

const SidebarLink = props => (
  <div className="sidebar-link">
    <h3>
      <NavLink
        to={props.to}
        className={({ isActive }) => isActive ? "sidebar-link-active" : ""}
        end
      >
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

export default Layout;
