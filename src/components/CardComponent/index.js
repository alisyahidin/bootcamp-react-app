import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    display: 'flex',
    height: '5rem'
  },
  cover: {
    width: '5rem',
    height: '5rem',
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }
});

function CardComponent(props) {
  const { classes, restaurant } = props;

  return (
      <Card className={classes.card} style={{ width: '100%' }}>
        <CardMedia
          className={classes.cover}
          image={ restaurant.image }
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography variant="subheading">
            { restaurant.name }
          </Typography>
          <Typography color="textSecondary">
            { restaurant.address }
          </Typography>
        </CardContent>
      </Card>
  );
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardComponent);