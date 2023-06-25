import React from 'react';

const ListaProdutosCarrinho = ({ produtos }) => {
  return (
    <div>
      <h2>Produtos no Carrinho</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto adicionado ao carrinho</p>
      ) : (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <span>{produto.nome}</span>
              <span>{produto.preco}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaProdutosCarrinho;
