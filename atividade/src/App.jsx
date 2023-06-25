import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import { TelaHome } from './Telas/Home/Home';
import { TelaLogin } from './Telas/Login/Login';
import TelaProduto from './Telas/Produto/Produto';
import { TelaPerfil } from './Telas/Perfil/Perfil';
import { TelaEditarCadastro } from './Telas/EditarLogin/EditarLogin';
import CadastroUsuario from './Telas/CadastroUsuario/CadastroUsuario';
import CadastroProduto from './Telas/CadastroProduto/CadastroProduto';

const App = () => {
  const [usuarioConectado, setUsuarioConectado] = useState(null);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem('usuarioConectado');

    if (usuarioSalvo) {
      setUsuarioConectado(JSON.parse(usuarioSalvo));
    }
  }, []);

  const handleLogout = () => {
    setUsuarioConectado(null);
    localStorage.removeItem('usuarioConectado');
  };

  const PrivateRouteConnected = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        usuarioConectado ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        usuarioConectado && usuarioConectado.admin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );

  const PrivateRouteLogedIn = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        usuarioConectado ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
  return (
    <Router>
      <Header usuarioConectado={usuarioConectado} handleLogout={handleLogout} />

      <Switch>
        <Route exact path="/" component={TelaHome} />
        <Route exact path="/login" render={() => <TelaLogin setUsuarioConectado={setUsuarioConectado} />} />
        <Route exact path="/produto/:id" component={TelaProduto} />
        <PrivateRouteConnected exact path="/perfil" component={TelaPerfil} />
        <PrivateRouteConnected exact path="/editarcadastro" component={TelaEditarCadastro} usuarioConectado={usuarioConectado} />
        <PrivateRouteLogedIn exact path="/cadastrousuario" component={CadastroUsuario} />
        <PrivateRouteAdmin exact path="/cadastroproduto" component={CadastroProduto} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;