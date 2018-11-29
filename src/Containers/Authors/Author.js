import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
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
    width: '53%'
  },
  worksWrapper: {
    width: '280px',
    margin: '0 auto 90px'
  }
};

class Author extends Component {
  constructor(props) {
    super(props);
    this.onImageClick = this.onImageClick.bind(this);
  }

  onImageClick(e) {
    const { authorid, workid } = e.target.dataset;
    this.props.history.push(`/author/${authorid}/work/${workid}`);
  }

  render() {
    const {
      classes,
      authorIndex,
      name,
      works_count,
      likes_count,
      last_works
    } = this.props;

    const authorStyles = [classes.flexSpaceBetween, classes.noWrap].join(' ');
    // const { protocol, port, hostname } = window.location;
    // const url = `${protocol}//${hostname}:${port}/media`;
    const wrapperIndexClass = authorIndex % 2 ? 'evenImg' : 'oddImg';
    return (
      <Grid item xs={12} md={6} lg={4}>
        <div className={classes.worksWrapper}>
          <div>
            {last_works.map(({ content, id, image_original }, index) => {
              return (
                <img
                  key={`${id}-${content}`}
                  data-workid={id}
                  data-authorid={this.props.id}
                  src={`http://194.67.208.233:8000/media/${image_original}`}
                  alt={`img-${name}`}
                  className={`${wrapperIndexClass}${index}`}
                  onClick={this.onImageClick}
                />
              );
            })}
          </div>
          <h3 className={classes.headline}>{name}</h3>
          <div className={authorStyles}>
            <div className={classes.flex}>
              <SvgIcon
                svgIcon="heart-black"
                fill="#1e1e1e"
                width="16px"
                height="15px"
                viewBox="0 0 100 1024"
              />
              &#160;
              {likes_count}
              &#160;
            </div>
            <hr className={classes.hr} />

            <div className={classes.flex}>{works_count} works</div>
          </div>
        </div>
      </Grid>
    );
  }
}

Author.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(Author));
