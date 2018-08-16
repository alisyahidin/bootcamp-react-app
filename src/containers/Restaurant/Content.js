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
  cardAction: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

class CardComponent extends React.Component {
  render() {
    const { classes, restaurant } = this.props;

    return (
      <Card>
        <CardMedia
          className={classes.media}
          image={ restaurant.image }
          title={ restaurant.name }
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="title" component="h2">
            { restaurant.name }
          </Typography>
        </CardContent>
        <CardActions style={styles.cardAction}>
          <Button size="small" color="primary">
            Update
          </Button>
          <Button size="small" color="primary" onClick={this.props.handleDelete}>
            Remove
          </Button>
        </CardActions>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardComponent);