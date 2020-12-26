import React from "react";
import Flask from "../../styles/images/menu-images/flask.svg";
import Friend from "../../styles/images/menu-images/friend.svg";
import Hero from "../../styles/images/menu-images/hero.svg";
import Research from "../../styles/images/menu-images/research.svg";
import Scientist from "../../styles/images/menu-images/scientist.svg";
import Search from "../../styles/images/menu-images/search.svg";
import { Link, NavLink } from "react-router-dom";

export enum Links {
  Flask = "FLASK",
  Friend = "FRIEND",
  Research = "RESEARCH",
  Scientist = "SCIENTIST",
  Search = "SEARCH",
  AboutMyself = "ABOUT_MYSELF",
  Initial = "INITIAL"  
}

interface Props {
  onMenuClick: (link : Links) => void;
}

function Menu(props: Props) {
  return (
    <div className="menu-container">
      <div className="menu">
        <div className="menu-items">
          <img onClick={ () => props.onMenuClick(Links.Flask)} src={Flask} alt="flask" />
          <img onClick={ () => props.onMenuClick(Links.Research)} src={Research} alt="research" />
          <img onClick={ () => props.onMenuClick(Links.Scientist)} src={Scientist} alt="scientist" />
          <img onClick={ () => props.onMenuClick(Links.Search)} src={Search} alt="search" />
          <img onClick={ () => props.onMenuClick(Links.AboutMyself)} src={Hero} alt="hero" />
          <img onClick={ () => props.onMenuClick(Links.Friend)} src={Friend} alt="friend" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
