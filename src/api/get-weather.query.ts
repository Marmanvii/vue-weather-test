import api from ".";

export const getWeatherByLocation = async (
  latitude: number,
  longitude: number,
) => {
  return api.get("/data/2.5/forecast", {
    lat: latitude,
    lon: longitude,
    units: "metric",
  });
};
