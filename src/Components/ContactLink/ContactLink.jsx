import React from "react";
import "./ContactLink.css";

function ContactLink({ icon = "https://placehold.co/100x100", site = "", to = "" }) {
  return (
    <a href={to} target="_blank">
      <div className="contact_link_container">
        <img src={icon} alt="" className="contact_link_logo" />
        <br />
        {site}
      </div>
    </a>
  );
}

export default ContactLink;
