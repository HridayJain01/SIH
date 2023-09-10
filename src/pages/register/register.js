import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: '',
  });

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (formData.password === formData.reEnterPassword) {
      // Passwords match, you can proceed with user creation logic here
      console.log('User registered:', formData);
    } else {
      // Passwords do not match, show an alert and clear the re-enter password field
      alert('Passwords do not match.');
      setFormData({
        ...formData,
        password: '',
        reEnterPassword: '',
      });
      setPasswordsMatch(false);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="reEnterPassword">Re-enter Password:</label>
          <input
            type="password"
            id="reEnterPassword"
            name="reEnterPassword"
            value={formData.reEnterPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        {passwordsMatch ? null : (
          <div className="error-message">Passwords do not match.</div>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterForm;
