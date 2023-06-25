import Header from '../../Componentes/Header/Header';
import { CarrinhoContext } from '../../Telas/Carrinhocompras/CarrinhoContext';
import React, { useContext } from 'react';
import ItemCarrinho from './../../Componentes/ItemCarrinho/ItemCarrinho';

const Carrinho = () => {
  const { carrinho, limparCarrinho } = useContext(CarrinhoContext);

  const calcularTotal = () => {
    let total = carrinho.reduce((acc, produto) => acc + parseFloat(produto.valor), 0)
    return total;
  };

  return (
    <div>
      <Header />
      <h1>Carrinho de Compras</h1>
      <div>
        <div>
          {
            carrinho.length > 0 ? (
              carrinho.map((produto) => {
                return <ItemCarrinho id={produto.id} imagem={produto.imagem} texto={produto.texto} valor={produto.valor}/>
              })
            ) : (
              <h1>O carrinho está vazio</h1>
            )
          }
        </div>
        <h2>Total: R$ {calcularTotal()}</h2>
        <button onClick={()=>limparCarrinho()}>Limpar Carrinho</button>
      </div>
      <div>
        {/* Botões para finalizar a compra, limpar o carrinho, etc. */}
      </div>
    </div>
  );
};

export default Carrinho;
