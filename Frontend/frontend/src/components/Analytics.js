import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function Analytics() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/analytics`);
      const result = Array.isArray(res.data) ? res.data : res.data.urls || [];
      setData(result);
    } catch (err) {
      console.error(err);
      setError('Failed to load analytics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Analytics</h2>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && data.length === 0 && (
        <p>No URLs shortened yet.</p>
      )}

      {data.map((item) => (
        <div className="card" key={item._id}>
          <p><strong>Original URL:</strong> <a href={item.originalUrl} target="_blank" rel="noreferrer">{item.originalUrl}</a></p>
          <p><strong>Short URL:</strong> <a href={item.shortUrl} target="_blank" rel="noreferrer">{item.shortUrl}</a></p>
          <p><strong>Clicks:</strong> {item.clicks}</p>
          <p><strong>Created:</strong> {new Date(item.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Analytics;