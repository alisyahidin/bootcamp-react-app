import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  const { classes, food } = props;

  return (
    <Button style={{ border: 'none', padding: 0, margin: 0, width: '100%' }}>
      <Card className={classes.card} style={{ width: '100%' }}>
        <CardMedia
          className={classes.cover}
          image={ food.image }
          title="Live from space album cover"
        />
        <CardContent className={classes.content}>
          <Typography variant="subheading">
            { food.name }
          </Typography>
          <Typography color="textSecondary">
            { food.address }
          </Typography>
        </CardContent>
      </Card>
    </Button>
  );
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(CardComponent);