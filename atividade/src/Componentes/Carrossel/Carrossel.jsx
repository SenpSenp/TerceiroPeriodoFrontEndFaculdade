import React, { useState } from 'react';
import './Carrossel.css';
import img1 from './img/imagem1.png';
import img2 from './img/imagem2.png';
import img3 from './img/imagem3.png';

export const Carrossel = () => {
  const imagens = [img1, img2, img3];
  const [indiceImagemAtual, setIndiceImagemAtual] = useState(0);

  const handleProximaImagem = () => {
    setIndiceImagemAtual((indiceAnterior) =>
      indiceAnterior === imagens.length - 1 ? 0 : indiceAnterior + 1
    );
  };

  const handleImagemAnterior = () => {
    setIndiceImagemAtual((indiceAnterior) =>
      indiceAnterior === 0 ? imagens.length - 1 : indiceAnterior - 1
    );
  };

  return (
    <div className="carrossel">
      <button className="carrossel-button" onClick={handleImagemAnterior}>
        &lt;
      </button>
      <img
        className="carrossel-imagem"
        src={imagens[indiceImagemAtual]}
        alt={`Imagem ${indiceImagemAtual + 1}`}
      />
      <button className="carrossel-button" onClick={handleProximaImagem}>
        &gt;
      </button>
    </div>
  );
};
