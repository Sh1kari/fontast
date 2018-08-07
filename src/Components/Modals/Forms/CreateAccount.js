import React, { Component } from 'react';
import styled from 'styled-components';
// import Search from 'Components/SearchInput';
import TextField from 'Components/TextField';
import { FormStyled, FormFooter } from '../Common/index';

const CreateAccount = ({ email, name, password, onChange, submitForm }) => {
  return (
    <FormStyled onSubmit={submitForm}>
      <TextField type="email" name="email" value={email} onChange={onChange} />
      <TextField type="text" name="name" value={name} onChange={onChange} />
      <TextField
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button onClick={submitForm}>test</button>
      <input type="submit" />
      <FormFooter>
        Creating an account means you’re okay with our Terms of Service, Privacy
        Policy
      </FormFooter>
    </FormStyled>
  );
};
export default CreateAccount;
