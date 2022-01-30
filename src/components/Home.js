import React, { useState } from "react";
import ProfilePic from "../images/laptop.png";
import ProfilePicFor from "../images/foresta.jpg";
import Type from "./Type";
import Lottie from "react-lottie";
import * as animationData from "../standDeveloper.json";

function Home() {
  const [sourceDisplayPic, setsourceDisplayPic] = useState(ProfilePic);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="slider-thumb">
        <div className="twinkling">
            <div className="nameContainer">
              <text className="textStyleBig">
                Hi There! <span class="wave">👋🏻</span>
              </text>
              <text className="textStyleBig">Bhawana Shanker</text>
              <div className="textStyleBig">
                <Type />
              </div>
            </div>
            <div className="imageContainer">
              <Lottie options={defaultOptions} height={600} width={600} />
            </div>
          </div>
    </div>
  );
}

export default Home;
