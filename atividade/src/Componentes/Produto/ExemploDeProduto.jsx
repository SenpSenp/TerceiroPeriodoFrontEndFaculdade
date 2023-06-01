import React from 'react';
import ProductDetails from './ProductDetails';

function ExemploDeProduto() {
  const product = {
    name: 'RTX 4090 GALAX',
    price: 10999.99,
    image: 'https://cdn.awsli.com.br/400x400/141/141286/produto/200914964b087d1b643.jpg',
    description: <p>
      Características:<br/>
      - Marca: Galax<br/>
      - Modelo: 49NXM5MD6DSG<br/>
      Especificações:<br/>
      Especificações do mecanismo de GPU:<br/>
      - Núcleos CUDA: 16384<br/>
      - Boost Clock: 2580 MHz<br/>
      - 1-Click OC Clock: 2595MHz (instalando o software Xtreme Tuner Plus e usando 1-Click OC)<br/>
      Especificações de memória:<br/>
      - Velocidade da Memória: 21 Gbps<br/>
      - Configuração de memória padrão: 24 GB<br/>
      - Largura da interface de memória GDDR6X de 384 bits<br/>
      - Largura de banda da memória: 1008 GB/s<br/>
      Suporte a recursos:<br/>
      - PCI-E 4.0<br/>
      - Windows 10/11 64 bits<br/>
      Característica do ventilador:<br/>
      - 3 * 102 milímetros<br/>
      - WING 2.0 com parada do ventilador @ Idle (todos os ventiladores)<br/>
      Suporte de exibição:<br/>
      - 3x DisplayPort 1.4a<br/>
      - 1x HDMI 2.1<br/>
      Dimensões:<br/>
      - Dimensões (sem suporte): 336 * 138 * 74 mm<br/>
      - Dimensões (com suporte): 352 * 153 * 74 mm<br/>
    </p>
  };

  return (
    <div className="container">
      <ProductDetails product={product} />
    </div>
  );
}

export default ExemploDeProduto;
