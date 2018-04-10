import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
// import SearchInput from '../../Components/SearchInput/index';
import TextField from '../../Components/TextField';
import Loader from '../../Components/Loader';
import Error from '../../Components/Error';
import SvgIcon from '../../Components/SvgIcon';

const styles = {
  root: {
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  flexSpaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  justifySpaceBetween: {
    justifyContent: 'space-between'
  },
  wrap: {
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

class Authors extends Component {
  state = {
    authors: [],
    isFetching: true,
    error: null
  };

  componentDidMount() {
    this.setState({ isFetching: true });
    this.fetch();
  }

  fetch() {
    fetch('api/authors/')
      .then(data => data.json())
      .then(authors => this.setState({ authors, isFetching: false }))
      .catch(({ message }) => {
        this.setState({ error: message, isFetching: false });
      });
  }

  render() {
    const { classes } = this.props;
    const { authors, isFetching, error } = this.state;
    const authorStyles = [classes.flexSpaceBetween, classes.noWrap].join(' ');

    if (isFetching && !authors.length) {
      return <Loader />;
    }

    if (error) {
      return <Error errorText={error} />;
    }

    return (
      <Toolbar className={classes.root}>
        <Grid container className={classes.flex}>
          <Grid item xs={12} md={6} lg={4}>
            {/*<SearchInput placeholder="Search by name among 165 authors" />*/}
            <TextField
              id="search"
              placeholder="Search by name among 165 authors"
              fullWidth
            />
          </Grid>

          {isFetching ? (
            <Loader />
          ) : (
            <Grid item xs={12}>
              <div className={classes.flexSpaceBetween}>
                {authors.map(({ name, works_count, likes_count }) => (
                  <Grid
                    key={`${name}-${works_count}`}
                    item
                    xs={12}
                    md={5}
                    lg={3}
                  >
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
                ))}
              </div>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    );
  }
}

Authors.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Authors);
