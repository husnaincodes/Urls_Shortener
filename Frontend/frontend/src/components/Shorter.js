import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function Shortener() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  // ✅ Handle shorten request
  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/shorten', {
        originalUrl: url
      });

      setShortUrl(res.data.shortUrl);
      setUrl('');
    } catch (error) {
      console.error(error);
      alert('Error shortening URL');
    }
  };

  return (
    <div className="container">
      <h2>URL Shortener</h2>

      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Enter your long URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Shorten
        </button>
      </div>

      {shortUrl && (
        <div className="card">
          <p><strong>Short URL:</strong></p>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default Shortener;