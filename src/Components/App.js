import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Collections from '../Containers/Collections';
import Header from './Main/Header';
import Footer from './Main/Footer';
import routes from '../routes';
import Modal from './Modals/Modal';
import CreateAccount from './Modals/Forms/CreateAccount';

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
    return (
      <div>
        <Header onOpenModal={this.onOpenModal} />

        <main>{routes()}</main>

        <Footer />
        <Modal isOpen={this.state.modalIsOpen} onCloseModal={this.onCloseModal}>
          <CreateAccount onCloseModal={this.onCloseModal} />
        </Modal>
      </div>
    );
  }
}

export default App;
