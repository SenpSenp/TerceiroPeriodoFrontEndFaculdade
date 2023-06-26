import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../Componentes/Produto/ProductDetails';
import Comentar from '../../Componentes/Produto/Comentarios';

const TelaProduto = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  if (!product) {
    return <div>Loading...</div>;
  }

  //Comentários

    

  return (
    <div className="container">
      <ProductDetails product={product} />
      <div>
      <Comentar idProduto={id}/>
    </div>
    </div>
  );
};

export default TelaProduto;