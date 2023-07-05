import React from "react";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";

function Footer() {
  return (
    <div className="bg-primary text-white py-12 mt-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-5xl font-medium ">Graphino</h1>
        <ul className="flex items-center gap-10 text-lg">
          <li>Home</li>
          <li>Simulation</li>
          <li>Graph Manipulation</li>
        </ul>
        <div className="flex items-center gap-5 text-lg">
          <a href="">
            <img src={githubIcon} alt="" />
          </a>
          <a href="">
            <img src={linkedinIcon} alt="" />
          </a>
          <a href="">
            <img src={twitterIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
