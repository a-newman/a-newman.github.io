import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import "./SimpleLinkList.css";

const ProfLink = props => (
  <p className="links-elt">
    <a href={props.href}>{props.name}</a>
    <IoIosArrowForward className="link-arrow-icon" />
  </p>
);

export default props => (
  <div className="links-flexbox">
    {props.links.map(elt => (
      <ProfLink name={elt.name} href={elt.href} />
    ))}
  </div>
);
