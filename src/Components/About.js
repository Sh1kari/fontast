import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import ShareWithFriends from '../Containers/ShareWithFriends';

const styles = {
  root: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  mainTextStyle: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center'
  },
  header: {
    fontFamily: 'Rubik',
    fontSize: '1.65rem',
    lineHeight: '1.23'
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.5'
  },
  share: {
    marginTop: '60px'
  }
};

const About = props => {
  const { classes } = props;

  const shareStyles = [classes.flex, classes.share].join(' ');

  return (
    <Toolbar className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.flex}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.header}>
              Fontast — это база лучших образцов каллиграфии и леттеринга
            </h1>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.flex}>
          <Grid item xs={12} md={6}>
            <p className={classes.text}>
              Коллекция помогает начинающим каллиграфам и опытным дизайнерам
               увидеть разнообразие решений и найти вдохновение.
            </p>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.flex}>
          <Grid item xs={12} md={6}>
            <h1 className={classes.header}>Наши ближайшие планы</h1>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.flex}>
          <Grid item xs={12} md={6}>
            <p className={classes.text}>
              Создавать коллекции. Следить за автором, чтобы узнавать о новых
              работах.
            </p>
          </Grid>
        </Grid>

        <Grid item xs={12} className={shareStyles}>
          <ShareWithFriends />
        </Grid>
      </Grid>
    </Toolbar>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
