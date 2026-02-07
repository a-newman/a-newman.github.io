import React from "react";
import * as IoIcons from "react-icons/io";

import "./SimpleLinkList.css";

const ProfLink = props => {
  const Icon = IoIcons[props.icon];
  return (
    <a href={props.href} className="icon-link" title={props.name}>
      <Icon size="1.75em" className="icon" />
      <span className="icon-label">{props.name}</span>
    </a>
  );
};

const SimpleLinkList = props => (
  <div className="links-flexbox">
    {props.links.map((elt, i) => (
      <ProfLink name={elt.name} href={elt.href} icon={elt.icon} key={`ProfLink${i}`} />
    ))}
  </div>
);

export default SimpleLinkList;
