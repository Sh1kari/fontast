import React, { Component } from 'react';
import styled from 'styled-components';
// import Search from 'Components/SearchInput';
import TextField from 'Components/TextField';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
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
      <input type="submit" />
    </FormStyled>
  );
};
export default CreateAccount;
