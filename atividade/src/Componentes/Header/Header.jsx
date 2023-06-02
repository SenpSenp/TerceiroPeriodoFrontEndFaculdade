import "./Header.css"
import { NavLink } from 'react-router-dom';

const Header = ()=>{

    return(
        <div className="container Header_container ">

            <NavLink to="/" exact activeClassName="active" >
            Home
            </NavLink>
            
            <NavLink to="/produto" exact activeClassName="active">
            Produto
            </NavLink>

            <NavLink to="/Login" exact activeClassName="active">
            Login
            </NavLink>
            
            {/* Talvez pegar uma png de carrinho pra substituir a palavra  carrinho de compras */}
            <NavLink to="/carrinho" activeClassName="active">
            Carrinho de Compras
            </NavLink>
      
            
           
        
        </div>
    )
}

export default Header