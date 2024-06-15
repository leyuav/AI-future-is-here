import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./imports.js";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google brand logo" />
      </div>
      <div>
        <img src={slack} alt="slack brand logo" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian brand logo" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox brand logo" />
      </div>
      <div>
        <img src={shopify} alt="shopify brand logo" />
      </div>
    </div>
  );
};

export default Brand;
