import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import headerImg from './headerImg/headerImg.png';
import fotoPerfil from '../Perfil/foto/fotoPerfil.png';

const Header = ({ usuarioConectado, handleLogout }) => {
  const renderHeader = () => {
    if (usuarioConectado) {
      return (
        <div className="container Header_container">
          {/* Usuaário logado */}
          <a href="/" exact activeClassName="active">
            <img className="imgL" src={headerImg} alt="Imagem" />
          </a>  
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>

          <NavLink to="/produto" exact activeClassName="active">
            Produto
          </NavLink>

          <div className="search-container">
            <input type="text" placeholder="Pesquisar" />
            <button type="submit">Buscar</button>
          </div>

          <img className="imgP" src={fotoPerfil} alt="Imagem" />

          <p className="usuario">
            Bem-vindo, <br />
            {usuarioConectado.nome}!
          </p>

          <button className="sair-button" onClick={handleLogout}>
            Sair
          </button>

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

          <NavLink to="/produto" exact activeClassName="active">
            Produto
          </NavLink>

          <NavLink to="/Login" exact activeClassName="active">
            Login
          </NavLink>

          <div className="search-container">
            <input type="text" placeholder="Pesquisar" />
            <button type="submit">Buscar</button>
          </div>
        </div>
      );
    }
  };

  return <div>{renderHeader()}</div>;
};

export default Header;
