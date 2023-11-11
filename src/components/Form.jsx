import React from "react";
import styled from "styled-components";
import { getCoordinateData } from "../api/RestClient";

const Form = ({
  minLatitude,
  minLongitute,
  maxLatitude,
  maxLongitute,
  buildCoordinateString,
  setData,
  setVisibleData,
  setMinLongitute,
  setMinLatitude,
  setMaxLongitute,
  setMaxLatitude,
}) => {
  const handleCoordinateInput = (e, setInput) => {
    setInput(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "red",
        margin: "20px",
        borderRadius: "10px",
        paddingBottom: "10px",
      }}
    >
      <StyledForm>
        <StyledLabel>
          <div>Min Longitude:</div>
          <input
            type="number"
            min="-90"
            required
            value={minLongitute}
            onChange={(e) => handleCoordinateInput(e, setMinLongitute)}
          />
        </StyledLabel>
        <StyledLabel>
          Min Latitude:
          <input
            type="number"
            min="-180"
            required
            value={minLatitude}
            onChange={(e) => handleCoordinateInput(e, setMinLatitude)}
          />
        </StyledLabel>
        <StyledLabel>
          Max Longitude:
          <input
            type="number"
            max="90"
            required
            value={maxLongitute}
            onChange={(e) => handleCoordinateInput(e, setMaxLongitute)}
          />
        </StyledLabel>
        <StyledLabel>
          Max Latitude:
          <input
            type="number"
            max="180"
            required
            value={maxLatitude}
            onChange={(e) => handleCoordinateInput(e, setMaxLatitude)}
          />
        </StyledLabel>
      </StyledForm>
      <StyledButton
        onClick={() =>
          getCoordinateData(buildCoordinateString, setData, setVisibleData)
        }
      >
        Submit
      </StyledButton>
    </div>
  );
};

export default Form;

const StyledForm = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  min-height: 50px;
  flex-wrap: wrap;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  border-radius: 5px;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 30px;
  align-self: center;
  border-radius: 5px;
`;
