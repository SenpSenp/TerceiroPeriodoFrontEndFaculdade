import React, { useState, useRef } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './CadastroUsuario.css';

const CadastroUsuario = () => {
  const nextIdRef = useRef(1);

  const [formData, setFormData] = useState({
    id: '',
    username: '',
    password: '',
    admin: false,
    nome: '',
    token: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCadastro = () => {
    const nextId = nextIdRef.current;
    setFormData((prevFormData) => ({
      ...prevFormData,
      id: nextId
    }));

    nextIdRef.current += 1;

    console.log('Botão Cadastrar clicado');
    axios
      .post('http://localhost:4000/usuarios', formData)
      .then((response) => {
        console.log('Dados de cadastro enviados com sucesso:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao enviar dados de cadastro:', error);
      });
  };

  return (
    <div className="cadastroContainer">
      <h2 className='Cadastro-h2'>Cadastro de Usuário</h2>
      <form className="cadastroForms" onSubmit={handleCadastro}>
        <br />
        <label className='Cadastro-label'>
          Nome de Usuário:
          <input type="text" name="username" value={formData.username} onChange={handleChange} className='Cadastro-input' />
        </label>
        <br />
        <label className='Cadastro-label'>
          Senha:
          <input type="password" name="password" value={formData.password} onChange={handleChange} className='Cadastro-input' />
        </label>
        <br />
        <label className='Cadastro-label'>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} className='Cadastro-input' />
        </label>
        <br />
        <label className='Cadastro-label'>
          Token:
          <input type="text" name="token" value={formData.token} onChange={handleChange} className='Cadastro-input' />
        </label>
        <br />
        <button type="button" onClick={handleCadastro} className='Cadastro-button'>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroUsuario;
