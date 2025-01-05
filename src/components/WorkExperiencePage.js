import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import './WorkExperiencePage.css';

const WorkExperiencePage = () => {
  const experiences = [
    {
      title: "Software Engineer",
      subtitle: "Akamai Technologies",
      duration: "Aug 2023 - Aug 2024",
      description: "Designed the gateway component of CloudPulse, Akamai’s comprehensive cloud monitoring solution for Linode environments and customer applications, aimed at improving application performance, availability, and throughput. Deployed crucial features like data persistence and mTLS, enhancing data collection and system resilience. Conducted load testing, integrated logging with Loki, and delivered MVP demos showcasing performance and reliability to executives.",
      icon: <FaBriefcase />,
      iconBg: "#6a1b9a",
    },
    {
      title: "Spring Intern",
      subtitle: "Akamai technologies",
      duration: "Jan 2023 - Jul 2023",
      description: "Conceptualized an end-to-end telemetry systems with OpenTelemetry and Grafana on Linode Kubernetes clusters, visualizing logs in Grafana from VictoriaMetrics, automated testing, and collaborated on CI/CD pipelines using Jenkins and GitLab.",
      icon: <FaBriefcase />,
      iconBg: "#0277bd",
    },
    {
      title: "Summer Intern",
      subtitle: "Akamai Technologies",
      duration: "Jun 2022 - Jul 2022",
      description: "Enhanced the CloudUsage app’s performance by 70% for generating Azure billing logs by implementing multithreading in Python. Optimized query execution, and reduced processing time from 510 to 160 seconds for 600 storage accounts, ensuring efficient deployment.",
      icon: <FaBriefcase />,
      iconBg: "#ef6c00",
    },
  ];

  return (
    <div className="work-experience">
      <h1>WORK EXPERIENCE</h1>
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
