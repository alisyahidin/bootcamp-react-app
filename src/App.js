import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  if ( action.type === 'PLUS' ) {
    return state + 1
  }
  if ( action.type === 'MINUS' ) {
    return state - 1
  }
  return state;
}

export const store = createStore(reducer)

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
        <CounterDisplay store={ store }/>
        <CounterControl store={ store }/>
      </div>
    );
  }
}

class CounterDisplay extends Component {
  render() {
    return (
      <div>{ this.props.store.getState() }</div>
    );
  }
}

class CounterControl extends Component {
  render() {
    return (
      <div>
        <button onClick={ () => { this.props.store.dispatch( { type: 'PLUS' } ) } }>Plus</button>
        <button onClick={ () => { this.props.store.dispatch( { type: 'MINUS' } ) } }>Minus</button>
      </div>
    );
  }
}


export default App;
