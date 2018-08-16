import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddSubscriber from './AddSubscriber';
import Button from '@material-ui/core/Button';
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
    selectedRole: '',
  };

  handleClick = (event) => {
    this.setState({ selectedRole: event.target.getAttribute("role") }, () => {
      console.log(this.state.selectedRole)
    });
  };

  componentWillMount() {
    fetch('/api/backend/roles')
    .then((data) => data.json())
    .then((roles) => this.setState({roles}, () => this.setState({selectedRole: this.state.roles[0].name})));
  }

  render() {
    const { classes } = this.props;

    const cards = this.state.roles
      .sort((a, b) => a.rank > b.rank)
      .map((item) =>
      <CardActions key={item.rank}>
        <Button size="small" className={classes.card} onClick={this.handleClick}>
          <SimpleCard name={item.name} count={item.count} isSelected={item.name === this.state.selectedRole ? true : false} />
        </Button>
      </CardActions>
    );

    return (
      <div>
        <div className={classes.permissions}>
          <p className={classes.heading}>User Permissions</p>
          <AddSubscriber />
        </div>
        <div className={classes.cards}>
          {cards}
        </div>
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
