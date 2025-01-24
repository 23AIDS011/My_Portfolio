import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I’m Akshaya, a passionate developer skilled in AI & Data Science, dedicated to crafting innovative solutions.
        </p>
        <img
          src="https://gestaodeclinicas.ajmed.com.br/wp-content/uploads/2023/09/como-montar-uma-clinica-de-estetica.gif"
          alt="Coding Animation"
          className="hero-gif"
        />
        <a href="/about" className="btn primary-btn">
          Learn More About Me
        </a>
      </div>
    </div>
  );
}

export default Home;
