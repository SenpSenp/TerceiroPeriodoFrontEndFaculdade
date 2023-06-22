import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect } from 'react-router-dom';

const EditarCadastro = ({ handleHeaderAtualizado }) => {
  const usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
  const nomeUsuario = usuarioConectado?.nome || 'usuário';
  const usernameUsuario = usuarioConectado?.username || 'login';
  const senhaUsuario = usuarioConectado?.password || 'senha';

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
    <div>
      <h2>Editar Cadastro</h2>
      <form>
        <label htmlFor="NOME">Nome:</label>
        <input
          type="text"
          id="NOME"
          value={DADOS.NOME}
          onChange={(e) => setDADOS({ ...DADOS, NOME: e.target.value })}
        />

        <label htmlFor="USERNAME">Username:</label>
        <input
          type="text"
          id="USERNAME"
          value={DADOS.USERNAME}
          onChange={(e) => setDADOS({ ...DADOS, USERNAME: e.target.value })}
        />

        <label htmlFor="SENHA">Senha:</label>
        <input
          type="password"
          id="SENHA"
          value={DADOS.SENHA}
          onChange={(e) => setDADOS({ ...DADOS, SENHA: e.target.value })}
        />

        <button type="button" onClick={handleEditarCadastro}>
          Editar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditarCadastro;
