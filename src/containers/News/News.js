import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Bottom from '../../components/Bottom/Bottom';
import Aux from '../../hoc/Auxiliary';

export default class News extends Component {
    render() {
        return (
          <Aux>
            <Header />
            <Bottom />
          </Aux>
        );
    }
}
