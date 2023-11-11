import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getCoordinateData } from "./api/RestClient";
import EmptyFrame from "./components/EmptyFrame";
import Frame from "./components/Frame";

function App() {
  const [data, setData] = useState(null);
  const [visibleData, setVisibleData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [minLongitute, setMinLongitute] = useState("");
  const [minLatitude, setMinLatitude] = useState("");
  const [maxLongitute, setMaxLongitute] = useState("");
  const [maxLatitude, setMaxLatitude] = useState("");

  const handleCoordinateInput = (e, setInput) => {
    setInput(e.target.value);
  };

  const buildCoordinateString = () => {
    return `${minLongitute},${minLatitude},${maxLongitute},${maxLatitude}`;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMoreData();
    }
  };

  const loadMoreData = () => {
    if (!isLoading) {
      setIsLoading(true);

      setTimeout(() => {
        const newData = data.slice(visibleData.length, visibleData.length + 8);
        setVisibleData((prevData) => [...prevData, ...newData]);
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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
      <button
        onClick={() =>
          getCoordinateData(buildCoordinateString, setData, setVisibleData)
        }
      >
        Submit
      </button>
      <StyledContainer>
        {data ? (
          <Frame data={visibleData} isLoading={isLoading} />
        ) : (
          <EmptyFrame />
        )}
      </StyledContainer>

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

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
