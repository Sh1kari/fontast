import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import autobind from 'react-auto-bind';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';

const Container = styled.div`
  position: relative;
`;
const SymbolLabelContainer = styled.div`
  height: 125px;
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: auto;
  font-family: Rubik;
  font-size: 50px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.23;
  text-align: center;
  color: #1e1e1e;
`;
const SymbolQuantity = styled.div`
  text-align: center;
  font-family: Playfair Display;
  font-size: 108px;
  font-weight: 900;
  font-style: italic;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ff3f5f;
`;
const LabelContainer = styled.div`
  position: relative;
  width: 275px;
  display: inline-flex;
  align-items: flex-end;
`;
const CrossContainer = styled.div`
  display: inline-block;
  text-align: center;
`;
const SymbolDeleteContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

class SymbolCanDelete extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }
  state = {
    isHover: false
  };
  toogleHover() {
    this.setState(prevState => {
      return { isHover: !prevState.isHover };
    });
  }
  onDeleteSymbol() {
    const { handleDeleteSymbol, ind } = this.props;
    handleDeleteSymbol(ind);
  }
  render() {
    const { symbol } = this.props;
    const { isHover } = this.state;
    return (
      <SymbolDeleteContainer
        onMouseEnter={this.toogleHover}
        onMouseLeave={this.toogleHover}
      >
        {isHover && (
          <CrossContainer onClick={this.onDeleteSymbol}>
            <SvgIcon
              svgIcon="close-cross"
              fill="#ff0000"
              width="17px"
              height="17px"
              viewBox="0 0 64 64"
            />
          </CrossContainer>
        )}
        <span>{symbol}</span>
      </SymbolDeleteContainer>
    );
  }
}

const PlusContainerLeft = styled.div`
  align-self: flex-end;
  margin-right: 28px;
`;
const PlusContainerRight = styled.div`
  align-self: flex-end;
  margin-left: 28px;
`;
class SymbolLabel extends Component {
  render() {
    const { children, handleDeleteSymbol } = this.props;
    const symbolsArray = children.split('');
    return (
      <SymbolLabelContainer>
        <PlusContainerLeft>
          <SvgIcon
            svgIcon="plus-black"
            fill="#000000"
            width="17px"
            height="17px"
            viewBox="0 0 100 1024"
          />
        </PlusContainerLeft>
        {symbolsArray.map((symbol, ind) => {
          if (ind === 0 || symbolsArray.length - 1 === ind) {
            return (
              <SymbolCanDelete
                handleDeleteSymbol={handleDeleteSymbol}
                ind={ind}
                symbol={symbolsArray[ind]}
              />
            );
          }
          return <span>{symbolsArray[ind]}</span>;
        })}
        <PlusContainerRight>
          <SvgIcon
            svgIcon="plus-black"
            fill="#000000"
            width="17px"
            height="17px"
            viewBox="0 0 100 1024"
          />
        </PlusContainerRight>
      </SymbolLabelContainer>
    );
  }
}

// const symbolsList = {value: null, prev: null}
// {value: 'a' prev: {value: null, prev: null}}
// const symbolsHardcode = ['i', 'b','k', 'n']
export default class SymbolsControlView extends Component {
  render() {
    const { selectSymbols, symbolsQuantity, handleDeleteSymbol } = this.props;
    return (
      <div>
        <SymbolQuantity>{symbolsQuantity}</SymbolQuantity>
        <LabelContainer>
          <SymbolLabel handleDeleteSymbol={handleDeleteSymbol}>
            {selectSymbols}
          </SymbolLabel>
        </LabelContainer>
      </div>
    );
  }
}
