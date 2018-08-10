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

import Transport from '../Transport';
import Food from '../Food';
import Chat from '../Chat';

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
    fixed: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.handlePageTransition(value);
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleScroll = (e) => {
    e.pageY > 55
      ?
      this.setState({
        fixed: true
      })
      :
      this.setState({
        fixed: false
      })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    const { classes, theme } = this.props;

    return (
      <div style={{ width: '100%' }}>
        <Paper className={classes.root} square
          style={{ position: this.state.fixed ? 'fixed' : '', top: '0px', zIndex: 1000, width: '100%' }}
        >
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
          style={{ marginTop: this.state.fixed ? '3rem' : '0rem'}}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Transport />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Food />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Chat />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);