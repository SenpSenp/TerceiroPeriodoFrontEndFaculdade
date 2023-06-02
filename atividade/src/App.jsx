import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CarrinhoProvider } from './CarrinhoContext';
import { TelaHome } from './Telas/Home/Home';
import { TelaLogin } from './Telas/Login/Login';
import { TelaProduto } from './Telas/Produto/Produto';
import Carrinho from './Telas/Carrinhocompras/Carrinho';

const App = () => {
  return (
    <Router>
      <CarrinhoProvider>
        <Switch>
          <Route exact path="/" component={TelaHome} />
          <Route exact path="/login" component={TelaLogin} />
          <Route exact path="/produto" component={TelaProduto} />
          <Route exact path="/carrinho" component={Carrinho} /> {/* Adicionando a rota do Carrinho */}
        </Switch>
      </CarrinhoProvider>
    </Router>
  );
};

export default App;
