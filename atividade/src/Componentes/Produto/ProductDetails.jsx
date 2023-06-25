import React, { useState } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails({ product }) {
  const history = useHistory();
  
  const [quantity, setQuantity] = useState(1);

    // will take you to a detail page with a id of product
    function getProductDetails(product) {
      return history.push(`/api/products/${product.id}`);
    }
  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleAddToCart() {
    // Add the product and the selected quantity to the cart
  }
    

  return (
    <div>
      <Row className="product-details">
      <Col xs={12} md={6} className="product-image-container">
      <Image
        src={product.image}
        fluid
        className="product-image"
        
      />
      </Col>
      <Col xs={12} md={6}>
        <h1 className="product-name">{product.name}</h1>
        <Form className="product-form">
          <Form.Group>
            <Form.Label className="product-label">Quantidade: </Form.Label>
            <Form.Control type="number" value={quantity} onChange={handleQuantityChange} className="product-quantity" />
          </Form.Group>
        </Form>
        <p className="product-price">Preço: {product.price}</p>
        <Button variant="primary" onClick={handleAddToCart} className="product-button">Adicionar ao carrinho</Button>

      </Col>
    </Row>
    <Row className='product-description-row'>
      <p className="product-description">{product.description}</p>
    </Row>
    </div>

  );
}

export default ProductDetails;