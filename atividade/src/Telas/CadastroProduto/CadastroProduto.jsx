import React, { useState, useRef } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './CadastroProduto.css';
import { toast, ToastContainer } from 'react-toastify';
import { Redirect } from 'react-router-dom';

const CadastroProduto = () => {
  const nextIdRef = useRef(1);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    description: ''
  });

  const [redirectHome, setRedirectHome] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCadastro = () => {
    const nextId = nextIdRef.current;

    if (formData.name.length < 5 || formData.price.length === 0 || formData.description.length === 0) {
      toast.error('Erro, Nome, Preço ou Description está vazio, por favor instira dados onde está faltando');
      return;
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      id: nextId
    }));

    toast.success('Produto adicionado com sucesso!', {
      onClose: () => {
        setRedirectHome(true);
      }
    });

    nextIdRef.current += 1;

    console.log('Botão Cadastrar clicado');
    axios
      .post('http://localhost:4000/Products', formData)
      .then((response) => {
        console.log('Dados de cadastro enviados com sucesso:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao enviar dados de cadastro:', error);
      });
  };

  if (redirectHome) {
    return <Redirect to="/" />;
  }

  return (
    <div className="cadastroContainer">
      <h2 className='Cadastro-h2'>Cadastro de Produto</h2>
      <form className="cadastroForms" onSubmit={handleCadastro}>
        <br />
        <label className='Cadastro-label'>
          Nome do Produto:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className='Cadastro-input' />
        </label>
        <br />
        <label className='Cadastro-label'>
          Preço:
          <input type="text" name="price" value={formData.price} onChange={handleChange} className='Cadastro-input' />
        </label>
        <br />
        <label className='Cadastro-label'>
          Imagem:
          <input type="text" name="image" value={formData.image} onChange={handleChange} className='Cadastro-input' />
        </label>
        <br />
        <label className='Cadastro-label'>
          Descrição:
          <input type="text" name="description" value={formData.description} onChange={handleChange} className='Cadastro-input' />
        </label>
        <br />
        <button type="button" onClick={handleCadastro} className='Cadastro-button'>
          Cadastrar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CadastroProduto;

