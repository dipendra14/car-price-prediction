import React from 'react';
import styles from './AboutUs.module.css'; // Import CSS Module

function AboutUs() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutHeading}>About Us</h2>
        <p className={styles.aboutText}>
          We are dedicated to providing accurate predictions for used car prices
          based on various factors. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        {/* Add more content with corresponding CSS classes */}
      </div>
    </div>
  );
}

export default AboutUs;
