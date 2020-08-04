import React from "react";

import "./CircularImage.css";

export default props => (
  <div
    className={`circular-img ${props.className}`}
    style={{ backgroundImage: `url(${props.src})` }}
  ></div>
);
