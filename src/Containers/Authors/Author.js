import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import SvgIcon from '../../Components/SvgIcon';

const styles = {
  flexSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  noWrap: {
    flexWrap: 'nowrap'
  },
  headline: {
    fontSize: '1.625rem',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '1.23',
    letterSpacing: 'normal',
    textAlign: 'left'
  },
  hr: {
    height: '1px',
    width: '100%'
  }
};

const Author = props => {
  console.log('props', props);
  const { classes, name, works_count, likes_count } = props;
  const authorStyles = [classes.flexSpaceBetween, classes.noWrap].join(' ');

  return (
    <Grid item xs={12} md={5} lg={3}>
      <h3 className={classes.headline}>{name}</h3>
      <div className={authorStyles}>
        <div className="likes">
          <SvgIcon
            svgIcon="heart-black"
            fill="#1e1e1e"
            width="16px"
            height="15px"
            viewBox="0 0 100 1024"
          />&#160;
          {likes_count}
        </div>
        <hr className={classes.hr} />

        <div className="works">{works_count} works</div>
      </div>
    </Grid>
  );
};

Author.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Author);
