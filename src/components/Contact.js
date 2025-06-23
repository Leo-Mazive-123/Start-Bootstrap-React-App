// src/components/Contact.js
import React, { useState } from "react";
import "../App.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [sentMessage, setSentMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when typing
    setSentMessage(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSentMessage(false);
    } else {
      setErrors({});
      setSentMessage(true);
      setTimeout(() => setSentMessage(false), 3000);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="fouth">
      <h2 className="fouth-text">CONTACT ME</h2>
      <img className="image4" src="images/blue-star.png" style={{ width: "200px" }} alt="star" />
      <form onSubmit={handleSubmit}>

        <input
          className="para4"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
        <hr className="line" />

        <input
          className="para4"
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <hr className="line" />

        <input
          className="para4"
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}
        <hr className="line" />

        <input
          className="para4"
          type="text"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error-text">{errors.message}</p>}
        <hr className="line" />

        <div className="button-">
          <button className="button4" type="submit">Send</button>
        </div>

        {sentMessage && <p className="success-text">Sent!</p>}
      </form>
    </div>
  );
};

export default Contact;



