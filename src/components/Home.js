import React from "react";
import me from "../images/me.jpg";
import cv from "../documents/Anelise_Newman_CV.pdf";
import CircularImage from "./CircularImage.js";
import SimpleLinkList from "./SimpleLinkList.js";

import "./Home.css";
import "../global-styles.css";

function HomePage() {
  const links = [
    { name: "CV", href: { cv } },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/anelise-newman/" },
    { name: "Github", href: "https://github.com/a-newman/" },
    { name: "Email", href: "mailto:apnewman@mit.edu" }
  ];
  return (
    <div className="vertical-center">
      <div>
        <CircularImage src={me} className="me-pic-container" />
        {/* <img src={me} className="me-pic" alt="Portrait of Anelise Newman" /> */}
        <p>
          I'm <b>Anelise Newman</b>. I am a Master of Enginering student at MIT
          working with Aude Oliva. I am interested in understanding and modeling
          how humans interact with visual content. My research projects often
          span computer vision, cognitive science, and HCI. I recently finished
          my undergraduate at MIT.
        </p>
        <SimpleLinkList links={links} />
      </div>
    </div>
  );
}

export default HomePage;
