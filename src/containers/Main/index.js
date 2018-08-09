import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ChatIcon from '@material-ui/icons/Chat';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = {
  root: {
    flexGrow: 1,
  },
};

class Main extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.handlePageTransition(value);
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <Paper className={classes.root} square>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab style={{width: '33%'}} icon={<DirectionsCarIcon />} />
            <Tab style={{width: '33%'}} icon={<RestaurantIcon />} />
            <Tab style={{width: '33%'}} icon={<ChatIcon />} />
          </Tabs>
        </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>Item One</TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);