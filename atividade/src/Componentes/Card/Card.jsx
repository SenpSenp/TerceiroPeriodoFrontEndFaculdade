import React from 'react';
import './Card.css';

export const Card = ({ imagem, texto, valor }) => {
  return (
    <div className="card">
      <img src={imagem} alt="Imagem do Produto" />
      <div className="card-text">
        <p>{texto}</p>
        <p className="card-value">R$: <span>{valor}</span></p>
      </div>
      <button className="card-button">Comprar</button>
    </div>
  );
};
