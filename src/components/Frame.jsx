import React from "react";
import styled from "styled-components";

const Frame = ({ data, isLoading }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {data?.map((dataFeatures) => (
          <div>
            <pre
              style={{
                width: "400px",
                height: "500px",
                overflow: "auto",
                border: "solid black 1px",
              }}
            >
              {JSON.stringify(dataFeatures, null, 2)}
            </pre>
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
