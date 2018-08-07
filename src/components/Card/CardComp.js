import React, { Component } from 'react';
import SingularCard from './SingularCard/SingularCard';
import { ScaleLoader } from 'react-spinners';

export default class CardComp extends Component {
  render() {
    return (
        <div style={{ marginBottom: '5rem' }}>
          <div style={{
            display: this.props.loader === true ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            height: '75vh'
          }}>
            <ScaleLoader
              color="grey"
              loading={this.props.loader}
            />
          </div>
          { this.props.data.map((datum, index) => {
            return (
              <SingularCard
                key={index}
                title={datum.seo.title}
                excerpt={datum.seo.description}
                author={datum.author}
                image={datum.featured_image}
                link={datum.slug}
                />
              )
          }) }
        </div>
    );
  }
}
