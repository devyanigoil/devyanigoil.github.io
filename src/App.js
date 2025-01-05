import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import './App.css';
import AboutPage from './components/AboutPage';
import InterestsPage from './components/InterestsPage';
import SkillsPage from './components/SkillsPage';
import EducationPage from './components/EducationPage';
import WorkExperiencePage from './components/WorkExperiencePage';

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
        <div id="experience" className="section">
          <WorkExperiencePage />
        </div>
      </div>
    </div>
  );
}

export default App;
