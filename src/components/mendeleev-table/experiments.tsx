import axios from "axios";
import React, { useEffect, useState } from "react";
import PlayButton from "../../styles/images/site-images/video-player.svg";

interface Props {
  chSymbol: string;
  category: string;
}

const api = axios.create({
  headers: { "Access-Control-Allow-Origin": "*" },
  baseURL: "http://localhost:3000/ex/all-experiments",
});

export interface Experiment {
  title: string;
  elements: Array<String>;
  video: string;
  products: Array<Product>;
  level: number;
  uploadedBy: string;
}

export interface Product {
  name: string;
  formula: string;
}

export const Experiments = (props: Props): JSX.Element => {
  const [experiment, setElement] = useState<Array<Experiment>>();

  useEffect(() => {
    api.get(`/${props.chSymbol}`).then((res) => {
      const element = res.data;
      setElement(element);
    });
  }, [props.chSymbol]);

  return (
    <div className="experiments">
      {experiment
        ? experiment.map((val: Experiment, index: number) => (
            <div className={`experiment ${props.category}`}>
              <div className={`experiment-title ${props.category}`}>
                {val.title}
              </div>
              <div className={`experiment-container`}>
                <div className=""></div>
                <iframe
                  className="experiment-video"
                  src={val.video}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />
                <div className="description">
                  <div className="text">
                    {val.uploadedBy ? (
                      <div className="uploaded-by">
                        Grateful for experiment: {val.uploadedBy}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className={`level ${
                      val.level < 4
                        ? "easy"
                        : val.level > 4 && val.level < 7
                        ? "medium"
                        : "hard"
                    }`}
                  >
                    Level: {val.level}
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};
export default Experiments;
