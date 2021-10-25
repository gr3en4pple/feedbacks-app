import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import RoadMap from './RoadMap';
import ButtonsInterface from './ButtonsInterface';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import { useContextState } from '../StateProvider';
const Modal = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  background: rgb(242, 244, 255);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 20px;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const menuAnimate = {
  visible: { x: 0, opacity: 1 },
  hidden: {
    x: '-100%',
    opacity: 0,
  },
};

const toggleModal = {
  visible: { opacity: 1, display: 'block' },
  hidden: {
    opacity: 0,
    display: 'none',
  },
};

function Menu() {
  const { onMenuHandler, isMenuOpen } = useContextState();
  return (
    <AnimatePresence exitBeforeEnter>
      {isMenuOpen && (
        <Modal>
          <Overlay
            initial="hidden"
            animate="visible"
            exit="hidden"
            as={motion.div}
            variants={toggleModal}
            onClick={onMenuHandler}
          />
          <Wrapper
            as={motion.div}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuAnimate}
          >
            <ContentWrapper>
              <IconWrapper onClick={onMenuHandler}>
                <IconButton color="primary">
                  <ArrowBackIcon />
                </IconButton>
              </IconWrapper>
              <ButtonsInterface />
              <RoadMap />
            </ContentWrapper>
          </Wrapper>
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default Menu;
