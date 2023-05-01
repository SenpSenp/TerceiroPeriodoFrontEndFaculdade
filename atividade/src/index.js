import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './view/Home/Home';
import Login from './view/Login/Login';
import Ajuda from './view/Ajuda/Ajuda';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Header from './layout/header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

 <BrowserRouter>

   <div className='container d-flex flex-column min-vh-100'>

    <Header />

    <Switch>

      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />

    </Switch>

   </div>

 </BrowserRouter>
    
  </React.StrictMode>
);