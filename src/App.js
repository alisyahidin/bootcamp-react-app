import React, { Component } from 'react';
import News from './containers/News/News';

import store from './redux/store';
import { getDataAction } from './redux/actions';

class App extends Component {
  fetchData = () => {
    store.dispatch(getDataAction());
  }

  componentDidMount() {
    this.fetchData()
    console.log(store.getState())
  }

  render() {
    return (
      <News state={ store.getState() } />
    );
  }
}

export default App;
