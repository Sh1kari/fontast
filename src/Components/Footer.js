import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';

const styles = {
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column'
  },
  root: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontStretch: 'normal',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    background: 'white'
  },
  margin: {
    margin: '0 10px'
  },
  footer: {
    marginTop: '31px',
    color: '#9b9b9b',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '1.43',
    fontSize: '.875rem'
  }
};

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.root}>
        <Toolbar className={classes.flex}>
          <div>
            <a href="https://www.facebook.com/" className={classes.margin}>
              Facebook
            </a>

            <a href="https://www.instagram.com/" className={classes.margin}>
              Instagram
            </a>
          </div>

          <div className={classes.flex}>
            <div className={classes.footer}>&#169;&#160;2018 Fontast</div>
          </div>
        </Toolbar>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
