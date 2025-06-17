// src/components/About.js
import React from "react";

const About = () => {
  return (
    <div className="third">
      <h3 className="third-text">ABOUT</h3>
      <img className="image3" src="images/star.png" alt="Star Divider" />
      <div className="about-content">
        <p className="about-paragraph">
          Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes
          the complete source files including HTML, CSS, and JavaScript as well as optional SASS
          stylesheets for easy customization.
        </p>
        <p className="about-paragraph">
          You can create your own custom avatar for the masthead, change the icon in the dividers,
          and add your email address to the contact form to make it fully functional!
        </p>
      </div>
      <div className="about-button">
        <button className="button1">Free Download!</button>
      </div>
    </div>
  );
};

export default About;
