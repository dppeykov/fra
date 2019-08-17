import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center pa4 br-pill shadow-5 form">
        <input
          className="f5 pa2 w-80 center br-pill br--left"
          type="text"
          placeholder="Enter URL here..."
        />
        <button className="w-20 grow f5 link ph3 pv2 dib white bg-blue pointer br-pill br--right">
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
