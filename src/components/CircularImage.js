import React from "react";

import "./CircularImage.css";

const CircularImage = props => (
  <div
    className={`circular-img ${props.className}`}
    style={{ backgroundImage: `url(${props.src})` }}
  ></div>
);

export default CircularImage;
