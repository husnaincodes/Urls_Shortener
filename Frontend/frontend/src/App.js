import React from 'react';
import Shortener from './components/Shorter';
import Analytics from './components/Analytics';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <div className="brand">
            <span className="brand-mark">S</span>
            <span className="brand-name">Shortly</span>
          </div>
          <h1>Professional URL shortener for modern teams</h1>
          <p>
            Create clean, memorable links and keep track of performance with a
            warm, focused dashboard.
          </p>
          <div className="hero-badges">
            <span>Fast</span>
            <span>Reliable</span>
            <span>Analytics-ready</span>
          </div>
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </header>

      <main className="main">
        <section className="panel">
          <Shortener />
        </section>

        <section className="panel panel-secondary">
          <Analytics />
        </section>
      </main>

      <footer className="footer">
        <p>Built for speed and clarity. Shorten with confidence.</p>
      </footer>
    </div>
  );
}

export default App