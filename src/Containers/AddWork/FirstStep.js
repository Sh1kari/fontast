import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import SvgIcon from '../../Components/SvgIcon';

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
  },
  noMargin: {
    margin: '0'
  },
  dropZoneWrapper: {
    marginTop: '30px',
    position: 'relative'
  },
  dropZone: {
    width: '130px',
    height: '130px',
    border: '1px solid black',
    alignItems: 'center'
  },
  removeWrapper: {
    width: '27px',
    height: '27px',
    backgroundColor: '#ff3f5f',
    borderRadius: '50%',
    position: 'absolute',
    right: '-13px',
    top: '-13px'
  }
};

class FirstStep extends Component {
  showUpload() {
    const { classes, preview, removePreview, onFileUpload } = this.props;

    const dropDownClass = [classes.dropZone, classes.flex].join(' ');

    if (preview) {
      return (
        <div>
          <div className={classes.removeWrapper} onClick={removePreview}>
            <span className="remove-icon" />
          </div>
          <img src={preview} alt="preview-img" />
        </div>
      );
    }

    return (
      <Dropzone
        className={dropDownClass}
        multiple={false}
        onDrop={onFileUpload}
      >
        <div>
          <SvgIcon
            svgIcon="plus-black"
            fill="#1e1e1e"
            width="16px"
            height="15px"
            viewBox="0 0 100 1024"
          />
        </div>
      </Dropzone>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} className={classes.flex}>
          <span className={classes.symbols}>1</span>
          <span className={classes.name}>Upload image</span>
        </Grid>

        <Grid item xs={12} className={classes.flex}>
          <p className={classes.noMargin}>.jpg или .png</p>
        </Grid>

        <Grid item xs={12} className={classes.flex}>
          <div className={classes.dropZoneWrapper}>{this.showUpload()}</div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FirstStep);
