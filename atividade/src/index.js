import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login/Login'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Tela de Login</h1>
    <Login />
  </React.StrictMode>
);
