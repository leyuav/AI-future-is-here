import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving human distrusts instantly',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim esse numquam nemo pariatur iure, quis quae molestiae. Possimus, aspernatur voluptas.',
  },
  {
    title: 'Become the active user',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim esse numquam nemo pariatur iure, quis quae molestiae. Possimus, aspernatur voluptas.',
  },
  {
    title: 'Message all the time',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim esse numquam nemo pariatur iure, quis quae molestiae. Possimus, aspernatur voluptas.',
  },
  {
    title: 'Really not against the law',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim esse numquam nemo pariatur iure, quis quae molestiae. Possimus, aspernatur voluptas.',
  },
];

const Features = () => {
  return (
    <div className="gpt4__features section__padding" id="features">
      <div className="gpt4__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it
          Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt4__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default Features;
