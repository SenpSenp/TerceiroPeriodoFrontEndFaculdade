import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import "./Login.css"

export const TelaLogin = ({ setUsuarioConectado }) => {
  const [form, setForm] = useState({ login: '', senha: '' });
  const [loginInvalido, setLoginInvalido] = useState(false); // Estado para controlar a exibição da mensagem de erro

  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/usuarios');
      const data = await response.json();

      const user = data.find((user) => user.username === form.login && user.password === form.senha);

      if (user) {
        toast.success(`Login bem-sucedido! Bem-vindo ${user.nome}`, {
          onClose: () => {
            setUsuarioConectado(user);
            history.push('/');
          }
        });
      } else {
        setLoginInvalido(true); // Atualizar o estado para mostrar a mensagem de erro
        console.log('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.log('Ocorreu um erro ao realizar o login:', error);
    }
  };

  return (
    <div className="login-clContainerWrapper container-fluid">
      <div className="card login-clContainer" style={{ width: '18rem' }}>
        <h1 className="card-img-top" alt="...">LOGIN</h1>
        <div className="card-body">
          <div className="card-text d-flex flex-column">
            <label>Login:</label>
            <input type="text" value={form.login} onChange={(e) => setForm({ ...form, login: e.target.value })}></input>
            <br />
            <label>Senha:</label>
            <input type="password" value={form.senha} onChange={(e) => setForm({ ...form, senha: e.target.value })}></input>
            {loginInvalido && <p className="error-message">Erro! Login ou Senha inválidos</p>}
          </div>
          <button className="btn btn-primary login-btn" onClick={handleLogin}>Logar</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};
