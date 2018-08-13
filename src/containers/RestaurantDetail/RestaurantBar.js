import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = {
  flex: {
    flexGrow: 1,
    textAlign: 'center'
  },
  iconButtonLeft: {
    marginLeft: -12
  },
  iconButtonRight: {
    marginRight: -10
  }
};

function RestaurantBar(props) {
  const { classes } = props;
  return (
    <AppBar position="static" color="default">
      <Toolbar variant="dense">
        <IconButton
          className={classes.iconButtonLeft}
          color="inherit"
          aria-label="Menu"
          onClick={props.handleRestaurantToggle(false)}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="subheading" color="inherit" className={classes.flex}>
          { props.restaurantName }
        </Typography>
        <IconButton
          className={classes.iconButtonRight}
          color="inherit"
        >
          <Badge badgeContent={99} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

RestaurantBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RestaurantBar);