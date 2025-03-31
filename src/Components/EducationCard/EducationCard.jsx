import React from "react";
import "./EducationCard.css";

function EducationCard({ school, dates, details, logo = "https://placehold.co/100x100" }) {
  return (
    <div className="education_card_container">
      <img src={logo} alt="" className="education_card_image" />
      <h3>{school}</h3>
      <p>{dates}</p>
      <p>{details}</p>
    </div>
  );
}

export default EducationCard;
