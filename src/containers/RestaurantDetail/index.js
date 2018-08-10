import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
        <IconButton
          color="primary"
          onClick={this.props.handleRestaurantToggle(false)}
        >
          <ArrowBackIcon />
        </IconButton>

        <div className={classes.list}>
          { this.props.restaurant }
        </div>
      </Drawer>
    );
  }
}

RestaurantDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RestaurantDetail);
