import React, { useState } from 'react';
import "./Service.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';


export const Login = () => {
  const [form, setForm] = useState({ login: '', senha: '' });

  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/usuarios');
      const data = await response.json();

      const user = data.find((user) => user.username === form.login && user.password === form.senha);
      
      if (user) {
        toast.success('Login bem-sucedido! Bem vindo Shrek, o admin', {
          onClose: () => {
            history.push('/');
          }
        });
      } else {
        console.log('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.log('Ocorreu um erro ao realizar o login:', error);
    }
  };

  return (
    <div className='clContainerWrapper'>
        <div className="card clContainer" style={{ width: '18rem' }}>
        <h1 src="..." className="card-img-top" alt="...">LOGIN </h1>
        <div className="card-body">
            <div className='card-text d-flex flex-column'>
            <label>Login: </label>
            <input type='text' value={form.login} onChange={(e) => setForm({ ...form, login: e.target.value })}></input>
            <br/><label>Senha: </label>
            <input type='password' value={form.senha} onChange={(e) => setForm({ ...form, senha: e.target.value })}></input>
            </div>
            <button className="btn btn-primary" onClick={handleLogin}>Ok</button>
            <ToastContainer />
        </div>
        </div>
    </div>
  );
};
