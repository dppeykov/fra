import React from "react";

import "./GreetingText.css";

const GreetingText = () => {
  return (
    <div className="center ma4 w-70">
      <div className="flex justify-center typewriter">
        <p>This face recognition app will detect the faces in your pictures!</p>
        <br />
        <p>Give it a try!</p>
      </div>
    </div>
  );
};

export default GreetingText;
