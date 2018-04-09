import React, { Component } from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
class CreateAccount extends Component {
  state = {
    email: '',
    name: '',
    password: ''
  };
  onChangeMail = e => {
    this.setState({ email: e.target.value });
  };
  onChangeName = e => {
    this.setState({ name: e.target.value });
  };
  onChangePassword = e => {
    this.setState({ password: e.target.value });
  };
  handleSubmit = e => {
    console.log('clicked submit!');
    console.log(e);
    e.preventDefault();
  };
  render() {
    const { classes } = this.props;
    const { email, name, password } = this.state;
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <input type="email" value={email} onChange={this.onChangeMail} />
        <input type="text" value={name} onChange={this.onChangeName} />
        <input
          type="password"
          value={password}
          onChange={this.onChangePassword}
        />
        <input type="submit" />
      </FormStyled>
    );
  }
}
export default CreateAccount;
