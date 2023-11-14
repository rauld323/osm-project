import React, { useEffect } from "react";
import styled from "styled-components";

const ScrollButton = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    goToTop();
  }, []);

  return <StyledScrollButton onClick={() => goToTop()}>↑</StyledScrollButton>;
};

export default ScrollButton;

const StyledScrollButton = styled.button`
  z-index: 1;
  position: fixed;
  margin: 30% 0 0 90%;
  height: 50px;
  width: 60px;
  font-size: 28px;
  background-color: #3990f7;
  border-radius: 10px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0069d9;
  }
  &:active {
    background-color: white;
    color: #3990f7;
    border: 1px solid #3990f7;
  }
`;
