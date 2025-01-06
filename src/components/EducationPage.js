import React, { useState } from "react";
import "./EducationPage.css";

const EducationPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section); // Toggle between sections
  };

  return (
    <div className="education-page">
      <h1>EDUCATION</h1>

      {/* First Section: Masters */}
      <div className="education-section">
        <button onClick={() => toggleSection("masters")} className="education-btn">
          <span>Masters (2024 - 2026)</span>
          <span className="toggle-symbol">{activeSection === "masters" ? "-" : "+"}</span>
        </button>
        {activeSection === "masters" && (
          <div className="education-details">
            <p>Masters in Computer Science</p>
            <p>University of Massachusetts, Amherst </p>
            <p>GPA: 3.77/4</p>
          </div>
        )}
      </div>

      {/* Second Section: Undergrad */}
      <div className="education-section">
        <button onClick={() => toggleSection("undergrad")} className="education-btn">
          <span>Bachelor of Technology (2019 - 2023)</span>
          <span className="toggle-symbol">{activeSection === "undergrad" ? "-" : "+"}</span>
        </button>
        {activeSection === "undergrad" && (
          <div className="education-details">
            <p>Bachelor of Technology in Computer Science and Engineering</p>
            <p>Manipal Institute of Technology</p>
            <p>GPA: 9.25/10</p>
          </div>
        )}
      </div>

      {/* Third Section: Senior Secondary */}
      <div className="education-section">
        <button onClick={() => toggleSection("seniorSecondary")} className="education-btn">
          <span>XII Senior Secondary (2017 - 2019)</span>
          <span className="toggle-symbol">{activeSection === "seniorSecondary" ? "-" : "+"}</span>
        </button>
        {activeSection === "seniorSecondary" && (
          <div className="education-details">
            <p>XII (Senior Secondary)</p>
            <p>Delhi Public School Ghaziabad</p>
            <p>Score: 98%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationPage;
