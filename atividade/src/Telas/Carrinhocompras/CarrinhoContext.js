import React, { createContext, useState } from 'react';

const CarrinhoContext = createContext();

const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (produtoId) => {
    const novoCarrinho = carrinho.filter((produto) => produto.id !== produtoId);
    setCarrinho(novoCarrinho);
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export { CarrinhoContext, CarrinhoProvider };
