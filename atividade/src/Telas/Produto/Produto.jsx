import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../Componentes/Produto/ProductDetails';
import Comentar from '../../Componentes/Produto/Comentarios';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';

const TelaProduto = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [usuarioConectado, setUsuarioConectado] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4000/Products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const usuarioConectado = localStorage.getItem('usuarioConectado');
    if (usuarioConectado) {
      const usuario = JSON.parse(usuarioConectado);
      setUsuarioConectado(usuario);
    }
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  const HandleDeletarProduto = async () => {
    try {
      const confirmed = window.confirm('Tem certeza que deseja deletar o produto?');

      if (!confirmed) {
        return;
      }

      const url = `http://localhost:4000/Products/${id}`;

      await axios.delete(url);

      toast.success('Produto deletado com sucesso!', {
        onClose: () => {
          setRedirect(true);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  }
  

  return (
    <div className="container">
            {usuarioConectado && usuarioConectado.admin && (
        <button onClick={HandleDeletarProduto} className='Cadastro-buttonr'>Deletar Produto</button>
      )}
      <ProductDetails product={product} />
      <div>
        <Comentar idProduto={id} />
      </div>
    </div>
  );
};

export default TelaProduto;
