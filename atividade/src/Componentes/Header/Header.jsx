import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import headerImg from './headerImg/headerImg.png';
import fotoPerfil from '../Perfil/foto/fotoPerfil.png';
import carrinhoImg from './headerImg/carrinhoImg.png';

const Header = ({ usuarioConectado, handleLogout, handleHeaderAtualizado }) => {
  const [nomeUsuario, setNomeUsuario] = useState(usuarioConectado?.nome || 'usuário');
  const [isAdmin, setIsAdmin] = useState(usuarioConectado?.admin || false);

  useEffect(() => {
    if (usuarioConectado?.nome) {
      setNomeUsuario(usuarioConectado.nome);
    }
    if (usuarioConectado?.admin) { 
      setIsAdmin(usuarioConectado.admin);
    }
  }, [usuarioConectado]);

  const atualizarHeader = () => {
    if (handleHeaderAtualizado) {
      handleHeaderAtualizado();
    }
  };

  const renderHeader = () => {
    if (usuarioConectado && isAdmin) {
      return (
        <div className="container Header_container">

          <a href="/" exact activeClassName="active">
            <img className="imgL" src={headerImg} alt="Imagem" />
          </a>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>

          <NavLink to="/cadastroproduto" exact activeClassName="active">
            Novo Produto
          </NavLink>

          <div className="search-container">
            <input type="text" placeholder="Pesquisar" />
            <button type="submit">Buscar</button>
          </div>

          <NavLink to="/carrinho" activeClassName="active">
          <img className="imgc" src={carrinhoImg} alt="Img" />
          </NavLink>

          <NavLink to="/perfil" exact activeClassName="active">
            <img className="imgP" src={fotoPerfil} alt="Imagem" />
          </NavLink>

          <p className="usuario">
            Logado como admin, <br />
            {nomeUsuario}!
          </p>

          <div>
            <a href="/" className="sair-button" onClick={handleLogout}>
              Sair
            </a>
          </div>
        </div>
      );
    } else if (usuarioConectado) {
      return (
        <div className="container Header_container">
          {/* Usuário logado */}
          <a href="/" exact activeClassName="active">
            <img className="imgL" src={headerImg} alt="Imagem" />
          </a>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>

          <div className="search-container">
            <input type="text" placeholder="Pesquisar" />
            <button type="submit">Buscar</button>
          </div>

          <NavLink to="/perfil" exact activeClassName="active">
            <img className="imgP" src={fotoPerfil} alt="Imagem" />
          </NavLink>


          {/* Talvez pegar uma png de carrinho pra substituir a palavra  carrinho de compras */}
          <NavLink to="/carrinho" activeClassName="active">
          <img className="imgc" src={carrinhoImg} alt="Img" />
          </NavLink>

          <p className="usuario">
            Bem-vindo, <br />
            {nomeUsuario}!
          </p>
          <div>
            <a href="/" className="sair-button" onClick={handleLogout}>
              Sair
            </a>
          </div>

        </div>
      );
    } else {
      return (
        <div className="container Header_container">
          {/* Usuário não logado */}
          <a href="/" exact activeClassName="active">
            <img className="imgL" src={headerImg} alt="Imagem" />
          </a>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>

          <div className="search-container">
            <input type="text" placeholder="Pesquisar" />
            <button type="submit">Buscar</button>
          </div>

          <NavLink to="/produto" exact activeClassName="active">
            Produto
          </NavLink>

          <NavLink to="/cadastrousuario" exact activeClassName="active">
            Cadastro
          </NavLink> 

          <NavLink to="/Login" exact activeClassName="active">
            Login
          </NavLink>
        </div>
      );
    }
  };

  return (
    <div>
      {renderHeader()}
      <button onClick={atualizarHeader} style={{ display: 'none' }}></button>
    </div>
  );
};

export default Header;
