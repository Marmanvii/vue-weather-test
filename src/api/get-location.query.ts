import api from ".";

export const getLocationData = async (location: string) => {
  return api.get("/geo/1.0/direct", {
    q: location,
    limit: 1,
  });
};
