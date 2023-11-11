import axios from "axios";
import osmtogeojson from "osmtogeojson";

export const getCoordinateData = async (
  buildCoordinateString,
  setData,
  setVisibleData
) => {
  const bbox = buildCoordinateString();
  const osm_api_url = `https://www.openstreetmap.org/api/0.6/map?bbox=${bbox}`;

  try {
    const response = await axios.get(osm_api_url);

    const convertFeature = osmtogeojson(response.data);
    const result = convertFeature.features;
    setData(result);
    setVisibleData(result.slice(0, 6));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
