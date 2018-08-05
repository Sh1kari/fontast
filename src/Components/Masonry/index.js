import React from 'react';
import Masonry from 'react-masonry-component';
import './MasonryView.css';

const masonryOptions = {
  transitionDuration: 0
};

const MasonryElement = ({ font, onSelectFont }) => {
  const onSelectMasonry = () => {
    onSelectFont(font.id);
  };
  const { image } = font;
  return (
    <li className="image-element-class" onClick={onSelectMasonry}>
      <img src={image.image_original} alt="Font pic" />
    </li>
  );
};
const MasonryView = ({ fonts, onSelectFont }) => {
  const childElements = fonts.map(font => {
    return (
      <MasonryElement
        key={`font-${font.id}`}
        font={font}
        onSelectFont={onSelectFont}
      />
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

export default MasonryView;
