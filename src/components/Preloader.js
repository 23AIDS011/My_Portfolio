import React from "react";

function Preloader({ load }) {
  return (
    <div className={`preloader ${load ? "active" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
}

export default Preloader;
