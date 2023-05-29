import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Card } from './Componentes/Card/Card';
import { CardContainer } from './Componentes/CardContainer/CardContainer';
import { Carrossel } from './Componentes/Carrossel/Carrossel';
import img1 from './Componentes/Card/img/imagem1.jpg'

ReactDOM.render(
  <React.StrictMode>
    <Carrossel/>
    <CardContainer>
      <Card texto = "Placa de video teste 123" imagem = {img1} valor = "420,69">
        <span>Informação para ficar dentro da caixa, adicionar imagem aqui também</span>
      </Card>
    </CardContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
