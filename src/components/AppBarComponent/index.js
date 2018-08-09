import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import DrawerComponent from '../DrawerComponent';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class AppBarComponent extends Component {
  state = {
    drawerOpen: false
  }

  handleDrawerToggle = (toggle) => () => {
    this.setState({
      drawerOpen: toggle
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={ this.handleDrawerToggle(true) } className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DrawerComponent drawerOpen={ this.state.drawerOpen } handleDrawerToggle={ this.handleDrawerToggle } />
      </div>
    );
  }
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarComponent);