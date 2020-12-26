import React, { useState, useEffect } from "react";
import axios from "axios";
import roundTo from "round-to";
import { Links } from "../main-page/menu";

const api = axios.create({
  headers: { "Access-Control-Allow-Origin": "*" },
  baseURL: "http://localhost:3000/get-all-elements",
});
interface Props {
  setItem : React.Dispatch<React.SetStateAction<string>>;
}
export interface chElement {
  id: string;
  name: string;
  atomic_mass: string;
  symbol: string;
  summary: string;
  category?: string;
  named_by?: string;
  discovered_by?: string;
  melt?: string;
  row?: string;
  column?: string;
  shell?: Array<number>;
}

function activateGroup(
  element: string,
  group: string,
  setGroup: React.Dispatch<React.SetStateAction<string>>
) {
  if (element === group) {
    setGroup("");
  } else {
    setGroup(element);
  }
}

export const MendeleevTable = (props: Props): JSX.Element => {
  const [chemicalElements, setElement] = useState([]);
  useEffect(() => {
    api.get("/").then((res) => {
      const elements = res.data;
      setElement(elements);
    });
  }, []);

  const [group, setGroup] = useState("");

  const mendeleevOptions: Record<string, string> = {
    "non-metal": "Non Metals",
    "alkaline-earth-metal": "Alkaline Earth Metals",
    "alkali-metal": "Alkali Metals",
    "post-transition-metal": "Post Transition Metals",
    metalloid: "Metalloids",
    "noble-gas": "Noble Gas",
    "transition-metal": "Transition Metals",
    unknown: "Unknowns",
    lanthanide: "Lanthanoids",
    actinide: "Aktinoids",
  };

  return (
    <div className="content-block background-black">
      <div className="content-block-title">
        <span>#1</span>Pick element
      </div>
      <div className="mendeleev-table">
        <div className="mendeleev-options">
          {Object.keys(mendeleevOptions).map((el, keyIndex) => (
            <div
              onClick={() => activateGroup(el, group, setGroup)}
              className={`chemical-option ${el} border-none`}
            >
              {mendeleevOptions[el]}
            </div>
          ))}
        </div>
        {chemicalElements != null
          ? chemicalElements.map((element: chElement, key) => (
              <div
                key={element.id}
                onClick={() => props.setItem(element.id)}
                className={`chemical-element ${element.category} ${
                  element.row
                } ${element.column} ${
                  element.category !== group && group !== ""
                    ? "element-disabled"
                    : ""
                }`}
              >
                <div className="top">
                  <div>{element.id}</div>
                  <div>{roundTo.up(parseFloat(element.atomic_mass), 3)}</div>
                </div>
                <div className="middle">
                  <div>{element.symbol}</div>
                </div>
                <div className="bottom">
                  <div>{element.name}</div>
                </div>
              </div>
            ))
          : null}
        <div className="r6 c3 chemical-numbers">
          <div className="middle">
            <div>57-71</div>
          </div>
        </div>
        <div className="r7 c3 chemical-numbers">
          <div className="middle">
            <div>89-103</div>
          </div>
        </div>
        <div className="r8 c3 gap"></div>
      </div>
    </div>
  );
};
