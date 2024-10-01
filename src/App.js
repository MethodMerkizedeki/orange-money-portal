import logo from './logo.svg';
import './App.css';
import React from 'react';
import KycPage from './pages/KycPage';
import SubscriptionPage from './pages/SubscriptionPage';

function App() {
  return (
    <div className="App">
      <KycPage />
      <SubscriptionPage />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
