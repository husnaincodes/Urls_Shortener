import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

function Analytics() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isClearing, setIsClearing] = useState(false);

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

  const handleClearHistory = async () => {
    if (!window.confirm('Clear all analytics history?')) {
      return;
    }

    try {
      setIsClearing(true);
      setError('');
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/clear`);
      setData([]);
    } catch (err) {
      console.error(err);
      setError('Failed to clear history. Please try again.');
    } finally {
      setIsClearing(false);
    }
  };

  return (
    <div className="container">
      <div className="section-header-row">
        <div className="section-header">
          <h2>Link analytics</h2>
          <p>Track clicks and keep an eye on every short link.</p>
        </div>
        <button
          className="ghost-button"
          onClick={handleClearHistory}
          disabled={loading || isClearing || data.length === 0}
          type="button"
        >
          {isClearing ? 'Clearing...' : 'Clear history'}
        </button>
      </div>

      {loading && <p className="muted">Loading...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && data.length === 0 && (
        <p className="muted">No URLs shortened yet.</p>
      )}

      {data.map((item) => (
        <div className="card" key={item._id}>
          <p className="label">Original URL</p>
          <a href={item.originalUrl} target="_blank" rel="noreferrer">
            {item.originalUrl}
          </a>
          <div className="card-row">
            <div className="clicks">
              <p className="label">Clicks</p>
              <span>{item.clicks}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Analytics;