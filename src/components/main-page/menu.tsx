import React from "react";
import Flask from "../../styles/images/menu-images/flask.svg";
import Friend from "../../styles/images/menu-images/friend.svg";
import Hero from "../../styles/images/menu-images/hero.svg";
import Research from "../../styles/images/menu-images/research.svg";
import Scientist from "../../styles/images/menu-images/scientist.svg";
import Search from "../../styles/images/menu-images/search.svg";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div className="menu-container">
        <Link to="/mendeleev">
          <img src={Flask} alt="flask" />
        </Link>
        <img src={Friend} alt="friend" />
        <img src={Hero} alt="hero" />
        <img src={Research} alt="research" />
        <img src={Scientist} alt="scientist" />
        <img src={Search} alt="search" />
      </div>
    </div>
  );
}

export default Menu;
