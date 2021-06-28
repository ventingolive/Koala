import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SettingsContextProvider from './context/SettingsContext'

ReactDOM.render(
  // <React.StrictMode>
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
