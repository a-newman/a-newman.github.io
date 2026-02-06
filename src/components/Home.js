import React from "react";
import * as IoIcons from "react-icons/io";
import cv from "../documents/resume.pdf";
import "../global-styles.css";
import me from "../images/me.jpg";
import CircularImage from "./CircularImage.js";
import "./Home.css";
import researchData from "./ResearchData.js";
import SimpleLinkList from "./SimpleLinkList.js";

const CompactPublication = ({ title, authors, venue, links }) => {
  const src = require.context("../", true);
  const getPath = path => src("./" + path);

  const authorList = authors
    .map((author, i) => {
      const isMe = author.includes("Anelise Newman");
      const key = `author${i}`;
      return isMe ? (
        <b key={key}>{author}</b>
      ) : (
        <span key={key}>{author}</span>
      );
    })
    .reduce((prev, curr) => [prev, ", ", curr]);

  return (
    <div className="compact-publication">
      <h3 className="compact-pub-title">{title}</h3>
      <p className="compact-pub-authors">{authorList}</p>
      <p className="compact-pub-venue"><i>{venue}</i></p>
      <div className="compact-pub-links">
        {links.map((link, i) => {
          const Icon = IoIcons[link.iconName];
          return (
            <a
              key={i}
              href={link.href.startsWith("http") ? link.href : getPath(link.href)}
              className="compact-link"
              title={link.name}
            >
              <Icon size="1.2em" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

function HomePage() {
  const links = [
    { name: "CV", href: cv, icon: "IoIosDocument" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/anelise-newman/", icon: "IoLogoLinkedin" },
    { name: "Email", href: "mailto:anelisenewman@gmail.com", icon: "IoIosMail" }
  ];

  const publications = researchData.sections.find(s => s.name === "Publications")?.items || [];

  return (
    <div className="home-content">
      <div className="intro-section">
        <div className="intro-left">
          <CircularImage src={me} className="me-pic-container" />
          <SimpleLinkList links={links} />
        </div>
        <div className="intro-text">
          <h1>Anelise Newman</h1>
          <h2>Machine Learning Engineer at Adobe Firefly</h2>
          <h3>I build human-in-the-loop systems for evaluating and improving GenAI quality and safety. At Adobe Firefly, I build and scale our internal evaluation systems, turning noisy human feedback into evaluation rubrics and post-training datasets. Before that, I was at Stitch Fix, leading evaluation for an inventory purchasing model responsible for millions of dollars of decisions. I hold a B.S. and Master's from MIT, where I published at ECCV, CVPR, and CHI on computer vision and human perception. I combine technical depth in ML infrastructure with experience designing human-facing experiments and extracting reliable signals from noisy data.</h3>
        </div>
      </div>

      <div className="research-summary">
        <h2>Publications</h2>
        {publications.map((pub, i) => (
          <CompactPublication key={i} {...pub} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
