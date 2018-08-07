import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Bottom from '../../components/Bottom/Bottom';
import CardComp from '../../components/Card/CardComp';
import NewsDetail from '../../components/NewsDetail/NewsDetail';
import Aux from '../../hoc/Auxiliary';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class News extends Component {
  render() {
    return (
      <BrowserRouter>
        <Aux>
            <Header />
            { console.log(this.props.state) }
            <Switch>
              <Route exact path="/" render={() => {
                return <CardComp
                  loader={this.props.state.loader}
                  data={this.props.state.payload} />
              }} />
              { this.props.state.payload.map(datum => {
                return <Route key={datum.id} path={`/${datum.slug}`} render={() => {
                  return <NewsDetail
                    key={datum.id}
                    content={datum.content}
                    title={datum.title}
                    image={datum.featured_image.source}
                  />
                }} />
              }) }
              <Redirect from="*" to="/" />
            </Switch>
          <Bottom />
        </Aux>
      </BrowserRouter>
    );
  }
}