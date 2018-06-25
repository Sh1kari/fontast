//выввод модального окна с указанной картинкой.
//корректное закрытие
// добавить прокрутку
// добавить элементы информации.

import React, { Component } from 'react';
import { findIndex } from 'lodash';

export default class ModalSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backFontId: null,
      forwardFontId: null,
      selectFontId: null,
      isShow: false
    };
  }
  componentDidMount() {
    this.setState({ selectFontId: selectFontId });
  }
  handleClose() {
    this.setState({ isShow: false });
  }
  handleGoForward() {
    const { fonts } = this.props;
    const { forwardFontId, selectFontId } = this.state;
    const nextInd = findIndex(fonts, font => font.fontId === forwardFontId) + 1;
    const newForwardId =
      nextInd < fonts.length() ? fonts[nextInd].fontId : null;
    this.setState({
      backFontId: selectFontId,
      forwardFontId: newForwardId,
      selectFontId: forwardFontId
    });
  }
  handleGoBack() {
    const { fonts } = this.props;
    const { backFontId, selectFontId } = this.state;
    const prevInd = findIndex(fonts, font => font.fontId === backFontId) - 1;
    const newBackId = prevInd < fonts.length() ? fonts[prevInd].fontId : null;
    this.setState({
      backFontId: newBackId,
      forwardFontId: selectFontId,
      selectFontId: backFontId
    });
  }
  render() {
    return <div />;
  }
}
