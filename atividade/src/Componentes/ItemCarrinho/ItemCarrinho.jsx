import { useContext } from 'react';
import './ItemCarrinho.css'
import { CarrinhoContext } from '../../Telas/Carrinhocompras/CarrinhoContext';

const ItemCarrinho = ({id, imagem, texto, valor}) => {

    const {carrinho, removerDoCarrinho} = useContext(CarrinhoContext)
    console.log(carrinho)

    return(
        <div id='Item'>
            <img src={imagem}/>
            <h1>{texto}</h1>
            <h1>{valor}</h1>
            <button onClick={()=>removerDoCarrinho(id)}>Remover</button>
        </div>
    )
}

export default ItemCarrinho;