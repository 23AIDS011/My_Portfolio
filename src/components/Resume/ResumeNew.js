import React from "react";
import "./Resume.css";

function ResumeNew() {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <p>Download my resume to learn more about my skills and experience.</p>
      <a
        href="/Akshaya_N(Resume).pdf"
        className="resume-download"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>

      <div className="resume-section">
        <h3>Skills</h3>
        <ul>
          <li>C, Python, JavaScript</li>
          <li>HTML5, CSS3, Bootstrap</li>
          <li>SQL, Data Structures & Algorithms</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>Certifications</h3>
        <ul>
          <li>Introduction to C | SoloLearn</li>
          <li>Crash Course on Python | Coursera</li>
          <li>Python (Basic) | HackerRank</li>
          <li>Introduction to SQL | SoloLearn</li>
          <li>SQL (Basic) | HackerRank (2023)</li>
          <li>SQL (Intermediate) | HackerRank (2024)</li>
          <li>Mastering DSA using C and C++ | Udemy (2024)</li>
          <li>Pandas | Kaggle (2024)</li>
          <li>Python Matplotlib | Kaggle (2024)</li>
          <li>Basics of Python | GreatLearning (2024)</li>
          <li>Programming Fundamentals using Python - Part 1 | Infosys Springboard (2024)</li>
          <li>Programming Fundamentals using Python - Part 2 | Infosys Springboard (2024)</li>
          <li>Introduction to NoSQL Databases | Infosys Springboard (2024)</li>
          <li>Agile Scrum in Practice | Infosys Springboard (2024)</li>
          <li>Python Foundation Certification | Infosys Springboard (2024)</li>
          <li>Software Engineering and Agile Software Development | Infosys Springboard (2024)</li>
          <li>Time Management | Infosys Springboard (2024)</li>
          <li>Email Writing Skills | Infosys Springboard (2024)</li>
          <li>High Impact Presentations | Infosys Springboard (2024)</li>
        </ul>
      </div>

      <div className="resume-section">
        <h3>Achievements</h3>
        <ul>
          <li>Secured 2nd Position in Hackathon at PSG College of Technology</li>
          <li>Secured 2nd Position in Hackathon at SECE</li>
        </ul>
      </div>

      <img
        src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
        alt="Resume Illustration"
        className="resume-image"
      />
    </div>
  );
}

export default ResumeNew;
