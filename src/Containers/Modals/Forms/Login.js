import React, { Component } from 'react';
import Login from 'Components/Modals/Forms/Login';
import { login, sentPassword } from 'Requests/requests';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isPasswordSent: false
    };
    this._onChange = this._onChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._sentPassword = this._sentPassword.bind(this);
  }
  _onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  _sentPassword(e) {
    const { email } = this.state;
    const passwordIsSent = () => {
      this.setState({ isPasswordSent: true });
    };
    () => (isPasswordSent ? sentPassword() : sentPassword(passwordIsSent));
    e.preventDefault();
  }
  _handleSubmit(e) {
    const { onCloseModal } = this.props;
    const { email, password } = this.state;
    login(email, password);
    onCloseModal();
    e.preventDefault();
  }
  render() {
    const { email, password, isPasswordSent } = this.state;
    return (
      <Login
        isPasswordSent={isPasswordSent}
        sentPassword={sentPassword}
        submitForm={this._handleSubmit}
        onChange={this._onChange}
      />
    );
  }
}
export default LoginContainer;
