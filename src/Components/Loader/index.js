import React, { Component } from 'react';
import './index.css';

const loaderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

class Loader extends Component {
  render() {
    return (
      <div className="sk-circle">
        {loaderArray.map(item => (
          <div key={item} className={`sk-circle${item} sk-child`} />
        ))}
      </div>
    );
  }
}

export default Loader;
