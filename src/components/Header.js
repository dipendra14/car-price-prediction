import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import CSS Module

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>About us</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/signup" className={styles.navLink}>Sign up</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/login" className={styles.navLink}>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
