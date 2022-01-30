import React from "react";
import Lottie from "react-lottie";
import * as animationData from '../loaderMoon.json'

function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div className="loaderContainer">
        <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}

export default Loader;