import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const styles = {
  list: {
    width: '250px',
  }
};

const DrawerComponent = (props) => {
  const { classes } = props;

  const sideList = (
    <div className={classes.list}>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <SwipeableDrawer
        open={props.drawerOpen}
        onClose={props.handleDrawerToggle(false)}
        onOpen={props.handleDrawerToggle(true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={props.handleDrawerToggle(false)}
          onKeyDown={props.handleDrawerToggle(false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

DrawerComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DrawerComponent);