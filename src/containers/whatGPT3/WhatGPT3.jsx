import React from "react";
import { Feature } from "../../components";
import "./whatgpt3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum. Placerat duis ultricies lacus sed turpis tincidunt id. Enim diam vulputate ut pharetra sit. Auctor eu augue ut lectus arcu"
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
      />
      <Feature
        title="Knowledgebase"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Feature
        title="Education"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum. Placerat duis ultricies lacus sed turpis tincidunt id. Enim diam vulputate ut pharetra sit. Auctor"
      />
    </div>
  </div>
);

export default WhatGPT3;
