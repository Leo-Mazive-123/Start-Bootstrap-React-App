// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="fouth">
      <h2 className="fouth-text">CONTACT ME</h2>
      <img className="image4" src="images/blue-star.png" style={{ width: "200px" }} alt="Blue Star" />
      <br />
      <input className="para4" type="text" placeholder="Name" />
      <br />
      <hr className="line" />
      <input className="para4" type="text" placeholder="Email Address" />
      <br />
      <hr className="line" />
      <input className="para4" type="text" placeholder="Phone Number" />
      <br />
      <hr className="line" />
      <input className="para4" type="text" placeholder="Message" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr className="line" />
      <div className="button-">
        <button className="button4">Send</button>
      </div>
    </div>
  );
};

export default Contact;
