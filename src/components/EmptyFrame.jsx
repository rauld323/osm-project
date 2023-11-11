import React from "react";
import styled from "styled-components";

const EmptyFrame = () => {
  return (
    <StyledFrame>
      <h1>Input Latitudes and Longitudes</h1>
      <h2>Sample Coordinates: -0.1278, 51.5074, -0.1223, 51.5099 </h2>

      <h3>
        Note: The latitudes must be between -90 and 90, longitudes between -180
        and 180 and the minima must be less than the maxima.
      </h3>
    </StyledFrame>
  );
};

export default EmptyFrame;

const StyledFrame = styled.div`
  max-width: 1000px;
  border: black solid 1px;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
`;
