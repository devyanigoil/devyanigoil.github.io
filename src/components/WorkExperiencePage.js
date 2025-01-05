import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

const WorkExperiencePage = () => {
  const experiences = [
    {
      title: "Software Engineer",
      subtitle: "Akamai Technologies",
      duration: "Aug 2023 - Aug 2024",
      description: "Developed and optimized the CloudPulse gateway using OpenTelemetry, Kubernetes, and Flask, enhancing data collection, secure communication (mTLS), and system resilience. Conducted load testing, integrated logging with Loki, and delivered MVP demos showcasing performance and reliability to executives.",
      icon: <FaBriefcase />,
      iconBg: "#6a1b9a",
    },
    {
      title: "Software Development Intern",
      subtitle: "Tech Innovators Inc.",
      duration: "June 2023 - August 2023",
      description: "Developed RESTful APIs and integrated CI/CD pipelines for deployment.",
      icon: <FaBriefcase />,
      iconBg: "#0277bd",
    },
    {
      title: "Full Stack Developer Intern",
      subtitle: "Startup Solutions",
      duration: "Jan 2023 - May 2023",
      description: "Built user-friendly React interfaces and optimized backend systems.",
      icon: <FaBriefcase />,
      iconBg: "#ef6c00",
    },
  ];

  return (
    <div style={{ background: "#f9f9f9", padding: "40px 20px", minHeight: "100vh" }}>
      <h1 style={{ color: "#2c3e50", marginBottom: "30px" }}>Work Experience</h1>
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.duration}
            iconStyle={{ background: exp.iconBg, color: "#fff" }}
            icon={exp.icon}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperiencePage;
