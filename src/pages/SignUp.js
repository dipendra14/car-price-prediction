import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignUp.module.css'; // Import CSS Module

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here (e.g., API call to register user)
    // After successful sign-up, redirect to login page or dashboard
    navigate('/login'); // Redirect to login page after sign-up
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupForm}>
        <h2 className={styles.signupHeading}>Sign Up</h2>
        <form onSubmit={handleSignUp} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Enter your username"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
