import React, { Component } from 'react';
import './index.css';

class Error extends Component {
  render() {
    const { errorText } = this.props;

    return (
      <div className="alert alert-danger" role="alert">
        {errorText || 'This is a danger alert—check it out!'}
      </div>
    );
  }
}

export default Error;
