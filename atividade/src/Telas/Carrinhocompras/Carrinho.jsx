import { CarrinhoContext } from '../../Telas/Carrinhocompras/CarrinhoContext';
import React, { useContext } from 'react';
import ItemCarrinho from './../../Componentes/ItemCarrinho/ItemCarrinho';
import './Carrinho.css'

const Carrinho = () => {
  const { carrinho, limparCarrinho } = useContext(CarrinhoContext);

  const calcularTotal = () => {
    let total = carrinho.reduce(
      (acc, produto) => acc + parseFloat(produto.valor),
      0
    );
    return total;
  };

  return (
    <div className="carrinhoContainer">
      <h1 className="carrinho-title">Carrinho de Compras</h1>
      <div className="carrinho-content">
        <div className="carrinho-items">
          {carrinho.length > 0 ? (
            carrinho.map((produto) => (
              <ItemCarrinho
                key={produto.id}
                id={produto.id}
                imagem={produto.imagem}
                texto={produto.texto}
                valor={produto.valor}
              />
            ))
          ) : (
            <h1 className="carrinho-title">O carrinho está vazio</h1>
          )}
        </div>
        <h2 className="carrinho-total">Total: R$ {calcularTotal()}</h2>
        <button className="carrinho-limpar" onClick={limparCarrinho}>
          Limpar Carrinho
        </button>
      </div>
      <div className="carrinho-actions">
        {/* Botões para finalizar a compra, limpar o carrinho, etc. */}
      </div>
    </div>
  );
};

export default Carrinho;
