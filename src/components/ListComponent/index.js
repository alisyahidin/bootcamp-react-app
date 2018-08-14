import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const styles = theme => ({
  root: {
    width: '90vw',
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    marginLeft: '5vw'
  },
  badge: {
    top: 0,
    left: -27,
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
});

class ListComponent extends React.Component {
  render() {
    const { classes, foodList } = this.props;

    return (
      <div className={classes.root}>
        <List>
        { foodList.map((food, index) => {
          return (
            <ListItem key={index} className={classes.list}>
              <Badge color="primary" badgeContent={0} classes={{ badge: classes.badge }}>
                <ListItemText primary={food.name} />
              </Badge>
              <ListItemText primary={food.price} />
              <IconButton>
                <AddCircleIcon />
              </IconButton>
            </ListItem>
          )
        }) }
        </List>
      </div>
    );
  }
}

ListComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListComponent);