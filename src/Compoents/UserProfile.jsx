// src/components/UserProfile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get('/Users/ankithswork/soilwaise/soil-health-backend/Models/User.js');
      setUserData(response.data);
    };
    fetchUserData();
  }, []);

  return (
    <div className="user-profile">
      {userData ? (
        <div>
          <h2>Welcome, {userData.username}</h2>
          <p>Email: {userData.email}</p>
          <p>Joined: {new Date(userData.joined).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
