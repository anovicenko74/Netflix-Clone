import React from 'react';
import ReactDOM from 'react-dom/client';
// components
import App from './App';
import { SettingsProvider } from './context/SettingsContext';
// styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SettingsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SettingsProvider>
);
