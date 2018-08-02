import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Bottom from '../../components/Bottom/Bottom';
import CardComp from '../../components/Card/CardComp';
import Aux from '../../hoc/Auxiliary';

export default class News extends Component {
    render() {
        return (
          <Aux>
            <Header />
            <CardComp />
            <Bottom />
          </Aux>
        );
    }
}
