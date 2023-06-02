import React from "react";
import "./feature.css";
type FeatureType = {
  title: string;
  text: string;
};

const Feature = ({ title, text }: FeatureType) => (
  <div className="feature-container">
    <div className="title-container">
      <div />
      <h2>{title}</h2>
    </div>
    <div className="paragraph-container">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
