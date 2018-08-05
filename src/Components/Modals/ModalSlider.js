import React, { Component } from 'react';
import { findIndex } from 'lodash';
import autobind from 'react-auto-bind';
import ModalSliderView from './ModalSliderView';

function getForward(fonts, forwardId) {
  const nextInd = findIndex(fonts, font => font.id === forwardId) + 1;
  return nextInd < fonts.length ? fonts[nextInd] : null;
}

function getBack(fonts, prevId) {
  const prevInd = findIndex(fonts, font => font.id === prevId) - 1;
  return prevInd > 0 ? fonts[prevInd] : null;
}
export default class ModalSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectFont: props.selectFont,
      prevFont: null,
      nextFont: null
    };
    autobind(this);
  }
  componentDidMount() {
    const { fonts, selectFont } = this.props;
    this.setState({
      prevFont: getBack(fonts, selectFont.id),
      nextFont: getForward(fonts, selectFont.id)
    });
  }
  handleForward() {
    const { fonts } = this.props;
    this.setState(prevState => {
      return {
        prevFont: prevState.selectFont,
        nextFont: getForward(fonts, prevState.nextFont.id),
        selectFont: prevState.nextFont
      };
    });
  }
  handleBack() {
    const { fonts } = this.props;
    this.setState(prevState => {
      return {
        prevFont: getBack(fonts, prevState.prevFont.id),
        nextFont: prevState.selectFont,
        selectFont: prevState.prevFont
      };
    });
  }
  render() {
    const { onClose } = this.props;
    const { selectFont, prevFont, nextFont } = this.state;
    return (
      <ModalSliderView
        onClose={onClose}
        selectFont={selectFont}
        onBack={this.handleBack}
        onForward={this.handleForward}
        sliderControls={{ prevFont, nextFont }}
      />
    );
  }
}
