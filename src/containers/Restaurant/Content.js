import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function CardComponent(props) {
  const { classes } = props;
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={ props.restaurant.image }
        title={ props.restaurant.name }
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          { props.restaurant.name }
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardComponent);