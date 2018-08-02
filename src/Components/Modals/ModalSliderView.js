import React from 'react';
import styled from 'styled-components';
import SvgIcon from 'Components/SvgIcon';

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(102, 102, 102, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CloseButton = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;
const FontInfo = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const ControlLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ModalSliderView = ({
  selectFont,
  sliderControls,
  onClose,
  onForward,
  onBack
}) => {
  console.log('se ', selectFont);
  return (
    <Layout>
      <CloseButton onClick={onClose}>
        <SvgIcon
          svgIcon="modal-close"
          fill="#ffffff"
          width="80px"
          height="80px"
          viewBox="0 0 10 20"
        />
      </CloseButton>
      <FontInfo>
        <div />
        <div />
      </FontInfo>
      <ControlLayout>
        {sliderControls.prevFont && <div onClick={onBack}>Left button</div>}
        <img src={selectFont.image.image_original} />
        {sliderControls.nextFont && <div onClick={onForward}>Right button</div>}
      </ControlLayout>
    </Layout>
  );
};

export default ModalSliderView;
