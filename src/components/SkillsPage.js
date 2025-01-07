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
        category: ["Containerization and Web Technologies:"], 
        items: ["Docker, Kubernetes, React"]
    },
    {
        category: ["DevOps and CI/CD Tools:"], 
        items: ["Gitlab, Jenkins, Git, AWS, Linode, Grafana, Prometheus, Loki"]
    },
    {
        category: ["Frameworks and Application Architecture:"], 
        items: ["Flask, SpringBoot, Rest APIs, mTLS"]
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
