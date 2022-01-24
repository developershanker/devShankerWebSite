import React from "react";
import ProfilePic from "../images/foresta.jpg";
import Type from "./Type";

function Home() {
  return (
    <div className="homeContainer">
      <div className="nameContainer">

	  <text className="textStyleBig">Hi There! 👋🏻</text>
        <text className="textStyleBig">I'M BHAWANA SHANKER</text>
		<div className="textStyleBig">
                <Type />
              </div>
      </div>
      <div className="imageContainer">
        <img src={ProfilePic} alt="profile pic" className="imageView" />
      </div>
    </div>
  );
}

export default Home;
