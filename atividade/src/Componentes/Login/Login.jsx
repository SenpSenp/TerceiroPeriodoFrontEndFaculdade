import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Login.css'

function Login() {
  const [Nome, setNome] = useState('');
  const [Senha, setSenha] = useState('');

  const submitNome = (event) => {
    setNome(event.target.value);
  };

  const submitSenha = (event) => {
    setSenha(event.target.value);
  };

  const Submit = (event) => {
    event.preventDefault();
    console.log('Nome:', Nome);
    console.log('Senha:', Senha);
   
  };

  return (
    <Container className="mt-5">
      <h1>Login</h1>
      <Form onSubmit={Submit}>
        <Form.Group controlId="Email">
          <Form.Label>Nome de Usúario ou Email:</Form.Label>
          <Form.Control type="text" value={Nome} onChange={submitNome} />
        </Form.Group>

        <Form.Group controlId="Senha">
          <Form.Label>Senha:</Form.Label>
          <Form.Control type="password" value={Senha} onChange={submitSenha} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
