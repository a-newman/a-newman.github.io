import React from "react";
import me from "../images/me.jpg";

import "./Home.css";
import "../global-styles.css";

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
      </div>
    </div>
  );
}

export default HomePage;
