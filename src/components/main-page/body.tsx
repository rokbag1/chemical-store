import React, { useRef, useEffect } from "react";
import Astronaut from "../../styles/images/menu-images/astronaut.svg";
import Heart from "../../styles/images/menu-images/heart.svg";
import AboutMyself from "./about-myself";
import { Links } from "./menu";
import { link } from "fs";
import { MendeleevTable } from "../mendeleev-table/main-table";

interface Props {
  link: Links;
  setToInitial: () => void;
}

function scrolltoMenu(link: Links, ref: HTMLDivElement | null): void {
  if (ref == null) {
    return;
  }

  ref.scrollIntoView({ behavior: "smooth" });
}

function Body(props: Props) {
  const aboutMyselfRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (props.link === Links.Initial) {
      return;
    }
    scrolltoMenu(props.link, aboutMyselfRef.current);
    props.setToInitial();
  }, [props.link]);

  return (
    <div>
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
      <div ref={aboutMyselfRef}>
        <AboutMyself />
      </div>
      <div ref={aboutMyselfRef}>
        <MendeleevTable />
      </div>
    </div>
  );
}

export default Body;
