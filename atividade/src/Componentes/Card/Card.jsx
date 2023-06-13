import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.css';

export const Card = ({ id, imagem, texto, valor }) => {
  const history = useHistory();

  const handleComprar = (productId) => {
    history.push(`/produto/${productId}`);
  };  

  return (
    <div className="caard">
      <img src={imagem} alt="Imagem do Produto" />
      <div className="caard-text">
        <p>{texto}</p>
        <p className="caard-value">R$: <span>{valor}</span></p>
      </div>
      <button className="caard-button" onClick={() => handleComprar(id)}>Comprar</button>
    </div>
  );
};
