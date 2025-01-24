import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        I'm a B.Tech student in AI & DS at Sri Eshwar College of Engineering. I have experience in web development, Python, and AI technologies. I enjoy solving real-world problems and building efficient solutions.
      </p>
      <img
        src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"
        alt="About Me Animation"
        className="about-gif"
      />
      <h3>Skills</h3>
      <ul>
        <li>C, Python, JavaScript</li>
        <li>HTML5, CSS3, Bootstrap</li>
        <li>SQL, Data Structures & Algorithms</li>
      </ul>
    </div>
  );
}

export default About;
