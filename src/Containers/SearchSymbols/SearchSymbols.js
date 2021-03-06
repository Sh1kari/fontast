import React, { Component } from 'react';
import styled from 'styled-components';
import autobind from 'react-auto-bind';
import DashboardSymbols from 'Components/DashboardSymbols/DashboardSymbols';
import AvailableSymbols from '../AvailableSymbols/AvailableSymbols';

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export default class SearchSymbols extends Component {
  state = { selectSymbols: '' };
  constructor(props) {
    super(props);
    autobind(this);
  }

  handleDeleteSymbol(selectInd) {
    const { selectSymbols, handleSelectSearchSymbol } = this.props;
    handleSelectSearchSymbol(
      selectSymbols
        .split('')
        .filter((symbol, ind) => ind !== selectInd)
        .join('')
    );
  }
  handleAddLeftSymbol(selectSymbol) {
    const { selectSymbols, handleSelectSearchSymbol } = this.props;
    handleSelectSearchSymbol(`${selectSymbol}${selectSymbols}`);
  }
  handleAddRightSymbol(selectSymbol) {
    const { selectSymbols, handleSelectSearchSymbol } = this.props;
    handleSelectSearchSymbol(`${selectSymbols}${selectSymbol}`);
  }
  render() {
    const { count, symbols, selectSymbols } = this.props;
    return (
      <div>
        {selectSymbols.length === 0 && (
          <ContainerCenter>
            <AvailableSymbols
              onSelectSymbol={this.handleAddLeftSymbol}
              selectSymbols={selectSymbols}
              symbols={symbols}
            />
          </ContainerCenter>
        )}
        <ContainerCenter>
          <DashboardSymbols
            selectSymbols={selectSymbols}
            symbolsQuantity={count}
            handleDeleteSymbol={this.handleDeleteSymbol}
          />
        </ContainerCenter>
      </div>
    );
  }
}
