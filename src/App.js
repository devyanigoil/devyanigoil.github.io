import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import './App.css';
import AboutPage from './components/AboutPage';
import InterestsPage from './components/InterestsPage';
import SkillsPage from './components/SkillsPage';
import EducationPage from './components/EducationPage';
import WorkExperiencePage from './components/WorkExperiencePage';
import POR from './components/POR';
import Certifications from './components/Certifications';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import BgAnimation from './components/BgAnimation';
import React, { useState, useEffect } from "react";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768);
  };

  useEffect(() => {
    updateScreenSize();

    // Add event listener to handle screen resize
    window.addEventListener("resize", updateScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  
  return (
      <div className="App">
        {!isSmallScreen  && (
          <div className="bg-animation"> 
            <BgAnimation />
          </div>
        )}
        <Sidebar />
        <div className="content">
          <div id="home" className="section">
            {isSmallScreen  && (
              <div className="bg-animation"> 
                <BgAnimation />
              </div>
            )}
            <HomePage />
          </div>
          <div id="about" className="section">
            <AboutPage />
          </div>
          <div id="interests" className="section">
            <InterestsPage />
          </div>
          <div id="skills" className="section">
            <SkillsPage />
          </div>
          <div id="education" className="section">
            <EducationPage />
          </div>
          <div id="experience" className="section-left">
            <WorkExperiencePage />
          </div>
          <div id="por" className="section-left">
            <POR />
          </div>
          <div id="certifications" className="section">
            <Certifications />
          </div>
          <div id="projects" className="section">
            <ProjectsPage />
          </div>
          <div id="contact" className="section-left">
            <ContactPage />
          </div>
        </div>
    </div>
  );
}

export default App;
