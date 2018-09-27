import React, { Component } from 'react';
import styled from 'styled-components';
import autobind from 'react-auto-bind';
import { getUnicalSyhmbols, createSearchRequest } from 'helpers';
import MasonryFonts from './MasonryFonts';
import SearchSymbols from '../SearchSymbols/SearchSymbols';

const HomeFilters = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;
const FiltersContainer = styled.div`
  display: flex;
`;

const OrderingFilter = styled.div`
  color: ${({ select }) => (select ? '#9b9b9b' : '#1e1e1e')};
`;
class Home extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  }
  state = {
    error: null,
    count: 0,
    symbols: [],
    isFetching: true,
    dateFilter: false,
    popularFilter: false,
    selectSymbols: '',
    fonts: [],
    availableLetters: []
  };

  async componentDidMount() {
    try {
      this.setState({ isFetching: true });
      const responseFonts = await fetch('/api/fonts/');
      const responseSymbols = await fetch('/api/symbols/');
      const allSymbols = await responseSymbols.json();
      const unicalSymbols = getUnicalSyhmbols(allSymbols.results);
      const allFonts = await responseFonts.json();
      this.setState({
        fonts: allFonts.results,
        count: allSymbols.count,
        symbols: unicalSymbols,
        isFetching: false,
        error: null
      });
    } catch (error) {
      this.setState({ error: error, isFetching: false });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const state = this.state;
    const isSearchParamsChanged = keyArrays =>
      keyArrays.reduce((isChanged, key) => {
        if (!isChanged) {
          return state[key] !== prevState[key];
        }
        return isChanged;
      }, false);
    if (
      isSearchParamsChanged(['dateFilter', 'popularFilter', 'selectSymbols'])
    ) {
      this.handleFilterFonts();
    }
  }
  async handleFilterFonts() {
    const { dateFilter, popularFilter, selectSymbols } = this.state;
    this.setState({ isFetching: true });
    const searchRequest = createSearchRequest(
      dateFilter,
      popularFilter,
      selectSymbols
    );
    try {
      const responseFonts = await fetch(searchRequest);
      const { count, results } = await responseFonts.json();
      this.setState({ fonts: results, count, isFetching: false, error: null });
    } catch (error) {
      this.setState({ error: error, isFetching: false });
    }
  }
  handleFilterNewest() {
    this.setState((state, props) => {
      return { dateFilter: !state.dateFilter, popularFilter: false };
    });
  }

  handleFilterPopular() {
    this.setState((state, props) => {
      return { dateFilter: false, popularFilter: !state.popularFilter };
    });
  }

  handleSelectSearchSymbol(newSymbols) {
    this.setState({ selectSymbols: newSymbols });
  }
  render() {
    const {
      fonts,
      isFetching,
      selectSymbols,
      count,
      symbols,
      dateFilter,
      popularFilter
    } = this.state;
    if (isFetching) {
      return <div />;
    }
    return (
      <Container>
        <SearchSymbols
          count={count}
          symbols={symbols}
          selectSymbols={selectSymbols}
          handleSelectSearchSymbol={this.handleSelectSearchSymbol}
        />
        <HomeFilters>
          <FiltersContainer>
            <div>Collections</div>
            <div>Tools</div>
          </FiltersContainer>
          <FiltersContainer>
            <OrderingFilter
              select={popularFilter}
              onClick={this.handleFilterPopular}
            >
              Popular
            </OrderingFilter>
            <OrderingFilter
              select={dateFilter}
              onClick={this.handleFilterNewest}
            >
              New
            </OrderingFilter>
          </FiltersContainer>
        </HomeFilters>
        <MasonryFonts fonts={fonts} />
      </Container>
    );
  }
}

export default Home;
