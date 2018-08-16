import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
  form: {
    width: 300,
    display: 'flex',
    flexDirection: 'column'
  }
}

export default class DialogForm extends React.Component {
  handleSubmit = () => {
    this.props.handleStore()
    this.props.handleClick(false)()
  }

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
            onChange={this.props.handleFormChange}
          />

          <TextField
            margin="dense"
            id="image"
            label="Image URL"
            type="text"
            onChange={this.props.handleFormChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClick(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}