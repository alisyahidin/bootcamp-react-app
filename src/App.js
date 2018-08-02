import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BrowserRouter>
            <Switch>
                <Route path='/contact' component={ Contact } />
                <Route path='/about' component={ About } />
                <Route exact path='/' component={ Home } />
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

const Home = props => {
  return <h1>Home</h1>
}
const About = props => {
  return <h1>About</h1>
}
const Contact = props => {
  return <h1>Contact</h1>
}