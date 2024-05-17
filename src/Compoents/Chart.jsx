// components/Chart.jsx

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const fetchSoilData = async () => {
    try {
      const response = await axios.get('/Users/ankithswork/soilwaise/soil-health-backend/Models/SoilData.js'); // Update with your API endpoint
      const data = response.data;

      const dates = data.map(item => new Date(item.date).toLocaleDateString());
      const pH = data.map(item => item.pH);
      const moisture = data.map(item => item.moisture);
      const temperature = data.map(item => item.temperature);
      const nitrogen = data.map(item => item.N);
      const phosphorus = data.map(item => item.P);
      const potassium = data.map(item => item.K);

      setChartData({
        labels: dates,
        datasets: [
          {
            label: 'pH Level',
            data: pH,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
            fill: true,
            tension: 0.1,
          },
          {
            label: 'Moisture',
            data: moisture,
            borderColor: 'rgba(54,162,235,1)',
            backgroundColor: 'rgba(54,162,235,0.2)',
            fill: true,
            tension: 0.1,
          },
          {
            label: 'Temperature',
            data: temperature,
            borderColor: 'rgba(255,99,132,1)',
            backgroundColor: 'rgba(255,99,132,0.2)',
            fill: true,
            tension: 0.1,
          },
          {
            label: 'Nitrogen (N)',
            data: nitrogen,
            borderColor: 'rgba(255,206,86,1)',
            backgroundColor: 'rgba(255,206,86,0.2)',
            fill: true,
            tension: 0.1,
          },
          {
            label: 'Phosphorus (P)',
            data: phosphorus,
            borderColor: 'rgba(153,102,255,1)',
            backgroundColor: 'rgba(153,102,255,0.2)',
            fill: true,
            tension: 0.1,
          },
          {
            label: 'Potassium (K)',
            data: potassium,
            borderColor: 'rgba(255,159,64,1)',
            backgroundColor: 'rgba(255,159,64,0.2)',
            fill: true,
            tension: 0.1,
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching soil data', error);
    }
  };

  useEffect(() => {
    fetchSoilData();
  }, []);

  return (
    <div>
      <h2>Soil Health Monitoring</h2>
      {chartData.labels ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Soil Health Data Over Time',
              },
            },
          }}
        />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Chart;
