import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function Shortener() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  // ✅ Handle shorten request
  const handleSubmit = async () => {
    try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/shorten`, {
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
      <div className="section-header">
        <h2>Shorten a link</h2>
        <p>Paste your long URL and get a clean short link instantly.</p>
      </div>

      <div className="input-group">
        <input
          className="url-input"
          type="text"
          placeholder="https://your-long-link.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button className="primary-button" onClick={handleSubmit}>
          Shorten
        </button>
      </div>

      {shortUrl && (
        <div className="card">
          <p className="label">Short URL</p>
          <a href={shortUrl} target="_blank" rel="noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default Shortener;