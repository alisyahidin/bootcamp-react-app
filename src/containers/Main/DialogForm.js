import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
  form: {
    width: 300,
    display: 'flex',
    flexDirection: 'column'
  }
}

export default class DialogForm extends React.Component {
  state = {};

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClick(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add new Restaurant</DialogTitle>
        <DialogContent style={ styles.form }>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
          />

          <TextField
            margin="dense"
            id="image"
            label="Image URL"
            type="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClick(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={this.props.handleClick(false)} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}