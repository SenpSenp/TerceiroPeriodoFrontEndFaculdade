import React, { useState } from 'react';
import Header from '../../Componentes/Header/Header';
import ListaProdutosCarrinho from './ListaProdutosCarrinho';

const TelaCarrinho = () => {
  const [carrinho, setCarrinho] = useState([]);

  // Função para adicionar um produto ao carrinho
  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  // Função para calcular o total do carrinho
  const calcularTotal = () => {
    let total = 0;
    carrinho.forEach((produto) => {
      total += produto.preco;
    });
    return total;
  };

  return (
    <div>
      <Header />
      <h1>Carrinho de Compras</h1>
      <ListaProdutosCarrinho produtos={carrinho} />
      <div>
        <h2>Total: R$ {calcularTotal()}</h2>
      </div>
      <div>
        {/* Botões para finalizar a compra, limpar o carrinho, etc. */}
      </div>
    </div>
  );
};

export default TelaCarrinho;
