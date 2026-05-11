import React from 'react';
import Shortener from './components/Shorter';
import Analytics from './components/Analytics';

function App() {
  return (
    <div>
      <h1>URL Shortener</h1>
      <Shortener />
      <Analytics />
    </div>
  );
}

export default App