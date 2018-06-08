import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left'
  },
  flexSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  noWrap: {
    flexWrap: 'nowrap'
  },
  year: {
    fontSize: '1.25rem',
    lineHeight: '1.4',
    color: '#ff3f5f'
  },
  headline: {
    fontSize: '1.625rem',
    lineHeight: '1.23'
  },
  hr: {
    height: '1px',
    width: '100%'
  }
};

const Collection = props => {
  console.log('props', props);
  const {
    classes,
    name,
    year
    // date, works_count
  } = props;

  return (
    <Grid item xs={12} md={5} lg={3} className={classes.root}>
      <h2 className={classes.year}>{year}</h2>
      <h3 className={classes.headline}>{name}</h3>
    </Grid>
  );
};

Collection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Collection);
