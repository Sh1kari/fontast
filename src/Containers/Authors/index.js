import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import TextField from '../../Components/TextField';
import Loader from '../../Components/Loader';
import Error from '../../Components/Error';
import Author from './Author';
import Sorting from './Sorting';

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
  justifyContentEnd: {
    justifyContent: 'flex-end'
  }
};

const url = 'api/authors/';

class Authors extends Component {
  constructor(props) {
    super(props);
    this._onKeyPress = this._onKeyPress.bind(this);
    this._onSortClick = this._onSortClick.bind(this);
  }

  state = {
    authors: [],
    isFetching: false,
    error: null,
    currentSorting: 'new'
  };

  componentDidMount() {
    this.setState({ isFetching: true });
    this.fetch(url);
  }

  fetch(url) {
    this.setState({ isFetching: true });

    fetch(url)
      .then(data => data.json())
      .then(authors => this.setState({ authors, isFetching: false }))
      .catch(({ message }) => {
        this.setState({ error: message, isFetching: false });
      });
  }

  _onKeyPress(e) {
    if (e.key === 'Enter') {
      const filter = e.target.name;
      const value = e.target.value;
      const fetchUrl = value ? `${url}?${filter}=${value}` : url;

      this.fetch(fetchUrl);
    }
  }

  _onSortClick(e) {
    const currentSorting = e.target.dataset.name;
    this.setState({ currentSorting });
  }

  renderAuthors() {
    const { isFetching, authors } = this.state;
    const { classes } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (!authors.length) {
      return <h3>There is no authors.</h3>;
    }

    return (
      <Grid item xs={12}>
        <div className={classes.flexSpaceBetween}>
          {authors.map(author => <Author key={author.name} {...author} />)}
        </div>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;
    const { error, currentSorting } = this.state;
    const sortingStyles = [classes.flex, classes.justifyContentEnd].join(' ');

    const sorting = ['popular', 'new'];

    if (error) {
      return <Error errorText={error} />;
    }

    return (
      <Toolbar className={classes.root}>
        <Grid container className={classes.flex}>
          <Grid item xs={12} md={6}>
            <TextField
              id="search"
              name="name"
              placeholder="Search by name among 165 authors"
              fullWidth
              onKeyPress={this._onKeyPress}
            />
          </Grid>

          <Grid item xs={12} className={sortingStyles}>
            {sorting.map(sort => (
              <Sorting
                key={sort}
                sort={sort}
                currentSorting={currentSorting}
                onClick={this._onSortClick}
              />
            ))}
          </Grid>

          {this.renderAuthors()}
        </Grid>
      </Toolbar>
    );
  }
}

Authors.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Authors);
