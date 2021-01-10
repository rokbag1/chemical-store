import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import roundTo from "round-to";
import Atom from "../helpers/atom/atom";
import Experiments from "./experiments";
import { chElement } from "./main-table";

interface Props {
  chItem: String | null;
}

const api = axios.create({
  headers: { "Access-Control-Allow-Origin": "*" },
  baseURL: "http://localhost:3000/get-element",
});

export const ElementDescription = (props: Props): JSX.Element => {
  const [chElement, setElement] = useState<chElement>();
  const addAtoms = (atomsCount: number) => {
    let atomsContainer: Array<JSX.Element> = [];
    for (let i = 0; i < atomsCount; i++) {
      let atoms: Array<JSX.Element> = [];
      atoms.push(<div key={i} className="atom"></div>);
      atomsContainer.push(
        <div key={i} className="atom-container">
          {atoms}
        </div>
      );
    }

    return atomsContainer;
  };

  useEffect(() => {
    api.get(`/${props.chItem}`).then((res) => {
      const element = res.data;
      setElement(element);
    });
  }, [props.chItem]);

  const infoArray = [
    `Name: ${chElement?.name}`,
    `Atom number: ${chElement?.id}`,
    `Atom number: ${chElement?.atomic_mass}`,
    `Named by: ${chElement?.name}`,
    `Founded by: ${chElement?.discovered_by}`,
    `About element: ${chElement?.summary}`,
    `Melt at: ${chElement?.melt}°C`,
  ];

  const cat = chElement?.category;

  return (
    <div className="content-block background-black">
      <div className="content-block-title">
        <span>#2</span>Element overview
      </div>
      <div className="selected-element-container">
        <div className="selected-element-atom">
          <div
            className={`selected-element ${
              chElement == null ? "empty-element" : chElement.category
            }`}
          >
            <div className="top">
              {chElement == null ? (
                <div></div>
              ) : (
                <div className="id">{chElement.id}</div>
              )}
              {chElement == null ? (
                <div></div>
              ) : (
                <div className="mass">
                  {roundTo.up(parseFloat(chElement.atomic_mass), 3)}
                </div>
              )}
            </div>
            <div className="middle">
              {chElement == null ? <div></div> : <div>{chElement.symbol}</div>}
            </div>
            <div className="bottom">
              {chElement == null ? <div></div> : <div>{chElement.name}</div>}
            </div>
            {chElement == null ? (
              <div></div>
            ) : (
              <div className="atoms-container">
                <div className="atoms-space">
                  {chElement.shell?.map((orbit: number) => (
                    <div
                      className={`orbit ${
                        chElement == null ? "empty-element" : chElement.category
                      }`}
                    >
                      {addAtoms(orbit)}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {chElement != null ? (
          <div className="about-element">
            {infoArray.map((el, key) => (
              <div className="element-description">
                <div className="li-atom-container"><Atom /></div>
                <div className={`atom-text ${cat}`}>
                  <div>{el}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {chElement && cat ?<Experiments chSymbol={chElement?.symbol} category={cat} /> :''}
      </div>
    </div>
  );
};
export default ElementDescription;
