import "./Components/Style.css";

import React from 'react';
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'

import Login from './Components/Login';
import MainPage from './Components/MainPage';
import Cadastro from './Components/Cadastro';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/cadastro" component={Cadastro}/>
            <Route exact path="/login" component={Login}/>
            <Route component={MainPage}/>
        </Switch>
    </Router>,
    document.getElementById('root')
)