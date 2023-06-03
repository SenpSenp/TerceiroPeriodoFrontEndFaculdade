import React from 'react';
import img1 from '../../Componentes/Card/img/imagem1.jpg'
import { CardContainer } from '../../Componentes/CardContainer/CardContainer';
import { Carrossel } from '../../Componentes/Carrossel/Carrossel';
import { Card } from '../../Componentes/Card/Card'
import Header from '../../Componentes/Header/Header';


export const TelaHome = () => {
  return (
    <div>
      <Header/>
      <Carrossel />
      <CardContainer>
        <Card texto="Placa de video teste 123" imagem={img1} valor="420,69"/>
        <Card texto="Placa de video teste 456" imagem={img1} valor="420,69"/>
        <Card texto="Placa de video teste 789" imagem={img1} valor="420,69"/>
        <Card texto="Placa de video teste 147" imagem={img1} valor="420,69"/>
        <Card texto="Placa de video teste 258" imagem={img1} valor="420,69"/>
      </CardContainer>
    </div>
  );
};