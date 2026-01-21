import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import './WorkExperiencePage.css';

const WorkExperiencePage = () => {
  const experiences = [
    {
      title: "Software Engineer - Cloud Storage",
      subtitle: "Apple",
      duration: "Feb 2026 - Present",
      description: [
        "TBD"
    ],
      icon: <FaBriefcase />,
      iconBg: "#00563B",
    },
    {
      title: "Software Engineering  Intern",
      subtitle: "Apple",
      duration: "May 2025 - Aug 2025",
      description: [
        "Implemented distributed caching in Golang into the Bundle System, an object store for Simcloud - Apple’s internal batch compute platform that runs 1M+ concurrent jobs used by Hardware Technology teams for large scale chip testing.",
        "Reduced download latency by >40% and increased cache hit rate by 300%",
        "Achieved a 60% reduction in inbound bandwidth highlighting that more data is being served from distributed cache, significantly offloading backend threads.",
        "Deployed the solution to production using Rio pipelines, ensuring reliability at scale and improving cluster performance."
    ],
      icon: <FaBriefcase />,
      iconBg: "#F09090",
    },
    {
      title: "Software Engineer",
      subtitle: "Akamai Technologies",
      duration: "Aug 2023 - Aug 2024",
      description: [
        "Spearheaded the development of the gateway using OpenTelemetry and Kubernetes, a critical data collection service for CloudPulse, responsible for gathering performance data from customer applications and enabling flow to VictoriaMetrics.",
        "Deployed crucial features, including a persistent queue and mTLS on the gateway, to mitigate data loss during peak traffic or system outages and ensure secure communication, supporting up to 150 minutes of downtime without disruption.",
        "Created 2 APIs in Flask to retrieve data from the Linode database, enabling the UI to display real-time metrics.",
        "Performed extensive load testing on the gateway to evaluate ingestion throughput and persistence performance, identified bottlenecks, and optimized the system for high availability, supporting up to 140 connections per pod.",
        "Integrated a log aggregation system using Loki and Akamai's Monitoring of Monitoring (MoM) solution within the gateway by deploying 2 Kubernetes services and writing 10+ alert rules to track and mitigate downtime and failures.",
        "Delivered 2 MVP demos of CloudPulse to Akamai executives, highlighting product features, resilience, and performance."
    ],
      icon: <FaBriefcase />,
      iconBg: "#EA4335",
    },
    {
      title: "Spring Intern",
      subtitle: "Akamai Technologies",
      duration: "Jan 2023 - Jul 2023",
      description: [
        "Designed the gateway component of CloudPulse, Akamai's comprehensive cloud monitoring solution for Linode environments and customer applications, aimed at improving application performance, availability, and throughput.",
        "Conceptualized an end-to-end telemetry collection system using OpenTelemetry on Linode Kubernetes clusters, visualizing logs in Grafana from VictoriaMetrics with comprehensive automation testing using Robot Framework.",
        "Collaborated with multiple teams to implement CI/CD pipelines using tools like Jenkins and GitLab."
    ],
      icon: <FaBriefcase />,
      iconBg: "#346edb",
    },
    {
      title: "Summer Intern",
      subtitle: "Akamai Technologies",
      duration: "Jun 2022 - Jul 2022",
      description: [
        "Enhanced the CloudUsage app performance by 70%, an application used to generate billing logs for Microsoft Azure accounts.",
        "Developed a proof of concept by analyzing 4+ performance optimization techniques, conducting performance testing, and benchmarking query execution times across varying storage accounts based on thread count to improve application efficiency.",
        "Integrated multithreading in Python, enabling concurrent processing of Azure accounts using only 5 threads.",
        "Reduced processing time from 510 seconds to just 160 seconds for 600 storage accounts, successfully deploying the optimized code."
    ],
      icon: <FaBriefcase />,
      iconBg: "#f39c12",
    },
  ];

  return (
    <div className="work-experience">
      <h1>WORK EXPERIENCE</h1>
      <VerticalTimeline layout="1-column-left"> 
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            date={exp.duration}
            iconStyle={{ background: exp.iconBg, color: "#fff" }}
            icon={exp.icon}
            position="right"
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.subtitle}</h4>
            <ul>
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{color: "#f7f6f6" }}
          contentStyle={{ display: "none" }}
          position="right"
        />
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperiencePage;
