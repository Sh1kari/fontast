import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SearchIcon from '../../assets/svg/search';
import './index.css';

class TextFieldComponent extends Component {
  render() {
    const {
      className = 'text-field',
      name,
      placeholder,
      fullWidth = false,
      onChange,
      onKeyPress
    } = this.props;

    return (
      <div className="text-field__wrapper">
        <TextField
          id="text-field-input"
          name={name}
          placeholder={placeholder}
          className={className}
          fullWidth={fullWidth}
          InputProps={{
            disableUnderline: true,
            onChange,
            onKeyPress
          }}
        />

        <div className="search">
          <SearchIcon />
        </div>
      </div>
    );
  }
}

export default TextFieldComponent;
