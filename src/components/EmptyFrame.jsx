import React from "react";
import styled from "styled-components";

const EmptyFrame = () => {
  return (
    <FrameContainer>
      <StyledFrame>
        <h1>Input Latitudes and Longitudes</h1>
        <h3>Sample Coordinates: -0.1278, 51.5074, -0.1223, 51.5099 </h3>
      </StyledFrame>
      <h5>
        *Note: The latitudes must be between -90 and 90, longitudes between -180
        and 180 and the minima must be less than the maxima.
      </h5>
    </FrameContainer>
  );
};

export default EmptyFrame;

const StyledFrame = styled.div`
  max-width: 1200px;
  min-height: 150px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  background-color: #f6f7f9;
`;

const FrameContainer = styled.div`
  margin: 20px;
`;
