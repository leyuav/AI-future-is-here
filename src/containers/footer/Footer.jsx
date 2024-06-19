import React from 'react';
import gpt4logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt4__footer section__padding">
      <div className="gpt4__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="gpt4__footer-button">
        <p>Request Early Access</p>
      </div>
      <div className="gpt4__footer-links">
        <div className="gpt4__footer-links_logo">
          <img src={gpt4logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Links</h4>
          <p>What is GPT?</p>
          <p>Open AI</p>
          <p>Case Studies</p>
          <p>Library</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="gpt4__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt4__footer-copyright">
        <p>© 2024 GPT-4o. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
