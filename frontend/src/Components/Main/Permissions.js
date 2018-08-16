import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddSubscriber from './AddSubscriber';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import SimpleCard from './Card';
import CardActions from '@material-ui/core/CardActions';
import CustomizedTable from './Table';

const styles = {
  permissions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    padding: 0,
    margin: 0,
  },
  heading: {
    display: 'flex',
    marginLeft: 12,
  },
};

class Permissions extends React.Component {
  state = {
    roles: [],
    selectedRole: 'Administrator',
  };

  handleChange = (event) => {
    console.log(event.target);
    this.setState({ selectedRole: event.target.value });
  };

  componentWillMount() {
    fetch('/api/backend/roles')
    .then((data) => data.json())
    .then((roles) => this.setState({roles}));
  }

  render() {
    const { classes } = this.props;

    const cards = this.state.roles
      .sort((a, b) => a.rank > b.rank)
      .map((item) =>
      <CardActions key={item.rank}>
        <Button size="small" className={classes.card}>
          <SimpleCard name={item.name} number={item.count} />
        </Button>
      </CardActions>
    );

    return (
      <div>
        <div className={classes.permissions}>
          <p className={classes.heading}>User Permissions</p>
          <AddSubscriber />
        </div>
        <RadioGroup name="roles" className={classes.cards} value={this.state.selectedRole} onChange={this.handleChange}>
          {cards}
        </RadioGroup>
        <p className={classes.heading}>Administrators</p>
        <CustomizedTable />
      </div>
    );
  }
}

Permissions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Permissions);
