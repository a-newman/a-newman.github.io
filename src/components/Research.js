import React from "react";
import * as IoIcons from "react-icons/io";
import data from "./Research.yaml";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./Research.css";
import "../global-styles.css";

const IconLinkButton = props => {
  const Icon = IoIcons[props.iconName];
  return (
    <a href={props.href}>
      <div className="project-link-elt">
        <Icon size="2em" className="icon" />
        {props.name}
      </div>
    </a>
  );
};

const Section = props => {
  return (
    <div>
      <h2 className="section-title" id={props.title.toLowerCase()}>
        <b>{props.title}</b>
      </h2>
      {props.children}
    </div>
  );
};

const Publication = props => {
  const authorList = props.authors
    ? props.authors
        .map((author, i) => {
          const isMe = author.includes("Anelise Newman");
          const key = `author${i}`;
          return isMe ? (
            <b key={key}>{author}</b>
          ) : (
            <span key={key}>{author}</span>
          );
        })
        .reduce((prev, curr) => [prev, ", ", curr])
    : null;

  const src = require.context("../", true);
  const getPath = path => src("./" + path);

  return (
    <div className="publication-section-container">
      <div>
        <h3 className="project-title">
          <b>{props.title}</b>
        </h3>
        {authorList && <h4 className="project-authors">{authorList}</h4>}
        {props.venue && (
          <h4 className="project-venue">
            <i>
              <span dangerouslySetInnerHTML={{ __html: props.venue }}></span>
            </i>
          </h4>
        )}
        {props.imageSrc && (
          <div className="project-picture">
            <img src={getPath(props.imageSrc)} alt={props.imageAlt} />
          </div>
        )}
        {props.videoSrc && (
          <div className="project-video">
            <video
              src={getPath(props.videoSrc)}
              alt={props.videoAlt}
              controls
            ></video>
          </div>
        )}
        {props.abstract && (
          <p className="project-abstract">
            <b>Abstract. </b>
            <span dangerouslySetInnerHTML={{ __html: props.abstract }}></span>
            {/* {props.abstract} */}
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
        <div className="spacer"></div>
      </div>
    </div>
  );
};

const Header = props => {
  console.log("header sections", props.sections);
  return (
    <div className="project-sections-header">
      {props.sections.map((section, section_i) => (
        <div
          className="project-sections-header-label"
          key={`project-sections-header-label-${section_i}`}
        >
          <AnchorLink href={`#${section.toLowerCase()}`}>{section}</AnchorLink>
        </div>
      ))}
    </div>
  );
};

function ResearchPage() {
  return (
    <>
      <Header sections={data.sections.map(section => section.name)}></Header>
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
