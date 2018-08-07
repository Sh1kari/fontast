import React, { Component } from 'react';
import Header from './Main/Header';
import Footer from './Main/Footer';
import routes from '../routes';
import CreateAccount from '../Containers/Modals/Forms/CreateAccount';
import Modal from './Modals/Modal';

class App extends Component {
  state = {
    modalIsOpen: false
  };
  onOpenModal = () => {
    this.setState({
      modalIsOpen: true
    });
  };
  onCloseModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };
  render() {
    console.log('props', this.props);
    return (
      <div>
        <Header
          onOpenModal={this.onOpenModal}
          onCloseModal={this.onCloseModal}
        />

        <main>{routes()}</main>

        <Footer />
        <Modal isOpen={this.state.modalIsOpen} onCloseModal={this.onCloseModal}>
          <CreateAccount onCloseModal={this.onCloseModal} />
        </Modal>
      </div>
    );
  }
}

// if (process.env.NODE_ENV !== 'production') {
//   const {whyDidYouUpdate} = require('why-did-you-update')
//   whyDidYouUpdate(React)
// }

export default App;
