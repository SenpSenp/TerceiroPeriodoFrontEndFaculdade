import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Card.css';
import { toast, ToastContainer} from 'react-toastify'
import { CarrinhoContext } from '../../Telas/Carrinhocompras/CarrinhoContext';

export const Card = ({ id, imagem, texto, valor }) => {

  const product = {
    'id': id,
    'imagem': imagem,
    'texto': texto,
    'valor': valor,
  }
  const history = useHistory();
  const {adicionarAoCarrinho} = useContext(CarrinhoContext)

  const handleComprar = (productId) => {
    history.push(`/produto/${productId}`);
  };  

  const handleAddCart = (product) => {
    adicionarAoCarrinho(product)
    toast('Adicionado com sucesso')
  }

  return (
    <div className="caard">
      <img src={imagem} alt="Imagem do Produto" onClick={() => handleComprar(id)}/>
      <div className="caard-text">
        <p>{texto}</p>
        <p className="caard-value">R$: <span>{valor}</span></p>
      </div>
      <span>
        <button className="caard-button" onClick={() => handleAddCart(product)}>Adicionar ao carrinho</button>
        <button className="caard-button" onClick={() => handleComprar(id)}>Comprar</button>
      </span>
      <ToastContainer/>
    </div>
  );
};
