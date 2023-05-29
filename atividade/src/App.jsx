import React from 'react';
import { Carrossel } from './Componentes/Carrossel/Carrossel';

const App = () => {
  const imagens = [
    '/imagens/imagem1.jpg',
    '/imagens/imagem2.jpg',
  ];

  return (
    <div>
      <h1>Meu Carrossel de Imagens</h1>
      <Carrossel imagens={imagens} />
    </div>
  );
};

export default App;
