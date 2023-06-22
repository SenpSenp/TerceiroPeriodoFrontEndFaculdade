import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import { TelaHome } from './Telas/Home/Home';
import { TelaLogin } from './Telas/Login/Login';
import TelaProduto from './Telas/Produto/Produto';
import { TelaPerfil } from './Telas/Perfil/Perfil';

const App = () => {
  const [usuarioConectado, setUsuarioConectado] = useState(null);

  const handleLogout = () => {
    setUsuarioConectado(null);
  };

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        usuarioConectado ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
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
        <PrivateRoute exact path="/perfil" component={TelaPerfil} />

      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
