import React, { useState } from 'react';
import styles from './PredictionForm.module.css'; // Import CSS Module

function PredictionForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    carModel: '',
    yearMade: '',
    purchasedShowroom: '',
    engineType: '',
    kmsRan: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePredict = (e) => {
    e.preventDefault();
    // Implement the prediction logic here
    // For now, let's just log the form data
    console.log(formData);
  };

  return (
    <div className={styles.predictionContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.formHeading}>Used Car Price Prediction</h2>
        <form onSubmit={handlePredict} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="companyName">Car Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Enter car company name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="carModel">Car Model:</label>
            <input
              type="text"
              id="carModel"
              name="carModel"
              value={formData.carModel}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Enter car model"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="yearMade">Year Made:</label>
            <input
              type="text"
              id="yearMade"
              name="yearMade"
              value={formData.yearMade}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Enter year made"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="purchasedShowroom">Purchased Showroom:</label>
            <input
              type="text"
              id="purchasedShowroom"
              name="purchasedShowroom"
              value={formData.purchasedShowroom}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Where you purchased this car from"
            />
          </div>
          {/* Add other input fields: Year, Showroom, Engine Type, KMs Ran */}
          <div className={styles.formGroup}>
            <label htmlFor="engineType">Engine Type:</label>
            <select
              id="engineType"
              name="engineType"
              value={formData.engineType}
              onChange={handleInputChange}
              className={styles.formSelect}
            >
              <option value="">Select Engine Type</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="kmsRan">KMs Ran:</label>
            <input
              type="text"
              id="kmsRan"
              name="kmsRan"
              value={formData.kmsRan}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="Enter kilometers ran"
            />
          </div>
          <div className={styles.formGroup}>
            <button type="submit" className={styles.submitButton}>
              Predict Price
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PredictionForm;
