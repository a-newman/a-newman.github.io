import React from "react";
import louie from "../images/louie.jpg";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import data from "./Research.yaml";

import "./Research.css";
import "../global-styles.css";

const IconLinkButton = props => {
  const Icon = IoIcons[props.iconName];
  console.log("Icon", Icon);
  console.log("name", props.name);
  console.log("conname", props.iconName);
  return (
    <a href={props.href}>
      <div className="project-link-elt">
        <span>
          <Icon />
          {/* <icon /> */}
        </span>
        {props.name}
      </div>
    </a>
  );
};

const Publication = props => {
  console.log("data", data);
  return (
    <div className="publication-section-container">
      <div>
        <h3 className="project-title">{props.title}</h3>
        <h5 className="project-authors">{props.authors}</h5>
        <h5 className="project-venue">
          <i>{props.venue}</i>
        </h5>
        <p>
          <b>Abstract. </b>
          {props.abstract}
        </p>
        <div className="project-links-container">
          {props.links.map((elt, i) => (
            <IconLinkButton
              name={elt.name}
              iconName={elt.iconName}
              href={elt.href}
              key={`iconLinkButton${i}`}
            />
          ))}
        </div>
        <div className="project-picture">
          <img src={props.imageSrc} alt={props.imageAlt} />
        </div>
      </div>
    </div>
  );
};

function ResearchPage() {
  const links = [{ name: "Louie", iconName: "IoMdDocument", href: louie }];
  return (
    <div>
      <Publication
        title="Sample title"
        authors="Anelise"
        venue="ECCV"
        imageSrc={louie}
        imageAlt="my dog louie"
        abstract="here is the abstract for this project about Louie."
        links={links}
      />
    </div>
  );
}

export default ResearchPage;
