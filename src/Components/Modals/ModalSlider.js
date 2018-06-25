//выввод модального окна с указанной картинкой.
//корректное закрытие
// добавить прокрутку
// добавить элементы информации.

import React, { Component } from 'react';
import { findIndex } from 'lodash';

function getForwardId(fonts, forwardId) {
  const nextInd = findIndex(fonts, font => font.fontId === forwardId) + 1;
  return nextInd < fonts.length() ? fonts[nextInd].fontId : null;
}

function getBackId(fonts, prevId) {
  const prevInd = findIndex(fonts, font => font.fontId === prevId) - 1;
  return prevInd > 0 ? fonts[prevInd].fontId : null;
}
export default class ModalSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevFontId: null,
      nextFontId: null,
      selectFontId: null,
      isShow: false
    };
  }
  componentDidMount() {
    const { fonts, selectId } = this.props;
    this.setState({
      prevFontId: getBackId(fonts, selectId),
      nextFontId: getForwardId(fonts, selectId),
      selectFontId: null
    });
  }
  handleClose() {
    this.setState({
      prevFontId: null,
      nextFontId: null,
      selectFontId: null,
      isShow: false
    });
  }
  handleForward() {
    const { fonts } = this.props;
    const { nextFontId, selectFontId } = this.state;
    this.setState({
      prevFontId: selectFontId,
      nextFontId: getForwardId(fonts, nextFontId),
      selectFontId: nextFontId
    });
  }
  handleBack() {
    const { fonts } = this.props;
    const { prevFontId, selectFontId } = this.state;
    this.setState({
      prevFontId: getBackId(fonts, prevFontId),
      nextFontId: selectFontId,
      selectFontId: prevFontId
    });
  }
  render() {
    return <div />;
  }
}
