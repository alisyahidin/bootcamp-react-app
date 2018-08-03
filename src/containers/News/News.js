import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Bottom from '../../components/Bottom/Bottom';
import CardComp from '../../components/Card/CardComp';
import NewsDetail from '../../components/NewsDetail/NewsDetail';
import Aux from '../../hoc/Auxiliary';
import axios from 'axios';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class News extends Component {
  state = {
    data: [],
    loader: true
  }

  componentDidMount() {
    axios.get('https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15')
      .then(response => {
        this.setState({
          data: response.data.posts,
          loader: false
        })
      })
      .catch(error => alert('Please check your internet connection'))
  }

  render() {
    return (
      <BrowserRouter>
        <Aux>
            <Header />
            <Switch>
              <Route exact path="/" render={() => {
                return <CardComp
                  loader={this.state.loader}
                  data={this.state.data} />
              }} />
              { this.state.data.map(datum => {
                return <Route path={`/${datum.slug}`}render={() => {
                  return <NewsDetail
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