import React from "react";
import Astronaut from "../../styles/images/menu-images/astronaut.svg";
import Heart from "../../styles/images/menu-images/heart.svg";

function Body() {
  return (
    <div className="body">
      <div className="explore-button">
        <div className="text">Explore IT</div>
        <img alt="" src={Astronaut} />
      </div>
      <div className="attractive-button">
        <div className="text">Find it Attractive</div>
        <img alt="" src={Heart} />
      </div>
    </div>
  );
}

export default Body;
