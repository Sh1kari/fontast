import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';

import './Footer.css'

const styles = {
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
  },
  margin: {
    margin: '0 10px',
  }
};

class Footer extends Component {
  render () {
    const { classes } = this.props;

    return (
      <footer>
        <Toolbar className={classes.flex}>
          <div>
            <a
              href='https://www.facebook.com/'
              className={classes.margin}
            >
              Facebook
            </a>

            <a
              href='https://www.instagram.com/'
              className={classes.margin}
            >
              Instagram
            </a>
          </div>

          <div className={classes.flex}>
            @2018 Fontast
          </div>
        </Toolbar>
      </footer>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
