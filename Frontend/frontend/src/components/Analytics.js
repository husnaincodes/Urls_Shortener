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

  // ✅ Clear history function
  const clearHistory = async () => {
    await axios.delete('http://localhost:5000/clear'); // backend route needed
    setData([]);
  };

  return (
    <div className="container">
      <h2>Analytics</h2>

      <button className="clear-btn" onClick={clearHistory}>
        Clear History
      </button>

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