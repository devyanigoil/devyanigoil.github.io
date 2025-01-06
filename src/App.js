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

function App() {
  return (
      <div className="App">
      <Sidebar />
      <div className="content">
        <div id="home" className="section">
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
