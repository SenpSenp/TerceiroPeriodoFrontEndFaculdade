import React from 'react';
import './Card.css';

export const Card = ({ imagem, texto, valor }) => {
  return (
    <div className="caard">
      <img src={imagem} alt="Imagem do Produto" />
      <div className="caard-text">
        <p>{texto}</p>
        <p className="caard-value">R$: <span>{valor}</span></p>
      </div>
      <button className="caard-button">Comprar</button>
    </div>
  );
};
