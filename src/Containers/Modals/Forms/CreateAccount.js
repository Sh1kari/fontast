import React, { Component } from 'react';
import CreateAccount from 'Components/Modals/Forms/CreateAccount';
import { registration } from 'Requests/requests';

class CreateAccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: ''
    };
    this._onChange = this._onChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }
  _onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    e.preventDefault();
  }
  _handleSubmit(e) {
    const { onCloseModal } = this.props;
    const { email, name, password } = this.state;
    registration(name, email, password);
    onCloseModal();
    e.preventDefault();
  }
  render() {
    const { email, name, password } = this.state;
    return (
      <CreateAccount
        submitForm={this._handleSubmit}
        onChange={this._onChange}
      />
    );
  }
}
export default CreateAccountContainer;
