import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const imageURL = `${process.env.PUBLIC_URL}/profilePhoto.jpg`;
    return (
      <div className="sidebar">
        <div className="profile">
          <img
            src = {imageURL}
            alt="DEVYANI GOIL"
            className="profile-photo"
          />
          <h1>Devyani Goil</h1>
          <p className="designation">SOFTWARE DEVELOPER</p>
        </div>
        <nav className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#interests">INTERESTS</a>
          <a href="#skills">SKILLS</a>
          <a href="#education">EDUCATION</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#por">POSITIONS OF RESPONSIBILITY</a>
          <a href="#certifications">CERTIFICATIONS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <div className="social-icons">
          <a href="https://github.com/devyanigoil/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            {/* <img src="/github-logo.png" alt="GitHub" /> */}
          </a>
          <a href="https://www.linkedin.com/in/devyanigoil/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            {/* <img src="/linkedin-logo.png" alt="LinkedIn" /> */}
          </a>
        </div>
      </div>
    );
  };
  
  export default Sidebar;