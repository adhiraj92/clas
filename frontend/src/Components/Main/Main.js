import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Switch, Route} from 'react-router-dom';
import WebAudit from '../Main/WebAudit';
import ISearch from '../Main/ISearch';
import Permissions from '../Main/Permissions';
import Welcome from '../Main/Welcome';
import { styles } from '../../Styles/styles'

class Main extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/webaudit" component={WebAudit} />
          <Route exact path="/isearch" component={ISearch} />
          <Route exact path="/permissions" component={Permissions} />
        </Switch>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);
