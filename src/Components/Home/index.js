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

const Home = ({ fonts }) => {
  const childElements = fonts.map(font => {
    const { image } = font;
    return (
      <li key={`font-${font.id}`} className="image-element-class">
        <img src={image.image_original} />
      </li>
    );
  });

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
};

export default Home;
