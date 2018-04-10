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
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    console.log('state out');
    console.log(this.state);
    e.preventDefault();
  };
  render() {
    const { classes } = this.props;
    const { email, name, password } = this.state;
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
        />
        <input type="text" name="name" value={name} onChange={this.onChange} />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.onChange}
        />
        <input type="submit" />
      </FormStyled>
    );
  }
}
export default CreateAccount;
