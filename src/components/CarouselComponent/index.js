import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = (props) => {
  return (
    <div style={{ marginBottom: '1.2rem' }}>
      <Carousel
        showStatus={ false }
        showThumbs={ false }
        infiniteLoop={ true }
        autoPlay={ true }
        interval={ 3000 }
      >
        { props.images.map((image, index) => {
          return (
            <div key={ index }>
              <img alt={ `Carousel ${index}` } src={ image.link } />
            </div>
          )
        }) }
      </Carousel>
    </div>
  );
}

export default CarouselComponent;