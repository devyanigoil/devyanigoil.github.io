import React from "react";
import "./Certifications.css";
import { FaLink } from "react-icons/fa";

const SkillsPage = () => {
  const skills = [
    {
        category: ["Programming for Everybody (Getting Started with Python):"], 
        items: ["University of Michigan by Coursera (03/2020)"],
        link: "https://www.coursera.org/account/accomplishments/certificate/TAUGQGE39MTC",
    },
    {
        category: ["Python Data Structures:"], 
        items: ["University of Michigan by Coursera (04/2020)"],
        link: "https://www.coursera.org/account/accomplishments/certificate/EDS43LF78646",
    },
    {
        category: ["What is Data Science?:"], 
        items: ["University of Michigan by Coursera (04/2020)"],
        link: "https://www.coursera.org/account/accomplishments/certificate/JMXDNUL2S6ZC",
    },
    {
        category: ["Using Python to Acess Web Data:"], 
        items: ["University of Michigan by Coursera (05/2020)"],
        link: "https://www.coursera.org/account/accomplishments/certificate/K3TUJEZJDW33",
    },
    {
        category: ["Computer Vision - Image Basics with OpenCV and Python:"], 
        items: ["University of Michigan by Coursera (06/2020)"],
        link: "https://www.coursera.org/account/accomplishments/certificate/FNH3YQBRZN4A",
    },
    {
        category: ["Using Databases with Python:"], 
        items: ["University of Michigan by Coursera (07/2020)"],
        link: "https://www.coursera.org/account/accomplishments/certificate/J5S7QZUCTFAJ",
    },
    {
        category: ["Machine Learning Course:"], 
        items: ["Coding Ninjas (07/2021)"],
        link: "https://certificate.codingninjas.com/verify/ea59c136d461abee",
    },
    {
        category: ["Data Structures in C++:"], 
        items: ["Coding Ninjas (09/2021)"],
        link: "https://certificate.codingninjas.com/verify/26ac2421203589f8",
    }
];

  return (
    <div className="certificates-page">
      <h1>CERTIFICATIONS</h1>
      <ul className="certificates-list">
      {skills.map((category, items) => (
        <li className="category-elements"><strong>{category.category}</strong> {category.items} 
        <a
        href={category.link}
        target="_blank"
        rel="noopener noreferrer"
        className="link-icon"
      ><FaLink /></a></li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPage;
