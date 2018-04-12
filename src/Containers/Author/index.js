import React, { Component } from 'react';
import Toolbar from 'material-ui/Toolbar';

class Author extends Component {
  render() {
    console.log('props', this);
    return (
      <Toolbar>
        <p>Author</p>
      </Toolbar>
    );
  }
}

export default Author;
