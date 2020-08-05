import React from "react";
// import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import data from "./Research.yaml";
import louie from "../images/louie.jpg";

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
        </span>
        {props.name}
      </div>
    </a>
  );
};

const Section = props => {
  return (
    <div>
      <h2 className="section-title">
        <b>{props.title}</b>
      </h2>
      {props.children}
    </div>
  );
};

const Publication = props => {
  const authorList = props.authors
    .map((author, i) => {
      const isMe = author.includes("Anelise Newman");
      const key = `author${i}`;
      return isMe ? <b key={key}>{author}</b> : <span key={key}>{author}</span>;
    })
    .reduce((prev, curr) => [prev, ", ", curr]);

  const images = require.context("../images/", true);
  const imageSrc = images("./" + props.imageSrc);

  return (
    <div className="publication-section-container">
      <div>
        <h3 className="project-title">{props.title}</h3>
        <h5 className="project-authors">{authorList}</h5>
        <h5 className="project-venue">
          <i>{props.venue}</i>
        </h5>
        {props.abstract && (
          <p>
            <b>Abstract. </b>
            {props.abstract}
          </p>
        )}
        {props.links && (
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
        )}
        {props.imageSrc && (
          <div className="project-picture">
            <img src={imageSrc} alt={props.imageAlt} />
          </div>
        )}
      </div>
    </div>
  );
};

function ResearchPage() {
  return (
    <>
      {data.sections.map((section, section_i) => (
        <Section title={section.name} key={`Section${section_i}`}>
          {section.items.map((item, item_i) => (
            <Publication {...item} key={`Publication${item_i}`} />
          ))}
        </Section>
      ))}
    </>
  );
}

export default ResearchPage;
