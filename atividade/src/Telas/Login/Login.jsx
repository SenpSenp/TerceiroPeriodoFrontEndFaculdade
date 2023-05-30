import React from 'react';
import Login from '../../Componentes/Login/Login';
import Header from '../../Componentes/Header/Header';

export const TelaLogin = () => {
  return (
    <div>
      <Header/>
        <h1>Tela de Login</h1>
        <Login/>
    </div>
  );
};