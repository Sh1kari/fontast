import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import Loader from '../../Components/Loader';
import Error from '../../Components/Error';
import Collection from './Collection';

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
  }
};

const url = 'api/collections/';

class Collections extends Component {
  state = {
    collections: [],
    isFetching: false,
    error: null
  };

  componentDidMount() {
    this.setState({ isFetching: true });
    this.fetch(url);
  }

  fetch(url) {
    this.setState({ isFetching: true });

    fetch(url)
      .then(data => data.json())
      .then(collections => this.setState({ collections, isFetching: false }))
      .catch(({ message }) => {
        this.setState({ error: message, isFetching: false });
      });
  }

  renderCollections() {
    const {
      isFetching
      // collections
    } = this.state;
    const collections = [
      {
        name: 'Scandinavian design',
        year: 'Начало XX века',
        date: 'Yesterday',
        works_count: 1
      },
      {
        name: 'Russian Constructivism',
        year: '1920–1940',
        date: '16 March',
        works_count: 51
      },
      {
        name: 'American Art Nouveau',
        year: '1960–1980',
        date: '4 February',
        works_count: 61
      },
      {
        name: 'Scandinavian design',
        year: 'Early 20th century',
        date: 'Yesterday',
        works_count: 4
      }
    ];
    const { classes } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (!collections.length) {
      return <h3>There is no collections.</h3>;
    }

    return (
      <Grid item xs={12}>
        <div className={classes.flexSpaceBetween}>
          {collections.map(collection => (
            <Collection
              key={`${collection.name}-${collection.year}`}
              {...collection}
            />
          ))}
        </div>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;
    const { error } = this.state;

    if (error) {
      return <Error errorText={error} />;
    }

    return (
      <Toolbar className={classes.root}>
        <h2>That page is currently unavailable.</h2>
        {/*<Grid container className={classes.flex}>*/}
        {/*<Grid item xs={12} className={classes.flex}>*/}
        {/*<Grid item xs={12} md={6}>*/}
        {/*<TextField*/}
        {/*id="search"*/}
        {/*name="name"*/}
        {/*placeholder="Search by collections"*/}
        {/*fullWidth*/}
        {/*onKeyPress={this._onKeyPress}*/}
        {/*/>*/}
        {/*</Grid>*/}
        {/*</Grid>*/}

        {/*{this.renderCollections()}*/}
        {/*</Grid>*/}
      </Toolbar>
    );
  }
}

Collections.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Collections);
