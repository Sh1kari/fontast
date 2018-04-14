import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import SvgIcon from '../SvgIcon';

const styles = {
  root: {
    flexGrow: 1,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    background: 'white'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  shadow: {
    boxShadow: 'none'
  },
  margin: {
    marginLeft: '20px'
  }
};

class Header extends Component {
  render() {
    const { classes, onOpenModal } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit" className={classes.shadow}>
          <Toolbar className={classes.flex}>
            <div>
              <div>
                <NavLink to="/collections">Collections</NavLink>
                <NavLink to="/authors" className={classes.margin}>
                  Authors
                </NavLink>
              </div>

              <div>
                <NavLink to="/inReview">In review</NavLink>&nbsp;
                <NavLink to="/blog" className={classes.margin}>
                  Blog
                </NavLink>
              </div>
            </div>

            <div>
              <NavLink to="/">
                <div>
                  <SvgIcon
                    svgIcon="logo"
                    fill="#1e1e1e"
                    width="191px"
                    height="35.2px"
                    viewBox="0 0 5500 1024"
                  />
                </div>
              </NavLink>
            </div>

            <div>
              <div>
                <NavLink to="/addWork">+ Add work</NavLink>
              </div>
              <div>
                <NavLink to="/about">About</NavLink>&nbsp;
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
