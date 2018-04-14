import React, { type ChildrenArray, type Element } from 'react';
import styled from 'styled-components';
// import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import faFacebook from '@fortawesome/fontawesome/coffee'
// import FontIcon from 'material-ui/FontIcon';
// import {blue500, red500, greenA200} from 'material-ui/styles/colors';
// import './fontawesome.css';
// import 'font-awesome/css/font-awesome.min.css';
import FontIcon from 'material-ui/FontIcon';
// import Vk from 'material-ui-icons/Brand/vkontakte';
// faFacebook
const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const IconCyrcle = styled.div`
  width: 30px;
  height: 30px;
  font-size: 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 60%;
  background-color: ${props => props.BColor};
`;

const Content = styled.div`
  margin-top: 10%;
`;
const Title = styled.div`
  width: 170px;
  font-family: Rubik;
  font-size: 26px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.23;
  letter-spacing: normal;
  text-align: center;
  color: #1e1e1e;
  text-align: center;
`;
const IconRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 165px;
`;

const customStyles = {
  overlay: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(30, 30, 30, 0.9)'
  },
  content: {
    position: 'block',
    maxWidth: '60vh',
    minWidth: '300px',
    minHeight: '500px',
    minHeight: '300px',
    maxHeight: '500px',
    border: 'none',
    backgroundColor: 'white',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

const ModalScreen = ({ isOpen, onCloseModal, children }) => (
  <Modal isOpen={isOpen} style={customStyles} onRequestClose={onCloseModal}>
    <Header>
      <Title>Join with</Title>
      <IconRow>
        {/* <IconCyrcle BColor={'#3b5998'}>
          <i className="fa fa-facebook" />
        </IconCyrcle>
        <IconCyrcle BColor={'#55acee'}>
          <i className="fa fa-twitter" />
        </IconCyrcle>
        <IconCyrcle BColor={'#dc4e41'}>
          <i className="fa fa-google-plus-g" />
        </IconCyrcle> */}
        <IconCyrcle BColor={'#4d76a1'}>
          <FontIcon>vk</FontIcon>
        </IconCyrcle>
      </IconRow>
    </Header>
    <Content>{children}</Content>
  </Modal>
);

export default ModalScreen;
