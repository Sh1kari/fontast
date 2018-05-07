import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import TextField from '../../Components/TextField';

const styles = {
  flex: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  symbols: {
    fontFamily: 'Playfair Display',
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
    marginTop: '93px',
    fontSize: '38px',
    fontWeight: 'bold',
    lineHeight: '1.21',
    letterSpacing: 'normal'
  }
};

class SecondStep extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} className={classes.flex}>
          <span className={classes.symbols}>2</span>
          <span className={classes.name}>Decode the text</span>
        </Grid>

        <Grid item xs={12} className={classes.flex}>
          <p>Not necessary</p>
        </Grid>

        <Grid item xs={12} className={classes.flex}>
          <TextField
            className="text-input"
            name="transcript"
            label="Transcript"
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SecondStep);
