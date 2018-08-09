import React, { Component } from 'react';
import './App.css';

import AppBarComponent from './components/AppBarComponent';
import MainContainer from './containers/Main';

const pages = [
  'Transport',
  'Food',
  'Chat'
]

class App extends Component {
  state = {
    pageIndex: 1
  }

  handlePageTransition = (index) => {
    this.setState({
      pageIndex: index
    })
  }

  render() {
    return (
      <div>
        <AppBarComponent page={ pages[this.state.pageIndex] }/>
        <MainContainer handlePageTransition={ this.handlePageTransition }/>
      </div>
    );
  }
}

export default App;
