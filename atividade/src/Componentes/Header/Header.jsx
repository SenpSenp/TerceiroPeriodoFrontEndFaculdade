import "./Header.css"
import { NavLink } from 'react-router-dom';
import headerImg from './headerImg/headerImg.png'
import carrinhoImg from './headerImg/carrinhoImg.png'
import fotoPerfil from "../Perfil/foto/fotoPerfil.png";

const Header = ()=>{

    return(
        <div className="container Header_container ">
            <img className="imgL" src={headerImg} alt="Imagem"  />
            <NavLink to="/" exact activeClassName="active" >
            Home
            </NavLink>
            
            <NavLink to="/produto" exact activeClassName="active">
            Produto
            </NavLink>

            <NavLink to="/Login" exact activeClassName="active">
            Login
            </NavLink>

            <div className="search-container">
                <input type="text" placeholder="Pesquisar"></input>
                <button type="submit">Buscar</button>
            </div>

            <img className="imgP" src={fotoPerfil} alt="Imagem"  />

            <p className="usuario">
                Bem-vindo, <br />
                usuário!
            </p>
                            
            <img className="imgC" src={carrinhoImg} alt="Imagem"  />
                  
        </div>
    )
}

export default Header