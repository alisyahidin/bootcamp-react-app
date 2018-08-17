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
  handleClick = () => {
    this.props.state.dialogType === 'Create' ? this.props.postData() : this.props.putData(this.props.idUpdate, this.props.payload)()
    this.props.controlDialogForm(false)()
  }

  render() {
    return (
      <Dialog
        open={this.props.state.openDialog}
        onClose={this.props.controlDialogForm(false)}
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
            value={ this.props.payload.name }
          />

          <TextField
            margin="dense"
            id="image"
            label="Image URL"
            type="text"
            onChange={this.props.handleFormChange}
            value={ this.props.payload.image }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={ this.props.controlDialogForm(false) } color="primary">
            Cancel
          </Button>
          <Button onClick={ this.handleClick } color="primary">
            { this.props.state.dialogType }
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}