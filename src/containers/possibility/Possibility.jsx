import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt4__possibility section__padding" id="possibility">
      <div className="gpt4__possibility-image">
        <img src={possibilityImage} alt="picture of a woman wearing VR headset" />
      </div>
      <div className="gpt4__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus odio laborum
          deleniti voluptatem quia earum accusamus. Quisquam assumenda totam nisi cumque iusto fugit
          soluta aut, necessitatibus tenetur ad.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
