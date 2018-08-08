import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ScaleLoader } from 'react-spinners';

import axios from 'axios';

const styles = {
  card: {
    maxWidth: '70vw',
    margin: '0 auto 5rem',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class NewsDetail extends Component {
  state = {
    post: null,
    loader: true
  }

  componentDidMount() {
    axios.get('https://id.techinasia.com/wp-json/techinasia/3.0/posts/' + this.props.match.params.slug)
    .then(response => {
      this.setState({
        post: response.data.posts[0],
        loader: false
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        { this.state.loader &&
          <div style={{
            display: this.state.loader === true ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            height: '75vh'
          }}>
            <ScaleLoader
              color="grey"
              loading={this.state.loader}
            />
          </div> }
          { !this.state.loader &&
          <Card className={this.props.classes.card}>
            <CardMedia
              className={this.props.classes.media}
              image={this.state.post.seo.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <h1 dangerouslySetInnerHTML={ { __html: this.state.post.title} }>
              </h1>
              <div dangerouslySetInnerHTML={ { __html: this.state.post.content } }>
              </div>
            </CardContent>
          </Card>
        }
      </div>
    );
  }
}

NewsDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsDetail);
