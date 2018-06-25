import React, { Component } from 'react';
import MasonryView from 'Components/Masonry/index';
import ModalSlider from 'Components/Modals/ModalSlider';

export default class MasonryFonts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectFont: null
    };
  }
  handleSelectFont = selectFontId => {
    this.setState({ selectFont: selectFontId });
  };
  render() {
    const { fonts } = this.props;
    const { selectFont } = this.state;
    debugger;
    return (
      <div>
        <MasonryView fonts={fonts} onSelectFont={this.handleSelectFont} />
        {
          //  <ModalSlider selectFont={selectFont} fonts={fonts}/>
        }
      </div>
    );
  }
}
