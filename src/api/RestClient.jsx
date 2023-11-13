import axios from "axios";
import osmtogeojson from "osmtogeojson";

export const getCoordinateData = async (
  buildCoordinateString,
  setData,
  setVisibleData,
  setError
) => {
  const bbox = buildCoordinateString();
  const osm_api_url = `https://www.openstreetmap.org/api/0.6/map?bbox=${bbox}`;

  try {
    const osmResponse = await axios.get(osm_api_url);

    const geojsonResponse = osmtogeojson(osmResponse.data);
    const data = geojsonResponse.features;
    setData(data);
    setVisibleData(data.slice(0, 6));
  } catch (error) {
    setError(error);
    console.error("Error fetching data:", error);
  }
};
