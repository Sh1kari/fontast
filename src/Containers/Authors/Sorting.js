import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = {
  sortingMargin: {
    marginLeft: '20px',
    lineHeight: '1.5'
  },
  currentSorting: {
    color: '#9b9b9b'
  }
};

const Sorting = props => {
  const { currentSorting, sort, onClick, classes } = props;

  const sortTitle = `${sort[0].toUpperCase()}${sort.slice(1)}`;
  const sortStyle =
    currentSorting === sort.toLowerCase()
      ? [classes.sortingMargin, classes.currentSorting].join(' ')
      : classes.sortingMargin;

  return (
    <p data-name={sort.toLowerCase()} className={sortStyle} onClick={onClick}>
      {sortTitle}
    </p>
  );
};

Sorting.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sorting);
