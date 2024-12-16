import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: green;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 80%;
  box-sizing: border-box;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`;

export const Title = styled.h2`
  margin-top: 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Content = styled.div`
  margin-top: 10px;
  font-size: 0.9rem;
  line-height: 1.4;
`;