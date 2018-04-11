import React, { Component } from 'react';
import styled from 'styled-components';
// import Search from 'Components/SearchInput';
import TextField from 'Components/TextField';

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
    const { onCloseModal } = this.props;
    console.log('state out');
    console.log(this.state);
    onCloseModal();
    e.preventDefault();
  };
  render() {
    const { classes } = this.props;
    const { email, name, password } = this.state;
    return (
      <FormStyled onSubmit={this.handleSubmit}>
        <TextField
          type="email"
          name="email"
          value={email}
          onChange={this.onChange}
        />
        <TextField
          type="text"
          name="name"
          value={name}
          onChange={this.onChange}
        />
        <TextField
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
