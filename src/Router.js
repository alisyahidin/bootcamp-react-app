import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home, About, Contacts, Navbar } from './App';

export default class Router extends Component {
    render() {
        return (
          <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/contacts" component={ Contacts } />
              <Route path="/about" component={ About } />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
          </BrowserRouter>
        );
    }
}
