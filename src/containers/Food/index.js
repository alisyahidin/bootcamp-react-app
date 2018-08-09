import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import Aux from '../../hoc/Auxiliary';

const images = [
  {
    link: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0245bb4e87077312cc3d102e68c1efd&auto=format&fit=crop&w=500&q=60'
  },
  {
    link: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a5e4cac8bcaf69ffaf5d3b1c2b063e4&auto=format&fit=crop&w=500&q=60'
  },
  {
    'link': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=67fb2e7b1fbe39b18b51146234ef38aa&auto=format&fit=crop&w=500&q=60'
  }
]

export default class Food extends Component {
  render() {
    return (
      <Aux>
        <Carousel
          showStatus={ false }
          showThumbs={ false }
          infiniteLoop={ true }
          autoPlay={ true }
          interval={ 3000 }
        >
          { images.map((image, index) => {
            return (
              <div key={ index }>
                <img alt={ `Carousel ${index}` } src={ image.link } />
              </div>
            )
          }) }
        </Carousel>
      </Aux>
    );
  }
}
