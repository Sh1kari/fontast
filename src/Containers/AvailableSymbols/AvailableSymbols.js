import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  min-width: 350px;
  font-family: AnonymousPro;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.44;
  letter-spacing: 6px;
  text-align: center;
  color: #000000;
  text-align: right;
`;
const SymbolContainer = styled.div`
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
`;

class Symbol extends Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect() {
    const { onSelectSymbol, symbol } = this.props;
    onSelectSymbol(symbol);
  }
  render() {
    const { children } = this.props;
    return (
      <SymbolContainer onClick={this.onSelect}>{children}</SymbolContainer>
    );
  }
}

const AvailableSymbols = ({ symbols, onSelectSymbol }) => (
  <Container>
    {symbols.map(symbol => (
      <Symbol
        onSelectSymbol={onSelectSymbol}
        symbol={symbol.value}
        key={symbol.id}
      >
        {symbol.value}
      </Symbol>
    ))}
  </Container>
);

AvailableSymbols.propTypes = {};

export default AvailableSymbols;
