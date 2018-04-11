import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

const styles = {
  root: {
    flexGrow: 1,
    fontStyle: 'italic'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};

class Header extends Component {
  render() {
    const { classes, onOpenModal } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.flex}>
            <div>
              <div>
                <Link to="/collections">Collections</Link>&nbsp;
                <Link to="/authors">Authors</Link>
              </div>

              <div>
                <Link to="/inReview">In review</Link>&nbsp;
                <Link to="/blog">Blog</Link>
              </div>
            </div>

            <div>
              <Link to="/">FONTAST</Link>
            </div>

            <div>
              <div>
                <Link to="/addWork">+ Add work</Link>
              </div>
              <div>
                <Link to="/about">About</Link>&nbsp;
                <div onClick={onOpenModal}>Login</div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
