import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    borderRadius: 0,
    boxShadow: 'none',
    borderTopStyle: 'solid',
    borderTopWidth: 8,
    minWidth: 150,
  },
  active: {
    borderTopColor: 'blue',
  },
  inactive: {
    borderTopColor: 'black',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
};

class SimpleCard extends React.Component {
  state = {
    isSelected: this.props.isSelected,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isSelected: nextProps.isSelected });
  }

  render() {
    const { classes, name, count } = this.props;

    return (
      <div>
        <Card className={classNames(classes.card, this.state.isSelected ? classes.active : classes.inactive)} role={name}>
          <CardContent role={name}>
            <Typography className={classes.title} color="textSecondary" role={name}>
              {name}
            </Typography>
            <Typography variant="headline" component="h1" role={name}>
              {count}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
