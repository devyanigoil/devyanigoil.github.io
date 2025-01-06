import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaPencilAlt } from "react-icons/fa";
import './POR.css';

const WorkExperiencePage = () => {
  const experiences = [
    {
      title: "Co-President",
      subtitle: "The Showstoppers Dance Crew, MIT Manipal",
      duration: "Jul 2021 - May 2022",
      description: [
        "Led a team of 200 dancers, fostering a sense of teamwork and excellence.",
        "Organized multiple workshops with renowned dancers, honing my organizational skills.",
        "Learnt the importance of collaboration with professionals to enhance the team's skills and broaden their exposure.",
        "Motivated the team to excel in multiple inter-college competitions, promoting a culture of discipline, perseverance, and mutual support, which resulted in outstanding performances and accolades. ",
        "My tenure as Co-President helped me to develop leadership qualities and taught me to be open to ideas and suggestions to encourage active participation"
    ],
      icon: <FaPencilAlt />,
      iconBg: "#f1c40f",
    },
    {
      title: "Solar Mobil Student Project",
      subtitle: "MIT, Manipal",
      duration: "Sep 2020 - Aug 2021",
      description: [
        "Actively worked with a team of 4 to design and implement object detection algorithm, effectively communicating and solving problems to make the solar powered car autonomous.",
        "Conducted in-depth research on various object detection models, prepared a report, and selected the most suitable for the project based on performance and accuracy metrics.",
        "Leveraged YOLO v3 for object detection, quickly adapting to new tools and challenges to achieve the project's goals. "
    ],
      icon: <FaPencilAlt />,
      iconBg: "#9b59b6",
    },
    {
      title: "Organiser for Social Media and Graphics",
      subtitle: "Tech Tatva'20, MIT Manipal",
      duration: "Sep 2020 - Oct 2020",
      description: [
        "Coordinated with a team of 30 volunteers to ensure seamless content creation and timely posting.",
        "Adapted to the challenges of organizing a technical fest during the pandemic, leveraging creative problem-solving to maintain engagement and boost the event's online presence.",
        "Balanced multiple priorities, while ensuring high-quality content delivery, which strengthened my ability to manage time efficiently.",
    ],
      icon: <FaPencilAlt />,
      iconBg: "#247625",
    },
  ];

  return (
    <div className="por">
      <h1>POSITIONS OF RESPONSIBILITY</h1>
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
