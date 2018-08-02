import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';

export default class App extends Component {
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
      </div>
    );
  }
}

const Home = props => {
  return <h1>Home</h1>
}
const About = props => {
  return <h1>About</h1>
}
const Contacts = ({ match }) => {
  return (
    <div>
      <h1>Contact</h1>
      <ul>
        <li><Link to={`${match.url}/via-email`}>Contact us via email</Link></li>
        <li><Link to={`${match.url}/via-phone`}>Contact us via phone</Link></li>
        <li><Link to={`${match.url}/via-whatsapp`}>Contact us via whatsapp</Link></li>
      </ul>

      <Route path={`${match.url}/:contactId`} component={ Contact }/>
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a Contact.</h3>}
      />

    </div>
  )
}

const Contact = ({ match }) => {
  return (
    <div>
      <h1>{match.params.contactId}</h1>
    </div>
  )
}

const Navbar = props => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contacts">Contact</Link></li>
    </ul>
  )
}

export { Home, About, Contacts, Navbar }