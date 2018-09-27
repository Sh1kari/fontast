import React from 'react';
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

const SymbolsCountView = ({ symbolsQuantity }) => {
  return (
    <div>
      <SymbolQuantity>{symbolsQuantity}</SymbolQuantity>
      <LabelContainer>
        <SymbolLabel>LETTERS</SymbolLabel>
      </LabelContainer>
    </div>
  );
};

SymbolsCountView.propTypes = {};

export default SymbolsCountView;
