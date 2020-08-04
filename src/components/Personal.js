import React from "react";
import CircularImage from "./CircularImage.js";
import SimpleLinkList from "./SimpleLinkList.js";
import louie from "../images/louie.jpg";
import brassrat from "../images/brass_rat.jpg";

import "./Personal.css";

function HomePage() {
  const links = [
    {
      name: "MIT Admission's Blog",
      href: "https://mitadmissions.org/blogs/author/apnewman/"
    },
    {
      name: "Amazon author page",
      href:
        "https://www.amazon.com/Anelise-Newman/e/B008L3IUCS%3Fref=dbs_a_mng_rwt_scns_share"
    },
    { name: "Sewing blog", href: "http://anelisemadeit.blogspot.com/" }
  ];
  return (
    <div className="vertical-center">
      <div>
        <CircularImage src={louie} className="personal-pic-container louie" />
        <p>
          I'm a native of Los Angeles, but I've spent the better part of the
          last four years in Boston, studying Computer Science at MIT. I have
          two younger brothers and an adorable dog named Louie.
        </p>
        <CircularImage
          src={brassrat}
          className="personal-pic-container brassrat"
        />
        <p>
          When I'm not doing research, you can find me sewing (usually something
          multicolored and flamboyant), practicing languages (I speak Spanish
          and French), writing (mostly blogging nowadays), or goofing off with
          my friends.
        </p>
        <SimpleLinkList links={links} />
      </div>
    </div>
  );
}

export default HomePage;
