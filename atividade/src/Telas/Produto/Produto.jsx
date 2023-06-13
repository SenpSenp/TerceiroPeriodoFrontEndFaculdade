import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../../Componentes/Produto/ProductDetails';
import products from '../../json/products.json';

const TelaProduto = () => {
    const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
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

  return (
    <div className="container">
      <ProductDetails product={product} />
    </div>
  );
};

export default TelaProduto;
