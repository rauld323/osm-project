import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [minLongitute, setMinLongitute] = useState("");
  const [minLatitude, setMinLatitude] = useState("");
  const [maxLongitute, setMaxLongitute] = useState("");
  const [maxLatitude, setMaxLatitude] = useState("");

  const handleCoordinateInput = (e, setInput) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <header className="App-header" />
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
      <button onClick={null}>Submit</button>
      {/* <h1>Total: {data.length}</h1> */}
    </div>
  );
}

export default App;

const StyledForm = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  height: 50px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 200px;
  border-radius: 5px;
  align-items: center;
`;
