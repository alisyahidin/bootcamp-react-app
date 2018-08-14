import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import RestaurantBar from './RestaurantBar';
import ListComponent from '../../components/ListComponent';

const styles = {
  list: {
    width: '100vw',
  }
};

class RestaurantDetail extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Drawer anchor="right" open={this.props.openDetailRestaurant} onClose={this.props.handleRestaurantToggle(false)}>
        <RestaurantBar
          restaurantName={this.props.restaurantName}
          handleRestaurantToggle={this.props.handleRestaurantToggle}
        />

        <div className={classes.list}>
          <ListComponent foodList={this.props.restaurantFoodList} />
        </div>
      </Drawer>
    );
  }
}

RestaurantDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RestaurantDetail);
