import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global CSS
import App from './App'; // Importing App component
// Other imports (e.g., Redux store) can be added here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);