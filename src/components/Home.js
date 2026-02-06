import React from "react";
import cv from "../documents/resume.pdf";
import "../global-styles.css";
import me from "../images/me.jpg";
import CircularImage from "./CircularImage.js";
import "./Home.css";
import SimpleLinkList from "./SimpleLinkList.js";


function HomePage() {
  const links = [
    { name: "CV", href: cv },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/anelise-newman/" },
    { name: "Github", href: "https://github.com/a-newman/" },
    { name: "Email", href: "mailto:anelisenewman@gmail.com" }
  ];
  return (
    <div className="home-content">
      <CircularImage src={me} className="me-pic-container" />
      <h1>Anelise Newman</h1>
      <h2>Machine Learning Engineer at Adobe Firefly</h2>
      <h3>I build human-in-the-loop systems for evaluating and improving GenAI quality and safety. At Adobe Firefly, I build and scale our internal evaluation systems, turning noisy human feedback into evaluation rubrics and post-training datasets. Before that, I was at Stitch Fix, leading evaluation for an inventory purchasing model responsible for millions of dollars of decisions. I hold a B.S. and Master's from MIT, where I published at ECCV, CVPR, and CHI on computer vision and human perception. I combine technical depth in ML infrastructure with experience designing human-facing experiments and extracting reliable signals from noisy data.</h3>
      <SimpleLinkList links={links} />
    </div>
  );
}

export default HomePage;
