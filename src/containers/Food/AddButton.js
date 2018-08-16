import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
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

class AddButton extends React.Component {
  state = {
    open: false
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
            <AddCircleIcon style={{ fontSize: '5rem' }} color="primary" />
          </Button>
        </Tooltip>
        <DialogForm
          open={this.state.open}
          handleClick={this.handleClick}
          data={this.state.data}
          handleFormChange={this.props.handleFormChange}
          handleStore={this.props.handleStore}
        />
      </div>
    );
  }
}

AddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButton);
