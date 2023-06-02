import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TelaHome } from './Telas/Home/Home';
import { TelaLogin } from './Telas/Login/Login';
import { TelaProduto } from './Telas/Produto/Produto';
import { TelaPerfil } from './Telas/Perfil/Perfil';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {TelaHome} />
        <Route exact path= "/login" component = {TelaLogin}/>
        <Route exact path= "/produto" component = {TelaProduto}/>
        <Route exact path= "/perfil" component = {TelaPerfil}/>

      </Switch>
    </Router>
  );
};

export default App;
