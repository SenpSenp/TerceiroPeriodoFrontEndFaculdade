import React, { useEffect, useState } from 'react';
import { CardContainer } from '../../Componentes/CardContainer/CardContainer';
import { Carrossel } from '../../Componentes/Carrossel/Carrossel';
import { Card } from '../../Componentes/Card/Card';

export const TelaHome = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:4000/Products');
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro ao obter os produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div>
      <Carrossel />
      <CardContainer>
        {produtos.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            texto={product.name}
            imagem={product.image}
            valor={product.price.toLocaleString('pt-BR')}
          />
        ))}
      </CardContainer>
    </div>
  );
};