import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SymbolsCountView from './SymbolsCountView';
import SymbolsControlView from './SymbolsControlView';
const DashboardSymbols = ({
  selectSymbols,
  symbolsQuantity,
  handleDeleteSymbol
}) => {
  if (selectSymbols.length > 0) {
    return (
      <SymbolsControlView
        selectSymbols={selectSymbols}
        symbolsQuantity={symbolsQuantity}
        handleDeleteSymbol={handleDeleteSymbol}
      />
    );
  }
  return <SymbolsCountView symbolsQuantity={symbolsQuantity} />;
};

DashboardSymbols.propTypes = {};

export default DashboardSymbols;
