import React, { Component } from 'react';
import CreateAccount from 'Components/Modals/Forms/CreateAccount';

class CreateAccountContainer extends Component {
  state = {
    email: '',
    name: '',
    password: ''
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    const { onCloseModal } = this.props;
    onCloseModal();
    e.preventDefault();
  };
  render() {
    const { email, name, password } = this.state;
    return (
      <CreateAccount submitForm={this.handleSubmit} onChange={this.onChange} />
    );
  }
}
export default CreateAccountContainer;
