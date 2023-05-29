import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Exemplo from './Exemplos/Exemplo de produto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='Main'>
      <Exemplo />
    </div>
  </React.StrictMode>
);
