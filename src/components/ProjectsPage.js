import React, { useState } from "react";
import { FaSync } from "react-icons/fa";
import './ProjectsPage.css';

const ProjectsPage = () => {
    const project1 = `${process.env.PUBLIC_URL}/UMateLogo.jpeg`;
    const project2 = `${process.env.PUBLIC_URL}/TravelPlannerLogo.jpeg`;
    // const project3 = `${process.env.PUBLIC_URL}/WeatherApp.png`;
    const project3 = `${process.env.PUBLIC_URL}/EcoScore.jpeg`;
    const project4 = `${process.env.PUBLIC_URL}/TCPServer.png`;
    const project5 = `${process.env.PUBLIC_URL}/ObjectDetection.png`;
    const project6 = `${process.env.PUBLIC_URL}/PacketSniffer.jpg`;

  const projects = [
    {
      title: "UMate - Bumble for Roommates",
      description: "An app designed as part of HackUMass Hackathon to simplify the process of finding compatible roommates within UMass by utilizing React, Flask, and MongoDB. By using a recommendation model, UMate suggests the top matches based on compatibility factors like the duration of stay, lifestyle, budget, and more.",
      img: project1,
      link: "https://github.com/devyanigoil/UMate",
      background: "cover",
    },
    {
      title: "Travel Planner",
      description: "This is an AI-powered platform designed to enhance and simplify the travel planning experience. By leveraging the capabilities of Llama-3.2-3B-Instruct, the application curates personalized itineraries, suggests destinations based on user moods, provides a comprehensive packing checklist, and more.",
      img: project2,
      link: "https://github.com/devyanigoil/travel-planner",
      background: "auto",
    },
    {
      title: "Eco Score",
      description: "A mobile app that tracks carbon footprint across multiple lifestyle categories like shopping list, transportation, energy consuption and converts all actions into a universal score redeemable for real cashback, discounts, and rewards at participating stores.",
      img: project3,
      link: "https://github.com/devyanigoil/EcoScore",
      background: "auto",
    },
    // {
    //   title: "Weather App",
    //   description: "A web app built with HTML, CSS, and Node.js that provides real-time weather information for any location using the open source APIs from openweathermap.",
    //   img: project3,
    //   link: "https://github.com/devyanigoil/WeatherApp",
    //   background: "auto",
    // },
    {
      title: "Concurrent TCP Server",
      description: "Instrumented multithreading with mutex lock in C to handle each TCP client connection to achieve a concurrent server. Incorporated CRUD (create, read, update, delete) functionality.",
      img: project4,
      link: "https://github.com/devyanigoil/Concurrent-TCP-Server",
      background: "cover",
    },
    {
      title: "Object Detection Model",
      description: "Implemented in Python and Google colab, the model used YOLO v3 algorithm to identify orange road cones as part of the Solar Mobil student project.",
      img: project5,
      link: "https://github.com/devyanigoil/ObjectDetectionModel",
      background: "cover",
    },
    {
      title: "Packet Sniffer",
      description: "The program allows to monitor traffic through the local network. We can view the source of the packets, target host, and type of protocol used and hence it becomes possible to filter data from TCP, UDP and ICMP packets.",
      img: project6,
      link: "https://github.com/devyanigoil/packet-sniffer",
      background: "cover",
    },
  ];

  const [activeCard, setActiveCard] = useState(null);

  const handleCardToggle = (index) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <div className="projects-section">
      <h1>PROJECTS</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div 
          key={index} 
          className={`project-card ${activeCard === index ? "active" : ""}`} 
          style={{ backgroundImage: `url(${project.img})` , backgroundSize: project.background}} 
          onTouchStart={() => handleCardToggle(index)}
          onClick={() => handleCardToggle(index)} 
          >
            <div className={`overlay ${activeCard === index ? "visible" : ""}`}>
              <h2>{project.title}</h2>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
              <p>PROJECT CODE</p> </a>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="load-more">
        <a href="https://github.com/devyanigoil" target="_blank" rel="noopener noreferrer">
        <button className="load-more-btn">
          <FaSync className="refresh-icon" /> LOAD MORE
        </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectsPage;
