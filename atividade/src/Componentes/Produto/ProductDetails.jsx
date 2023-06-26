import React, { useState, useContext } from 'react';
import { CarrinhoContext } from './../../Telas/Carrinhocompras/CarrinhoContext';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer} from 'react-toastify'
import './ProductDetails.css';

function ProductDetails({ product }) {
  const history = useHistory();
  const {adicionarAoCarrinho} = useContext(CarrinhoContext)

  const [quantity, setQuantity] = useState(1);
  
  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  const handleAddCart = (product) => {
    adicionarAoCarrinho(product)
    toast('Adicionado com sucesso')
  }

  
  return (
    <div>
      <Row className="product-details">
        <Col xs={12} md={6} className="product-image-container">
          <Image src={product.image} fluid className="product-image" />
        </Col>
        <Col xs={12} md={6}>
          <h1 className="product-name">{product.name}</h1>
          <Form className="product-form">
            <Form.Group>
              <Form.Label className="product-label">Quantidade:</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="product-quantity"
              />
            </Form.Group>
          </Form>
          <p className="product-price">Preço: {product.price}</p>
          <Button
            variant="primary"
            onClick={() => handleAddCart(product)}
            className="product-button"
          >
            Adicionar ao carrinho
          </Button>
        </Col>
      </Row>
      <Row className="product-description-row">
        <Col xs={12}>
          <h2>Descrição:</h2>
          <p className="product-description">{product.description}</p>
        </Col>
      </Row>
    </div>
  );
  
}

export default ProductDetails;