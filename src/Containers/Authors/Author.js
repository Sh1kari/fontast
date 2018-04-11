import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import SvgIcon from '../../Components/SvgIcon';

import './Author.css';

const styles = {
  flex: {
    display: 'flex'
  },
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
  },
  worksWrapper: {
    // width: '280px'
  }
};

const Author = props => {
  console.log('props', props);
  const {
    classes,
    authorIndex,
    name,
    works_count,
    likes_count,
    last_works
  } = props;

  const authorStyles = [classes.flexSpaceBetween, classes.noWrap].join(' ');

  const { protocol, port, hostname } = window.location;
  const url = `${protocol}//${hostname}:${port}/media`;
  const wrapperIndexClass = authorIndex % 2 ? 'evenImg' : 'oddImg';
  const workWrapper = [classes.worksWrapper, wrapperIndexClass].join(' ');
  console.log('url', url, workWrapper);

  return (
    <Grid item xs={12} md={6} lg={4}>
      <div className={classes.worksWrapper}>
        {last_works.map(({ content, id, image_original }, index) => {
          console.log('img', index, image_original);

          return (
            <img
              key={`${id}-${content}`}
              src={`http://194.67.208.233:8000/media/${image_original}`}
              className={`${wrapperIndexClass}${index}`}
            />
          );
        })}
      </div>
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
