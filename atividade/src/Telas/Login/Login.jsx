import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import "./Login.css"

export const TelaLogin = ({ setUsuarioConectado }) => {
  const [form, setForm] = useState({ login: '', senha: '' });
  const [loginInvalido, setLoginInvalido] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('usuarioConectado');

    if (usuarioSalvo) {
      setUsuarioConectado(JSON.parse(usuarioSalvo));
      history.push('/');
    }
  });

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/usuarios');
      const data = await response.json();

      const user = data.find((user) => user.username === form.login && user.password === form.senha);

      if (user) {
        localStorage.removeItem('usuarioConectado');
        toast.success(`Login bem-sucedido! Bem-vindo ${user.nome}`, {
          onClose: () => {
            localStorage.setItem('usuarioConectado', JSON.stringify(user));
            setUsuarioConectado(user);
            history.push('/');
          }
        });
      } else {
        setLoginInvalido(true);
        console.log('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.log('Ocorreu um erro ao realizar o login:', error);
    }
  };

  return (
    <div className="cadastroContainer">
        <h2 className="Cadastro-h2" alt="...">REALIZAR LOGIN</h2>
        <form className="cadastroForms">
            <label className='cadastro-label'>Login:</label>
            <input type="text" value={form.login} onChange={(e) => setForm({ ...form, login: e.target.value })} className="Cadastro-input" />
            <br />
            <label Cadastro-label>Senha:</label>
            <input type="password" value={form.senha} onChange={(e) => setForm({ ...form, senha: e.target.value })} className="Cadastro-input" />
            {loginInvalido && <p className="error-message">Erro! Login ou Senha inválidos</p>}
            <br />
          </form>
          <button className="Cadastro-button" onClick={handleLogin}>Logar</button>
          <ToastContainer />
        </div>

  );
};
