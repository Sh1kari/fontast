import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import SearchInput from '../../Components/SearchInput/index';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'center'
  }
};

class Authors extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Toolbar className={classes.root}>
        <Grid item xs={12} md={6} lg={4}>
          <SearchInput placeholder="Search by name among 165 authors" />
        </Grid>
      </Toolbar>
    );
  }
}

Authors.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Authors);
