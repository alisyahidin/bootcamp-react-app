import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function RestaurantBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            <Button
              color="primary"
              onClick={props.handleRestaurantToggle(false)}
            >
              <ArrowBackIcon />
            </Button>
          </Typography>
          <Typography variant="title" color="inherit" align="center">
            Baso
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

RestaurantBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RestaurantBar);
