import React from 'react';
import { Feature } from '../../components';
import './whatgpt4.css';

const WhatGPT4 = () => (
  <div className="gpt4__whatgpt4 section__margin" id="wgpt4">
    <div className="gpt4__whatgpt4-feature">
      <Feature
        title="What is GPT-4o"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper risus in hendrerit gravida rutrum. Placerat duis ultricies lacus sed turpis tincidunt id. Enim diam vulputate ut pharetra sit. Auctor eu augue ut lectus arcu"
      />
    </div>
    <div className="gpt4__whatgpt4-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
    </div>
    <div className="gpt4__whatgpt4-container">
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

export default WhatGPT4;
