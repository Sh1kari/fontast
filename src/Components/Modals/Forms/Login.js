import React, { Component } from 'react';
import styled from 'styled-components';
// import Search from 'Components/SearchInput';
import TextField from 'Components/TextField';
import { FormStyled, FormFooter } from '../Common/index';

const Login = ({
  email,
  password,
  onChange,
  submitForm,
  isPasswordSent,
  sentPassword
}) => {
  return (
    <FormStyled onSubmit={submitForm}>
      <TextField type="email" name="email" value={email} onChange={onChange} />
      <TextField
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button onClick={submitForm}>test</button>
      <input type="submit" />
      <FormFooter onClick={sendPassword}>
        {isPasswordSent
          ? 'Password sent. Send again?'
          : 'Send password on email'}
      </FormFooter>
    </FormStyled>
  );
};
export default CreateAccount;
