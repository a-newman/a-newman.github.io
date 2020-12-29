import React from "react";
import me from "../images/me.jpg";
import cv from "../documents/resume.pdf";
import thesis from "../documents/MEng_Thesis.pdf";
import CircularImage from "./CircularImage.js";
import SimpleLinkList from "./SimpleLinkList.js";
import { HashLink } from "react-router-hash-link";
import { withRouter } from "react-router-dom";

import "./Home.css";
import "../global-styles.css";

function HomePage() {
  const links = [
    { name: "CV", href: cv },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/anelise-newman/" },
    { name: "Github", href: "https://github.com/a-newman/" },
    { name: "Email", href: "mailto:anelise@stanford.edu" }
  ];
  return (
    <div>
      <CircularImage src={me} className="me-pic-container" />
      {/* <img src={me} className="me-pic" alt="Portrait of Anelise Newman" /> */}
      <p>
        I'm <b>Anelise Newman</b>. I am a 1st-year PhD student at Stanford in
        Computer Vision and HCI. Previously, I received my MEng at MIT working
        with Aude Oliva. I am interested in understanding and modeling how
        humans interact with visual content. My research projects often span
        computer vision, cognitive science, and HCI.
      </p>
      <SimpleLinkList links={links} />
      <h2>Updates</h2>
      <ul>
        <li>
          <b>01/2021</b>: I am doing my winter rotation with Maneesh Agrawala.
        </li>
        <li>
          <b>09/2020</b>: I started a PhD program at Stanford! I did my fall
          rotation with Michael Bernstein and Fei-Fei Li.
        </li>
        <li>
          <b>08/2020:</b> Our paper "Multimodal Memorability: Modeling Effects
          of Semantics and Decay on Video Memorability" appeared at ECCV 2020 [
          <HashLink to="/research#memento">paper</HashLink>] [
          <HashLink to="/research#memento_eccv_presentation">
            presentation
          </HashLink>
          ]
        </li>
        <li>
          <b>06/2020:</b> Our paper "How much time do you have? Modeling
          Multi-duration Saliency" appeared at CVPR 2020 [
          <HashLink to="/research#multiduration">paper</HashLink>] [
          <HashLink to="/research#multiduration_cvpr_presentation">
            presentation
          </HashLink>
          ]
        </li>
        <li>
          <b>06/2020</b>: Our work appeared at{" "}
          <a href="https://www.visionsciences.org/">VSS 2020</a>:
          <ul>
            <li>
              Talk{" "}
              <a href="https://www.youtube.com/watch?v=5qJZRTnRhq8">
                "How much time do you have? Introducing a Multi-Duration
                Saliency Model"
              </a>
            </li>
            <li>
              Poster{" "}
              <HashLink to="/research#turkeyes_vss_presentation">
                "Introducing the TurkEyes Toolbox: UIs for crowdsourcing
                attention without an eye tracker"
              </HashLink>
            </li>
          </ul>
        </li>
        <li>
          <b>05/2020</b>: I received my Master of Engineering from MIT advised
          by <a href="http://olivalab.mit.edu/audeoliva.html">Aude Oliva</a>{" "}
          based on my thesis{" "}
          <a href={thesis}>
            "Human-Computer Perception: Modeling Visual Perceptual Attributes"
          </a>
          .
        </li>
        <li>
          <b>05/2020</b>: I will be attending Stanford as a PhD student starting
          in September 2020, studying Computer Vision and Human-Computer
          Interaction.
        </li>
        <li>
          <b>04/2020</b>: Our paper "TurkEyes: A Web-Based Toolbox for
          Crowdsourcing Attention Data" appeared at CHI 2020 [
          <HashLink to="/research#turkeyes">paper</HashLink>] [
          <HashLink to="/research/#turkeyes_chi_presentation">
            presentation
          </HashLink>
          ]
        </li>
        <li>
          <b>04/2020</b>: I was selected to receive an{" "}
          <a href="https://www.nsfgrfp.org/">
            NSF Graduate Research Fellowship
          </a>
          .
        </li>
      </ul>
    </div>
  );
}

export default withRouter(HomePage);
