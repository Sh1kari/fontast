import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';
import { getImg } from '../../helpers/index';
import './Home.css';

const Container = styled.div``;
const LanguageDropDown = styled.div``;
const FontLetters = styled.div``;
const LettersComponent = styled.div``;

const masonryOptions = {
  transitionDuration: 0
};

class Home extends Component {
  render() {
    const childElements = [
      '7',
      '5',
      '9',
      '4',
      '8',
      '6',
      '11',
      '2',
      '3',
      '10',
      '1'
    ].map(element => (
      <li key={element} className="image-element-class">
        <img src={getImg(element)} alt={element} />
      </li>
    ));

    return (
      <Masonry
        className={'my-gallery-class'}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {childElements}
      </Masonry>
    );
  }
}

export default Home;
