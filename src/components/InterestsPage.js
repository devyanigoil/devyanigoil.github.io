import React from "react";
import "./InterestsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPuzzlePiece, faServer, faCode, faCogs, faCloud, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

const InterestsPage = () => {
  const interests = [
    {
      title: "Problem Solving",
      icon: faPuzzlePiece,
      iconClass: "icon-problem-solving",
      description: "Finding efficient solutions to challenging problems.",
    },
    {
        title: "Cloud Computing",
        icon: faCloud,
        iconClass: "icon-cloud",
        description: "Leveraging cloud services for flexibility and performance.",
    },
    {
      title: "Full Stack Development",
      icon: faCode,
      iconClass: "icon-full-stack",
      description: "Building user-friendly applications end-to-end.",
    },
    {
      title: "Scalable Software Development",
      icon: faCogs,
      iconClass: "icon-scalable",
      description: "Designing robust systems for growth and scalability.",
    },
    {
        title: "DevOps",
        icon: faServer,
        iconClass: "icon-devops",
        description: "Automating deployments and streamlining development.",
    },
    {
      title: "Painting",
      icon: faPaintBrush,
      iconClass: "icon-painting",
      description: "Finding balance through art and craft.",
    },
  ];

  return (
    <div className="interests-page">
      <h1>INTERESTS</h1>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <div className="interest-card" key={index}>
            <div className={`icon ${interest.iconClass}`}>
              <FontAwesomeIcon icon={interest.icon} />
            </div>
            <h2>{interest.title}</h2>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsPage;