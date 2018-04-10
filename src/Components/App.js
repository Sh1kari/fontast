import React, { Component } from 'react';
import Header from './Main/Header';
import Footer from './Main/Footer';
import routes from '../routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>{routes()}</main>

        <Footer />
      </div>
    );
  }
}

export default App;
