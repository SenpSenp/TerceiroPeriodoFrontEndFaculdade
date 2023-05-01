import "./Header.css"
import { NavLink } from 'react-router-dom';

const Header = ()=>{

    return(
        <div className="container Header_container ">

            <NavLink to="/" exact activeClassName="active" >
            Home
            </NavLink>
            
            <NavLink to="/login" exact activeClassName="active">
            Login
            </NavLink>

            <NavLink to="/cadastro" exact activeClassName="active">
            Cadastro
            </NavLink>
            
            
           
        
        </div>
    )
}

export default Header