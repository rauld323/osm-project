import React from "react";
import styled from "styled-components";
import { getCoordinateData } from "../api/RestClient";

const Form = ({
  minLatitude,
  minLongitute,
  maxLatitude,
  maxLongitute,
  setData,
  setVisibleData,
  setMinLongitute,
  setMinLatitude,
  setMaxLongitute,
  setMaxLatitude,
  setError,
}) => {
  const buildCoordinateString = `${minLongitute},${minLatitude},${maxLongitute},${maxLatitude}`;

  const handleCoordinateInput = (e, setInput) => {
    setInput(e.target.value);
  };

  const allInputFieldsAreFilled =
    maxLatitude && maxLongitute && minLatitude && minLongitute ? false : true;

  const handleSubmit = async (e) => {
    try {
      const newData = await getCoordinateData(buildCoordinateString);
      setData(newData);
      setVisibleData(newData.slice(0, 6));
    } catch (err) {
      setError(err);
    }
  };

  return (
    <StyledContainer>
      <StyledForm>
        <StyledLabel>
          Min Longitude
          <StyledInput
            type="number"
            min="-90"
            required
            value={minLongitute}
            onChange={(e) => handleCoordinateInput(e, setMinLongitute)}
          />
        </StyledLabel>
        <StyledLabel>
          Min Latitude
          <StyledInput
            type="number"
            min="-180"
            required
            value={minLatitude}
            onChange={(e) => handleCoordinateInput(e, setMinLatitude)}
          />
        </StyledLabel>
        <StyledLabel>
          Max Longitude
          <StyledInput
            type="number"
            max="90"
            required
            value={maxLongitute}
            onChange={(e) => handleCoordinateInput(e, setMaxLongitute)}
          />
        </StyledLabel>
        <StyledLabel>
          Max Latitude
          <StyledInput
            type="number"
            max="180"
            required
            value={maxLatitude}
            onChange={(e) => handleCoordinateInput(e, setMaxLatitude)}
          />
        </StyledLabel>
        <StyledButton
          disabled={allInputFieldsAreFilled}
          onClick={() => handleSubmit()}
        >
          Submit
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default Form;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #19293c;
  opacity: 1;
  margin: 20px;
  border-radius: 10px;
  padding-bottom: 10px;
  color: white;
`;

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

const StyledInput = styled.input`
  border: none;
  outline-style: none;
  height: 25px;
  border-radius: 10px;
  text-align: center;
  &:focus {
    background-color: #dadfe8;
  }
`;

const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  align-self: center;
  border-radius: 30px;
  background-color: ${(props) => (props.disabled ? "#D3D3D3" : "#3990f7")};
  color: ${(props) => (props.disabled ? "#666666" : "white")};
  border: none;
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) => (props.disabled ? "none" : "#0069d9")};
  }
  &:active {
    background-color: ${(props) => (props.disabled ? "none" : "white")};
    color: #3990f7;
  }
`;
