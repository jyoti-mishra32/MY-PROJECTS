import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import shopContextProvider from './Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <shopContextProvider>
    <App />
  </shopContextProvider>
);