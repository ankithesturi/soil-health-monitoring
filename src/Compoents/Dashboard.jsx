// src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const Dashboard = () => {
  const [soilData, setSoilData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/Users/ankithswork/soilwaise/soil-health-backend/Models/SoilData.js');
      setSoilData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Soil Health Dashboard</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={soilData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pH" stroke="#8884d8" />
          <Line type="monotone" dataKey="moisture" stroke="#82ca9d" />
          <Line type="monotone" dataKey="temperature" stroke="#ffc658" />
          <Line type="monotone" dataKey="N" stroke="#ff7300" />
          <Line type="monotone" dataKey="P" stroke="#387908" />
          <Line type="monotone" dataKey="K" stroke="#8b0000" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
