import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    borderRadius: 0,
    boxShadow: 'none',
    borderTopColor: 'black',
    borderTopStyle: 'solid',
    borderTopWidth: 8,
    minWidth: 150,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
};

function SimpleCard(props) {
  const { classes, name, number } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {name}
          </Typography>
          <Typography variant="headline" component="h1">
            {number}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
