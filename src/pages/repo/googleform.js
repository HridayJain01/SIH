import React from "react";
import { useState } from "react";

function GoogleForm() {
  const [formData, setFormData] = useState({
    location: "",
    time: "",
    incident: "",
    policeReport: false,
    anonymous: false,
    name: "",
    mobile: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  return (
    <div>
      <h2>Incident Report Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="incident">Incident:</label>
          <textarea
            id="incident"
            name="incident"
            value={formData.incident}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="policeReport"
              checked={formData.policeReport}
              onChange={handleChange}
            />{" "}
            Police Report
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              name="anonymous"
              checked={formData.anonymous}
              onChange={handleChange}
            />{" "}
            Anonymous
          </label>
        </div>

        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="mobile">Mobile No:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GoogleForm;