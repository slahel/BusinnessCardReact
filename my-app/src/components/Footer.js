import React from "react";
import "./Footer.css";
import LinkedIn from "./images/LinkedinIcon.png";
import GitHub from "./images/GitHubIcon.png";
import Facebook from "./images/FacebookIcon.png";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://www.linkedin.com/in/stephanie-lahellec-a2893411a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedIn} />
      </a>
      <a
        href="https://github.com/slahel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHub} />
      </a>
      <a
        href="https://www.facebook.com/stephanie.lahellec"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Facebook} />
      </a>
    </div>
  );
}
