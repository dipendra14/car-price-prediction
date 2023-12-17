import React, { useState } from 'react';
import styles from './Login.module.css'; // Import CSS Module
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = () => {
        if (formData.email && formData.password) navigate("/predict")
  }

    return (
        <div className={styles.loginContainer}>
            <div className={styles.formContainer}>
                <h2 className={styles.loginHeading}>Login</h2>
                <form onSubmit={handleLogin}>
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
                    <button type="submit" className={styles.submitButton}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
