import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import me from "../images/me.jpg";
import cv from "../documents/Anelise_Newman_CV.pdf";

import "./Home.css";
import "../global-styles.css";

const ProfLink = props => (
  <p className="links-elt">
    <a href={props.href}>{props.name}</a>
    <IoIosArrowForward className="link-arrow-icon" />
  </p>
);

function HomePage() {
  return (
    <div className="vertical-center">
      <div>
        <div
          className="me-pic-container"
          style={{ backgroundImage: `url(${me})` }}
        ></div>
        {/* <img src={me} className="me-pic" alt="Portrait of Anelise Newman" /> */}
        <p>
          I'm <b>Anelise Newman</b>. I am a Master of Enginering student at MIT
          working with Aude Oliva. I am interested in understanding and modeling
          how humans interact with visual content. My research projects often
          span computer vision, cognitive science, and HCI. I recently finished
          my undergraduate at MIT.
        </p>
        <div className="links-flexbox">
          <ProfLink name="CV" href={cv} />
          <ProfLink
            name="LinkedIn"
            href={"https://www.linkedin.com/in/anelise-newman/"}
          />
          <ProfLink name="Github" href={"https://github.com/a-newman/"} />
          <ProfLink name="Email" href={"mailto:apnewman@mit.edu"} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
