import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function Analytics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:5000/analytics');
    setData(res.data);
  };

  return (
    <div className="container">
      <h2>Analytics</h2>

      {data.map((item) => (
        <div className="card" key={item._id}>
          <p><strong>URL:</strong> {item.originalUrl}</p>
          <p><strong>Clicks:</strong> {item.clicks}</p>
        </div>
      ))}
    </div>
  );
}

export default Analytics;