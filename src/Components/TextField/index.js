import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SearchIcon from '../../assets/svg/search';
import './index.css';

import { withStyles } from 'material-ui/styles';

const styles = {
  label: {
    color: 'red',
    ':focus': {
      color: 'green'
    }
  }
};

class TextFieldComponent extends Component {
  render() {
    const {
      className = 'text-field',
      name,
      label,
      placeholder,
      fullWidth = false,
      onChange,
      onKeyPress,
      searchIcon = false
    } = this.props;

    return (
      <div className="text-field__wrapper">
        <TextField
          id="text-field-input"
          name={name}
          label={label}
          placeholder={placeholder}
          className={className}
          fullWidth={fullWidth}
          InputLabelProps={{
            className: 'label'
          }}
          InputProps={{
            disableUnderline: true,
            onChange,
            onKeyPress
          }}
        />

        {searchIcon && (
          <div className="search">
            <SearchIcon />
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(TextFieldComponent);
