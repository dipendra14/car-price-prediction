import React from 'react';
import styles from './Home.module.css'; // Import CSS Module

function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.textContainer}>
        <h1>Welcome to Our Website</h1>
        <p>Discover the best car deals!</p>
      </div>
    </div>
  );
}

export default Home;
