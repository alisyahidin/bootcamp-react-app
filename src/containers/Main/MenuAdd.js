import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';

import DialogForm from './DialogForm';

const styles = theme => ({
  root: {
    position: 'fixed',
    bottom: '1rem',
    right: '1rem'
  },
  lightTooltip: {
    background: '#333',
    color: theme.palette.text.white,
    boxShadow: theme.shadows[1],
    fontSize: '1rem',
    marginRight: -3
  }
});

class MenuAdd extends React.Component {
  state = {
    open: false,
  };

  handleClick = value => () => {
    this.setState({ open: value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Tooltip title="Add New" placement="left" classes={{ tooltip: classes.lightTooltip }}>
          <Button
            onClick={this.handleClick(true)}
            style={{ borderRadius: '50%', padding: 0 }}
          >
            <AddCircleIcon style={{ fontSize: '5rem' }} color="secondary" />
          </Button>
        </Tooltip>
        <DialogForm open={this.state.open} handleClick={this.handleClick} />
      </div>
    );
  }
}

MenuAdd.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAdd);
