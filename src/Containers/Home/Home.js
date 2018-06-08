import React, { Component } from 'react';

class Home extends Component {
  state = {
    error: null,
    isFetching: false,
    selectLetters: [],
    availableLetters: [] // '' ??
  };

  componentDidMount() {
    const { match } = this.props;
    const { authorId, workId } = match.params;
    const currentAuthorUrl = `${authorUrl}/${authorId}/`;
    const currentWorkUrl = `${workUrl}?author=${authorId}`;

    this.setState({ isFetching: true });

    Promise.all(
      [currentAuthorUrl, currentWorkUrl].map(url =>
        fetch(url).then(resp => resp.json())
      )
    )
      .then(([author, works]) =>
        this.setState({ author, works, isFetching: false })
      )
      .catch(({ message }) =>
        this.setState({ error: message, isFetching: false })
      );
  }
  render() {
    return <div>test</div>;
  }
}

export default Home;
