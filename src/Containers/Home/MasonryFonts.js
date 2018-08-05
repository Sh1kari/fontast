import React, { Component } from 'react';
import autobind from 'react-auto-bind';
import MasonryView from 'Components/Masonry/index';
import ModalSlider from 'Components/Modals/ModalSlider';

export default class MasonryFonts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectFontId: null
    };
    autobind(this);
  }
  handleSelectFont = selectFontId => {
    this.setState({ selectFontId });
  };
  handleClose() {
    this.setState({
      selectFontId: null
    });
  }
  render() {
    const { fonts } = this.props;
    const { selectFontId } = this.state;
    const selectFont = fonts.find(font => font.id === selectFontId);
    return (
      <div>
        <MasonryView fonts={fonts} onSelectFont={this.handleSelectFont} />
        {selectFont && (
          <ModalSlider
            fonts={fonts}
            onClose={this.handleClose}
            selectFont={selectFont}
          />
        )}
      </div>
    );
  }
}
