// src/components/DataEntryForm.js

import React, { useState } from 'react';
import axios from 'axios';

const DataEntryForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    pH: '',
    moisture: '',
    temperature: '',
    N: '',
    P: '',
    K: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/Users/ankithswork/soilwaise/soil-health-backend/Models/SoilData.js', formData);
    setFormData({
      date: '',
      pH: '',
      moisture: '',
      temperature: '',
      N: '',
      P: '',
      K: '',
    });
  };

  return (
    <form className="data-entry-form" onSubmit={handleSubmit}>
      <h2>Manual Data Entry</h2>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input type="number" name="pH" placeholder="pH" value={formData.pH} onChange={handleChange} required />
      <input type="number" name="moisture" placeholder="Moisture (%)" value={formData.moisture} onChange={handleChange} required />
      <input type="number" name="temperature" placeholder="Temperature (°C)" value={formData.temperature} onChange={handleChange} required />
      <input type="number" name="N" placeholder="Nitrogen (mg/kg)" value={formData.N} onChange={handleChange} required />
      <input type="number" name="P" placeholder="Phosphorus (mg/kg)" value={formData.P} onChange={handleChange} required />
      <input type="number" name="K" placeholder="Potassium (mg/kg)" value={formData.K} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataEntryForm;
