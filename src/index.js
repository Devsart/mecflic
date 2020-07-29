import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CategoryController from './pages/register/CategoryController';
import VideoController from './pages/register/VideoController';
import Home from './pages/home/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro/video" component={VideoController} />
      <Route exact path="/cadastro/categoria" component={CategoryController} />
      <Route component={()=>(<div>Errrroooooou</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// Learn more about service workers: https://bit.ly/CRA-PWA
