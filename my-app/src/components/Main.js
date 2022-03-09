import React from "react";
import "./Main.css";
import image from "./images/StephanieLahellec.png";
import Biography from "./Biography";
import MainHeader from "./MainHeader";

export default function Main() {
  return (
    <div className="Main">
      <img src={image} className="photo" width="100%" />
      <MainHeader />
      <Biography />
    </div>
  );
}
