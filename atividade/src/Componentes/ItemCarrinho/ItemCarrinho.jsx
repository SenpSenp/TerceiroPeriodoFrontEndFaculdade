import { useContext } from 'react';
import './ItemCarrinho.css'
import { CarrinhoContext } from '../../Telas/Carrinhocompras/CarrinhoContext';

const ItemCarrinho = ({id, imagem, texto, valor}) => {

    const {carrinho, removerDoCarrinho} = useContext(CarrinhoContext)
    console.log(carrinho)

    return(
        <div id='Item' className='carrinho-itens'>
            <img src={imagem}/>
            <h1 className='texto'>{texto}</h1>
            <h1 className='valor'>R$: {valor}</h1>
            <button onClick={()=>removerDoCarrinho(id)} className='right'>Remover</button>
        </div>
    )
}

export default ItemCarrinho;