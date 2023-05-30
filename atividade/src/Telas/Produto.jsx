import React from 'react';
import Exemplo from './Componentes/Produto/Exemplos/Exemplo de produto';
import Header from '../../Componentes/Header/Header';

export const TelaProduto = () => {
    return (
        <div className='Main'>
            <Header/>
            <Exemplo />
        </div>
    )
}