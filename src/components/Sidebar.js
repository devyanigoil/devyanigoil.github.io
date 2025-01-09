import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
    else
      setIsOpen(true);
  }, []);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const imageURL = `${process.env.PUBLIC_URL}/profilePhoto.jpg`;

  return (
    <>
      {/* Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar} style={{ display: window.innerWidth >= 768 ? "none" : "block"}}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="profile">
          <img src={imageURL} alt="DEVYANI GOIL" className="profile-photo" />
          <h1>Devyani Goil</h1>
          <p className="designation">SOFTWARE DEVELOPER</p>
        </div>
        <nav className="nav-links">
          <a href="#home" onClick={closeSidebar}>HOME</a>
          <a href="#about" onClick={closeSidebar}>ABOUT</a>
          <a href="#interests" onClick={closeSidebar}>INTERESTS</a>
          <a href="#skills" onClick={closeSidebar}>SKILLS</a>
          <a href="#education" onClick={closeSidebar}>EDUCATION</a>
          <a href="#experience" onClick={closeSidebar}>EXPERIENCE</a>
          <a href="#por" onClick={closeSidebar}>POSITIONS OF RESPONSIBILITY</a>
          <a href="#certifications" onClick={closeSidebar}>CERTIFICATIONS</a>
          <a href="#projects" onClick={closeSidebar}>PROJECTS</a>
          <a href="#contact" onClick={closeSidebar}>CONTACT</a>
        </nav>
        <div className="social-icons">
          <a
            href="https://github.com/devyanigoil/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/devyanigoil/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
