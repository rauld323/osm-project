import React from "react";
import styled from "styled-components";

const Frame = ({ data, isLoading }) => {
  return (
    <StyledContainer>
      <StlyedFrame>
        {data?.map((dataFeatures) => (
          <div>
            <StyledPre>{JSON.stringify(dataFeatures, null, 2)}</StyledPre>
          </div>
        ))}
      </StlyedFrame>
      <StyledText>{isLoading && "Loading..."}</StyledText>
    </StyledContainer>
  );
};

export default Frame;

const StyledContainer = styled.div`
  margin: 0 20px;
`;

const StlyedFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledText = styled.h1`
  display: flex;
  justify-content: center;
`;

const StyledPre = styled.pre`
  width: 380px;
  height: 500px;
  overflow: auto;
  border-radius: 10px;
  border: solid black 1px;
  background-color: white;
  padding: 10px 5px;
`;
