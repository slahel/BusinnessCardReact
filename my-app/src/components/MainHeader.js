import React from "react";
import icon from "./images/Icon.png";

export default function MainHeader() {
  return (
    <div className="MainHeader">
      <h1>Stephanie Lahellec</h1>
      <h2 className="job-title">Front-End Developer</h2>
      <a
        href="https://slahel.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="website">slahel.github.io/</h3>
      </a>
      <a
        href="mailto:steph.lahellec@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <img src={icon} /> Email
        </button>
      </a>
    </div>
  );
}
