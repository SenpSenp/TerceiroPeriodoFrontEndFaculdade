import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Telas/Home/Home';
import { CardContainer } from './Componentes/CardContainer/CardContainer';
import { Carrossel } from './Componentes/Carrossel/Carrossel';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/card-container" component={CardContainer} />
        <Route path="/carrossel" component={Carrossel} />
      </Switch>
    </Router>
  );
};

export default App;
