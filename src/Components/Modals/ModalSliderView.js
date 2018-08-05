import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SvgIcon from 'Components/SvgIcon';

const LayoutWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(102, 102, 102, 0.5);
`;
const CloseButton = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;

const ControlButton = styled.button`
  min-width: 55px;
  outline: none;
  visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
  background-color: transparent;
  border: none;
  min-height: 30px;
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-right: 30px;
`;

const ControlLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ImgContainer = styled.div``;

const ImgInfo = styled.div`
  width: 100%;
`;

const InfoRow = styled.div`
  margin-bottom: 10px;
  line-height: 1.5;
  display: flex;
  justify-content: space-around;
  color: #ffffff;
`;
const CentralContent = styled.div`
  min-width: 390px;
  text-align: center;
`;

const ImgContent = styled.div`
  font-family: 'Rubik';
  min-width: 390px;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.23;
  text-align: center;
`;
const LikeButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

const ModalSliderView = ({
  selectFont,
  sliderControls,
  onClose,
  onForward,
  onBack
}) => {
  const { author_name, likes_count, content, image } = selectFont;
  return (
    <LayoutWrapper>
      <Layout>
        <CloseButton onClick={onClose}>
          <SvgIcon
            svgIcon="modal-close"
            fill="#ffffff"
            width="30px"
            height="30px"
            viewBox="0 0 64 64"
          />
        </CloseButton>
        <ControlLayout>
          <ControlButton isVisible={sliderControls.prevFont} onClick={onBack}>
            <SvgIcon
              svgIcon="modal-left-arrow"
              fill="#686868"
              width="55px"
              height="30px"
              viewBox="0 0 31.494 31.494"
            />
          </ControlButton>
          <ImgContainer>
            <ImgInfo>
              <InfoRow>
                <div>Font type</div>
                <CentralContent>{author_name}</CentralContent>
                <LikeButton>{`Like work: ${likes_count}`}</LikeButton>
              </InfoRow>
              <InfoRow>
                <ImgContent>{content}</ImgContent>
              </InfoRow>
            </ImgInfo>
            <img src={image.image_original} alt="Font pic" />
          </ImgContainer>
          <ControlButton
            isVisible={sliderControls.nextFont}
            onClick={onForward}
          >
            <SvgIcon
              svgIcon="modal-right-arrow"
              fill="#686868"
              width="55px"
              height="30px"
              viewBox="0 0 31.494 31.494"
            />
          </ControlButton>
        </ControlLayout>
      </Layout>
    </LayoutWrapper>
  );
};

ModalSliderView.propTypes = {
  selectFont: PropTypes.shape({
    author_name: PropTypes.string,
    likes_count: PropTypes.any,
    content: PropTypes.string,
    image: PropTypes.object
  }),
  sliderControls: PropTypes.shape({
    prevFont: PropTypes.bool,
    nextFont: PropTypes.bool
  }),
  onClose: PropTypes.func,
  onForward: PropTypes.func,
  onBack: PropTypes.func
};
export default ModalSliderView;
