import React from "react";
import "./SkillsPage.css";

const SkillsPage = () => {
  const skills = [
    {
        category: ["Programming Language and Operating Systems:"], 
        items: ["Python, C++, C, Java, HTML/CSS, Linux, Windows, Unix"]
    },
    {
        category: ["Database and Time Series Database:"], 
        items: ["SQL, Victoria Metrics, MongoDB"]
    },
    {
        category: ["DevOps and CI/CD Tools:"], 
        items: ["Kubernetes, Docker, Grafana, Gitlab, Linode, Jenkins, Git, Loki, AWS, Prometheus"]
    },
    {
        category: ["Technologies:"], 
        items: ["Flask, mTLS, REST APIs, React, SpringBoot"]
    }
];

  return (
    <div className="skills-page">
      <h1>SKILLS</h1>
      <ul className="skills-list">
      {skills.map((category, items) => (
        <li className="category-elements"><strong>{category.category}</strong> {category.items}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPage;
