import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carrinho from './Telas/Carrinhocompras/Carrinho';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import { TelaHome } from './Telas/Home/Home';
import { TelaLogin } from './Telas/Login/Login';
import TelaProduto from './Telas/Produto/Produto';
import { TelaPerfil } from './Telas/Perfil/Perfil';
import { CarrinhoProvider } from './Telas/Carrinhocompras/CarrinhoContext';

const App = () => {
  const [usuarioConectado, setUsuarioConectado] = useState(null);

  const handleLogout = () => {
    setUsuarioConectado(null);
  };

  return (
    <Router>
      <Header usuarioConectado={usuarioConectado} handleLogout={handleLogout} />
      <CarrinhoProvider>
      <Switch>
        <Route exact path="/" component={TelaHome} />
        <Route
          exact
          path="/login"
          render={() => <TelaLogin setUsuarioConectado={setUsuarioConectado} />}
        />
        <Route exact path="/produto/:id" component={TelaProduto} />
        <Route exact path="/perfil" component={TelaPerfil} />
        <Route exact path="/carrinho" component={Carrinho} /> {/* Adicionando a rota do Carrinho */}
        </Switch>
        </CarrinhoProvider>

      <Footer />
    </Router>
  );
};

export default App;
