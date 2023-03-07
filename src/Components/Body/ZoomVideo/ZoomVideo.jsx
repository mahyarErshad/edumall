import React from "react";
import image from "../../../assets/images/zoom-meeting-image.png";
import logo from "../../../assets/images/zoom-meeting-logo.png";

function ZoomVideo() {
  return (
    <section className="px-4 w-full pt-40 pb-24 bg-white flex flex-wrap">
      <div className="max-md:w-full md:w-2/4 flex-center relative">
        <div className="absolute top-0 left-0 flex-center -translate-y-[75%]">
          <img src={logo} alt="Logo" />
        </div>
        <img src={image} alt="Zoom meet video" />
      </div>
      <div className="max-md:w-full md:w-2/4"></div>
    </section>
  );
}

export default ZoomVideo;
