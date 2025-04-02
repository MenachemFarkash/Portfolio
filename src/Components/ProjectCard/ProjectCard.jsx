import React from "react";
import "./ProjectCard.css";

function ProjectCard() {
  return (
    <div className="project_card_container">
      <h4>Project Name</h4>
      <p>Description of the project goes here.</p>
      <img src="https://placehold.co/100x100" alt="" />
    </div>
  );
}

export default ProjectCard;
