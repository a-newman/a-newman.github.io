import React from "react";
import brassrat from "../images/brass_rat.jpg";
import louie from "../images/louie.jpg";
import CircularImage from "./CircularImage.js";
import "./Personal.css";
import SimpleLinkList from "./SimpleLinkList.js";


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
    { name: "Sewing blog", href: "https://anniemakestechstyles.com/" }
  ];
  return (
    <div className="vertical-center">
      <div>
        <CircularImage src={louie} className="personal-pic-container louie" />
        <p>
          I'm from Los Angeles, but I'm currently living in the San Francisco Bay Area.
          I did my undergrad and Master's in Boston, studying Computer Science
          at MIT. I have two younger brothers and an adorable dog named Louie.
        </p>
        <CircularImage
          src={brassrat}
          className="personal-pic-container brassrat"
        />
        <p>
          In my free time, you can find me sewing (usually something
          multicolored and flamboyant), hiking, climbing, gardening, practicing 
          languages, or goofing off with my friends.
        </p>
        <SimpleLinkList links={links} />
      </div>
    </div>
  );
}

export default HomePage;
