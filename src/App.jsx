import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EmptyFrame from "./components/EmptyFrame";
import Frame from "./components/Frame";
import Form from "./components/Form";
import ScrollButton from "./components/ScrollButton";

function App() {
  const [data, setData] = useState(null);
  const [visibleData, setVisibleData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [minLongitute, setMinLongitute] = useState("");
  const [minLatitude, setMinLatitude] = useState("");
  const [maxLongitute, setMaxLongitute] = useState("");
  const [maxLatitude, setMaxLatitude] = useState("");

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
    if (!isLoading && visibleData.length < data.length) {
      setIsLoading(true);

      setTimeout(() => {
        const newData = data.slice(visibleData.length, visibleData.length + 6);
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
      <Form
        minLatitude={minLatitude}
        minLongitute={minLongitute}
        maxLatitude={maxLatitude}
        maxLongitute={maxLongitute}
        setData={setData}
        setError={setError}
        setIsLoading={setIsLoading}
        setVisibleData={setVisibleData}
        setMinLongitute={setMinLongitute}
        setMinLatitude={setMinLatitude}
        setMaxLongitute={setMaxLongitute}
        setMaxLatitude={setMaxLatitude}
      />

      <StyledContainer>
        {data ? (
          <Frame data={visibleData} isLoading={isLoading} error={error} />
        ) : (
          <EmptyFrame data={visibleData} error={error} />
        )}
        {data && <ScrollButton />}
      </StyledContainer>
    </div>
  );
}

export default App;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
