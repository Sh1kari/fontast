import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import {
  FacebookShareButton,
  FacebookShareCount,
  TwitterShareButton
} from 'react-share';

const styles = {
  flex: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: '10px'
  },
  button: {
    textTransform: 'capitalize',
    fontSize: '1rem',
    border: 'solid 1px #1e1e1e',
    marginLeft: '10px'
  }
};

const buttons = {
  facebook: {
    button: FacebookShareButton,
    count: FacebookShareCount
  },
  twitter: {
    button: TwitterShareButton,
    count: undefined
  }
};

class ShareWithFriends extends Component {
  render() {
    const { classes, counter = false } = this.props;
    const { protocol, port, hostname, pathname } = window.location;

    const shareUrl = `${protocol}//${hostname}:${port}${pathname}`;

    return (
      <Grid item xs={12}>
        <h4>Share with your friends</h4>
        <div className={classes.flex}>
          {Object.keys(buttons).map(name => {
            const ShareButton = buttons[name].button;
            const ShareCount = buttons[name].count;

            return (
              <ShareButton key={name} url={shareUrl}>
                <Button size="large" className={classes.button}>
                  {name}
                  {counter && ShareCount && <ShareCount url={shareUrl} />}
                </Button>
              </ShareButton>
            );
          })}
        </div>
      </Grid>
    );
  }
}

ShareWithFriends.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShareWithFriends);
