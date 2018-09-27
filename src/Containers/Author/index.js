import React, { Component } from 'react';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Loader from '../../Components/Loader';
import Error from '../../Components/Error';
import SvgIcon from '../../Components/SvgIcon';

const workUrl = '/api/symbols/';
const authorUrl = '/api/authors';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    flexWrap: 'wrap'
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  symbols: {
    margin: '0',
    color: '#ff3f5f',
    fontSize: '108px',
    fontWeight: '900',
    fontStyle: 'italic',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center'
  },
  name: {
    fontFamily: 'Rubik',
    position: 'absolute',
    marginTop: '32px',
    fontSize: '38px',
    fontWeight: 'bold',
    lineHeight: '1.21',
    letterSpacing: 'normal'
  },
  marginLeft: {
    marginLeft: '20px'
  }
};

class Author extends Component {
  state = {
    author: {},
    works: [],
    isFetching: false,
    error: null
  };

  componentDidMount() {
    const { match } = this.props;
    const { authorId } = match.params;
    const currentAuthorUrl = `${authorUrl}/${authorId}/`;
    const currentWorkUrl = `${workUrl}?author=${authorId}`;

    this.setState({ isFetching: true });

    Promise.all(
      [currentAuthorUrl, currentWorkUrl].map(url =>
        fetch(url).then(resp => resp.json())
      )
    )
      .then(([author, works]) =>
        this.setState({ author, works, isFetching: false })
      )
      .catch(({ message }) =>
        this.setState({ error: message, isFetching: false })
      );
  }

  render() {
    console.log('AUTHOR', this.state);

    const { classes } = this.props;
    const { author, error, isFetching } = this.state;
    const { symbols_list = [], name, likes_count, facebook, site } = author;

    if (isFetching) {
      return <Loader />;
    }

    if (error) {
      return <Error errorText={error} />;
    }

    return (
      <Toolbar className={classes.root}>
        <Grid item xs={12} className={classes.flex}>
          <span className={classes.symbols}>{symbols_list.join('')}</span>
          <span className={classes.name}>{name}</span>
        </Grid>

        <Grid item xs={4} className={classes.flex}>
          <SvgIcon
            svgIcon="heart-black"
            fill="#1e1e1e"
            width="16px"
            height="15px"
            viewBox="0 0 100 1024"
          />
          &#160;
          {likes_count}
          <span className={classes.marginLeft}>{site}</span>
          <a href={facebook} className={classes.marginLeft}>
            facebook
          </a>
        </Grid>
      </Toolbar>
    );
  }
}

export default withStyles(styles)(Author);
