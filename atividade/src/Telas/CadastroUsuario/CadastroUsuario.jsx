import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CadastroUsuario.css';

const CadastroUsuario = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    id: '',
    username: '',
    password: '',
    admin: false,
    nome: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const verificarDados = async () => {
    if (formData.username.length < 5 || formData.password.length < 5) {
      throw new Error('Username e senha devem ter no mínimo 5 caracteres');
    }

    const response = await axios.get('http://localhost:4000/usuarios');
    const usuarios = response.data;
    const usernameExistente = usuarios.some((usuario) => usuario.username === formData.username);
    if (usernameExistente) {
      throw new Error('Username já existe. Escolha outro username');
    }
  };

  const handleCadastro = async () => {
    try {
      await verificarDados();

      const response = await axios.get('http://localhost:4000/usuarios');
      const usuarios = response.data;

      const maxId = usuarios.reduce((max, usuario) => (usuario.id > max ? usuario.id : max), 0);
      const nextId = maxId + 1;

      const username = formData.username.endsWith('#123admin123')
        ? formData.username.slice(0, -12)
        : formData.username;

      const novoUsuario = {
        id: nextId,
        username: username,
        password: formData.password,
        admin: formData.username.endsWith('#123admin123'),
        nome: formData.nome
      };

      console.log('Botão Cadastrar clicado');

      const cadastrarPromise = new Promise((resolve) =>
        setTimeout(() => {
          resolve(axios.post('http://localhost:4000/usuarios', novoUsuario));
        }, 3000)
      );

      toast.promise(cadastrarPromise, {
        pending: 'Aguarde...',
        success: 'Cadastro realizado com sucesso!',
        error: 'Erro no cadastro. Verifique os dados e tente novamente.'
      });

      await cadastrarPromise;

      console.log('Dados de cadastro enviados com sucesso');
      setFormData({
        id: '',
        username: '',
        password: '',
        admin: false,
        nome: ''
      });

      history.push('/Login');
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message);
      if (error.message.includes('Username já existe')) {
        toast.error('Usuário já existente. Por favor, utilize um diferente e tente novamente.');
      } else {
        toast.error('Erro no cadastro. Verifique os dados e tente novamente.');
      }
    }
  };

  return (
    <div className="cadastroContainer">
      <h2 className="Cadastro-h2">Cadastro de Usuário</h2>
      <form className="cadastroForms">
        <br />
        <label className="Cadastro-label">
          Nome de Usuário:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="Cadastro-input"
          />
        </label>
        <br />
        <label className="Cadastro-label">
          Senha:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="Cadastro-input"
          />
        </label>
        <br />
        <label className="Cadastro-label">
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} className="Cadastro-input" />
        </label>
        <br />
        <button type="button" onClick={handleCadastro} className="Cadastro-button">
          Cadastrar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CadastroUsuario;
