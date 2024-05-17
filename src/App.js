// src/App.js
import Chart from'/Users/ankithswork/soilwaise/soil-health-monitoring/src/Compoents/Chart.jsx';
import React from 'react';
import Dashboard from '/Users/ankithswork/soilwaise/soil-health-monitoring/src/Compoents/Dashboard.jsx';
import DataEntryForm from '/Users/ankithswork/soilwaise/soil-health-monitoring/src/Compoents/DataEntryFrom.jsx';
import CropSuggestion from '/Users/ankithswork/soilwaise/soil-health-monitoring/src/Compoents/CropSuggestion.jsx';
import UserProfile from '/Users/ankithswork/soilwaise/soil-health-monitoring/src/Compoents/UserProfile.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Soil Health Monitoring System</h1>
      </header>
      <main>
        <UserProfile />
        <Dashboard />
        <DataEntryForm />
        <CropSuggestion />
        <Chart />
      </main>
    </div>
  );
}

export default App;
