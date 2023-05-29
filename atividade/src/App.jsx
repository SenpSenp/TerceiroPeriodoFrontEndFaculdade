import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TelaHome } from './Telas/Home/Home';
import { CardContainer } from './Componentes/CardContainer/CardContainer';
import { Carrossel } from './Componentes/Carrossel/Carrossel';
import { TelaLogin } from './Telas/Login/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TelaHome} />
        <Route path="/card-container" component={CardContainer} />
        <Route path="/carrossel" component={Carrossel} />
        <Route exact path= "/Login" component = {TelaLogin}/>
      </Switch>
    </Router>
  );
};

export default App;
