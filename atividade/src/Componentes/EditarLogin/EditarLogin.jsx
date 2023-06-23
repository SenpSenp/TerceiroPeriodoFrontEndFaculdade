import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';
import './EditarLogin.css'

const EditarCadastro = ({ handleHeaderAtualizado }) => {
  const usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
  const nomeUsuario = usuarioConectado?.nome || 'usuário';
  const usernameUsuario = usuarioConectado?.username || 'Digite seu login desejado';
  const senhaUsuario = usuarioConectado?.password || 'Digite sua senha desejada';

  const [DADOS, setDADOS] = useState({
    NOME: nomeUsuario,
    USERNAME: usernameUsuario,
    SENHA: senhaUsuario
  });

  const [redirectPerfil, setRedirectPerfil] = useState(false);

  const handleEditarCadastro = async () => {
    try {
      const { id, username: usernameConectado } = usuarioConectado;
      const url = `http://localhost:4000/usuarios/${id}`;

      if (DADOS.USERNAME.length < 5 || DADOS.SENHA.length < 5) {
        toast.error('Username e senha devem ter no mínimo 5 caracteres');
        return;
      }

      if (DADOS.USERNAME !== usernameConectado) {
        const response = await axios.get('http://localhost:4000/usuarios');
        const usuarios = response.data;
        const usernameExistente = usuarios.some((usuario) => usuario.username === DADOS.USERNAME);
        if (usernameExistente) {
          toast.error('Username já existe. Escolha outro username');
          return;
        }
      }

      await axios.put(url, {
        nome: DADOS.NOME,
        username: DADOS.USERNAME,
        password: DADOS.SENHA
      });

      const usuarioAtualizado = {
        ...usuarioConectado,
        nome: DADOS.NOME
      };
      localStorage.setItem('usuarioConectado', JSON.stringify(usuarioAtualizado));

      toast.success('Informações Alteradas!', {
        onClose: () => {
          handleHeaderAtualizado();
          setRedirectPerfil(true);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (redirectPerfil) {
    return <Redirect to="/perfil" />;
  }

  return (
    <div className='Editar-Container'>
      <h2 className='Editar-Titulo'>Editar Cadastro</h2>
      <form>
      <br/>
        <label htmlFor="NOME" className='Editar-Info'>NOME</label>
        <input className='Editar-Type'
          type="text"
          id="NOME"
          value={DADOS.NOME}
          onChange={(e) => setDADOS({ ...DADOS, NOME: e.target.value })}
        /><br/>

        <label htmlFor="USERNAME" className='Editar-Info'>USERNAME</label>
        <input className='Editar-Type'
          type="text"
          id="USERNAME"
          value={DADOS.USERNAME}
          onChange={(e) => setDADOS({ ...DADOS, USERNAME: e.target.value })}
        /><br/>

        <label htmlFor="SENHA" className='Editar-Info'>SENHA</label>
        <input className='Editar-Type'
          type="password"
          id="SENHA"
          value={DADOS.SENHA}
          onChange={(e) => setDADOS({ ...DADOS, SENHA: e.target.value })}
        /><br/>

        <button type="button" onClick={handleEditarCadastro} className='Editar-Botao'>
          EDITAR
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditarCadastro;
