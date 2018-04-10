import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  button: {
    textTransform: 'capitalize',
    fontSize: '1rem',
    border: 'solid 1px #1e1e1e',
    marginLeft: '10px'
  }
};

class ShareWithFriends extends Component {
  render() {
    const { classes } = this.props;

    const buttons = ['facebook', 'twitter'];

    return (
      <div>
        <h4>Share with your friends</h4>
        {buttons.map(button => {
          return (
            <Button size="large" className={classes.button}>
              {button}
            </Button>
          );
        })}
      </div>
    );
  }
}

ShareWithFriends.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ShareWithFriends);
