import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { NavBar, Icon } from 'antd-mobile';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
      </div>
    );
  }
}

export const NavbarComponent = () => {
  return (
    <div>
      <NavBar
        mode="dark"
        leftContent="Back"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
    </div>
  );
};


export default App;
