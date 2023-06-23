import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import "./Cadastro.css"

const Cadastro = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    nome: '',
    token: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleCadastro = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar os dados de cadastro para o servidor
    console.log('Dados de cadastro:', formData);
  };

  return (
    <div className='cadastrocontainer'>
      <h2>Tela de Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <br />
        <label>
          Nome de Usuário:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
        <br />
        <label>
          Token:
          <input type="text" name="token" value={formData.token} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;