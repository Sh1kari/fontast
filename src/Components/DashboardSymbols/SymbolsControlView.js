import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  position: relative;
`;
const SymbolLabel = styled.div`
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 30px;
  margin: auto;
  font-family: Rubik;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.23;
  letter-spacing: 20px;
  text-align: center;
  color: #1e1e1e;
`;
const SymbolQuantity = styled.div`
  text-align: center;
  font-family: PlayfairDisplay;
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
`;

// const symbolsList = {value: null, prev: null}
// {value: 'a' prev: {value: null, prev: null}}
// const symbolsHardcode = ['i', 'b','k', 'n']
export default class SymbolsControlView extends Component {
  render() {
    const { selectSymbols, symbolsQuantity } = this.props;
    return (
      <div>
        <SymbolQuantity>{symbolsQuantity}</SymbolQuantity>
        <LabelContainer>
          <SymbolLabel>{selectSymbols}</SymbolLabel>
        </LabelContainer>
      </div>
    );
  }
}
