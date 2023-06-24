import React from 'react';
import { CardContainer } from '../../Componentes/CardContainer/CardContainer';
import { Carrossel } from '../../Componentes/Carrossel/Carrossel';
import { Card } from '../../Componentes/Card/Card';
import products from '../../json/products.json'; // Import the products data

export const TelaHome = () => {
  return (
    <div>
      <Carrossel />
      <CardContainer>
        {/* Map over the products array and create a Card component for each product */}
        {products.map((product) => (
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
