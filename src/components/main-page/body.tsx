import React, { useRef, useEffect, useState } from "react";
import Astronaut from "../../styles/images/menu-images/astronaut.svg";
import Heart from "../../styles/images/menu-images/heart.svg";
import AboutMyself from "./about-myself";
import { Links } from "./menu";
import { link } from "fs";
import { MendeleevTable } from "../mendeleev-table/main-table";
import ElementDescription from "../mendeleev-table/element-description";

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
  const [item, setItem] = useState("");
  const [chElement, setChElement] = useState('');
  const MendeleevTableRef = useRef<HTMLDivElement>(null);
  const ElementDescriptionRefs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.link === Links.Initial) {
      return;
    }

    if( props.link === Links.Flask) {
      scrolltoMenu(props.link, MendeleevTableRef.current);
    }

    if( props.link === Links.Research) {
      scrolltoMenu(props.link, ElementDescriptionRefs.current);
    }
    
    props.setToInitial();
  }, [props.link]);

  useEffect(() => {
    scrolltoMenu(Links.Research, ElementDescriptionRefs.current);
  }, [item]);

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
      <div ref={MendeleevTableRef}>
        <MendeleevTable setItem={setItem}/>
      </div>
      <div ref={ElementDescriptionRefs}>
        <ElementDescription chItem={item}/>
      </div>
    </div>
  );
}

export default Body;
