import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><a onClick={this.props.handleNavLink('home')} href="">Home</a></li>
          <li><a onClick={this.props.handleNavLink('about')} href="">About</a></li>
          <li><a onClick={this.props.handleNavLink('contact')} href="">Contact</a></li>
        </ul>
      </div>
    );
  }
}
