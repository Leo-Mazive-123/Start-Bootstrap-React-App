// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h3 className="middle">AROUND THE WEB</h3>
        <div className="icons">
          <a href="https://www.facebook.com/leo.mazive.92" target="_blank" rel="noopener noreferrer">
            <img className="my-icons" src="images/facebook.png" style={{ width: "20px" }} alt="Facebook" />
          </a>
          <a href="https://x.com/LeoMazive123" target="_blank" rel="noopener noreferrer">
            <img className="my-icons" src="images/twitter.png" style={{ width: "20px" }} alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/leo-mazive-b470a535b" target="_blank" rel="noopener noreferrer">
            <img className="my-icons" src="images/linkedin.png" style={{ width: "20px" }} alt="LinkedIn" />
          </a>
          <a href="https://globalnews.ca/" target="_blank" rel="noopener noreferrer">
            <img className="my-icons" src="images/global.png" style={{ width: "20px" }} alt="Global" />
          </a>
        </div>

        <h3 className="start">LOCATION</h3>
        <p className="start1">
          2215 John Daniel Drivef
          <br />
          Clark, MO 65243
        </p>

        <div className="end">
          <h3>ABOUT FREELANCER</h3>
          <br />
          <p className="end1">
            Freelance is a free to use, MIT licensed
            <br />
            Bootstrap theme created by Start Bootstrap.
          </p>
        </div>
      </div>

      <div className="last">
        <p>Copyright &copy; Leo T. Mazive</p>
      </div>
    </>
  );
};

export default Footer;
