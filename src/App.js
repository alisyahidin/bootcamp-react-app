import React, { Component } from 'react';
import './App.css';

import AppBarComponent from './components/AppBarComponent';
import MainContainer from './containers/Main';

class App extends Component {
  render() {
    return (
      <div>
        <AppBarComponent />
        <MainContainer />
      </div>
    );
  }
}

export default App;
