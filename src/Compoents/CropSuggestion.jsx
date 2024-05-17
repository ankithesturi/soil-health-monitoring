// src/components/CropSuggestion.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CropSuggestion = () => {
  const [cropSuggestions, setCropSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await axios.get('/api/crop-suggestions');
      setCropSuggestions(response.data);
    };
    fetchSuggestions();
  }, []);

  return (
    <div className="crop-suggestion">
      <h2>Suggested Crops</h2>
      <ul>
        {cropSuggestions.map((crop, index) => (
          <li key={index}>{crop.name}: Optimal pH - {crop.optimal_pH}, Moisture - {crop.optimal_moisture}%</li>
        ))}
      </ul>
    </div>
  );
};

export default CropSuggestion;
