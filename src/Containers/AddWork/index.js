import React, { Component } from 'react';
import Toolbar from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';

import FirstStep from './FirstStep';
import SecondStep from './SecondStep';

import './index.css';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    flexWrap: 'wrap',
    fontFamily: 'Anonymous Pro'
  }
};

class AddWork extends Component {
  state = {
    preview: undefined
  };

  constructor(props) {
    super(props);
    this.onFileUpload = this.onFileUpload.bind(this);
    this.removePreview = this.removePreview.bind(this);
  }

  onFileUpload(file) {
    this.setState({ preview: file[0].preview });
  }

  removePreview() {
    this.setState({ preview: undefined });
  }

  render() {
    const { classes } = this.props;
    const { preview } = this.state;

    return (
      <Toolbar className={classes.root}>
        <FirstStep
          preview={preview}
          onFileUpload={this.onFileUpload}
          removePreview={this.removePreview}
        />

        <SecondStep />
      </Toolbar>
    );
  }
}

export default withStyles(styles)(AddWork);
