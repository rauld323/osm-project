import React from "react";
import styled from "styled-components";

const Frame = ({ data, isLoading }) => {
  return (
    <div style={{ margin: "0 20px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {data?.map((dataFeatures) => (
          <div>
            <StyledPre>{JSON.stringify(dataFeatures, null, 2)}</StyledPre>
          </div>
        ))}
      </div>
      <StyledText>{isLoading && "Loading..."}</StyledText>
    </div>
  );
};

export default Frame;

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
