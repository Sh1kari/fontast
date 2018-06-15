import React, { Component } from 'react';
import HomeView from 'Components/Home/index';

class Home extends Component {
  state = {
    error: null,
    isFetching: false,
    selectLetters: [],
    fonts: [],
    availableLetters: [] // '' ??
  };

  componentDidMount() {
    const { match } = this.props;
    const { authorId, workId } = match.params;

    this.setState({ isFetching: true });
    // const currentAuthorUrl = `${authorUrl}/${authorId}/`;
    // const currentWorkUrl = `${workUrl}?author=${authorId}`;

    const getData = async () => {
      try {
        const response = await fetch('/api/fonts/');
        const fonts = await response.json();
        this.setState({ fonts, isFetching: false, error: null });
      } catch (error) {
        this.setState({ error: error, isFetching: false });
      }
    };
    getData();
  }
  render() {
    const { fonts } = this.state;
    console.log(this.state.fonts);
    return <HomeView fonts={fonts} />;
  }
}

export default Home;
